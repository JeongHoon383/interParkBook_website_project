import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Root from './pages/Root';
import BestSeller from './pages/BestSeller'
import NewSeller from './pages/NewSeller';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, //루트로 들어오면 element 실행
    children: [
      { index: '/', element: <BestSeller /> },
      { path: '/bestseller', element: <BestSeller /> },
      { path: '/newseller', element: <NewSeller /> }

    ],
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />


  );
}

