import { AppContext } from "@/app/context";
import { use } from "react";
import {
  Text,
  View,
} from "react-native";

export default function Display() {
  const {
    inputList,
    result,
    hasResult,
  } = use(AppContext);
  console.log(inputList);

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
          fontSize: hasResult ? 24 : 32,
          transitionDuration: "300ms",
        }}>
        {inputList.join("") || "0"}
      </Text>
      {hasResult && (
        <Text
          style={{
            fontSize: 48,
          }}>
          =&nbsp;{result}
        </Text>
      )}
    </View>
  );
}
