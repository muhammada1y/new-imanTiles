import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (!orderItems && orderItems.length === 0 ) {
    res.status(400);
    throw new Error ("No order items");
  }else{
       const order = new Order({
        orderItems: orderItems.map((x) => ({
            ...x,
            product:x._id,
            _id:undefined
        })),
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    });
   
    const  createdOrder = await order.save();
 
    res.status(201).json(createdOrder);
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.user._id});
  res.status(200).json(orders);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if(order){
        res.status(200).json(order);
    }else{
        res.status(404);
        throw new Error('Order not found');
    }
   
});


// @desc    Update order to verify manual payment
// @route   PUT /api/orders/:id/manual-payment
// @access  Private
const verifyManualPayment = async (req, res) => { // Remove asyncHandler middleware
  const { adminVerificationCode, userVerificationCode } = req.body;
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" }); // Handle order not found
  }

  try {
    // Check for non-matching verification codes, regardless of user type
    if (!req.user.isAdmin && order.manualPayment.adminVerify.verifyCode !== userVerificationCode) {
      return res.status(400).json({ message: "Verification codes do not match" });
    }

    if (req.user.isAdmin && adminVerificationCode) {
      // Admin verification logic
      order.manualPayment.adminVerify.name = req.user.name;
      order.manualPayment.adminVerify.verifyCode = adminVerificationCode;
      order.manualPayment.adminVerify.verifyAt = Date.now();
      await order.save();
      return res.status(200).json({ message: "Admin verification successful" }); // Return here to prevent further execution
    }

     if (
      order.manualPayment.adminVerify.verifyCode !== userVerificationCode
    ) {
    // Handle invalid verification codes
    return res.status(400).json({ message: "Invalid verification codes" });
    }

    // User verification logic
    if (
      order.manualPayment.adminVerify.verifyCode === userVerificationCode &&
      order.manualPayment.adminVerify.verifyCode
    ) {
      order.manualPayment.userVerify.verifyCode = userVerificationCode;
      order.manualPayment.userVerify.verifyAt = Date.now();
      order.isPaid = true;
      order.paidAt = Date.now();
      await order.save();
      return res.status(200).json({ message: "User verification successful" }); // Return here as well
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if(order){
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updateOrder = await order.save();
    res.status(200).json(updateOrder);
  }else{
    res.status(404)
    throw new Error('Order not found')
  }
});

// @desc    Get all orders
// @route   Get /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.status(200).json(orders);
});


export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  getOrders,
  verifyManualPayment
};
