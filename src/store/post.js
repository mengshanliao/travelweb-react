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
      postLike: [],
      setPostLike: (posts) => set(() => ({ postLike: posts })),
      storageAuthors: [],
      setStorageAuthors: (authors) => set(() => ({ storageAuthors: authors })),
    }),
    {
      name: "post",
    }
  )
);
