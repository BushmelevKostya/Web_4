import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Start from "./routes/Start";
import Main from "./routes/Main";
import ErrorPage from "./routes/ErrorPage";
import './styles/index.css';

const App = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const determineStylesheet = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 649) {
            return 'styles/mobile-styles.css';
        } else if (screenWidth >= 650 && screenWidth <= 1080) {
            return 'styles/tablet-styles.css';
        } else {
            return 'styles/desktop-styles.css';
        }
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Start login={login} setLogin={setLogin} password={password} setPassword={setPassword}/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: '/app',
            element: <Main login={login} setLogin={setLogin} password={password} setPassword={setPassword}/>,
        },
    ]);
    return (
        <React.StrictMode>
            <link rel="stylesheet" type="text/css" href={determineStylesheet()} />
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
};
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)