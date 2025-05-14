import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import Root from '../pages/Roots/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BooksDetails from '../pages/BooksDetails/BooksDetails';
import ReadList from '../pages/Books/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('booksData.json'),
        Component:Home
  },
  {
    path:"/about",
    Component:About,
  },
 
  {
    path:'bookDetails/:id',
     loader: () => fetch('./booksData.json'),
    Component:BooksDetails
  },
  {
    path:'/readList',
        loader: () => fetch('./booksData.json'),
    Component:ReadList,
  }



    ]
}
]);