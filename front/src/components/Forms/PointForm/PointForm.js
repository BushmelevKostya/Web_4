import {Form} from "react-router-dom";
import XButtons from "./XButtons";
import TextInput from "../TextInput";
import RButtons from "./RButtons";
import SubmitButton from "../SubmitButton";
import {useState} from "react";

function PointForm(props) {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [r, setR] = useState("");

    function handleSubmit(event, x, y, r) {
        event.preventDefault()
        let formData = new FormData();
        formData.append('x', x);
        formData.append('y', y);
        formData.append('r', r);
        fetch("http://localhost:8080/request/points",{
            method: 'POST',
            headers: {"Authorization": "Basic " + btoa(login + ":" + password)}
        })
            .then(response => {
                if(response.ok){
                    alert("ok")
                } else {
                    alert(response.status)
                }
            })
    }

    return (
        <Form onSubmit={event => handleSubmit(event, x, y, r)}>
            <XButtons x = {x} setX = {setX}/>
            Y:<TextInput type = "text" name = "y" placeholder = "Please enter y" y = {y} setY = {setY}/>
            <RButtons r = {r} setR={setR}/>
            {SubmitButton("Create point")}
        </Form>
    );
}

export default PointForm;