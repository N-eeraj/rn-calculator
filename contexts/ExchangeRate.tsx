import type { CurrencyItem, Rates } from "@/types";
import { fetchCurrencies, fetchExchangeRate } from "@/utils/exchangeRates";
import { createContext, type PropsWithChildren, useEffect, useState } from "react";

export interface ExchangeRateContextType {
  currencies: Array<CurrencyItem>;
  primaryCurrency?: CurrencyItem["code"];
  primaryValue: number | string;
  secondaryCurrency?: CurrencyItem["code"];
  secondaryValue: number | string;
  isPrimaryActive: boolean;
  setPrimaryCurrency: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPrimaryValue: React.Dispatch<React.SetStateAction<number | string>>;
  setSecondaryCurrency: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSecondaryValue: React.Dispatch<React.SetStateAction<number | string>>;
  setIsPrimaryActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExchangeRateContext = createContext<ExchangeRateContextType>({
  currencies: [],
  primaryCurrency: undefined,
  primaryValue: 0,
  secondaryCurrency: undefined,
  secondaryValue: 0,
  isPrimaryActive: true,
  setPrimaryCurrency: () => {},
  setPrimaryValue: () => {},
  setSecondaryCurrency: () => {},
  setSecondaryValue: () => {},
  setIsPrimaryActive: () => {},
});

export default function ExchangeRateContextProvider({ children }: PropsWithChildren) {
  const [currencies, setCurrencies] = useState<Array<CurrencyItem>>([]);
  const [exchangeRates, setExchangeRates] = useState<Record<CurrencyItem["code"], Rates>>({});

  const [primaryCurrency, setPrimaryCurrency] = useState<CurrencyItem["code"]>();
  const [primaryValue, setPrimaryValue] = useState<number | string>(0);

  const [secondaryCurrency, setSecondaryCurrency] = useState<CurrencyItem["code"]>();
  const [secondaryValue, setSecondaryValue] = useState<number | string>(0);

  const [isPrimaryActive, setIsPrimaryActive] = useState(true);

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
    currencies,
    primaryCurrency,
    primaryValue,
    secondaryCurrency,
    secondaryValue,
    isPrimaryActive,
    setPrimaryCurrency,
    setPrimaryValue,
    setSecondaryCurrency,
    setSecondaryValue,
    setIsPrimaryActive,
  };

  return (
    <ExchangeRateContext value={values}>
      {children}
    </ExchangeRateContext>
  );
}
