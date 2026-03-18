import type { CurrencyItem, Rates } from "@/types";
import { fetchCurrencies, fetchExchangeRate } from "@/utils/exchangeRates";
import { createContext, type PropsWithChildren, useEffect, useState } from "react";

export interface ExchangeRateContextType {
}

export const ExchangeRateContext = createContext<ExchangeRateContextType>({
});

export default function ExchangeRateContextProvider({ children }: PropsWithChildren) {
  const [currencies, setCurrencies] = useState<Array<CurrencyItem>>([]);
  const [exchangeRates, setExchangeRates] = useState<Record<CurrencyItem["code"], Rates>>({});
  const [primaryCurrency, setPrimaryCurrency] = useState<CurrencyItem["code"]>();
  const [secondaryCurrency, setSecondaryCurrency] = useState<CurrencyItem["code"]>();

  // fetch currencies list on initial mount
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

  // initialize the default currencies on load
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

  // fetch and update currency rates on primary currency change
  useEffect(() => {
    // prevent unwanted fetching if already fetched
    if (
      !primaryCurrency
      || exchangeRates.hasOwnProperty(primaryCurrency)
    ) return;
    const setExchangeRatesData = async () => {
      try {
        const exchangeRates = await fetchExchangeRate(primaryCurrency);
        console.log(exchangeRates)
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

  const values = {
    primaryCurrency,
    secondaryCurrency,
    setPrimaryCurrency,
    setSecondaryCurrency,
  };

  return (
    <ExchangeRateContext value={values}>
      {children}
    </ExchangeRateContext>
  );
}
