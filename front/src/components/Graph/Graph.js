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

    return (
        <canvas
            ref={canvasRef}
            width={props.width}
            height={props.height}
            key={props.r}
        />
    );
}

export default Graph;