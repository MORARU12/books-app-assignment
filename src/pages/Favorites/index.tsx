import BookList from "../../components/BookList";
import ErrorMessage from "../../components/ErrorMessage";
import { useAppSelector } from "../../app/hooks";
import styles from "./styles.module.scss";
import { RootState } from "../../app/store";

const Favorites = () => {
  const { favoritesBooks } = useAppSelector(
    (state: RootState) => state.favorites
  );
  console.log(favoritesBooks);
  return (
    <>
      <div className={styles.container}>
        {favoritesBooks.length ? (
          <BookList books={favoritesBooks} />
        ) : (
          <ErrorMessage message={"No favorites books found"} />
        )}
      </div>
    </>
  );
};

export default Favorites;
