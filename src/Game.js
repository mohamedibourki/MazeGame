import DraggableElement from "./DraggableElement";

function Game() {
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>Time : 10</h1>
                <h1>Level : 1</h1>
            </header>
            <div className="border">
                <DraggableElement />
            </div>
        </>
    )
}

export default Game;