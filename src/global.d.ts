type Book = {
  id: string,
  title: string,
  author: string,
  year: number,
  imageUrl: string,
  summary: string,
  isbn: string,
  publisher: string,
}

type BookConcise = Pick<Book, 'id' | 'title' | 'author' | 'imageUrl'>;