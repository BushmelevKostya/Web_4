import Title from "../components/Header/Title";
import Graph from "../components/Graph/Graph";
import PointForm from "../components/Forms/PointForm/PointForm";
import ClearButton from "../components/Forms/PointForm/ClearButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import BackButton from "../components/Forms/PointForm/BackButton";
import PointTable from "../components/PointTable";

function Main(props) {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [r, setR] = useState("2.5");
    const {login, password} = props
    const navigate = useNavigate();
    useEffect(() => {
        if (login === "" || password === "") navigate("/")
    }, [login, password]);
    return (
        <>
            <div className="left-panel">
                <Title/>
                <div>
                    <PointForm x={x} setX={setX} y={y} setY={setY} r={r} setR={setR} userProps={props}/>
                    <div className="submit-button-block">
                        <ClearButton type="text" value="Clear" r={r} setR={setR} userProps={props}/>
                        <BackButton type="butoon" value="Log out" userProps={props}/>
                    </div>
                </div>
                <Graph width={500} height={500} r={r} setR={setR} userProps={props}/>
            </div>
            <div className="right-panel">
                <PointTable r={r} userProps={props}/>
            </div>
        </>
    );
}

export default Main;