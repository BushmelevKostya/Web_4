import Title from "../components/Header/Title";
import Graph from "../components/Graph/Graph";
import PointForm from "../components/Forms/PointForm/PointForm";
import ClearButton from "../components/Forms/PointForm/ClearButton";

function Main() {
    return (
        <>
            <Title/>
            <div>
                <PointForm/>
                {ClearButton("text", "Clear")}
            </div>
            <Graph width={500} height={500}/>
        </>
    );
}

export default Main;