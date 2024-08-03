import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductModel from "../domain/model/ProductModel";
import fetchProducts from "../domain/usecases/fetchProducts";
import Product_card from "./components/product_card";
import { withExpoSnack } from 'nativewind';
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
        <SafeAreaView className="flex-1 bg-gray-100">
          <FlatList
            contentContainerStyle={{ alignItems: 'center', padding: 20 }}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Product_card product={item} />}
            numColumns={2}
          />
        </SafeAreaView>
    );
  };
  
  export default withExpoSnack(ProductListing);