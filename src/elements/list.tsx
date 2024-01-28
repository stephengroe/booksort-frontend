import Book from "./book";

export default function List() {
  const listName: string = 'Authors';

  return (
    <div id='list'>
      <h2 className='text-2xl font-bold'>{listName}</h2>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}
