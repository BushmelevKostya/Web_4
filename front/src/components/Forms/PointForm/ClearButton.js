function ClearButton(type, value, props) {
    function clearPoints(event) {
        event.preventDefault();
        fetch("http://localhost:8080/request/points",{
            method: 'DELETE',
            headers: {"Authorization": "Basic " + btoa(props.login + ":" + props.password)},
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
        <button type={type} value={value} onClick={(event) => {clearPoints(event)}}>{value}</button>
    );
}

export default ClearButton;