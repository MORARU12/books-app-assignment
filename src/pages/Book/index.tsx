import { BiSolidStar, BiStar } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  isBookFavorite,
  toggleFavorites,
} from "../../features/favorites/favoritesSlice";
import { RootState } from "../../app/store";
import noImg from "../../assets/images/no-image.png";
import styles from "./styles.module.scss";

const Book = () => {
  const dispatch = useAppDispatch();
  const { book } = useAppSelector((state: RootState) => state.book);
  const isFavorite = useAppSelector((state: RootState) =>
    isBookFavorite(state, book.id)
  );

  const handleFavorites = () => {
    dispatch(toggleFavorites(book));
  };

  const thumbnail: any = book.volumeInfo.imageLinks?.thumbnail || noImg;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={thumbnail} alt="books" />
        <button
          className={`${styles.favorites} ${isFavorite ? styles.active : ""}`}
          onClick={handleFavorites}
        >
          {isFavorite ? <BiSolidStar /> : <BiStar />}
        </button>
      </div>
      <article>
        <p className={styles.title}>{book.volumeInfo.title}</p>
        <p className={styles.subtitle}>{book.volumeInfo.subtitle}</p>
        <p className={styles.description}>{book.volumeInfo.description}</p>
      </article>
    </div>
  );
};

export default Book;
