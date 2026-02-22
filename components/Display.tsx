import { Text, View } from "react-native";

export default function Display() {
  return (
    <View
      style={{
        flex: 2,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 12,
        backgroundColor: "#111",
      }}>
      <Text>
        Display
      </Text>
      <Text>
        Display
      </Text>
      <Text>
        Display
      </Text>
    </View>
  );
}
