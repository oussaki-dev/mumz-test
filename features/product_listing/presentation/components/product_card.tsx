import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import "../../../../styles.css";

const ProductCard = ({ product }) => {


    return (
        <View className="p-2 bg-white rounded-lg w-6/12">
            <View className="relative border-[#C1CFDE] border rounded-lg ">
                <Image
                    source={{ uri: product.smallImage.url }}
                    className="h-40 w-30 object-cover rounded-t-lg m-4"
                />
                {/* discount badge */}
                <View className="absolute bg-[#FDF4F4] rounded-tl-lg rounded-br-lg p-2" >
                    <Text className="text-[#CE3637] text-xs color-[#CE3637] font-semibold">10% off</Text>
                </View>

                <View className="absolute bottom-2 left-2 bg-[#f8e752] rounded-lg pt-1 pb-1 px-2" >
                    <Text className="text-black text-xs color-black font-bold">Yalla</Text>
                </View>

                <Pressable className="absolute bottom-2 right-2 bg-[#0070BE] h-9 w-9 
                rounded-full flex items-center justify-center border-white border-2">
                    <Text className="text-white text-lg">+</Text>
                </Pressable>
            </View>
            <Text className="mt-4 text-xs font-500" numberOfLines={2}>{product.name}</Text>
            <View className='flex-row'>
                <Text className="mt-2 text-base font-bold color-[#c30145]">{product.price.regularPrice.amount.formatted}<Text className="text-sm">{product.price.regularPrice.amount.currency}</Text></Text>
                <Text className="mt-2 text-xs line-through font-medium color-[#747474] pl-1">{product.price.regularPrice.amount.formatted}<Text className="text-sm">{product.price.regularPrice.amount.currency}</Text></Text>
            </View>

        </View>
    );
}


export default ProductCard;