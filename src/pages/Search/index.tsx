import { useEffect } from "react";
import { updateSearchValue, search } from "../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import BookList from "../../components/BookList";
import styles from "./styles.module.scss";
import { ProgressBar } from "react-loader-spinner";
import ErrorMessage from "../../components/ErrorMessage";
import { RootState } from "../../app/store";

const Search = () => {
  const dispatch: any = useAppDispatch();

  const { searchValue, books, isLoading, isError, isSuccess } = useAppSelector(
    (state: RootState) => state.search
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(search(searchValue));
    }, 750);

    return () => {
      clearTimeout(handler);
    };
  }, [dispatch, searchValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(e.target.value));
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Type to search"
          className={styles.input}
          value={searchValue}
          onChange={handleSearch}
        />
        {isLoading ? (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            barColor="#ff8a00"
            borderColor="#e6e6e6"
          />
        ) : isSuccess && books?.length ? (
          <BookList books={books} />
        ) : isError ? (
          <ErrorMessage message={"Ups, something went wrong"} />
        ) : (
          <ErrorMessage message={"No books found"} />
        )}
      </div>
    </>
  );
};

export default Search;
