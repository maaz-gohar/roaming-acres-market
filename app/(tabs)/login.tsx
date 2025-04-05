import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custominput";
import Wrapper from "@/components/wrapper";

const COLORS = {
  primary: "#008080",
  text: "#111719",
  white: "#FFFFFF",
  gray: "#E0E0E0",
} as const;

type FormData = {
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const LoginScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllErrors, setShowAllErrors] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Validation functions
  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password: string) => password.length >= 6;

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "email":
        if (!value.trim()) return "Email is required";
        if (!isEmailValid(value)) return "Invalid email format";
        return "";
      case "password":
        if (!value) return "Password is required";
        return "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleLogin = async () => {
    setShowAllErrors(true);
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push("/home-screen");
    } catch (error) {
      Alert.alert("Error", error instanceof Error ? error.message : "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 w-full bg-white px-6 justify-start mt-8">
        <Text className="text-[36.41px] font-medium text-start text-gray-800 mb-8">
          Login
        </Text>
        
        <CustomTextInput
          label="E-mail"
          ref={emailRef}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          validationIcon={
            showAllErrors && errors.email && formData.email
              ? isEmailValid(formData.email)
                ? "checkmark-circle"
                : "close-circle"
              : undefined
          }
          validationIconColor={
            isEmailValid(formData.email) ? COLORS.primary : "#E26D08"
          }
          showValidationIcon={showAllErrors && !!errors.email && !!formData.email}
          errorMessage={showAllErrors ? errors.email : undefined}
        />
      
        <CustomTextInput
          label="Password"
          ref={passwordRef}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
          iconRight={showPassword ? "eye" : "eye-off"}
          onIconRightPress={() => setShowPassword(!showPassword)}
          errorMessage={showAllErrors ? errors.password : undefined}
        />

        <TouchableOpacity
          className="self-end mb-6"
          onPress={() => router.push("/resetpassword")}
        >
          <Text className="text-[#008080] text-sm">Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className={`w-full py-4 rounded-[3px] bg-[#008080] flex items-center justify-center mt-2`}
          onPress={handleLogin}
          disabled={isLoading}
          accessibilityLabel="Login"
          accessibilityRole="button"
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white w-full text-center text-lg uppercase font-semibold">
              Login
            </Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-[#111719] font-medium">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity 
            onPress={() => router.push("/signup")}
            accessibilityLabel="Go to signup"
            accessibilityRole="link"
          >
            <Text className="text-[#008080] underline px-2 font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;