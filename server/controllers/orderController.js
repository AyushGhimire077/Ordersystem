import Order from "../models/orderModel.js";

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ success: false, message: "No order items" });
  }

  try {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      isPaid: false,
      isDelivered: false,
    });

    await order.save();
    return res
      .status(201)
      .json({ success: true, message: "Order created successfully", order });
  } catch (error) {
    console.error("Order Creation Error:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
