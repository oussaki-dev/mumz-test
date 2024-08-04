import getProducts from "../../data/api/productService";
import ProductModel from "../model/ProductModel";

const fetchProducts = async (): Promise<ProductModel[]> => {
    const productData = await getProducts();
    productData.forEach((product) => {
        let price = product.price

        let roundedPercentage = Math.round(price.discount.percentOff)
        
        price.discount.roundedDiscount = roundedPercentage
        price.regularPrice.formatted = price.regularPrice.value.toFixed(2)
        price.finalPrice.formatted = price.finalPrice.value.toFixed(2)
    });
    // we can filters or anything here 
    console.log('Products fetched ' + productData.length);
    return productData;
};

export default fetchProducts;
