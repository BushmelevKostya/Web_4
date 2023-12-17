import {Form} from "react-router-dom";
import XButtons from "./XButtons";
import TextInput from "../TextInput";
import RButtons from "./RButtons";
import SubmitButton from "../SubmitButton";

function PointForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // ����� ���� ����� �������� �������������� � �����
    }

    return (
        <Form onSubmit={handleSubmit}>
            <XButtons/>
            Y:{TextInput("text", "y")}
            <RButtons/>
            {SubmitButton("Create point")}
        </Form>
    );
}

export default PointForm;