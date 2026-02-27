import Display from "@components/Calculator/Display";
import Keypad from "@components/Calculator/Keypad";
import ContextProvider from "@contexts/Calculator";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ContextProvider>
        <Display />
        <Keypad />
      </ContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
