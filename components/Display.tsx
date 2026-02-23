import { AppContext } from "@/app/context";
import { use } from "react";
import {
  Text,
  View,
} from "react-native";

export default function Display() {
  const {
    displayText,
  } = use(AppContext);

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
      <Text
        style={{
          fontSize: 32,
        }}>
        {displayText || "0"}
      </Text>
    </View>
  );
}
