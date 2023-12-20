import {useNavigate} from "react-router-dom";

function BackButton(props) {
    const navigate = useNavigate();
    function closeSession() {
        props.userProps.setLogin("");
        props.userProps.setPassword("");
        navigate("/");
    }

    return (
        <button type={props.type} value={props.value} onClick={() => closeSession()}
        className="submit-button">{props.value}</button>
    );
}

export default BackButton;