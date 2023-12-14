import Button from "./Button";

function RButtons() {
    return (
        <div>R:
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

export default RButtons;