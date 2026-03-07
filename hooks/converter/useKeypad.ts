import { ConverterContext } from "@/contexts/Converter";
import { use } from "react";

export default function useKeypad() {
  const {
    selectFirst,
    setFistValue,
    setSecondValue,
  } = use(ConverterContext)

  const updateFunction = selectFirst
    ? setFistValue
    : setSecondValue;

  const handleInput = (key: string) => {
    updateFunction((prev) => {
      // prevent duplicate decimals and leading zeros
      if (
        (key === "." && String(prev).includes("."))
        || (key === "0" && String(prev) === "0")
      ) {
        return prev;
      }

      let input: string | number = `${prev}${key}`;

      // prevent leading zero
      if (key !== "." && !String(prev).includes(".")) {
        input = +input;
      }

      return input;
    });
  };

  const handleClear = () => {
    updateFunction(0);
  };

  const handleDelete = () => {
    updateFunction((prev) => {
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
