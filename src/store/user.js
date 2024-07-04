import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
