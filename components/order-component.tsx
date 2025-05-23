import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface TopSellersComponentProps {
  name: string;
  price?: number;
  subText: string;
  source?: { uri: string };
  onPress?: () => void;
  buttonText?: string;
}

const OrderComponent = ({
  name,
  price,
  source,
  subText,
  onPress,
  buttonText,
}: TopSellersComponentProps) => {
  return (
    <View className="flex-row items-center bg-white rounded-lg border-b border-[#EBEBEB] py-6">
      <View className="w-24 h-24 rounded-lg justify-center items-center mr-3 bg-white overflow-hidden">
        <Image
          source={source}
          className="w-full h-full"
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>

      <View className="flex-1  gap-2">
        <Text className="text-md font-bold ">{name}</Text>
        <Text className="text-sm text-gray-600">{subText}</Text>
        <View className="flex-row items-center mb-1">
          <Text className="text-md font-semibold  ">$ {price}</Text>
        </View>
      </View>
      <View className="flex  pt-4">
        <TouchableOpacity className="mt-3 " onPress={onPress}>
          <Text
            style={{
              backgroundColor: "#008080",
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 5,
            }}
            className="text-white text-sm font-bold"
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderComponent;
