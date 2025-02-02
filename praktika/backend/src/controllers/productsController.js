import Product from "../models/productsModel.js";

// Məhsul əlavə etmək
export const addProduct = async (req, res) => {
  const { name, surname } = req.body;

  try {
    const newProduct = new Product({ name, surname });
    await newProduct.save();
    return res
      .status(201)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Məhsulların hamısını gətirmək
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products.length) {
      return res.status(404).json({
        success: false,
        message: "No products found.",
      });
    }

    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// ID ilə məhsul gətirmək
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const findProduct = await Product.findById(id);

    if (!findProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({ success: true, product: findProduct });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Məhsulu silmək
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found for deletion" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// Məhsulu yeniləmək
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  // Data validasiyası
  const { name, surname } = req.body;
  if (!name || !surname) {
    return res.status(400).json({
      success: false,
      message: "Məhsul adı və soyadı mütləq doldurulmalıdır.",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, surname },
      { new: true } // Yenilənmiş məhsulu qaytarmaq üçün
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found for update" });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
