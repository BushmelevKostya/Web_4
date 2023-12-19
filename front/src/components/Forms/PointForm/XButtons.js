function XButtons(props) {
    return (
        <div>X:
            <button type="button" onClick={() => props.setX(-2)} value="-2">-2</button>
            <button type="button" onClick={() => props.setX(-1.5)} value="-1.5">-1.5</button>
            <button type="button" onClick={() => props.setX(-1)} value="-1">-1</button>
            <button type="button" onClick={() => props.setX(-0.5)} value="-0.5">-0.5</button>
            <button type="button" onClick={() => props.setX(0)} value="0">0</button>
            <button type="button" onClick={() => props.setX(0.5)} value="0.5">0.5</button>
            <button type="button" onClick={() => props.setX(1)} value="1">1</button>
            <button type="button" onClick={() => props.setX(1.5)} value="1.5">1.5</button>
            <button type="button" onClick={() => props.setX(2)} value="2">2</button>
        </div>
    );
}

export default XButtons;