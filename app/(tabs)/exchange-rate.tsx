import { COLORS } from "@constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function ExchangeRate() {
  return (
    <View style={styles.container}>
      <Text>
        Exchange Rates
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
});

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{{code}}.min.json