import OrderComponent from "@/components/order-component";
import ProfileHeader from "@/components/profile-header";
import Wrapper from "@/components/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

type OrderStatus = "Active" | "Completed" | "Cancelled";

interface Order {
  id: number;
  name: string;
  subText: string;
  price: number;
  buttonText: string;
  onPress: () => void;
  source: ImageSourcePropType;
}

export default function BuyerOrders() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<OrderStatus>("Active");

  const ordersData: Record<OrderStatus, Order[]> = {
    Active: [
      {
        id: 1,
        name: "Fresh Chicken Farm",
        subText: "Daily Egg Supply",
        price: 250,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken.jpg"),
        onPress: () => router.push("/active-order"),
      },
      {
        id: 2,
        name: "Organic Poultry Ltd.",
        subText: "Broiler Batch",
        price: 180,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken2.jpg"),
        onPress: () => router.push("/active-order"),
      },
      {
        id: 3,
        name: "Green Farm",
        subText: "20 Chicks Order",
        price: 320,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken3.jpg"),
        onPress: () => router.push("/active-order"),
      },
      {
        id: 4,
        name: "Sunrise Hatchery",
        subText: "Layer Birds",
        price: 500,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken4.jpg"),
        onPress: () => router.push("/active-order"),
      },
      {
        id: 5,
        name: "Golden Eggs Ltd.",
        subText: "Egg Cartons Bulk",
        price: 420,
        buttonText: "TRACK ORDER",
        source: require("../../assets/images/chicken5.jpg"),
        onPress: () => router.push("/active-order"),
      },
    ],
    Completed: [
      {
        id: 6,
        name: "Completed Poultry",
        subText: "Delivered on 12 May",
        price: 200,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete1.jpg"),
        onPress: () => router.push("/reviews"),
      },
      {
        id: 7,
        name: "Egg Supply Done",
        subText: "Delivered on 10 May",
        price: 190,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete2.jpg"),
        onPress: () => router.push("/reviews"),
      },
      {
        id: 8,
        name: "Broiler Dispatched",
        subText: "Delivered on 9 May",
        price: 210,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete3.jpg"),
        onPress: () => router.push("/reviews"),
      },
      {
        id: 9,
        name: "Farm Fresh Order",
        subText: "Delivered on 8 May",
        price: 275,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete4.jpg"),
        onPress: () => router.push("/reviews"),
      },
      {
        id: 10,
        name: "Organic Supply",
        subText: "Delivered on 5 May",
        price: 300,
        buttonText: "LEAVE REVIEW",
        source: require("../../assets/images/complete5.jpg"),
        onPress: () => router.push("/reviews"),
      },
    ],
    Cancelled: [
      {
        id: 11,
        name: "Cancelled Order #1",
        subText: "Refund processed",
        price: 200,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel1.jpg"),
        onPress: () => console.log("Order again"),
      },
      {
        id: 12,
        name: "No Response",
        subText: "Refunded",
        price: 180,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel2.jpg"),
        onPress: () => console.log("Order again"),
      },
      {
        id: 13,
        name: "Missed Delivery",
        subText: "Auto-cancelled",
        price: 250,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel3.jpg"),
        onPress: () => console.log("Order again"),
      },
      {
        id: 14,
        name: "Wrong Info",
        subText: "Cancelled by user",
        price: 260,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel4.jpg"),
        onPress: () => console.log("Order again"),
      },
      {
        id: 15,
        name: "Late Payment",
        subText: "System cancelled",
        price: 310,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel5.jpg"),
        onPress: () => console.log("Order again"),
      },
      {
        id: 16,
        name: "Invalid Order",
        subText: "Auto-refunded",
        price: 220,
        buttonText: "ORDER AGAIN",
        source: require("../../assets/images/cancel6.jpg"),
        onPress: () => console.log("Order again"),
      },
    ],
  };

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

        {/* Tabs */}
        <View className="bg-white py-2 flex flex-row justify-between px-3 items-center">
          {(["Active", "Completed", "Cancelled"] as OrderStatus[]).map(
            (status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(status)}
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
            )
          )}
        </View>

        {/* Orders List */}
        <View className="p-3">
          {ordersData[activeTab].map((order) => (
            <OrderComponent
              key={order.id}
              source={order.source}
              name={order.name}
              subText={order.subText}
              price={order.price}
              buttonText={order.buttonText}
              onPress={order.onPress}
            />
          ))}
        </View>
      </Wrapper>
    </ScrollView>
  );
}
