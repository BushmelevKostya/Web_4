import Button from "./Button";

function XButtons() {
    return (
        <div>X:
            {Button("button", -2, null)}
            {Button("button", -1.5, null)}
            {Button("button", -1, null)}
            {Button("button", -0.5, null)}
            {Button("button", 0, null)}
            {Button("button", 0.5, null)}
            {Button("button", 1, null)}
            {Button("button", 1.5, null)}
            {Button("button", 2, null)}
        </div>
    );
}

export default XButtons;