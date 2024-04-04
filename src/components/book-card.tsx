import { Link } from "react-router-dom";

interface BookCardProps {
  bookInfo: BookConcise;
}

const BookCard: React.FC<BookCardProps> = ({ bookInfo }) => {
  return (
    <Link
      to={`/book/${bookInfo.id}`}
      className="bg-white box-border shadow-sm p-6 mb-4 flex gap-4 items-center w-full rounded-lg transition-all hover:shadow-md"
    >
      <img src={bookInfo.imageUrl} className="max-w-16 max-h-24 shadow-lg" />

      <div>
        <h3>{bookInfo.title}</h3>
        <h4>{bookInfo.author}</h4>
      </div>
    </Link>
  );
};

export default BookCard;
