import DraggableElement from "./DraggableElements";
import Countdown from "react-countdown";

function Game() {
    const Completionist = () => <span>Time Over</span>;

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <span>
                    {`0${minutes}`}:{`0${seconds}`}
                </span>
            );
        }
    };
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>
                    <Countdown date={Date.now() + 9000} renderer={renderer} />
                </h1>

                <h1>Level : 1</h1>
            </header>
            <div className="border">
                <DraggableElement />
            </div>
        </>
    )
}

export default Game;