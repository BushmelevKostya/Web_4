import Title from "./components/Title";
import XButtons from "./components/XButtons";
import RButtons from "./components/RButtons";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Graph from "./components/Graph";

function Main() {
    return (
        <div>
            <Title/>
            <XButtons/>
            Y:{TextInput("text", "y")}
            <RButtons/>
            {Button("text", "Clear", null)}
            <Graph width={500} height={500}/>
        </div>
    );
}

export default Main;