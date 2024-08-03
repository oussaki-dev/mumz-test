import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styled } from 'nativewind';

const ProductCard = ({ product }) => {
    return (
        <View className="p-4 bg-white rounded-lg shadow-md w-60">
            <View className="relative">
                <Image
                    source={{ uri: product.smallImage.url }}
                    className="h-40 w-full object-cover rounded-t-lg"
                />
                <View className="absolute top-2 left-2 bg-blue-500 py-1 px-2 rounded-full">
                    <Text className="text-white text-xs">BEST SELLER</Text>
                </View>
                <Pressable className="absolute bottom-2 right-2 bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center">
                    <Text className="text-white text-lg">+</Text>
                </Pressable>
            </View>
            <Text className="mt-4 text-lg font-semibold">{product.name}</Text>
            <Text className="text-gray-500">150g</Text>
            <Text className="mt-2 text-2xl font-bold">{product.price.regularPrice.amount.value}<Text className="text-sm">{product.price.regularPrice.amount.currency}</Text></Text>
        </View>
    );
}


export default ProductCard;