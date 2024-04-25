import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./components/App";
import Search from "./components/Search"
import Chats from "./components/Chats"
import Home from "./components/Home"
import About from "./components/About"
import Profile from "./components/Profile"
import ErrorPage from "./components/ErrorPage";
import ReadPage from "./components/ReadPage";
import TBReadPage from "./components/TBReadPage";
import AuthorsList from "./components/AuthorsList";
import BooksList from "./components/BooksList";
import BookInfo from "./components/BookInfo";
import AuthorInfo from "./components/AuthorInfo";


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
                path:"/about",
                element: <About />

            },
            {
                path:"/profile",
                element: <Profile />
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
            }
        ]
    }
])



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);
