import NAVIGATION from "@constants/navigation";
import { COLORS } from "@constants/theme";
import { Tabs } from "expo-router";
import { StatusBar, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.background} />

      <Tabs
        screenOptions={{
          tabBarPosition: "top",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabs,
          tabBarIconStyle: styles.tabIcon,
          sceneStyle: styles.screen,
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
    </>
  );
}

const styles = StyleSheet.create({
  tabs: {
    paddingTop: 0,
    backgroundColor: COLORS.background,
    height: 52,
    borderColor: COLORS.background,
  },
  tabIcon: {
    margin: "auto",
  },
  screen: {
    backgroundColor: COLORS.background,
  },
});
