import Title from "../components/Header/Title";
import LoginForm from "../components/Forms/LoginForm/LoginForm";

function Start(props) {
    return (
        <>
            <Title/>
            {LoginForm(props)}
        </>
    )
}


export default Start;