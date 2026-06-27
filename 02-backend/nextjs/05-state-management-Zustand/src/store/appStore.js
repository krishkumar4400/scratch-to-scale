import { create } from "zustand";

export const useAppStore = create((set) => ({
  // Auth slice
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),

  // UI slice
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
