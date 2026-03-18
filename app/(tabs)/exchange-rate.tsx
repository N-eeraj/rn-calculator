import Display from "@components/ExchangeRate/Display";
import { COLORS } from "@constants/theme";
import ExchangeRateContextProvider from "@contexts/ExchangeRate";
import { StyleSheet, View } from "react-native";

export default function ExchangeRate() {
  return (
    <ExchangeRateContextProvider>
      <View style={styles.container}>
        <Display />
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
