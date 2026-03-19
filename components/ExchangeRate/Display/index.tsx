import DisplayItem from "@components/ExchangeRate/Display/Item";
import { COLORS } from "@constants/theme";
import { ExchangeRateContext } from "@contexts/ExchangeRate";
import { use } from "react";
import { StyleSheet, View } from "react-native";

export default function Display() {
  const {
    currencies,
    primaryCurrency,
    primaryValue,
    secondaryCurrency,
    secondaryValue,
    isPrimaryActive,
    setPrimaryCurrency,
    setSecondaryCurrency,
    setIsPrimaryActive,
  } = use(ExchangeRateContext);

  const currencyList = currencies.map(({ code, name }) => ({
    value: code,
    label: name,
  }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <>
      <View style={styles.container}>
        {primaryCurrency && (
          <DisplayItem
            currency={primaryCurrency}
            value={primaryValue}
            isActive={isPrimaryActive}
            currencies={currencyList}
            setCurrency={setPrimaryCurrency}
            onTogglePrimary={() => setIsPrimaryActive(true)} />
        )}
        {secondaryCurrency && (
          <DisplayItem
            currency={secondaryCurrency}
            value={secondaryValue}
            isActive={!isPrimaryActive}
            currencies={currencyList}
            setCurrency={setSecondaryCurrency}
            onTogglePrimary={() => setIsPrimaryActive(false)} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    rowGap: 62,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
});
