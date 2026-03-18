import { COLORS } from "@constants/theme";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CurrencyItem {
  code: string;
  name: string;
}

async function fetchCurrencies(): Promise<Record<string, string>> {
  const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json");
  console.log("Fetched Currencies");
  return await response.json();
}

async function fetchExchangeRate(currencyCode: string) {
  const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.min.json`);
  console.log("Fetched Exchange Rate:", currencyCode);
  const data = await response.json();
  return data[currencyCode];
}

export default function ExchangeRate() {
  const [currencies, setCurrencies] = useState<Array<CurrencyItem>>([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [primaryCurrency, setPrimaryCurrency] = useState<CurrencyItem["code"]>();
  const [secondaryCurrency, setSecondaryCurrency] = useState<CurrencyItem["code"]>();

  useEffect(() => {
    const setCurrencyData = async () => {
      try {
        const currencies = await fetchCurrencies();
        const currenciesList = Object.keys(currencies)
          .map((code) => ({
            code,
            name: currencies[code],
          }));
        setCurrencies(currenciesList);
      } catch (error) {
        console.error(error);
      }
    };

    setCurrencyData();
  }, []);

  useEffect(() => {
    if (!currencies.length) return;
    let primaryCurrency = currencies[0].code;
    let secondaryCurrency = currencies[1].code;
    if (currencies.find(({ code }) => code === "inr")) {
      primaryCurrency = "inr";
    }
    if (currencies.find(({ code }) => code === "usd")) {
      secondaryCurrency = "usd";
    }
    setPrimaryCurrency(primaryCurrency);
    setSecondaryCurrency(secondaryCurrency);
  }, [
    currencies,
  ]);

  useEffect(() => {
    if (
      !primaryCurrency
      || exchangeRates.hasOwnProperty(primaryCurrency)
    ) return;
    const setExchangeRatesData = async () => {
      try {
          const exchangeRates = await fetchExchangeRate(primaryCurrency);
        setExchangeRates((prev) => {
          return {
            ...prev,
            [primaryCurrency]: exchangeRates,
          };
        });
      } catch(error) {
        console.error(error);
      }
    };

    setExchangeRatesData();
  }, [
    primaryCurrency,
  ]);

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
