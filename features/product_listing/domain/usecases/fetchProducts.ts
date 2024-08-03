import getProducts from "../../data/api/productService";
import ProductModel from "../model/ProductModel";

const fetchProducts = async (): Promise<ProductModel[]> => {
  const productData = await getProducts();
  // we can filters or anything here 
  console.log(productData.length);
  return productData;
};

export default fetchProducts;
