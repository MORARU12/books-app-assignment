import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import noImg from "../../assets/images/no-image.png";
import { useAppDispatch } from "../../app/hooks";
import { updateBook } from "../../features/book/bookSlice";

const BookItem = ({ book }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBookSelect = () => {
    dispatch(updateBook(book));
    navigate("/book");
  };

  let thumbnail = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : noImg;

  return (
    <div className={styles.container} onClick={handleBookSelect}>
      <div className={styles.image}>
        <img src={thumbnail} alt="" />
      </div>
      <article>
        <p className={styles.title}>{book.volumeInfo.title}</p>
        <p className={styles.subtitle}>{book.volumeInfo.subtitle}</p>
        <p className={styles.description}>{book.volumeInfo.description}</p>
      </article>
    </div>
  );
};

export default BookItem;
