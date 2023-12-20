function TextInput(props) {
    function validate(event) {
        const curVal = event.target.value;
        const regex = /^-?([0-9]+\.?[0-9]*)?$/;
        if (!regex.test(curVal)) {
            const result = curVal.match(/^-?[0-9.]/g, "");
            if (result !== null) {
                event.target.value = result[0];
            } else {
                event.target.value = "";
            }
        } else if (event.target.value > 5 || event.target.value < -5) {
            event.target.value = "";
        }
    };

    return (
        <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={event => {
            {
                validate(event);
                props.setY(event.target.value)
            }
        }}
               className="input-text"></input>
    );
}

export default TextInput;