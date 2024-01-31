import { Link } from 'react-router-dom';

export default function BookCard() {
  const bookInfo: BookConcise = {
    id: '12345asdfg',
    title: 'Antifragile',
    author: 'Taleb, Nassim Nicholas',
    imageUrl: 'https://placekitten.com/g/75/100',
  }

  return (
    <Link to={`/book/${bookInfo.id}`} className='bg-white box-border shadow-sm p-6 mb-4 flex gap-4 items-center w-full rounded-lg hover:shadow-md'>
      <img src={bookInfo.imageUrl} />

      <div>
        <h3>{bookInfo.title}</h3>
        <h4>{bookInfo.author}</h4>
      </div>
    </Link>
  )
}
