"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "dark"
            ? "bg-gray-900 text-white" // dark elegante
            : "bg-gray-300 text-black" // clean no claro
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
