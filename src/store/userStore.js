import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      name: null,
      email: null,
      isLoggedIn: false,
      setUser: (userData) => set({ ...userData, isLoggedIn: true }),
      clearUser: () => set({ name: null, email: null, isLoggedIn: false }),
    }),
    {
      name: "user-store", // Key for localStorage
      getStorage: () => localStorage, // Use localStorage
    }
  )
);
