import { create } from "zustand"

interface StoreState {
  elementToDelete: string | null
  setElementToDelete: (elementId: string | null) => void
}

export const useStore = create<StoreState>((set) => ({
  elementToDelete: null,
  setElementToDelete(elementId: string | null) {
    set((state) => ({
      elementToDelete: elementId,
    }))
  },
}))

export default useStore
