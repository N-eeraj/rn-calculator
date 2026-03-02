import NAVIGATION from "@constants/navigation";
import { COLORS } from "@constants/theme";
import { Tabs } from "expo-router";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.background} />

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
    height: 52,
  },
  tabIcon: {
    margin: "auto",
  },
});
