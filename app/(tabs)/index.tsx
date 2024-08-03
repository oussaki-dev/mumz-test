import { Image, StyleSheet, Platform } from 'react-native';
import ProductCard from '@/features/product_listing/presentation/components/product_card';
import ProductListing from '@/features/product_listing/presentation/product_listing_screen';

export default function HomeScreen() {
  return (
    <ProductListing />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
