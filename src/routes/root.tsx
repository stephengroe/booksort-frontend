import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="top-bar" className='bg-slate-100 flex items-center px-4 py-2 border-b border-b-slate-200'>
        <h1 className='text-2xl font-bold text-center'>Booksort</h1>
        <p className='text-sm ml-auto text-center'>Organize your personal library</p>
      </div>

      <div id='wrapper' className='box-border w-full flex'>

        <div id="sidebar" className='bg-slate-100 p-4 min-h-full relative max-w-80 border-r-slate-200 border-r leading-8 box-border'>
          <div className='flex gap-2'>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                className='rounded-lg py-2 px-3 leading-6 border-slate-200 border shadow-sm focus:shadow-md focus-visible:outline-none'
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
              <button type="submit"
                className='bg-white px-3 py-2 rounded-lg border b-color-slate-200 text-sky-500 text-base shadow-sm hover:shadow-md'
              >New</button>
            </form>
          </div>

          <nav>
            <h3 className='text-l font-bold pt-3'>Your shelves</h3>
            <ul>
              <li>
                <Link to={`/shelf/1`}>Biography</Link>
              </li>
              <li>
                <Link to={`/shelf/2`}>History</Link>
              </li>
              <li>
                <Link to={`/shelf/3`}>Technology</Link>
              </li>
            </ul>
            <h3 className='text-l font-bold pt-3'>Find by</h3>
            <ul>
              <li>
                <Link to={`/authors/all`}>Authors</Link>
              </li>
              <li>
                <Link to={`/genres/all`}>Genres</Link>
              </li>
            </ul>
          </nav>

        </div>

        <div id='detail' className='p-12 max-w-screen-md box-border w-full'>
          <Outlet />
        </div>
      </div>
    </>
  );
}