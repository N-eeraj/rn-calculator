import Display from "@/components/Display";
import Keypad from "@/components/Keypad";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Display />
      <Keypad />
    </View>
  );
}
