import Title from "../components/Header/Title";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import {AuthProvider} from "../store/AuthContext";

function Start() {
    return (
        <>
            <Title/>
            <AuthProvider>
                <LoginForm/>
            </AuthProvider>
        </>
    )
}


export default Start;