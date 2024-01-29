import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="top-bar" className='w-full sticky z-10 top-0 shadow-sm bg-white box-border flex items-center justify-start py-4 border-b border-b-slate-200'>
        <h1 className='justify-self-start box-border text-2xl font-bold w-2/12 pl-4'>Booksort</h1>
        <form id="search-form" role="search" className='justify-self-start'>
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
            className='pl-8 p-2 border-l border-l-slate-200 focus-visible:outline-none focus-visible:border-slate-400'
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
        <p className='text-sm ml-auto text-center w-2/12 border-l p-2 border-l-slate-200'>Organize your personal library</p>
      </div>

      <div id='wrapper' className='box-border w-full flex'>

        <div id='sidebar' className='min-h-full p-4 relative w-2/12 border-r-slate-200 border-r leading-8 box-border'>
          <div className='flex gap-2'>
          </div>

          <nav>
            <h3>Your shelves</h3>
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
            <h3>Find by</h3>
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

        <div id='detail' className='bg-slate-50 p-12 box-border w-10/12'>
          <div className='max-w-screen-md'>
            <Outlet />
          </div>
        </div>
      </div>

      <form method='post'>
        <button type='submit' className='btn fixed bottom-4 right-4'>+</button>
      </form>
    </>
  );
}