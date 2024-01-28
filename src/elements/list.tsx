import BookCard from "./book-card";

export default function List() {
  const listName: string = 'Authors';

  return (
    <div id='list'>
      <h2 className='text-2xl font-bold mb-8'>{listName}</h2>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  )
}
