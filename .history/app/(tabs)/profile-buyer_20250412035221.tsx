import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Button from "./../../components/button";
import { type } from "./../../components/ThemedView";
import NotificationComponent from "@/components/notification-component";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Post");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={styles.container}
        className="flex-1 bg-[#FDFDFD] items-center"
      >
        <ImageBackground
          source={require("../../assets/images/profilebg.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.back}
            className="absolute left-5 top-2 bg-white p-3"
          >
            <Ionicons name="arrow-back" size={16} color="black" />
          </TouchableOpacity>
          <View className="items-center ">
            <View className=" ">
              <Image
                source={require("../../assets/images/profile.png")}
                className="w-40 h-40 rounded-full"
                style={styles.img}
              />
            </View>
            <Text className="text-lg font-bold mt-2">Try Temp</Text>
            <Text className="text-sm text-gray-500">
              Joined Roaming Acres Market in
            </Text>
            <Text className="text-sm text-gray-500">2000</Text>
            <Text className="text-sm text-gray-500">00+ Active Listings</Text>
          </View>
        </ImageBackground>
        <View className="flex flex-row justify-center items-center mt-10 ">
          <Button
            state="primary"
            title="Massage"
            onPress={() => router.push("../welcome")}
          />
        </View>
        <View className="bg-white w-full">
          <View className="bg-white py-2 flex flex-row justify-between px-7 items-center">
            {["Post", "Product"].map((status, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setActiveTab(status);
                  if (status === "Post") router.push("/notifications");
                  if (status === "Product") router.push("/messages");
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
          <View className="p-2">
            <NotificationComponent
              title="Order Out for Delivery!"
              text="Your Product is on the move! Track your order for real-time updates."
              time="5 mins ago"
              status="New"
              bgColor="#008080"
              statusTextColor="white"
            />
            <NotificationComponent
              title="Your Order is Confirmed!"
              text="Thanks for ordering! Your Product is being and will be on its way soon."
              time="22 mins ago"
              status="New"
              bgColor="#008080"
              statusTextColor="white"
            />
            <NotificationComponent
              title="Rate Your Order"
              text="How did we do? Let us know by rating your recent order and sharing your feedback."
              time="1 day ago"
              status="Old"
              bgColor="#F8E473"
            />
            <NotificationComponent
              title="Hungry? Try Our New Products!"
              text="Check out the latest additions to our menu and satisfy your cravings!"
              time="2 day ago"
              status="Old"
              bgColor="#F8E473"
            />
            <NotificationComponent
              title="Don't Miss Out: Special Offer Just for You!"
              text="Get 10% off your next order with code SAVE10. Limited time only!"
              time="2 hours ago"
              status="Old"
              bgColor="#F8E473"
            />
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    alignItems: "center",
  },
  img: {
    borderWidth: 7,
    borderColor: "#ffffff",
    marginTop: 80,
  },
  imageBackground: {
    width: "100%",
    height: 250,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    marginTop: 20,
    borderRadius: 8,
  },
});
