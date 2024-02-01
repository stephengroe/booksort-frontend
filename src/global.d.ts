interface BookConcise {
  id: string,
  title: string,
  author: string,
  imageUrl: string,
}

interface Book extends BookConcise {
  year: number,
  summary: string,
  isbn: string,
  publisher: string,
}