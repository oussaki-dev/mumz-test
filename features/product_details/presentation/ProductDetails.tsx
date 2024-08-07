import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import "../../../styles.css";

const ProductDetails = () => {
  return (
    <ScrollView className="p-4 bg-white">
      <Text className="text-blue-600 font-bold">More from Apple</Text>
      <Text className="text-lg font-bold mt-1">
        Apple iPhone 15 Pro Max 256GB 5G LTE Natural Titanium
      </Text>
      <View className="flex-row items-center mt-1">
        {/* <Icon name="star" size={20} color="gold" /> */}
        <Text className="text-base ml-1">3.7</Text>
        <Text className="text-base text-gray-500 ml-1">(30)</Text>
        <Text className="text-base text-gray-500 underline ml-1">
          240 Reviews
        </Text>
        <Text className="text-red-600 font-bold ml-auto">Only 4 left !</Text>
      </View>
      <Image
        source={{ uri: 'https://via.placeholder.com/400x400' }}
        className="w-full h-64 mt-2"
      />
      <View className="flex-row justify-between mt-2">
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80' }}
          className="w-20 h-20"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80' }}
          className="w-20 h-20"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80' }}
          className="w-20 h-20"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80' }}
          className="w-20 h-20"
        />
      </View>
      <View className="mt-2 p-4 border border-gray-300 rounded-md">
        <Text className="text-red-600 font-bold">AED 100 off</Text>
        <Text className="text-red-600 font-bold">Online only</Text>
        <Text className="text-2xl font-bold mt-1">AED 4,247.99</Text>
        <Text className="text-lg text-gray-500 line-through">AED 5099.00</Text>
        <Text className="text-lg text-red-600 font-bold">17% OFF</Text>
        <Text className="text-base text-gray-500">Including VAT</Text>
        <Text className="text-blue-600 underline mt-1">
          2 other offers from other sellers
        </Text>
      </View>
      <View className="mt-2 p-4 border border-gray-300 rounded-md">
        <Text className="text-lg font-bold">AED 1,062.00/payment</Text>
        <Text className="text-base text-gray-500">4 interest-free payments</Text>
        <Text className="text-blue-600 underline mt-1">Learn more</Text>
        <Text className="text-lg font-bold mt-2">AED 114.00/month</Text>
        <Text className="text-base text-gray-500">
          for 36 months, 0% APR
        </Text>
        <Text className="text-blue-600 underline mt-1">Learn more</Text>
      </View>
      <Text className="text-base font-bold mt-2">Color: Natural Titanium</Text>
      <View className="flex-row mt-2">
        <Image
          source={{ uri: 'https://via.placeholder.com/50x50' }}
          className="w-12 h-12 border border-gray-300"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/50x50' }}
          className="w-12 h-12 border border-gray-300 ml-2"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/50x50' }}
          className="w-12 h-12 border border-gray-300 ml-2"
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/50x50' }}
          className="w-12 h-12 border border-gray-300 ml-2"
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
