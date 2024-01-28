import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import './index.css';
import ErrorPage from './error-page';
import Shelf from './elements/shelf';
import List from './elements/list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/shelf/:shelfId',
        element: <Shelf />,
      },
      {
        path: '/authors/:all',
        element: <List />,
      },
      {
        path: '/genres/:all',
        element: <List />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
