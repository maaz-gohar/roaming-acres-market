import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custominput";
import Wrapper from "@/components/wrapper";

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

const SignupScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fullNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Validation functions
  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password: string) => password.length >= 6;
  const isFormValid = () =>
    formData.fullName &&
    isEmailValid(formData.email) &&
    isPasswordValid(formData.password);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    if (!isFormValid()) {
      Alert.alert("Validation Error", "Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert("Success", "Account created successfully!");
      router.push("/");
    } catch (error) {
      Alert.alert("Error", "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 w-full bg-white px-6 justify-start mt-8">
        <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-8">
          Sign Up
        </Text>
        <View>
          <Text className="text-[#9796A1] font-semibold text-start px-2 text-[#9796A1] mb-2">
            Full Name
          </Text>
          {/* Full Name Input */}
          <CustomTextInput
            ref={fullNameRef}
            placeholder="Full Name"
            value={formData.fullName}
            onChangeText={(text) => handleChange("fullName", text)}
            autoCapitalize="words"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
        </View>

        <View>
          <Text className="text-[#9796A1] font-semibold text-start px-2 text-[#9796A1] mb-2">
            E-mail
          </Text>
          {/* Email Input */}
          <CustomTextInput
            ref={emailRef}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            validationIcon={
              formData.email
                ? isEmailValid(formData.email)
                  ? "checkmark-circle"
                  : "close-circle"
                : undefined
            }
            validationIconColor={
              isEmailValid(formData.email) ? "#4CAF50" : "#F44336"
            }
            showValidationIcon={!!formData.email}
          />
        </View>

        <View>
          <Text className="text-[#9796A1] font-semibold text-start px-2 text-[#9796A1] mb-2">
            Password
          </Text>
          {/* Password Input */}
          <CustomTextInput
            ref={passwordRef}
            placeholder="Password (min 6 characters)"
            secureTextEntry={!showPassword}
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            returnKeyType="done"
            onSubmitEditing={handleSignup}
            iconRight={showPassword ? "eye-off" : "eye"}
            onIconRightPress={() => setShowPassword(!showPassword)}
            validationIcon={
              formData.password
                ? isPasswordValid(formData.password)
                  ? "checkmark-circle"
                  : "close-circle"
                : undefined
            }
            validationIconColor={
              isPasswordValid(formData.password) ? "#4CAF50" : "#F44336"
            }
            showValidationIcon={!!formData.password}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          className={`w-full tranform- py-4 rounded-lg ${
            isFormValid() ? "bg-[#008080]" : "bg-[#008080]"
          } flex items-center justify-center mt-2`}
          onPress={handleSignup}
          disabled={!isFormValid() || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-lg font-semibold">Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* Login Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-blue-600 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default SignupScreen;
