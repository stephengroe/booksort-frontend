import BookDetail from "./book-detail";

export default function List() {
  const listName: string = 'Authors';

  return (
    <div id='list'>
      <h2 className='text-2xl font-bold mb-8'>{listName}</h2>
      <BookDetail />
      <BookDetail />
      <BookDetail />
      <BookDetail />
      <BookDetail />
    </div>
  )
}
