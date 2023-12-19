import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAppDispatch} from "../../../store/Hooks";
import {setLogin} from "../../../store/Login";
import {setPassword} from "../../../store/Password";

function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function formRequest(event: React.MouseEvent<HTMLButtonElement>, login: String, password: String): FormData {
        event.preventDefault()
        login = encodeURI(login.trim())
        password = encodeURI(password.trim())
        let formData = new FormData();
        formData.append('login', login.toString());
        formData.append('password', password.toString());
        return formData;
    }
    function loginRequest(event: React.MouseEvent<HTMLButtonElement>, login: String, password: String){
        let formData = formRequest(event, login, password);
        fetch("http://localhost:8080/security/login",{
            method: 'POST',
            headers: {"Authorization": "Basic " + btoa(login + ":" + password)}
        })
            .then(response => {
                if(response.ok){
                    dispatch(setLogin(newLogin))
                    dispatch(setPassword(newPassword))
                    navigate("/app")
                } else {
                    alert(response.status)
                }
            })
    }

    function registerRequest(event: React.MouseEvent<HTMLButtonElement>, login: String, password: String){
        let formData = formRequest(event, login, password);
        fetch("http://localhost:8080/security/register",{
            method: 'POST',
            body: formData
        })
            .then(response => {
                if(response.ok){
                    alert("Your registration successful!")
                } else {
                    alert(response.status)
                }
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
                <button onClick={event => loginRequest(event, newLogin, newPassword)}
                        value={newPassword}>
                    Login
                </button>
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