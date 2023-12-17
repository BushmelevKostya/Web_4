import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Start from "./routes/Start";
import Main from "./routes/Main";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Start/>,
        errorElement: <ErrorPage/>,
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