import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import CategoryMain from './Pages/CategoryMain';
import BestSeller from './components/BestSeller';
import Search from './components/Search';
import Mypage from './Pages/Mypage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Agreement from './Pages/Agreement';
import SignUpDone from './Pages/SignUpDone';
import { Provider } from "react-redux";
import { store, persistor } from "./components/Cart/store";

import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';
import CategoryList from './Pages/CategoryList';
import Detail_info from './components/Detail/Detail_info';
import Detail_event from './components/Detail/Detail_event';
import Detail_reco from './components/Detail/Detail_reco';
import Detail_review from './components/Detail/Detail_review';
import Detail_change from './components/Detail/Detail_change';
import Cart from './Pages/Cart';
import { RecoilRoot } from 'recoil';
import Admin from './Pages/Admin';
const GlobalStyle = createGlobalStyle`

html,
body {
  width: 100%;
  overflow-x: hidden;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'fontName';
  background-color: white;
  color:black;
  position: relative;
  line-height: 1;
}
a{
  text-decoration: none;
  color:inherit;
}
:root {
  --main: #ff9c46;
  --default: #666666;
  --hover: #333;
}
button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
* {
  margin: 0;
  padding: 0;
  font-family: inherit;
  color: inherit;
  font-size: inherit;
  font-style: inherit;
  text-decoration: inherit;
  font-weight: inherit;
  word-break: keep-all;
}

li {
  list-style: none;
}

table {
  border-collapse: collapse;
}

input,
select,
textarea {
  box-sizing: border-box;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

img,
iframe,
video,
svg,
canvas {
  display: block;
}

iframe {
  border: none;
}

.hidden {
  position: fixed;
  left: -10000px;
}
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color:var(--main) #DFE9EB;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color:var(--main);
}
`;
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
        element: <Detail />,
        children: [
          {
            path: '/book/:id/info',
            element: <Detail_info />,
          },
          {
            path: '/book/:id/event',
            element: <Detail_event />,
          },
          {
            path: '/book/:id/rec',
            element: <Detail_reco />,
          },
          {
            path: '/book/:id/review',
            element: <Detail_review />,
          },
          {
            path: '/book/:id/change',
            element: <Detail_change />,
          },
        ],
      },
      {
        path: '/bestseller',
        element: <BestSeller />,
      },
      {
        path: '/category/main/:mall',
        element: <CategoryMain />,
      },
      {
        path: '/category/list/:categoryPath',
        element: <CategoryList />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
  {
    path: '/member',
    element: <SignUp />,
    children: [
      {
        index: '/',
        element: <Agreement />,
      },
      {
        path: '/member/done',
        element: <SignUpDone />,
      },
    ],
  },
]);
const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
