import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StoreType } from "../../types/types";

type FetchGalleryItemsResponse = StoreType[];

interface IGallery {
  loading: boolean;
  error: string | null;
  data: FetchGalleryItemsResponse;
  filter: string;
  selectedCategory: string;
}

export const fetchGalleryItems = createAsyncThunk(
  "@store/fetchStoreItems",
  async () => {
    const response = await axios.get<FetchGalleryItemsResponse>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  }
);

const initialState: IGallery = {
  loading: false,
  error: "",
  data: [],
  filter: "",
  selectedCategory: "",
};

const galleryItemsSlice = createSlice({
  name: "@gallery",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGalleryItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchGalleryItems.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          state.loading = true;
          state.data = [];
        }
      )
      .addCase(fetchGalleryItems.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      });
  },
});

export default galleryItemsSlice;
export const filterActions = galleryItemsSlice.actions;
