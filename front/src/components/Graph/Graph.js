import React, {useEffect, useRef} from "react";

import GraphPrinter from "./GraphPrinter";

function Graph( props ) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef?.current?.getContext("2d")) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx === null) return;
        const graphPrinter = new GraphPrinter(canvas, ctx, props.r);
        graphPrinter.drawPicture();

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
                data.map(point => {
                    graphPrinter.drawPoint(point.x, point.y, props.r, point.state);
                });
            })
    }, [props.r]);

    function createPoint(event) {
        const R = props.r / 2;

        const rect = canvasRef.current.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const x = (((offsetX - 250) / 80) * R * (2.5 / props.r));
        const y = ((-(offsetY - 250) / 80) * R * (2.5 / props.r));

        console.log(x)
        console.log(y)

        let formData = new FormData();
        formData.append('x', parseFloat(x).toFixed(3));
        formData.append('y', parseFloat(y).toFixed(3));
        formData.append('r', parseFloat(props.r).toFixed(3));
        fetch("http://localhost:8080/request/points",{
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
        <canvas
            ref={canvasRef}
            width={props.width}
            height={props.height}
            key={props.r}
            onClick={event => createPoint(event)}
        />
    );
}

export default Graph;