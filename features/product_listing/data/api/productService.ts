import ProductModel from '../../domain/model/ProductModel';
import apiClient from './apiClient';


const getProducts = async (): Promise<ProductModel[]> => {
    try {
        const response = await apiClient.get('/product-list-lite');
        const items = response.data.data.products.items;
        const products = items.map((product: any) => {
            return new ProductModel(
                product.id,
                product.name,
                {
                    regularPrice: {
                        amount: {
                            currency: product.price.regularPrice.amount.currency,
                            value: product.price.regularPrice.amount.value,
                        },
                    },
                },
                { url: product.small_image.url },
                product.stock_status
            );
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProducts;
