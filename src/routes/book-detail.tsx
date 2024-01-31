export default function BookDetail() {

  const bookInfo: Book = {
    id: '12345asdfg',
    title: 'Antifragile',
    year: 2008,
    author: 'Taleb, Nassim Nicholas',
    imageUrl: 'https://placekitten.com/g/200/250',
    summary: 'A more detailed description about this title, etc.',
    isbn: '1234567890',
    publisher: 'Random House'
  }

  return (
    <div className='box-border flex gap-8 items-top w-full'>
      <img src={bookInfo.imageUrl} />

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
