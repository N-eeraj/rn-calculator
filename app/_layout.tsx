import TabNavigation from "@components/TabNavigation";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabNavigation />

      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="index"
          options={{ animation: "slide_from_left" }} />
        <Stack.Screen
          name="converter"
          options={{ animation: "slide_from_right" }} />
      </Stack>
    </SafeAreaView>
  );
}
