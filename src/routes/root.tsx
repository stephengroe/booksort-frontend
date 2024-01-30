import { Outlet } from "react-router-dom";
import NavItem from "../elements/nav-item";

export default function Root() {
  
  type MenuList = {
    name: string,
    quantity: number,
    link: string,
  }

  const sortByList: Array<MenuList> = [
    {
      name: 'Authors',
      quantity: 9,
      link: 'authors/all',
    },
    {
      name: 'Genres',
      quantity: 3,
      link: 'genres/all',
    },
    {
      name: 'Languages',
      quantity: 2,
      link: 'languages/all',
    },
  ];

  const shelvesList: Array<MenuList> = [
    {
      name: 'Biography',
      quantity: 12,
      link: 'shelf/1',
    },
    {
      name: 'Classics',
      quantity: 7,
      link: 'shelf/2',
    },
    {
      name: 'History',
      quantity: 29,
      link: 'shelf/3',
    },
    {
      name: 'Psychology',
      quantity: 25,
      link: 'shelf/4',
    },
    {
      name: 'Technology',
      quantity: 295,
      link: 'shelf/5',
    },
  ];

  return (
    <>
      <div id="top-bar" className='w-full sticky z-10 top-0 shadow-sm bg-white box-border flex items-center justify-start py-2 border-b border-b-slate-200'>
        <div className='flex items-center justify-center box-border text-2xl font-bold w-72'>
          <svg
              className='h-5 w-5 text-sky-500 align-middle mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='4'
            >
            <path
              stroke-linecap='square'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
          </svg>
          <h1>Booksort</h1>
        </div>
        <form id="search-form" role="search" className='w-4/12 flex items-center justify-self-start pl-6 p-2 border-l border-l-slate-200 '>
          <svg
            className='h-5 w-5 text-slate-400 align-middle mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
            className='focus-visible:outline-none w-full'
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
        <div id='notifications' className='justify-self-end ml-auto'>
          <svg
              className='h-5 w-5 text-slate-400 align-middle mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
              />
            </svg>
        </div>
        <p className='text-sm text-center w-auto px-6 border-l p-2 border-l-slate-200'>Welcome, reader</p>
      </div>

      <div id='wrapper' className='box-border w-full h-full flex min-h-max'>

        <div id='sidebar' className='min-h-full p-6 relative min-w-72 border-r-slate-200 border-r leading-8 box-border'>

          <form method='post'>
            <button type='submit' className='btn flex items-center justify-center'>
              <svg
              className='h-5 w-5 text-sky-500 align-middle mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
            Add Book</button>
          </form>
          <nav className='leading-10'>
          <div className='flex items-center mt-6'>
              <svg
                className='h-4 w-4 text-black align-middle mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
                />
              </svg>
              <h3 className='mb-0'>Sort by</h3>
            </div>
            <ul className='ml-2'>
              {sortByList.map(item => {
                return (
                  <NavItem {...item} />
                )
              })}
            </ul>
            
            <div className='flex items-center mt-6'>
              <svg
                className='h-4 w-4 text-black align-middle mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9'
                />
              </svg>
              <h3 className='mb-0'>Your shelves</h3>
            </div>
            <ul className='ml-2'>
              {shelvesList.map(item => {
                  return (
                    <NavItem {...item} />
                  )
                })}
            </ul>
          </nav>
        </div>

        <div id='detail' className='bg-slate-50 p-12 box-border w-10/12'>
          <div className='max-w-screen-md'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}