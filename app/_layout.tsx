import { COLORS } from "@constants/theme";
import { Tabs } from "expo-router";
import { ArrowLeftRight, BadgeIndianRupee, EqualSquare } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NAVIGATION = [
  {
    name: "index",
    Icon: EqualSquare,
  },
  {
    name: "converter",
    Icon: ArrowLeftRight,
  },
  {
    name: "exchange-rate",
    Icon: BadgeIndianRupee,
  },
] as const;

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarPosition: "top",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabs,
          tabBarIconStyle: styles.tabIcon,
          animation: "shift",
        }}>
        {NAVIGATION.map(({ name, Icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              tabBarIcon: ({ focused }) => <Icon color={focused ? COLORS.primary : COLORS.inactive} />,
            }} />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  tabs: {
    paddingTop: 0,
    backgroundColor: COLORS.background,
    height: 48,
  },
  tabIcon: {
    margin: "auto",
  },
});
