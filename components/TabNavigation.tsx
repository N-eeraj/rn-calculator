import { Link, usePathname } from "expo-router";
import { Pressable, View } from "react-native";

const NAVIGATION = [
  {
    label: "Calculator",
    href: "/",
  },
  {
    label: "Converter",
    href: "/converter",
  },
] as const;

export default function TabNavigation() {
  const pathname = usePathname();

  return (
    <View
      style={{
        flexDirection: "row",
      }}>
      {NAVIGATION.map(({ label, href }, index) => (
        <Pressable
          key={index}
          style={{
            flex: 1,
          }}>
          <Link
            href={href}
            style={{
              padding: 12,
              textAlign: "center",
              backgroundColor: "#111",
              color: pathname === href ? "#0af" : "#ccc",
            }}>
            {label}
          </Link>
        </Pressable>
      ))}
    </View>
  );
}
