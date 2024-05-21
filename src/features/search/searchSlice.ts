import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IBook, ISearchSliceInitialState } from "../../types/global";
import axios from "axios";

const initialState: ISearchSliceInitialState = {
  searchValue: "",
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const search = createAsyncThunk<IBook[], string>(
  "books/search",
  async (searchValue: string) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}+inauthor:keyes&key=${process.env.REACT_APP_REQUEST_API_KEY}`
    );
    const books: IBook[] = response.data.items ? response.data.items : [];
    return books;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(search.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.books = null;
      });
  },
});

export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
