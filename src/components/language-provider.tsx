/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import {
  defaultLanguage,
  getBrowserLanguage,
  languageContent,
  type Language,
} from "@/assets/ts/languages";

type LanguageProviderProps = {
  children: React.ReactNode;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: (typeof languageContent)[Language];
};

const LanguageProviderContext = React.createContext<LanguageProviderState | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en" || value === "es";
}

export function LanguageProvider({
  children,
  storageKey = "language",
}: LanguageProviderProps) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    const storedLanguage = localStorage.getItem(storageKey);

    if (isLanguage(storedLanguage)) {
      return storedLanguage;
    }

    return getBrowserLanguage() ?? defaultLanguage;
  });

  const setLanguage = React.useCallback(
    (nextLanguage: Language) => {
      localStorage.setItem(storageKey, nextLanguage);
      setLanguageState(nextLanguage);
    },
    [storageKey],
  );

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) {
        return;
      }

      if (event.key !== storageKey) {
        return;
      }

      if (isLanguage(event.newValue)) {
        setLanguageState(event.newValue);
        return;
      }

      setLanguageState(getBrowserLanguage());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageKey]);

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      content: languageContent[language],
    }),
    [language, setLanguage],
  );

  return <LanguageProviderContext.Provider value={value}>{children}</LanguageProviderContext.Provider>;
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};