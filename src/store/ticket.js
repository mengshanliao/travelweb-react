import { create } from "zustand";
import { persist } from "zustand/middleware";

//持久化 -> 直接存入localStorage
export const useTicketStore = create(
  persist(
    (set, get) => ({
      storageTickets: [],
      setStorageTickets: (tickets) => set(() => ({ storageTickets: tickets })),
      storageCities: [],
      setStorageCities: (cities) => set(() => ({ storageCities: cities })),
    }),
    {
      name: "ticket",
    }
  )
);
