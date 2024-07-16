import { create } from "zustand";
import { persist } from "zustand/middleware";

//持久化 -> 直接存入localStorage
export const usePostStore = create(
  persist(
    (set, get) => ({
      storagePosts: [],
      setStoragePosts: (posts) => set(() => ({ storagePosts: posts })),
      collection: [],
      setCollection: (posts) => set(() => ({ collection: posts })),
    }),
    {
      name: "post",
    }
  )
);
