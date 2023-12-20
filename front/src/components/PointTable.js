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
        <table className="data-table">
            <thead>
            <tr>
                <th className="header-x">ID</th>
                <th className="header-x">X</th>
                <th className="header-x">Y</th>
                <th className="header-x">R</th>
                <th className="header-x">Hit</th>
                <th className="header-x">Owner</th>
            </tr>
            </thead>
            <tbody className="data-body">
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