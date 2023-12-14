import SubmitClick from "./SubmitClick";

function Button(type, value, event) {
    return (
        <button type={type} value={value} onClick={event}>{value}</button>
    );
}

export default Button;