import getProducts from "../../data/api/productService";
import ProductModel from "../model/ProductModel";

const fetchProducts = async (): Promise<ProductModel[]> => {
  const productData = await getProducts();
  productData.forEach((product)=> {
    product.price.regularPrice.amount.formatted = product.price.regularPrice.amount.value.toFixed(2)
  });
  // we can filters or anything here 
  console.log(productData.length);
  return productData;
};

export default fetchProducts;
