import Title from "../components/Header/Title";
import Graph from "../components/Graph/Graph";
import PointForm from "../components/Forms/PointForm/PointForm";
import ClearButton from "../components/Forms/PointForm/ClearButton";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getLogin} from "../store/Login";
import {getPassword} from "../store/Password";

function Main() {
    const navigate = useNavigate();
    useEffect(() => {
        let state = AuthorizationStore.getState()
        if(getLogin(state).trim() === "" || getPassword(state).trim() === ""){
            navigate("/");
        }
    })
    return (
        <>
            <Title/>
            <div>
                <PointForm/>
                {ClearButton("text", "Clear")}
            </div>
            <Graph width={500} height={500}/>
        </>
    );
}

export default Main;