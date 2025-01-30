import { create } from "zustand";

// Définition des types pour ton store
interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}
interface SelectElement {
  elementsSmartphone: string[];
  putWord: () => void;
  addElement: (word: string) => void;
}

// Création du store Zustand avec des types
export const useStoreOk = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export const useSelectElementStore = create<SelectElement>((set) => ({
  elementsSmartphone: [],

  // Action pour mettre à jour la liste avec des valeurs prédéfinies
  putWord: () => set({ elementsSmartphone: ["okko zustand"] }),

  // Action pour ajouter un élément à la liste
  addElement: (word) =>
    set((state) => {
      // Si vous voulez vraiment éviter des copies complètes, vous pouvez utiliser une méthode plus directe
      const updatedElements = [...state.elementsSmartphone, word];
      return { elementsSmartphone: updatedElements };
    }),
}));
