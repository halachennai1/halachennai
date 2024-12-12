import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useCartStore = create((set, get) => ({
    cart: [],
    coupon: null,
    total: 0,
    subtotal: 0,
    isCouponApplied: false,

    getMyCoupon: async () => {
        try {
            const response = await axios.get("/coupons");
            set({ coupon: response.data });
        } catch (error) {
            console.error("Error fetching coupon:", error);
        }
    },

    applyCoupon: async (code) => {
        try {
            const response = await axios.post("/coupons/validate", { code });
            set({ coupon: response.data, isCouponApplied: true });
            get().calculateTotals();
            toast.success("Coupon applied successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to apply coupon");
        }
    },

    removeCoupon: () => {
        set({ coupon: null, isCouponApplied: false });
        get().calculateTotals();
        toast.success("Coupon removed");
    },

    getCartItems: async () => {
        try {
            const res = await axios.get("/cart");
			console.log("get all items",res.data);
            set({ cart: res.data });
            get().calculateTotals();
        } catch (error) {
            set({ cart: [] });
            toast.error(error.response?.data?.message || "An error occurred");
        }
    },

    clearCart: async () => {
        try {
            await axios.delete("/cart");
            set({ cart: [], coupon: null, total: 0, subtotal: 0 });
        } catch (error) {
            toast.error("Failed to clear the cart");
        }
    },

    addToCart: async (product) => {
        try {
            // Send all size and customization details in the payload
            const response = await axios.post("/cart", {
                product: product._id,
                color: product.color,
                regularSizeval: product.regularSizeval,
                kidSizeval: product.kidSizeval,
                shoeSizeval: product.shoeSizeval,
                customizableval: product.customizableval,
            });
    
            toast.success("Product added to cart");
            const updatedCartItems = response.data.cartItems;
    
            set((prevState) => {
                const existingItem = prevState.cart.find(
                    (item) =>
                        item.product === product._id &&
                        item.color === product.color &&
                        item.regularSizeval === product.regularSizeval &&
                        item.kidSizeval === product.kidSizeval &&
                        item.shoeSizeval === product.shoeSizeval &&
                        item.customizableval === product.customizableval
                );
    
                const newCart = existingItem
                    ? prevState.cart.map((item) =>
                          item.product === product._id &&
                          item.color === product.color &&
                          item.regularSizeval === product.regularSizeval &&
                          item.kidSizeval === product.kidSizeval &&
                          item.shoeSizeval === product.shoeSizeval &&
                          item.customizableval === product.customizableval
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                      )
                    : [
                          ...prevState.cart,
                          {
                              ...product,
                              _id: updatedCartItems.find(
                                  (item) =>
                                      item.product === product._id &&
                                      item.color === product.color &&
                                      item.regularSizeval === product.regularSizeval &&
                                      item.kidSizeval === product.kidSizeval &&
                                      item.shoeSizeval === product.shoeSizeval &&
                                      item.customizableval === product.customizableval
                              )._id,
                              quantity: 1,
                          },
                      ];
    
                return { cart: newCart };
            });
    
            get().calculateTotals();
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    },
    

    removeFromCart: async ({ productId, color, regularSizeval, kidSizeval, shoeSizeval, customizableval }) => {
        try {
            await axios.delete("/cart", { 
                data: { 
                    productId, 
                    color, 
                    regularSizeval, 
                    kidSizeval, 
                    shoeSizeval, 
                    customizableval 
                } 
            });
    
            set((prevState) => ({
                cart: prevState.cart.filter(
                    (item) =>
                        item._id !== productId ||
                        item.color !== color ||
                        item.regularSizeval !== regularSizeval ||
                        item.kidSizeval !== kidSizeval ||
                        item.shoeSizeval !== shoeSizeval ||
                        item.customizableval !== customizableval
                ),
            }));
    
            get().calculateTotals();
        } catch (error) {
            toast.error("Failed to remove item from cart");
        }
    },
    
    updateQuantity: async ({ productId, color, regularSizeval, kidSizeval, shoeSizeval, customizableval, quantity }) => {
        try {
            if (quantity === 0) {
                get().removeFromCart({ productId, color, regularSizeval, kidSizeval, shoeSizeval, customizableval });
                return;
            }
    
            await axios.put(`/cart/${productId}`, {
                color,
                regularSizeval,
                kidSizeval,
                shoeSizeval,
                customizableval,
                quantity,
            });
    
            set((prevState) => ({
                cart: prevState.cart.map((item) =>
                    item._id === productId &&
                    item.color === color &&
                    item.regularSizeval === regularSizeval &&
                    item.kidSizeval === kidSizeval &&
                    item.shoeSizeval === shoeSizeval &&
                    item.customizableval === customizableval
                        ? { ...item, quantity }
                        : item
                ),
            }));
    
            get().calculateTotals();
        } catch (error) {
            toast.error("Failed to update item quantity");
        }
    },
    

    calculateTotals: () => {
        const { cart, coupon } = get();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let total = subtotal;

        if (coupon) {
            const discount = subtotal * (coupon.discountPercentage / 100);
            total = subtotal - discount;
        }

        set({ subtotal, total });
    },
}));
