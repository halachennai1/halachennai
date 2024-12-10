import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set) => ({
	products: [],
	product: null,
	loading: false,

	setProducts: (products) => set({ products }),
	createProduct: async (productData) => {
		set({ loading: true });
		try {
			const res = await axios.post("/products", productData);
			set((prevState) => ({
				products: [...prevState.products, res.data],
				loading: false,
			}));
		} catch (error) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/products");
			set({ products: response.data.products, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	},
	fetchProduct: async (productId) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/products/${productId}`);
			console.log("fetch product store:",response.data);
			set({ product: response.data, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch product details", loading: false });
			toast.error(error.response?.data?.error || "Failed to fetch product details");
		}
	},
	fetchProductsByCategory: async (category) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/products/category/${category}`);
			set({ products: response.data.products, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	},
	deleteProduct: async (productId) => {
		set({ loading: true });
		try {
			await axios.delete(`/products/${productId}`);
			set((prevProducts) => ({
				products: prevProducts.products.filter((product) => product._id !== productId),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete product");
		}
	},
	toggleFeaturedProduct: async (productId) => {
		set({ loading: true });
		try {
			const response = await axios.patch(`/products/${productId}`);
			// this will update the isFeatured prop of the product
			set((prevProducts) => ({
				products: prevProducts.products.map((product) =>
					product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product
				),
				loading: false,
			}));
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to update product");
		}
	},
	fetchFeaturedProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/products/featured");
			set({ products: response.data, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			console.log("Error fetching featured products:", error);
		}
	},
	fetchSearchProducts: async (productName) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/products/search/${productName}`);
			set({ products: response.data.products, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	}, 
	editProduct: async (id, updatedData) => {
		set({ loading: true }); // Set loading state to true
		try {
		  // Make a PATCH request to update the product
		  console.log("use store",updatedData);
		  const res = await axios.put(`/products/edit/${id}`, updatedData);
	  
		  // Update the local products list in the store
		  set((prevState) => ({
			products: prevState.products.map((product) =>
			  product._id === id ? res.data.product : product // Replace the updated product
			),
			loading: false, // Set loading state to false
		  }));
	  
		  toast.success("Product updated successfully!");
		} catch (error) {
		  // Handle error and display a toast message
		  const errorMessage = error.response?.data?.message || "Something went wrong!";
		  toast.error(errorMessage);
		  set({ loading: false }); // Set loading state to false
		}
	  },
	  
}));
