import { AppContext } from "@/app/context";
import { use } from "react";

function splitLastInput(inputList: Array<string>) {
  const inputListCopy = [...inputList];
  const lastValue = inputListCopy.pop();
  return {
    lastValue,
    remainingItems: inputListCopy,
    isLastValueNonNumeric: isNaN(lastValue as unknown as number),
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
  } = use(AppContext);

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
      } = splitLastInput(prev);

      // set key as new input
      if (isLastValueNonNumeric) {
        return [
          ...remainingItems,
          lastValue!,
          key,
        ];
      }

      // append key to last input
      return [
        ...remainingItems,
        Number(lastValue + key).toString(),
      ];
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

  const handleClearDisplay = () => {
    setInputList([]);
    setResult(null);
  };

  const handleDeletePress = () => {
    // prevent delete when result exists
    if (hasResult) return;

    setInputList(prev => {
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
    handleDeletePress,
    handleClearDisplay,
    handlePercentagePress,
    handleEquatePress,
  };
}