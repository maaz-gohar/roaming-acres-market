import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import CustomTextInput from "../../components/custom-input";
import Wrapper from "@/components/wrapper";
import LoginScreen from './login';



const LoginScreen = () => {
 

  return (
    <>
      <LoginScreen ResetpasswordPath={"/resetpassword"}/>
    </>

  );
};

export default LoginScreen;
