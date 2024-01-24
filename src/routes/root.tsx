export default function Root() {
  return (
    <>
      <div id="top-bar" className='bg-slate-200 flex items-center px-4 py-2 shadow-lg'>
        <h1 className='text-2xl font-bold text-center'>Booksort</h1>
        <p className='text-sm ml-auto text-center'>Organize your personal library</p>
      </div>

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
          <h3 className='text-l font-bold pt-3'>Your shelves</h3>
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
          <h3 className='text-l font-bold pt-3'>Find by</h3>
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