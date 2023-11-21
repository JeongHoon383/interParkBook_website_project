import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Ticket from './pages/Ticket';
import Shopping from './pages/Shopping'
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BookCart from './pages/BookCart';
import MyPage from './pages/MyPage';
import BookPinion from './pages/BookPinion';
import Customer from './pages/Customer';
import Footer from './components/Footer';
import Search from './components/Search';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/book', element: <Book /> },
      { path: '/shopping', element: <Shopping /> },
      { path: '/ticket', element: <Ticket /> },
      { path: '/tour', element: <Tour /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/bookcart', element: <BookCart /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/bookpinion', element: <BookPinion /> },
      { path: '/customer', element: <Customer /> },
      { path: '/search', element: <Search /> }

    ]

  }


])

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
