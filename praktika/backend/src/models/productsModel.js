import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
  },
  {
    collection: "Products", // Eğer koleksiyon adını kesin belirlemek isterseniz kullanabilirsiniz
    timestamps: true,       // createdAt ve updatedAt alanlarını otomatik olarak ekler
  }
);

const Product = mongoose.model("Products", productsSchema);

export default Product;
