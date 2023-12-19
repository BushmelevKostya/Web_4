function ClearButton(props) {
    function clearPoints(event) {
        event.preventDefault();
        fetch("http://localhost:8080/request/points",{
            method: 'DELETE',
            headers: {"Authorization": "Basic " + btoa(props.userProps.login + ":" + props.userProps.password)},
        })
            .then(response => {
                if(response.ok){
                    props.setR(props.r - 0.00001)
                } else {
                    alert(response.status)
                }
            })
    }

    return (
        <button type={props.type} value={props.value} onClick={(event) => {clearPoints(event)}}>{props.value}</button>
    );
}

export default ClearButton;