export default function Root() {
  return (
    <>
      <h1 className='text-4xl font-bold text-center'>Booksort</h1>
      <p className='text-center'>Organize your personal library</p>

      <div id="sidebar" className='bg-slate-100 p-4 min-h-full max-w-xs border-r-black'>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

        <nav>
          <h3 className='text-xl font-bold pt-3'>Your shelves</h3>
          <ul>
            <li>
              <a href={`/shelf/1`}>Biography</a>
            </li>
            <li>
              <a href={`/shelf/2`}>History</a>
            </li>
            <li>
              <a href={`/shelf/3`}>Technology</a>
            </li>
          </ul>
          <h3 className='text-xl font-bold pt-3'>Find by</h3>
          <ul>
            <li>
              <a href={`/authors/all`}>Authors</a>
            </li>
            <li>
              <a href={`/genres/all`}>Genres</a>
            </li>
          </ul>
        </nav>

      </div>
      <div id="detail"></div>
    </>
  );
}