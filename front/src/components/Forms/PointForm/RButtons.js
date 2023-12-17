import Button from "../Button";

function RButtons() {
    return (
        <div>R:
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

export default RButtons;