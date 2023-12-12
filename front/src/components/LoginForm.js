import Input from "./TextInput";
import Button from "./Button";
function LoginForm() {
    return (
        <form className="loginForm">
            {Input("text", "Login")}
            {Input("text", "Password")}
            {Button("submit", "Send")}
        </form>
    );
}

export default LoginForm;