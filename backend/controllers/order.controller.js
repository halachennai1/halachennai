import Order from "../models/order.model.js";
import Product from "../models/product.model.js";

export const addOrder = async (req, res) => {
    try {
        const user = req.user; // Assuming user info comes from middleware
        const { cartItems, sessionId } = user;
        console.log(cartItems, req.body);

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        // Validate and calculate total amount
        let totalAmount = 0;
        const products = await Promise.all(
            cartItems.map(async (item) => {
                const product = await Product.findById(item.product);
                if (!product) {
                    throw new Error(`Product with ID ${item.product} not found`);
                }

                // Calculate total price for the item
                const price = product.price * item.quantity;
                totalAmount += price;

                return {
                    product: product._id,
                    quantity: item.quantity,
                    price: product.price,
                    color: item.color || "Black",
                    regularSizeval: item.regularSizeval || "M",
                    kidSizeval: item.kidSizeval || "",
                    shoeSizeval: item.shoeSizeval || "",
                    customizableval: item.customizableval || "",
                };
                
            })
        );

        // Create a new order
        const newOrder = new Order({
            user: user._id,
            products,
            totalAmount,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            SessionId: sessionId || `session-${Date.now()}`,
        });
        console.log(Date.now());

        await newOrder.save();

        // Add the new order ID to the user's orders array
        user.orders.push(newOrder._id);

        // Optionally clear the user's cart
        user.cartItems = [];

        // Save the updated user
        await user.save();

        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        console.error("Error in addOrder controller:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const user = req.user; // Assuming user info comes from middleware

        // Populate the orders array with full order details
        await user.populate({
            path: 'orders',
            populate: {
                path: 'products.product', // Populate products inside orders
                model: 'Product',
            },
        });

        // Respond with the populated orders
        res.status(200).json({ orders: user.orders });
    } catch (error) {
        console.error("Error in getUserOrders controller:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        // Optional query parameters for filtering or sorting
        const { userId, sortBy = "createdAt", order = "desc" } = req.query;

        // Build the query
        const query = userId ? { user: userId } : {};

        // Fetch orders with sorting and populate user & product details
        const orders = await Order.find(query)
            .populate("user", "name email") // Include user details
            .populate("products.product", "name price image customizable regularSize kidSize shoeSize") // Include product details
            .sort({ [sortBy]: order === "asc" ? 1 : -1 });

        res.status(200).json({ message: "Orders retrieved successfully", orders });
    } catch (error) {
        console.error("Error fetching orders:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};




export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params; // Order ID from route parameters
        const { status } = req.body; // New status from request body

        // Check if the status is valid
        if (!["placed", "dispatched", "delivered"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        // Find the order and update the status
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Update the status
        order.status = status;
        await order.save();

        res.status(200).json({
            message: `Order status updated to '${status}' successfully`,
            order,
        });
    } catch (error) {
        console.error("Error updating order status:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

