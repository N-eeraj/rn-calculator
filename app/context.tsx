import {
  createContext,
  useState,
  type PropsWithChildren,
} from "react";

export interface AppContextType {
  inputList: Array<string>;
  setInputList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AppContext = createContext<AppContextType>({
  inputList: [],
  setInputList: () => {},
});

export default function ContextProvider({ children }: PropsWithChildren) {
  const [inputList, setInputList] = useState<AppContextType["inputList"]>([]);

  const values = {
    inputList,
    setInputList,
  } satisfies AppContextType;

  return (
    <AppContext value={values}>
      {children}
    </AppContext>
  );
}
