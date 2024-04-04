import BookCard from "../components/book-card";
import { books } from "../mock-db";

export default function List() {
  const listName: string = "Authors";

  return (
    <div id="list">
      <h2>{listName}</h2>

      {books.map((book) => {
        const simplifiedBook: BookConcise = book;

        return <BookCard bookInfo={simplifiedBook} />;
      })}
    </div>
  );
}
