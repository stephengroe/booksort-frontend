import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import ErrorPage from "./error-page";
import Shelf from "./routes/shelf";
import List from "./routes/list";
import BookDetail from "./routes/book-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shelf/:shelfId",
        element: <Shelf />,
      },
      {
        path: "/authors/all",
        element: <List />,
      },
      {
        path: "/genres/all",
        element: <List />,
      },
      {
        path: "/languages/all",
        element: <List />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
