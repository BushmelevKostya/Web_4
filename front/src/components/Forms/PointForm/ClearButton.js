function ClearButton(props) {
    function clearPoints(event) {
        event.preventDefault();
        fetch("http://localhost:2580/request/points",{
            method: 'DELETE',
            headers: {"Authorization": "Basic " + btoa(props.userProps.login + ":" + props.userProps.password)},
        })
            .then(response => {
                if(response.ok){
                    props.setR(props.r - 0.00001)
                }
            })
    }

    return (
        <button type={props.type} value={props.value} onClick={(event) => {clearPoints(event)}}
        className="submit-button">{props.value}</button>
    );
}

export default ClearButton;