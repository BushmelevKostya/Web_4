import {useEffect, useState} from "react";

function PointTable (props) {
    const [points, setPoints] = useState(null);
    useEffect( () => {
        fetch("http://localhost:8080/request/points",{
            method: 'GET',
            headers: {"Authorization": "Basic " + btoa(props.userProps.login + ":" + props.userProps.password)},
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert(response.status);
                }
            })
            .then(data => {
                setPoints(data);
            })
    }, [props.r]);
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Hit</th>
                <th>Owner</th>
            </tr>
            </thead>
            <tbody>
            {points ? (
            points.map(point => (
                <tr key={point.id}>
                    <td>{point.id}</td>
                    <td>{point.x}</td>
                    <td>{point.y}</td>
                    <td>{point.r}</td>
                    <td>{point.state ? "Hit" : "Miss"}</td>
                    <td>{point.owner}</td>
                </tr>
            ))) : (
                <tr>
                    <td colSpan="6">Loading...</td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

export default PointTable;