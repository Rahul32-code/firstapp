
import axios from "axios";

const getProduct = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const getProductById = async (id) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export { getProduct, getProductById };
