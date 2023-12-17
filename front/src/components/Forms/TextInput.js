import {useState} from "react";

function Input(type, name, placeholder) {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <input name={name} type={type} placeholder={placeholder} onChange={handleChange}></input>
    );
}

export default Input;