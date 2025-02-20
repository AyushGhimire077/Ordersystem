import Product from "../models/productModel.js";

const AddProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  if (!name || !description || !price || !stock) {
    return res.status(400).json({ message: "Please add all fields" });
  }
  try {
    const isExisting =await Product.findOne({ name });
      
    if (isExisting) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const product = new Product({
      name,
      description,
      price,
      stock,
    });
    await product.save();
    return res
      .status(201)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({ success: true, message:"All products", products });
  } catch (error) {
    res.status(400).json({success:false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { AddProduct, getAllProducts, deleteProduct };
