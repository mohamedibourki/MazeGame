import DraggableElement from "./DraggableElement";
import Countdown from 'react-countdown';

function Game() {
    const Completionist = () => <span>Time Over</span>;
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-around" }}>
                <Countdown date={Date.now() + 15000}>
                    <Completionist />
                </Countdown>
                <h1>Level : 1</h1>
            </header>
            <div className="border">
                <DraggableElement />
            </div>
        </>
    )
}

export default Game;