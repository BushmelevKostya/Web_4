import React, {useEffect, useRef} from "react";

import GraphPrinter from "./GraphPrinter";

function Graph({ width, height }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef?.current?.getContext("2d")) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx === null) return;
        const graphPrinter = new GraphPrinter(canvas, ctx, 5);
        graphPrinter.drawPicture();
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