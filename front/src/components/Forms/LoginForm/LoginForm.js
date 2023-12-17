import Input from "../TextInput";
import SubmitButton from "../SubmitButton";
import {Form, useNavigate} from "react-router-dom";
function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // здесь надо будет написать взаимодействие с бэком
        navigate('/app');
    }

    return (
        <Form className="loginForm" method="post" onSubmit={handleSubmit}>
            {Input("text", "Login", "Please enter your login")}
            {Input("text", "Password", "Please enter your password")}
            {SubmitButton("Send")}
        </Form>
    );
}

export default LoginForm;