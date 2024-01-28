import { Link } from 'react-router-dom';

export default function BookDetail() {
  type Book = {
    id: string,
    title: string,
    author: string,
    imageUrl: string,
  }

  const bookInfo: Book = {
    id: '12345asdfg',
    title: 'Antifragile',
    author: 'Taleb, Nassim Nicholas',
    imageUrl: 'https://placekitten.com/g/75/100',
  }

  return (
    <Link to={`/book/${bookInfo.id}`} className='box-border p-6 flex gap-4 items-center w-full rounded-lg hover:bg-slate-100'>
      <img src={bookInfo.imageUrl} />

      <div>
        <h3 className='text-xl font-bold'>{bookInfo.title}</h3>
        <h4 className='text-m'>{bookInfo.author}</h4>
      </div>
    </Link>
  )
}
