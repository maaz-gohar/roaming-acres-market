import OrderSummary from "@/components/compeleted-order-component";
import OrderReceipt from "@/components/compeleted-order-component";
import OrderComponent from "@/components/order-component";
import PendingOrder from "@/components/pending-order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <ScrollView
      className="bg-white flex-1"
      bounces={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Wrapper showFilterButton={true} showMenuButton={true}>
        <ProfileHeader />
        <View className="p-4" style={{ width: "100%" }}>
          <View className="mt-4 relative">
            <TextInput
              className="border bg-[#F7F8F9] border-[#E8ECF4] rounded-[10px] py-4 px-4 pl-12"
              placeholder="Search"
              placeholderTextColor="#8391A1"
            />
            <View className="absolute left-4 top-4">
              <Ionicons name="search" size={18} color="#8391A1" />
            </View>
          </View>
        </View>

        <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
          {["Pending", "Completed", "Cancelled"].map((status, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActiveTab(status);
                if (status === "Pending") router.push("/buyer-orders");
                if (status === "Completed") router.push("/completed-order");
                if (status === "Cancelled") router.push("/cancelled-order");
              }}
              className="flex-1 items-center"
            >
              <View className="flex items-center">
                <Text
                  className={`font-bold text-xl ${
                    activeTab === status
                      ? "text-teal-600 border-b-2 border-teal-600 p-1"
                      : "text-black"
                  }`}
                >
                  {status}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="p-4">
          <PendingOrder
            orderId="1234"
            amount={4500}
            timeRequired="15mins"
            onPress={() => console.log("Standard order pressed")}
            testID="pending-order-standard"
            accessibilityLabel="Standard pending order"
          />

          {/* Large amount order */}
          <PendingOrder
            orderId="5678"
            amount={125000}
            timeRequired="45mins"
            onPress={() => console.log("Large order pressed")}
            testID="pending-order-large"
            accessibilityLabel="Large amount pending order"
          />

          {/* Quick delivery order */}
          <PendingOrder
            orderId="9012"
            amount={1200}
            timeRequired="5mins"
            onPress={() => console.log("Quick order pressed")}
            testID="pending-order-quick"
            accessibilityLabel="Quick delivery pending order"
          />

          {/* Minimum values */}
          <PendingOrder
            orderId="0001"
            amount={1}
            timeRequired="1min"
            onPress={() => console.log("Minimum order pressed")}
            testID="pending-order-min"
            accessibilityLabel="Minimum values pending order"
          />

          {/* Long order ID */}
          <PendingOrder
            orderId="ORD-2023-11-28-0001"
            amount={7890}
            timeRequired="30mins"
            onPress={() => console.log("Long ID order pressed")}
            testID="pending-order-long-id"
            accessibilityLabel="Long order ID pending order"
          />
          <OrderSummary />
        </View>
      </Wrapper>
    </ScrollView>
  );
}
