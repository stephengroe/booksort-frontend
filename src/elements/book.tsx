export default function Book() {
  type Book = {
    title: string,
    author: string,
    imageUrl: string,
  }

  const bookInfo: Book = {
    title: 'Antifragile',
    author: 'Taleb, Nassim Nicholas',
    imageUrl: 'https://placekitten.com/g/50/75',
  }

  return (
    <div className='mb-2 p-4 flex gap-4 items-center border'>
      <img src={bookInfo.imageUrl} />

      <div>
        <h3 className='text-xl font-bold'>{bookInfo.title}</h3>
        <h4 className='text-m'>{bookInfo.author}</h4>
      </div>
    </div>
  )
}
