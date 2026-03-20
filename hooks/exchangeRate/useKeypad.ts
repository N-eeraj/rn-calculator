import { ExchangeRateContext } from "@contexts/ExchangeRate";
import { use } from "react";

export default function useKeypad() {
  const {
    isPrimaryActive,
    setPrimaryValue,
    setSecondaryValue,
  } = use(ExchangeRateContext);

  const setValue = isPrimaryActive
    ? setPrimaryValue
    : setSecondaryValue;

  const handleInput = (key: string) => {
    setValue((prev) => {
      // limit input to 10 digits
      if (`${prev}`.length > 9) return prev;

      // prevent duplicate decimals and leading zeros
      if (
        (key === "." && String(prev).includes("."))
        || (key === "0" && String(prev) === "0")
      ) {
        return prev;
      }

      let input: string | number = `${prev}${key}`;

      // format to prevent leading zero
      if (
        key !== "." // allow trailing decimal
        && !String(prev).includes(".") // allow trailing zeros after decimal
      ) {
        input = +input;
      }

      return input;
    });
  };

  const handleClear = () => {
    setValue(0);
  };

  const handleDelete = () => {
    setValue((prev) => {
      if (String(prev).length === 1) return 0;
      return String(prev).slice(0, -1);
    });
  };

  return {
    handleInput,
    handleClear,
    handleDelete,
  };
}
