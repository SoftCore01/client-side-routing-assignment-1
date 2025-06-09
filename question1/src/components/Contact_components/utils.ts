import { createContext, useContext } from "react";

export interface Contact {
    name: string;
    city: string;
}

type IsEditContextType = {
  isEditArray: boolean[];
  setIsEditArray: (IsEditArray: boolean[]) => void;
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void
};

export const IsEditContext = createContext<IsEditContextType | null>(null);

export function useIsEditContext() {
  const context = useContext(IsEditContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}