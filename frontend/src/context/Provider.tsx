import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";

interface ContextType {
  cartSelect: boolean;
  setCartSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [cartSelect, setCartSelect] = useState(false);

  return (
    <Context.Provider value={{ cartSelect, setCartSelect }}>
      {children}
    </Context.Provider>
  );
};

export const ContextState = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("ContextState must be used within a Provider");
  }
  return context;
};

export default Provider;
