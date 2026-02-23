import {
  createContext,
  useState,
  type PropsWithChildren,
} from "react";

export interface AppContextType {
  displayText: string;
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  displayText: "",
  setDisplayText: () => {},
});

export default function ContextProvider({ children }: PropsWithChildren) {
  const [displayText, setDisplayText] = useState("");
  const values = {
    displayText,
    setDisplayText,
  } satisfies AppContextType;

  return (
    <AppContext value={values}>
      {children}
    </AppContext>
  );
}
