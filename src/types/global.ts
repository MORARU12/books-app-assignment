export interface ISearchSliceInitialState {
  searchValue: "";
  books: null | IBook[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

export interface IBookSliceInitialState {
  book: IBook;
}

export interface IFavoriteBookSliceInitialState {
  favoritesBooks: IBook[];
}

export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    description: string;
    imageLinks: {
      thumbnail: string | undefined;
    };
  };
}
