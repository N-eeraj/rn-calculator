import { type Key } from "@components/Keypad/Number";
import { Base } from "@constants/units/base";
import { ConverterContext } from "@contexts/Converter";
import { use } from "react";

export default function useKeypad() {
  const {
    measurementType,
    selectFirst,
    setFirstValue,
    setSecondValue,
    firstUnit,
    secondUnit,
  } = use(ConverterContext);

  const setValue = selectFirst
    ? setFirstValue
    : setSecondValue;

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

      // prevent leading zero for hexadecimals
      if (isBaseHexUnit) {
        if (prev == 0) return key;
      }
      // format to prevent leading zero for other numbers
      else if (
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

  const isBaseMeasurement = measurementType.slug === "base";

  const activeUnit = +(
    selectFirst
      ? firstUnit
      : secondUnit
  )!;

  let disabledKeys: Array<Key | string> = Array.from({ length: 6 }).map((_, i) => String.fromCharCode(65 + i));
  const isBaseHexUnit = activeUnit === Base.HEXADECIMAL;

  if (isBaseMeasurement) {
    switch (activeUnit) {
      // allow only 0 and 1
      case Base.BINARY:
        disabledKeys.push(...Array.from({ length: 8 }).map((_, i) => `${i + 2}`));
        break;
      // allow 0-7
      case Base.OCTAL:
        disabledKeys.push(...Array.from({ length: 2 }).map((_, i) => `${i + 8}`));
        break;
      // allow all keys
      case Base.HEXADECIMAL:
        disabledKeys = [];
        break;
    }
  }
  console.log(disabledKeys);

  return {
    isBaseMeasurement,
    disabledKeys,
    isBaseHexUnit,
    handleInput,
    handleClear,
    handleDelete,
  };
}
