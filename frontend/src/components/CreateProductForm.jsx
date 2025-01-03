import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import { useCategoryStore } from "../stores/useCategoryStore";

const CreateProductForm = () => {
  const { categories, fetchAllCategory, loading: categoriesLoading } = useCategoryStore();

  useEffect(() => {
    if (!categories.length) {
      fetchAllCategory();
    }
  }, [categories, fetchAllCategory]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    images: [], // For additional images
    regularSize: false,  // New field
    kidSize: false,      // New field
    customizable: false, // New field
    shoeSize: false,     // New field
  });

  const { createProduct, loading: productLoading } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(newProduct);
      setNewProduct({ name: "", description: "", price: "", category: "", image: "", images: [], regularSize: false, kidSize: false, customizable: false, shoeSize: false });
    } catch (error) {
      console.error("Error creating a product:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file); // base64
    }
  };

  const handleExtraImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...newProduct.images];
        updatedImages[index] = reader.result; // Update the specific image
        setNewProduct({ ...newProduct, images: updatedImages });
      };
      reader.readAsDataURL(file); // Convert to base64
    }
    console.log(newProduct.image, newProduct.images);
  };

  const addNewImageField = () => {
    setNewProduct({ ...newProduct, images: [...newProduct.images, ""] }); // Add an empty placeholder for a new image
  };

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">Create New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            rows="3"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-300">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            step="0.01"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
            disabled={categoriesLoading}
          >
            <option value="">{categoriesLoading ? "Loading categories..." : "Select a category"}</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* New fields for regularSize, kidSize, customizable, and shoeSize */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="regularSize"
              checked={newProduct.regularSize}
              onChange={() => setNewProduct({ ...newProduct, regularSize: !newProduct.regularSize })}
              className="mr-2"
            />
            <label htmlFor="regularSize" className="text-sm text-gray-300">Regular Size</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="kidSize"
              checked={newProduct.kidSize}
              onChange={() => setNewProduct({ ...newProduct, kidSize: !newProduct.kidSize })}
              className="mr-2"
            />
            <label htmlFor="kidSize" className="text-sm text-gray-300">Kid Size</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="customizable"
              checked={newProduct.customizable}
              onChange={() => setNewProduct({ ...newProduct, customizable: !newProduct.customizable })}
              className="mr-2"
            />
            <label htmlFor="customizable" className="text-sm text-gray-300">Customizable</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="shoeSize"
              checked={newProduct.shoeSize}
              onChange={() => setNewProduct({ ...newProduct, shoeSize: !newProduct.shoeSize })}
              className="mr-2"
            />
            <label htmlFor="shoeSize" className="text-sm text-gray-300">Shoe Size</label>
          </div>
        </div>

        <div className="mt-1 flex items-center">
          <input type="file" id="image" className="sr-only" accept="image/*" onChange={handleImageChange} />
          <label
            htmlFor="image"
            className="cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Upload className="h-5 w-5 inline-block mr-2" />
            Upload Image
          </label>
          {newProduct.image && <span className="ml-3 text-sm text-gray-400">Image uploaded </span>}
        </div>

        {/* Additional Images */}
        <div>
          <label className="block text-sm font-medium text-gray-300">Extra Images</label>
          {newProduct.images.map((image, index) => (
            <div key={index} className="flex items-center mt-2 space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleExtraImageChange(e, index)}
                className="bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
              {image && <span className="text-sm text-gray-400">Image uploaded</span>}
            </div>
          ))}
          {/* Add New Image Field */}
          <button
            type="button"
            onClick={addNewImageField}
            className="mt-2 text-sm text-emerald-300 hover:text-emerald-500"
          >
            + Add another image
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
          disabled={productLoading}
        >
          {productLoading ? (
            <>
              <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Loading...
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Product
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default CreateProductForm;
