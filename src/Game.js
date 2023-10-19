

function Game() {
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>Time : 10</h1>
                <h1>Level : 1</h1>
            </header>
            <main>
                <div className="border">
                    <canvas id="myCanvas" style={{ backgroundColor: "black", width: "20px", height: "50vh", marginLeft: "150px" }}>Your browser does not support the HTML canvas tag.</canvas>
                    <canvas id="myCanvas" style={{ backgroundColor: "black", width: "20px", height: "50vh", marginLeft: "150px", marginTop: "150px" }}>Your browser does not support the HTML canvas tag.</canvas>
                    <canvas id="myCanvas" style={{ backgroundColor: "black", width: "20px", height: "50vh", marginLeft: "150px" }}>Your browser does not support the HTML canvas tag.</canvas>
                    <canvas id="myCanvas" style={{ backgroundColor: "black", width: "20px", height: "50vh", marginLeft: "150px", marginTop: "150px" }}>Your browser does not support the HTML canvas tag.</canvas>
                </div>
            </main>
        </>
    )
}

export default Game;