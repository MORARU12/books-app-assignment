import { createSlice } from "@reduxjs/toolkit";
import { IBook, IFavoriteBookSliceInitialState } from "../../types/global";
import { RootState } from "../../app/store";
const initialState: IFavoriteBookSliceInitialState = {
  favoritesBooks: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    toggleFavorites: (state, action) => {
      const book = action.payload;
      const index = state.favoritesBooks.findIndex(
        (favoriteBook: IBook) => favoriteBook.id === book.id
      );
      if (index === -1) {
        state.favoritesBooks.push(book);
      } else {
        state.favoritesBooks.splice(index, 1);
      }
    },
  },
});

export const isBookFavorite = (state: RootState, bookId: string) => {
  return state.favorites.favoritesBooks.some(
    (favoriteBook: IBook) => favoriteBook.id === bookId
  );
};

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
