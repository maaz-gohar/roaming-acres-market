import WelcomeComponent from "../../components/welcome-component";
import { useRouter } from "expo-router";

export default function welcome() {
  const router = useRouter();
  return (
    <>
      <WelcomeComponent
        onSkip={() => router.push("/seller/home-screen")}
        onEmailPress={() => router.push("/seller/signup")}
        onSignInPress={() => router.push("/seller/login")}
      />
    </>
  );
}
