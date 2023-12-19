import Title from "../components/Header/Title";
import Graph from "../components/Graph/Graph";
import PointForm from "../components/Forms/PointForm/PointForm";
import ClearButton from "../components/Forms/PointForm/ClearButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Main(props) {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [r, setR] = useState("");
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
                <PointForm x = {x} setX = {setX} y = {y} setY = {setY} r = {r} setR = {setR} userProps = {props}/>
                {ClearButton("text", "Clear", props)}
            </div>
            <Graph width = {500} height = {500} r = {r} userProps ={props}/>
        </>
    );
}

export default Main;