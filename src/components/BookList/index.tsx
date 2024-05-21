import React from "react";
import styles from "./styles.module.scss";
import BookItem from "../BookItem";
import { IBook } from "../../types/global";

const BookList = ({ books }: { books: IBook[] }) => {
  return (
    <div className={styles.container}>
      {books.map((book: IBook) => {
        return <BookItem key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
