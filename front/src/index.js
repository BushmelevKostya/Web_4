import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Start from "./routes/Start";
import Main from "./routes/Main";
import ErrorPage from "./routes/ErrorPage";

const App = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

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
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
};
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)