import {useContext, useEffect, useRef} from "react";

import GraphPrinter from "./GraphPrinter";
import {DotsFormContext} from "./TextInputContext";

function Graph({ width, height }) {
    const context = useContext(DotsFormContext);
    const canvasRef = useRef(null);

    function getCoordinates(x, y, r) {
        let formData = new FormData();
    }

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