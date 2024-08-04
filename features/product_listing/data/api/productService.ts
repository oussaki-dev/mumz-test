import ProductModel from '../../domain/model/ProductModel';
import apiClient from './apiClient';


const getProducts = async (): Promise<ProductModel[]> => {
    try {
        const response = await apiClient.get('/product-list-lite');
        const items = response.data.data.products.items;

        const products = items.map((product: any) => {
            let price = product.price_range.minimum_price
            return new ProductModel(
                product.id,
                product.name,
                {
                    regularPrice: {
                        currency: price.regular_price.currency,
                        value: price.regular_price.value,
                        formatted: ''
                    },
                    finalPrice: {
                        currency: price.final_price.currency,
                        value: price.final_price.value,
                        formatted: ''
                    },
                    discount: {
                        amountOff: price.discount.amount_off,
                        percentOff:  price.discount.percent_off,
                    }
                },
                { url: product.small_image.url },
                product.stock_status,
                product.is_yalla.length > 0
            );
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export default getProducts;
