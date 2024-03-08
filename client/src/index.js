import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Add from './components/Add';
import Update from './components/Update';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/add',
    element: <Add/>
  },
  {
    path: '/update',
    element: <Update/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
