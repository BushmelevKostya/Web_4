function RButtons(props) {
    return (
        <div className="input-button-block">R:
            <button type="button" onClick={() => props.setR(0.5)} value="0.5" className="input-button">0.5</button>
            <button type="button" onClick={() => props.setR(1)} value="1" className="input-button">1</button>
            <button type="button" onClick={() => props.setR(1.5)} value="1.5" className="input-button">1.5</button>
            <button type="button" onClick={() => props.setR(2)} value="2" className="input-button">2</button>
            <button type="button" onClick={() => props.setR(2.5)} value="2.5" className="input-button">2.5</button>
        </div>
    );
}

export default RButtons;