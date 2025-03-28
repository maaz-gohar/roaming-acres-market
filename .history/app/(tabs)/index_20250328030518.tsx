import Button from "@/components/button";
import ShopByCategory from "@/components/shop-by-category";
import Wrapper from "@/components/wrapper";
import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function SelectYourAccount() {
  return (
    <>
      <Wrapper>
        <View className="flex flex-1 items-center justify-center gap-3">
          <Text className="text-[36.41px]">Select Your Account </Text>
          <Text></Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button state="primary" title="Buyer Account" />
            <Button state="secondary" title="Seller Account" />
          </View>
        </View>
      </Wrapper>
    </>
  );
}
