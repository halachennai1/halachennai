import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useProductStore } from "../stores/useProductStore"; // Import the product store
import { FaTrash } from "react-icons/fa";
import { useCategoryStore } from "../stores/useCategoryStore";

const EditProductPage = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Get product data from navigation state
    const navigate = useNavigate();
    const { editProduct } = useProductStore(); // Access the editProduct method from the store
    const allImages = [product.image, ...(product.images || [])];
    const { categories, fetchAllCategory, loading: categoriesLoading } = useCategoryStore();

	useEffect(() => {
		if (!categories.length) {
			fetchAllCategory();
		}
	}, [categories, fetchAllCategory]);

    const [formData, setFormData] = useState({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
        category: product.category || "",
        images: allImages || [],
    });
    const [newImage, setNewImage] = useState(null); // New main image
    const [newImages, setNewImages] = useState([]); // New additional images
    const [deleteImages, setDeleteImages] = useState([]); // Images to delete

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log("formdata:",formData,"newimage",newImage,"newimages",newImages,"delteimages:",deleteImages);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
    
            reader.onloadend = () => {
                if (e.target.name === "mainImage") {
                    setNewImage(reader.result); // Update the new main image with base64 data
                } else {
                    setNewImages((prevImages) => [...prevImages.slice(0, -1), reader.result]); // Add the additional image to the array
                }
            };
    
            reader.readAsDataURL(file); // Convert the file to base64
        }
    };
    
    const addNewImageField = () => {
		setNewImages([...newImages, ""]); // Add an empty placeholder for a new image
        // allImages
	};

    const handleDeleteImage = (image) => {
        if (image != product.image) {
            setDeleteImages((prev) => [...prev, image]);
        }
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((img) => img !== image),
        }));
    };

    const handleSaveChanges = async () => {
        if (!formData.name || !formData.price || !formData.category) {
            toast.error("Please fill all required fields!");
            return;
        }

        try {
            const updatedData = {
                name: formData.name,
                description: formData.description,
                price: formData.price,
                category: formData.category,
                newImage, // Send the new main image if updated
                newImages, // Send new additional images if provided
                deleteImages, // List of images to be deleted
            };

            // Call the editProduct method from the store
            await editProduct(product._id, updatedData);

            // Fetch the updated product from the database using fetchProduct
            const { fetchProduct } = useProductStore.getState(); // Access fetchProduct from the store
            await fetchProduct(product._id);

            const { product: updatedProduct } = await useProductStore.getState(); // Get the updated product


            toast.success("Product updated successfully!");

            // Navigate to the same page with the updated product data
            navigate(`/product/edit/${product._id}`, { state: { product: updatedProduct } });
             // Redirect to products list or another page
        } catch (error) {
            console.error(error);
            toast.error("Failed to update the product.");
        }
    };

    return (
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-1000 shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Product</h2>

            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Left: Stacked Images Display */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-black text-lg font-semibold mb-4">Product Images</h3>
                    <div className="space-y-4">
                        {formData.images.map((image, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 bg-gray-100 p-2 rounded-lg"
                            >
                                <img
                                    src={image}
                                    alt={`Product image ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteImage(image)}
                                >
                                    <FaTrash size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Edit Form */}
                <div className="flex-1">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-800 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="text-black w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Enter product name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-800 font-medium mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="text-black w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Enter product description"
                                rows="4"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-800 font-medium mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="text-black w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Enter product price"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-800 font-medium mb-2">Category</label>
                            <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleInputChange}
    className="text-black w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
    placeholder="Enter product category"
>
    <option value="">Select a category</option>
    {categories.map((category) => (
        <option key={category.name} value={category.name}>
            {category.name}
        </option>
    ))}
</select>

                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-800 font-medium mb-2">Main Image</label>
                            <input
                                type="file"
                                name="mainImage"
                                onChange={handleImageChange}
                                className="text-black w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-800">Extra Images</label>
                            {newImages.map((image, index) => (
                                <div key={index} className="flex items-center mt-2 space-x-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
                                    />
                                    {image && <span className="text-sm text-gray-800">Image uploaded</span>}
                                </div>
                            ))}
                            {/* Add New Image Field */}
                            <button
                                type="button"
                                onClick={addNewImageField}
                                className="mt-2 text-sm text-black hover:text-emerald-500"
                            >
                                + Add another image
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleSaveChanges}
                            className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProductPage;