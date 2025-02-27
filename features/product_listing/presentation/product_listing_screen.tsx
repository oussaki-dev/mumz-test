import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductModel from "../domain/model/ProductModel";
import fetchProducts from "../domain/usecases/fetchProducts";
import Product_card from "./components/product_card";
import { withExpoSnack } from 'nativewind';
import ImageCarousel from "./components/ImageCarousel";
// import MumzSearchBar from "@/components/searchComponent";

const sampleImages = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
  ];

const ProductListing = () => {
    const [data, setData] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchProducts();
                setData(products);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* <ImageCarousel images={sampleImages} style={{ height: 300, width: '100%' }} /> */}
           <MumzSearchBar />
            <FlatList
                // columnWrapperStyle={{ gap: 2 }}
                contentContainerStyle={{ alignItems: 'center' }}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Product_card product={item} />}
                numColumns={2}
            />
        </SafeAreaView>
    );
};

export default withExpoSnack(ProductListing);