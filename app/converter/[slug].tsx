import Display from "@components/Converter/Display";
import Header from "@components/Converter/Header";
import Keypad from "@components/Converter/Keypad";
import { COLORS } from "@constants/theme";
import ConverterContextProvider from "@contexts/Converter";
import { StyleSheet, View } from "react-native";

export default function Converter() {
  return (
    <View style={styles.container}>
      <ConverterContextProvider>
        <Header/>
        <Display />
        <Keypad />
      </ConverterContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  text: {
    color: COLORS.foreground,
  },
});
