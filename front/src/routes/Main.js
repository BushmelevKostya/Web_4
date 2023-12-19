import Title from "../components/Header/Title";
import Graph from "../components/Graph/Graph";
import PointForm from "../components/Forms/PointForm/PointForm";
import ClearButton from "../components/Forms/PointForm/ClearButton";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Main(props) {
    const {login, password} = props
    const navigate = useNavigate()
    useEffect(() => {
        console.log(login)
        if (login === "" || password === "") navigate("/")
    }, [login, password]);
    return (
        <>
            <Title/>
            <div>
                {PointForm(props)}
                {ClearButton("text", "Clear", props)}
            </div>
            {Graph (500, 500, props)}
        </>
    );
}

export default Main;