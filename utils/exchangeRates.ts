import type { CurrencyItem, Rates } from "@/types";

export async function fetchCurrencies(): Promise<Record<CurrencyItem["code"], CurrencyItem["name"]>> {
  const response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json");
  console.log("Fetched Currencies");
  return await response.json();
}

export async function fetchExchangeRate(currencyCode: string): Promise<Rates> {
  const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.min.json`);
  console.log("Fetched Exchange Rate:", currencyCode);
  const data = await response.json();
  return data[currencyCode];
}
