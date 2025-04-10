import Button from "@/components/button";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SelectYourAccount() {
  const router = useRouter();
  return (
    <>
      <Wrapper showBackButton={true}>
        <View className="flex flew-col flex-1 items-center  gap-5 mt-[-5px]">
          <View className="mb-16">
            <Text className="text-center text-3xl font-semibold mb-8">
              Order Details
            </Text>
            <Text className="text-center text-4xl font-extrabold">
              Order ID: #0000
            </Text>
            <View className="flex-row items-center p-3 text-[12px]">
              <Text>Delivered-on 19 Jan 22:37 - You rated this</Text>
              <Ionicons name="star-outline" size={14} color="#E26D08" />
              <Text>4.7</Text>
            </View>

            {/* From and To */}
            <View className="mt-6 space-y-4">
              <View className="flex-row items-start gap-2">
                {/* <Feather name="map-pin" size={16} color="black" /> */}
                <View>
                  <Text className="text-sm font-semibold">Order from</Text>
                  <Text className="text-sm text-gray-700">
                    Roaming Acres Market
                  </Text>
                </View>
              </View>

              <View className="flex-row items-start gap-2">
                {/* <MaterialIcons name="location-on" size={18} color="black" /> */}
                <View>
                  <Text className="text-sm font-semibold">Delivered to</Text>
                  <Text className="text-sm text-gray-700">
                    Home - 123 Main St, Apt 48
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </>
  );
}
