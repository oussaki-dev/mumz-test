import ProductDetails from '@/features/product_details/presentation/ProductDetails';
import ProductListing from '@/features/product_listing/presentation/product_listing_screen';
import { StyleSheet, Image, Platform } from 'react-native';


export default function TabTwoScreen() {
  return (
    <ProductDetails />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
