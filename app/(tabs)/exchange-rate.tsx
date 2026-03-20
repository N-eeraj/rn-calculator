import Display from "@components/ExchangeRate/Display";
import Keypad from "@components/ExchangeRate/Keypad";
import { COLORS } from "@constants/theme";
import ExchangeRateContextProvider from "@contexts/ExchangeRate";
import { StyleSheet, View } from "react-native";

export default function ExchangeRate() {
  return (
    <ExchangeRateContextProvider>
      <View style={styles.container}>
        <Display />
        <Keypad />
      </View>
    </ExchangeRateContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
});
