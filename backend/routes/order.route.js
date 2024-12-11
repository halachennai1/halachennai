import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { addOrder,getAllOrders, updateOrderStatus, getUserOrders } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", protectRoute, addOrder);
router.get("/", protectRoute, adminRoute, getAllOrders);
router.put("/:orderId/status",protectRoute, adminRoute, updateOrderStatus);
router.get("/user",protectRoute, getUserOrders);

export default router;
