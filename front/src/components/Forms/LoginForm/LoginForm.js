import {useNavigate} from "react-router-dom";
import {useState} from "react";

function LoginForm() {
    const navigate = useNavigate();
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");
    function registerRequest(event: React.MouseEvent<HTMLButtonElement>, login: String, password: String){
        event.preventDefault()
        login = encodeURI(login.trim())
        password = encodeURI(password.trim())
        let formData = new FormData();
        formData.append('login', login.toString());
        formData.append('password', password.toString());
        fetch("http://localhost:8080/security/register",{
            method: 'POST',
            body: formData
        })
            .then(response => {
                if(response.ok){
                    navigate("/app")
                }
                console.log(response)
            })
    }

    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input type={"text"}
                       autoFocus={true}
                       id={"username"}
                       onChange={event => setNewLogin(event.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type={"password"}
                       name={"password"}
                       id={"password"}
                       onChange={event => setNewPassword(event.target.value)}/>
            </div>
            <div>
                <button onClick={event => registerRequest(event, newLogin, newPassword)}
                        value={newPassword}>
                    Register
                </button>
            </div>
        </form>
    );
}

export default LoginForm;