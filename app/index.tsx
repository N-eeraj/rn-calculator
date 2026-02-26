import Display from "@components/Calculator/Display";
import Keypad from "@components/Calculator/Keypad";
import ContextProvider from "@contexts/Calculator";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}>
      <ContextProvider>
        <Display />
        <Keypad />
      </ContextProvider>
    </View>
  );
}
