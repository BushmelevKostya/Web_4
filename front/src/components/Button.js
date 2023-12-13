import SubmitClick from "./SubmitClick";

function Button(type, value, event) {
    return (
        <button type={type} value={value} onClick={event}></button>
    );
}

export default Button;