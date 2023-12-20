function XButtons(props) {
    return (
        <div className="input-button-block">X:
            <button type="button" onClick={() => props.setX(-2)} value="-2" className="input-button">-2</button>
            <button type="button" onClick={() => props.setX(-1.5)} value="-1.5" className="input-button">-1.5</button>
            <button type="button" onClick={() => props.setX(-1)} value="-1" className="input-button">-1</button>
            <button type="button" onClick={() => props.setX(-0.5)} value="-0.5" className="input-button">-0.5</button>
            <button type="button" onClick={() => props.setX(0)} value="0" className="input-button">0</button>
            <button type="button" onClick={() => props.setX(0.5)} value="0.5" className="input-button">0.5</button>
            <button type="button" onClick={() => props.setX(1)} value="1" className="input-button">1</button>
            <button type="button" onClick={() => props.setX(1.5)} value="1.5" className="input-button">1.5</button>
            <button type="button" onClick={() => props.setX(2)} value="2" className="input-button">2</button>
        </div>
    );
}

export default XButtons;