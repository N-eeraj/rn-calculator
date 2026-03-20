import DisplayItem from "@components/ExchangeRate/Display/Item";
import { COLORS } from "@constants/theme";
import { ExchangeRateContext } from "@contexts/ExchangeRate";
import { use } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Display() {
  const {
    currencies,
    primaryCurrency,
    primaryValue,
    secondaryCurrency,
    secondaryValue,
    isPrimaryActive,
    isFetchingCurrencies,
    fetchingExchangeRate,
    setPrimaryCurrency,
    setSecondaryCurrency,
    setIsPrimaryActive,
  } = use(ExchangeRateContext);

  const currencyList = currencies.map(({ code, name }) => ({
    value: code,
    label: name,
  }))
    .sort((a, b) => a.label.localeCompare(b.label));

  if (isFetchingCurrencies) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          Loading Currencies...
        </Text>
      </View>
    );
  }

  let isLoadingExchangeRate: false | "primary" | "secondary" = false;
  if (fetchingExchangeRate === primaryCurrency) {
    isLoadingExchangeRate = "secondary";
  } else if (fetchingExchangeRate === secondaryCurrency) {
    isLoadingExchangeRate = "primary";
  }

  return (
    <View style={styles.container}>
      {primaryCurrency && (
        <DisplayItem
          currency={primaryCurrency}
          value={primaryValue}
          isActive={isPrimaryActive}
          currencies={currencyList}
          setCurrency={setPrimaryCurrency}
          isLoading={isLoadingExchangeRate === "primary"}
          onTogglePrimary={() => setIsPrimaryActive(true)} />
      )}
      {secondaryCurrency && (
        <DisplayItem
          currency={secondaryCurrency}
          value={secondaryValue}
          isActive={!isPrimaryActive}
          currencies={currencyList}
          setCurrency={setSecondaryCurrency}
          isLoading={isLoadingExchangeRate === "secondary"}
          onTogglePrimary={() => setIsPrimaryActive(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 24,
    paddingRight: 16,
  },
  loadingText: {
    color: COLORS.inactive,
  },
  container: {
    flex: 2,
    rowGap: 62,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
});
