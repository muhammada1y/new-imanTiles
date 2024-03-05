import express from "express";
const router = express.Router();
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    getOrders,
    verifyManualPayment
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";


router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/manual-payment").put(protect, verifyManualPayment);
router.route("/:id/deliver").put(protect, updateOrderToDelivered);


export default router;