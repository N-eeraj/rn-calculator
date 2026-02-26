import { CalculatorContext } from "@contexts/Calculator";
import { use } from "react";

function splitLastInput(inputList: Array<string>) {
  const inputListCopy = [...inputList];
  const lastValue = inputListCopy.pop();

  return {
    lastValue,
    remainingItems: inputListCopy,
    isLastValueNonNumeric: isNaN(lastValue as unknown as number),
    lastValueHasDecimal: lastValue?.includes("."),
  };
}

const getPercentage = (value: number) => `${(Number(value) / 100)}`;

export default function useKeypadButtons() {
  const {
    inputList,
    result,
    hasResult,
    setInputList,
    setResult,
    evaluateInput,
  } = use(CalculatorContext);

  const handleValuePress = (key: string) => {
    // reset result and and set key as input
    if (hasResult) {
      setInputList([key]);
      setResult(null);
      return;
    }

    setInputList((prev) => {
      // set key as input
      if (!prev.length) return [key];

      const {
        lastValue,
        isLastValueNonNumeric,
        remainingItems,
        lastValueHasDecimal,
      } = splitLastInput(prev);

      // set key as new input
      if (isLastValueNonNumeric) {
        return [
          ...remainingItems,
          lastValue!,
          key,
        ];
      }

      // append key to last input upto 15 digit integer/fraction
      const [integer, fraction] = (lastValue ?? "").split(".");
      if ((lastValueHasDecimal ? fraction.length : integer.length) < 15) {
        return [
          ...remainingItems,
          lastValue == "0" ? Number(lastValue + key).toString() : `${lastValue}${key}`,
        ];
      }

      // return unchanged value
      return prev;
    });
  };

  const handleOperatorPress = (operator: string) => {
    // reset result and chain operator
    if (hasResult) {
      setInputList([
        `${result}`,
        operator,
      ]);
      setResult(null);
      return;
    }

    const {
      lastValue,
      isLastValueNonNumeric,
      remainingItems,
    } = splitLastInput(inputList);

    // prevent start with operator
    if (!lastValue) return;

    // overwrite last operator
    if (isLastValueNonNumeric) {
      setInputList([
        ...remainingItems,
        operator,
      ]);
    } else {
      // insert operator
      setInputList((prev) => [
        ...prev,
        operator,
      ]);
    }
  };

  const handleDecimalPress = () => {
    // reset result and and set 0. as input
    if (hasResult) {
      setInputList(["0."]);
      setResult(null);
      return;
    };

    const {
      lastValue,
      isLastValueNonNumeric,
      remainingItems,
    } = splitLastInput(inputList);

    // set 0. as input
    if (!lastValue) {
      setInputList(["0."]);
      return;
    }

    setInputList(() => {
      // add 0. after operator
      if (isLastValueNonNumeric) {
        return [
          ...remainingItems,
          lastValue,
          "0.",
        ];
      }
      // add . after current input
      return [
        ...remainingItems,
        `${lastValue}.`,
      ]
    })
  };

  const handleClearDisplay = () => {
    setInputList([]);
    setResult(null);
  };

  const handleDeletePress = () => {
    // prevent delete when result exists
    if (hasResult) return;

    setInputList((prev) => {
      const {
        lastValue,
        isLastValueNonNumeric,
        remainingItems,
      } = splitLastInput(prev);

      // remove last operator or single digit value
      if (isLastValueNonNumeric || lastValue?.length === 1) {
        return [...remainingItems];
      }

      // remove last digit of the last value
      return [
        ...remainingItems,
        lastValue!.slice(0, -1),
      ];
    });
  };

  const handlePercentagePress = () => {
    // reset result and set percentage of the result as input
    if (hasResult) {
      setInputList([
        getPercentage(result as number),
      ]);
      setResult(null);
      return;
    }

    const {
      lastValue,
      remainingItems,
      isLastValueNonNumeric,
    } = splitLastInput(inputList);

    // set last item value to its percentage if not operator
    if (!isLastValueNonNumeric && lastValue !== undefined) {
      setInputList([
        ...remainingItems,
        getPercentage(+lastValue),
      ]);
    }
  };

  const handleEquatePress = () => {
    const {
      isLastValueNonNumeric,
    } = splitLastInput(inputList);

    // prevent equation execution if ending with non numeric value
    if (isLastValueNonNumeric) return;

    evaluateInput();
  }

  return {
    handleValuePress,
    handleOperatorPress,
    handleDecimalPress,
    handleDeletePress,
    handleClearDisplay,
    handlePercentagePress,
    handleEquatePress,
  };
}
