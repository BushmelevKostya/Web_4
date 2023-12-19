import {Form} from "react-router-dom";
import XButtons from "./XButtons";
import TextInput from "../TextInput";
import RButtons from "./RButtons";
import SubmitButton from "../SubmitButton";
import {useState} from "react";

function PointForm(props) {
    function handleSubmit(event, x, y, r) {
        event.preventDefault()
        let formData = new FormData();
        formData.append('x', parseFloat(x));
        formData.append('y', parseFloat(y));
        formData.append('r', parseFloat(r));
        fetch("http://localhost:8080/request/points",{
            method: 'POST',
            headers: {"Authorization": "Basic " + btoa(props.userProps.login + ":" + props.userProps.password)},
            body: formData,
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
        <Form onSubmit={event => handleSubmit(event, props.x, props.y, props.r)}>
            <XButtons x = {props.x} setX = {props.setX}/>
            Y:<TextInput type = "text" name = "y" placeholder = "Please enter y" y = {props.y} setY = {props.setY}/>
            <RButtons r = {props.r} setR={props.setR}/>
            {SubmitButton("Create point")}
        </Form>
    );
}

export default PointForm;