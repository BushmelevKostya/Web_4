import Button from "../Button";

function XButtons() {
    return (
        <div>X:
            {Button("button", -2)}
            {Button("button", -1.5)}
            {Button("button", -1)}
            {Button("button", -0.5)}
            {Button("button", 0)}
            {Button("button", 0.5)}
            {Button("button", 1)}
            {Button("button", 1.5)}
            {Button("button", 2)}
        </div>
    );
}

export default XButtons;