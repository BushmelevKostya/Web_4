import Input from "./TextInput";
import Button from "./Button";
import SubmitClick from "./SubmitClick"
function LoginForm() {
    return (
        <form className="loginForm">
            {Input("text", "Login")}
            {Input("text", "Password")}
            {Button("submit", "Send", SubmitClick)}
        </form>
    );
}

export default LoginForm;