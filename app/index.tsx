import Display from "@/components/Display";
import Keypad from "@/components/Keypad";
import { View } from "react-native";
import ContextProvider from "./context";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ContextProvider>
        <Display />
        <Keypad />
      </ContextProvider>
    </View>
  );
}
