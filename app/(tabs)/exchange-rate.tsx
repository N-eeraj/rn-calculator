import ExchangeRateContextProvider from "@/contexts/ExchangeRate";
import { COLORS } from "@constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function ExchangeRate() {
  return (
    <ExchangeRateContextProvider>
      <View style={styles.container}>
        <Text>
          Exchange Rates
        </Text>
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
