import Title from "./components/Title";
import XButtons from "./components/XButtons";
import RButtons from "./components/RButtons";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Script from 'next/script';

function Main() {
    return (
        <div>
            <Title/>
            <XButtons/>
            Y:{TextInput("text", "y")}
            <RButtons/>
            {Button("text", "Clear", null)}
            <Script src="script\drawCanvas.js" strateg></Script>
        </div>
    );
}

export default Main;