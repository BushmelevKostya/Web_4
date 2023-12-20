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
        formData.append('x', parseFloat(x).toFixed(3));
        formData.append('y', parseFloat(y).toFixed(3));
        formData.append('r', parseFloat(r).toFixed(3));
        fetch("http://localhost:2580/request/points",{
            method: 'POST',
            headers: {"Authorization": "Basic " + btoa(props.userProps.login + ":" + props.userProps.password)},
            body: formData,
        })
            .then(response => {
                if(response.ok){
                    props.setR(props.r - 0.00001);
                } else {
                    alert(response.status);
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