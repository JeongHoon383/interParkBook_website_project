import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import CategoryMain from './Pages/CategoryMain';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CategoryList from './Pages/CategoryList';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import SignUpDone from './Pages/SignUpDone';
import Agreement from './Pages/Agreement';
const GlobalStyle = createGlobalStyle`

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
body {
  line-height: 1;
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
      },
      {
        path: '/bestseller',
        element: <div>bestseller</div>,
      },
      {
        path: '/category/main',
        element: <CategoryMain />,
      },
      {
        path: '/category/list',
        element: <CategoryList />,
      },
      {
        path: '/search',
        element: <div>search</div>,
      },
      {
        path: '/login',
        element: <Login />,
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
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
