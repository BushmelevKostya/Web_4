import logo from './public/img/logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Start from "./Start";
import Main from "./Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Start/>}></Route>
                <Route exact path="/app" element={<Main/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
