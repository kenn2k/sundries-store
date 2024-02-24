import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "../../types/types";

interface IState {
  items: CartType[];
  totalQuantity: number;
}

const initialState: IState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "@cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartType>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else if (existingItem && existingItem.quantity !== undefined) {
        existingItem.quantity++;
        existingItem.totalPrice =
          (existingItem.quantity || 0) * (existingItem.price || 0);
      }
    },

    removeItemById(state, action) {
      const removeItem = action.payload;
      const existingItem = state.items.find((item) => item.id === removeItem);

      if (existingItem) {
        state.totalQuantity--;

        if (
          existingItem.quantity &&
          existingItem.quantity > 1 &&
          existingItem.totalPrice !== undefined &&
          existingItem.price !== undefined
        ) {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        } else {
          state.items = state.items.filter((item) => item.id !== removeItem);
        }
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
