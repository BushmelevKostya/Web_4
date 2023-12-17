import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Start from "./Start";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Start/>,
    },
    {
        path: '/app',
        element: <Main/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)