function TextInput(props) {
    return (
        <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={event => {props.setY(event.target.value)}}></input>
    );
}

export default TextInput;