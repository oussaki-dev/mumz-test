import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import "../../../../styles.css";

const ProductCard = ({ product }) => {

    let priceIsDiscounted = product.price.discount != undefined && product.price.discount.roundedDiscount != 0;
   
    let hasLabel = product.productLabel.labelText.length > 0
    
    return (
        <View className="p-2 bg-white rounded-lg w-6/12">
            <View className="relative border-[#C1CFDE] border rounded-lg ">
                <Image
                    source={{ uri: product.smallImage.url }}
                    className="h-40 w-30 object-cover rounded-t-lg m-4"
                />

                {priceIsDiscounted &&
                    <View className="absolute bg-[#FDF4F4] rounded-tl-lg rounded-br-2xl p-2" >
                        <Text className="text-[#CE3637] text-xs color-[#CE3637] font-semibold">{product.price.discount.roundedDiscount}% off</Text>
                    </View>
                }

                {hasLabel &&
                    <View className="absolute top-0 right-0 bg-[#d4f4e3] rounded-tr-lg rounded-bl-2xl p-2">
                        <Text className="text-[#43454c] text-xs font-semibold">{product.productLabel.labelText}</Text>
                    </View>
                }

                {product.isYalla &&
                    <View className="absolute bottom-2 left-2 bg-[#f8e752] rounded-lg pt-1 pb-1 px-2" >
                        <Text className="text-black text-xs color-black font-bold">Yalla</Text>
                    </View>
                }

                <Pressable className="absolute bottom-2 right-2 bg-[#0070BE] h-9 w-9 
                rounded-full flex items-center justify-center border-white border-2">
                    <Text className="text-white text-lg">+</Text>
                </Pressable>
            </View>
            <Text className="mt-4 text-xs font-500" numberOfLines={2}>{product.name}</Text>
            {priceIsDiscounted ?
                <View className='flex-row'>
                    <Text className="mt-2 text-base font-bold color-[#c30145]"><Text className="text-sm">{product.price.finalPrice.currency}</Text>{product.price.finalPrice.formatted}</Text>

                    <Text className="mt-2 text-xs line-through font-medium color-[#747474] pl-1"><Text className="text-xs">{product.price.regularPrice.currency}</Text>{product.price.regularPrice.formatted}</Text>
                </View>
                :
                <View className='flex-row'>
                    <Text className="mt-2 text-base font-bold color-[#c30145]"><Text className="text-sm">{product.price.regularPrice.currency}</Text>{product.price.regularPrice.formatted}</Text>
                </View>
            }


        </View>
    );
}


export default ProductCard;