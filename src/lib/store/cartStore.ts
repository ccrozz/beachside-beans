import { create } from "zustand";

export interface CartLine {
  lineKey: string;
  /** Product slug/id */
  id: string;
  name: string;
  price: number;
  quantity: number;
  grind?: string;
  size?: string;
  image: string;
}

export function cartLineKey(
  productId: string,
  grind?: string,
  size?: string,
): string {
  return `${productId}:${grind ?? ""}:${size ?? ""}`;
}

interface CartStore {
  items: CartLine[];
  isOpen: boolean;
  addCoffeeLine: (input: Omit<CartLine, "lineKey" | "quantity">) => void;
  removeLine: (lineKey: string) => void;
  updateQty: (lineKey: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addCoffeeLine: (input) =>
    set((s) => {
      const lineKey = cartLineKey(input.id, input.grind, input.size);
      const existing = s.items.find((i) => i.lineKey === lineKey);
      if (existing) {
        return {
          items: s.items.map((i) =>
            i.lineKey === lineKey
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }
      return {
        items: [
          ...s.items,
          { ...input, lineKey, quantity: 1 },
        ],
      };
    }),
  removeLine: (lineKey) =>
    set((s) => ({ items: s.items.filter((i) => i.lineKey !== lineKey) })),
  updateQty: (lineKey, qty) =>
    set((s) => ({
      items:
        qty <= 0
          ? s.items.filter((i) => i.lineKey !== lineKey)
          : s.items.map((i) =>
              i.lineKey === lineKey ? { ...i, quantity: qty } : i,
            ),
    })),
  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
  total: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  itemCount: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
