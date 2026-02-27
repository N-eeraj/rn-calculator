import { createContext, useState, type PropsWithChildren } from "react";

export interface CalculatorContextType {
  inputList: Array<string>;
  result: number | null;
  hasResult: boolean;
  setInputList: React.Dispatch<React.SetStateAction<string[]>>;
  setResult: React.Dispatch<React.SetStateAction<number | null>>;
  evaluateInput: () => void;
}

export const CalculatorContext = createContext<CalculatorContextType>({
  inputList: [],
  result: null,
  hasResult: false,
  setInputList: () => {},
  setResult: () => {},
  evaluateInput: () => {},
});

export default function ContextProvider({ children }: PropsWithChildren) {
  const [inputList, setInputList] = useState<CalculatorContextType["inputList"]>([]);
  const [result, setResult] = useState<CalculatorContextType["result"]>(null);

  const evaluateInput = () => {
    if (!inputList.length) return;
    setResult(
      eval(
        inputList
          .join(" ")
          .replaceAll("×", "*")
          .replaceAll("÷", "/")
      )
    )
  };

  const hasResult = result !== null

  const values = {
    inputList,
    result,
    hasResult,
    setInputList,
    setResult,
    evaluateInput,
  } satisfies CalculatorContextType;

  return (
    <CalculatorContext value={values}>
      {children}
    </CalculatorContext>
  );
}
