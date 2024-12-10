import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({}); // find all products
		res.json({ products });
	} catch (error) {
		console.log("Error in getAllProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getFeaturedProducts = async (req, res) => {
	try {
		let featuredProducts = await redis.get("featured_products");
		if (featuredProducts) {
			return res.json(JSON.parse(featuredProducts));
		}

		// if not in redis, fetch from mongodb
		// .lean() is gonna return a plain javascript object instead of a mongodb document
		// which is good for performance
		featuredProducts = await Product.find({ isFeatured: true }).lean();

		if (!featuredProducts) {
			return res.status(404).json({ message: "No featured products found" });
		}

		// store in redis for future quick access

		await redis.set("featured_products", JSON.stringify(featuredProducts));

		res.json(featuredProducts);
	} catch (error) {
		console.log("Error in getFeaturedProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, image, images, category } = req.body;

        let mainImageUpload = null;
        let additionalImagesUploads = [];

        // Upload the main image if provided
        if (image) {
            mainImageUpload = await cloudinary.uploader.upload(image, { folder: "products" });
        }

        // Upload the additional images if provided
        if (images && Array.isArray(images)) {
            additionalImagesUploads = await Promise.all(
                images.map((img) =>
                    cloudinary.uploader.upload(img, { folder: "products" })
                )
            );
        }

        // Create the product in the database
        const product = await Product.create({
            name,
            description,
            price,
            image: mainImageUpload?.secure_url || "", // Main image URL
            images: additionalImagesUploads.map((upload) => upload.secure_url), // Array of uploaded image URLs
            category,
        });

        res.status(201).json(product);
    } catch (error) {
        console.log("Error in createProduct controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


export const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		// Delete the main image if it exists
		if (product.image) {
			const publicId = product.image.split("/").pop().split(".")[0];
			try {
				await cloudinary.uploader.destroy(`products/${publicId}`);
				console.log("Deleted main image from Cloudinary");
			} catch (error) {
				console.log("Error deleting main image from Cloudinary", error);
			}
		}

		// Delete additional images if they exist
		if (product.images && Array.isArray(product.images)) {
			for (const imageUrl of product.images) {
				const publicId = imageUrl.split("/").pop().split(".")[0];
				try {
					await cloudinary.uploader.destroy(`products/${publicId}`);
					console.log(`Deleted additional image from Cloudinary: ${imageUrl}`);
				} catch (error) {
					console.log(`Error deleting additional image from Cloudinary: ${imageUrl}`, error);
				}
			}
		}

		// Delete the product from the database
		await Product.findByIdAndDelete(req.params.id);

		res.json({ message: "Product deleted successfully" });
	} catch (error) {
		console.log("Error in deleteProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};


export const getRecommendedProducts = async (req, res) => {
	try {
		const products = await Product.aggregate([
			{
				$sample: { size: 4 },
			},
			{
				$project: {
					_id: 1,
					name: 1,
					description: 1,
					image: 1,
					price: 1,
				},
			},
		]);

		res.json(products);
	} catch (error) {
		console.log("Error in getRecommendedProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getProductsByCategory = async (req, res) => {
	const { category } = req.params;
	console.log(category);
	try {
		const products = await Product.find({ category });
		console.log(products);
		res.json({ products });
	} catch (error) {
		console.log("Error in getProductsByCategory controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const toggleFeaturedProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (product) {
			product.isFeatured = !product.isFeatured;
			const updatedProduct = await product.save();
			await updateFeaturedProductsCache();
			res.json(updatedProduct);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	} catch (error) {
		console.log("Error in toggleFeaturedProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

async function updateFeaturedProductsCache() {
	try {
		// The lean() method  is used to return plain JavaScript objects instead of full Mongoose documents. This can significantly improve performance

		const featuredProducts = await Product.find({ isFeatured: true }).lean();
		await redis.set("featured_products", JSON.stringify(featuredProducts));
	} catch (error) {
		console.log("error in update cache function");
	}
}

export const getProductDetails = async (req, res) => {
	try {
		const { id } = req.params; // Get product ID from request parameters
		const product = await Product.findById(id); // Find product by ID

		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		// If the product is found, return product details as JSON
		res.json(product);
	} catch (error) {
		console.log("Error in showProductDetails controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getSearchProducts = async (req, res) => {
    try {
        const { productName } = req.params;

        // Perform a case-insensitive search using regex
        const products = await Product.find({
			$or:[
            {name: { $regex: productName, $options: "i" }}, // "i" for case-insensitive
			{category: { $regex: productName, $options: "i" }},
			],
        });

        // Return the found products
        res.status(200).json({ products });
    } catch (error) {
        console.log("Error in getSearchProducts", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// export const editProduct = async (req, res) => {
//     try {
//         const { name, description, price, newImage, newImages, category } = req.body;

//         let mainImageUpload = null;
//         let additionalImagesUploads = [];

//         // Upload the main image if provided
//         if (image) {
//             mainImageUpload = await cloudinary.uploader.upload(image, { folder: "products" });
//         }

//         // Upload the additional images if provided
//         if (images && Array.isArray(images)) {
//             additionalImagesUploads = await Promise.all(
//                 images.map((img) =>
//                     cloudinary.uploader.upload(img, { folder: "products" })
//                 )
//             );
//         }

//         // Create the product in the database
//         const product = await Product.create({
//             name,
//             description,
//             price,
//             image: mainImageUpload?.secure_url || "", // Main image URL
//             images: additionalImagesUploads.map((upload) => upload.secure_url), // Array of uploaded image URLs
//             category,
//         });

//         res.status(201).json(product);
//     } catch (error) {
//         console.log("Error in createProduct controller", error.message);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

export const editProduct = async (req, res) => {
    try {
        const { id } = req.params; // Product ID from the request parameters
        const { name, description, price, newImage, newImages=[], deleteImages=[], category } = req.body;
		console.log(name, description, price, newImage, newImages, deleteImages, category);

        // Find the existing product
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        let mainImageUpload = null;
        let additionalImages = product.images || []; // Start with existing additional images
		// Filter out images listed in deleteImages
        additionalImages = additionalImages.filter(
            (img) => !deleteImages.includes(img)
        );

		// Delete images listed in deleteImages from Cloudinary
        await Promise.all(
            deleteImages.map((img) => {
                const publicId = img.split("/").pop().split(".")[0];
                return cloudinary.uploader.destroy(`products/${publicId}`);
            })
        );

        // Upload and replace the main image if a new one is provided
        if (newImage) {
            // Delete the old main image from Cloudinary
            if (product.image) {
                const publicId = product.image.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(`products/${publicId}`);
            }

            // Upload the new main image
            mainImageUpload = await cloudinary.uploader.upload(newImage, { folder: "products" });
        }

        // Upload new additional images to Cloudinary
        const newImagesUploads = await Promise.all(
            newImages.map((img) =>
                cloudinary.uploader.upload(img, { folder: "products" })
            )
        );

        // Append new image URLs to additionalImages
        additionalImages = [
            ...additionalImages,
            ...newImagesUploads.map((upload) => upload.secure_url),
        ];

        // Update the product in the database
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.image = mainImageUpload?.secure_url || product.image; // Replace main image URL if new one is uploaded
        product.images = additionalImages;

        await product.save();

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.log("Error in editProduct controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
