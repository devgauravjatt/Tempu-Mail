import { create } from "zustand";

export type Theme = "dark" | "light" | "system";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const STORAGE = "vite-ui-theme";

// Initial theme
const initialTheme = (localStorage.getItem(STORAGE) as Theme) || "system";

// Zustand store
export const useTheme = create<ThemeStore>((set) => ({
  theme: initialTheme,

  setTheme: (theme) => {
    localStorage.setItem(STORAGE, theme);
    set({ theme });
    applyTheme(theme);
  },
}));

// Apply theme directly
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.add(prefersDark ? "dark" : "light");
  } else {
    root.classList.add(theme);
  }
}

// Run immediately on page load
applyTheme(initialTheme);
