import { createSlice } from "@reduxjs/toolkit";
import { IBookSliceInitialState } from "../../types/global";
const initialState: IBookSliceInitialState = {
  book: {
    id: '',
    volumeInfo: {
      title: '',
      subtitle: '',
      description: '',
      imageLinks: {
        thumbnail: ''
      }
    }
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,

  reducers: {
    updateBook: (state, action) => {
      state.book = action.payload;
    },
  },
});

export const { updateBook } = bookSlice.actions;

export default bookSlice.reducer;
