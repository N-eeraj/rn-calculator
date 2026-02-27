import TabNavigation from "@components/TabNavigation";
import { Stack } from "expo-router";
import { ExtendedStackNavigationOptions } from "expo-router/build/layouts/StackClient";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const converterOption = ({ navigation }: Record<"navigation", any>): ExtendedStackNavigationOptions => {
  const state = navigation.getState();
  const routes = state.routes;
  const prevRouteName = routes[state.index - 1]?.name;

  if (prevRouteName === "index") return { animation: "slide_from_right" };
  if (prevRouteName === "exchange-rate") return { animation: "slide_from_left" };
  return { animation: "default" };
}

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
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
          options={converterOption} />
        <Stack.Screen
          name="exchange-rate"
          options={{ animation: "slide_from_right" }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
