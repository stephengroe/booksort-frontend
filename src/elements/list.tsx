import BookCard from "./book-card";

export default function List() {
  const listName: string = 'Authors';

  return (
    <div id='list'>
      <h2>{listName}</h2>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  )
}
