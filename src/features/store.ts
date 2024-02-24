import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import galleryItemsSlice from "./slices/storeItems-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    gallery: galleryItemsSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
