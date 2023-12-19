import React, {useEffect, useRef} from "react";

import GraphPrinter from "./GraphPrinter";

function Graph( width, height, props ) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef?.current?.getContext("2d")) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx === null) return;
        const graphPrinter = new GraphPrinter(canvas, ctx, 5);
        graphPrinter.drawPicture();

        fetch("http://localhost:8080/request/points",{
            method: 'GET',
            headers: {"Authorization": "Basic " + btoa(props.login + ":" + props.password)},
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
                    console.log(point.x);
                });
            })
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            key={5}
        />
    );
}

export default Graph;