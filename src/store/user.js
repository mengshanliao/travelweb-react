import { create } from "zustand";
import { persist } from "zustand/middleware";
const userState = localStorage.getItem("user");

export const useUserStore = create(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token) => set(() => ({ token })),
      cart: [],
      setCart: (products) => set(() => ({ cart: products })),
      order: [],
      setOrder: (order) => set(() => ({ order: order })),
      isDarkTheme: false,
      setIsDarkTheme: (isDarkTheme) => set(() => ({ isDarkTheme })),
      language: userState ? JSON.parse(userState).state.language : "zh_TW",
      setLanguage: (language) => set(() => ({ language })),
      followList: [],
      setFollowList: (followList) => set(() => ({ followList })),
    }),

    {
      name: "user",
    }
  )
);
