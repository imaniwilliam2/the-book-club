import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./components/App";
import Search from "./components/Search"
import Chats from "./components/Chats"
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage";
import ReadPage from "./components/ReadPage";
import TBReadPage from "./components/TBReadPage";
import AuthorsList from "./components/AuthorsList";
import BooksList from "./components/BooksList";
import BookInfo from "./components/BookInfo";
import AuthorInfo from "./components/AuthorInfo";
import GenreList from "./components/GenreList";
import GenreBooks from "./components/GenreBooks";
import ReviewForm from "./components/ReviewForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/chat",
                element: <Chats />
            },
            {
                path: "/read",
                element: <ReadPage />
            },
            {
                path: "/tbread",
                element: <TBReadPage />
            },
            {
                path: "/booklist",
                element: <BooksList />
            },
            {
                path: "/authorlist",
                element: <AuthorsList />
            },
            {
                path: "/books/:id",
                element: <BookInfo />

            },
            {
                path: "/authors/:id",
                element: <AuthorInfo />
            },
            {
                path: "/genrelist",
                element: <GenreList />
            },
            {
                path: "/genres/:id",
                element: <GenreBooks />
            },
            {
                path: "/review-form",
                element: <ReviewForm />
            }
        ]
    }
])



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);
