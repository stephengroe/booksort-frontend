import { useParams } from "react-router-dom";
import { books } from "../mock-db";

export default function BookDetail() {
  let { bookId } = useParams();
  if (typeof bookId === 'undefined') bookId = '0';
  let bookInfo: Book | undefined = books.find(book => book.id === bookId);
  if (typeof bookInfo === 'undefined') bookInfo = books[0];

  return (
    <div className='box-border flex gap-8 items-top w-full'>
      <img src={bookInfo.imageUrl} className='object-cover min-w-56 shadow-md' />

      <div className='relative'>
        <h2>{bookInfo.title}</h2>
        <h3>{bookInfo.author}</h3>
        <p className='mb-2'>{bookInfo.publisher} | {bookInfo.year}</p>
        <p className='mb-2'>{bookInfo.summary}</p>
        <p className='absolute bottom-0 right-0'><a className='btn' href='#'>Edit</a> | <a>Delete</a></p>
      </div>
    </div>
  )
}
