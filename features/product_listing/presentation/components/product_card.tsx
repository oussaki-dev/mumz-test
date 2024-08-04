import { Colors } from '@/constants/Colors';
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import "../../../../styles.css";

const ProductCard = ({ product }) => {
    return (
        <View className="p-4 bg-white rounded-lg w-60">
            <View className="relative border-2 border-[#C1CFDE] rounded-lg ">
                <Image
                    source={{ uri: product.smallImage.url }}
                    className="h-40 w-30 object-cover rounded-t-lg m-4"
                />
                <View className="absolute bg-[#FDF4F4] rounded-tl-lg rounded-br-lg p-2" >
                    <Text className="text-[#CE3637] text-xs color-[#CE3637] font-semibold">10% off</Text>
                </View>
                <Pressable className="absolute bottom-2 right-2 bg-blue-600 h-8 w-8 
                rounded-full flex items-center justify-center">
                    <Text className="text-white text-lg">+</Text>
                </Pressable>
            </View>
            <Text className="mt-4 text-lg font-semibold" numberOfLines={2}>{product.name}</Text>
            <Text className="mt-2 text-xl font-bold color-[#c30145]">{product.price.regularPrice.amount.formatted}<Text className="text-sm">{product.price.regularPrice.amount.currency}</Text></Text>
        </View>
    );
}


export default ProductCard;