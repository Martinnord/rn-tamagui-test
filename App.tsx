import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaView, useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";

import config from "./tamagui.config";
import { Center, LoginForm } from "./components";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <SafeAreaView>
          <StatusBar style="auto" />
          <Center height="100%">
            <LoginForm />
          </Center>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
}
