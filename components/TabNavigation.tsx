import { Link, usePathname } from "expo-router";
import { ArrowLeftRight, BadgeIndianRupee, EqualSquare } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from "react-native";

const NAVIGATION = [
  {
    Icon: EqualSquare,
    href: "/",
  },
  {
    Icon: ArrowLeftRight,
    href: "/converter",
  },
  {
    Icon: BadgeIndianRupee,
    href: "/exchange-rate",
  },
] as const;

export default function TabNavigation() {
  const pathname = usePathname();

  return (
    <View
      style={styles.container}>
      {NAVIGATION.map(({ Icon, href }, index) => (
        <Pressable
          key={index}
          style={styles.button}>
          <Link
            href={href}
            style={styles.link}>
            <Icon color={pathname === href ? "#0af" : "#ccc"} />
          </Link>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  link: {
    padding: 12,
    textAlign: "center",
    backgroundColor: "#111",
  },
});
