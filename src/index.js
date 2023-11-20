import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: '/',
        element: <Main />,
      },
      {
        path: '/book/:id',
        element: <div>book detail</div>,
      },
      {
        path: '/bestseller',
        element: <div>bestseller</div>,
      },
      {
        path: '/category/main',
        element: <div>category list</div>,
      },
      {
        path: '/category/list',
        element: <div>category list</div>,
      },
      {
        path: '/search',
        element: <div>search</div>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
