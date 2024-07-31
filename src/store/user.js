import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token) => set(() => ({ token })),
      cart: [],
      setCart: (products) => set(() => ({ cart: products })),
      order: [],
      setOrder: (order) => set(() => ({ order: order })),
    }),
    {
      name: "user",
    }
  )
);
