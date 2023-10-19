import { Link } from "react-router-dom";

function Starting() {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <button className="btn1">
                    <Link to="/Game" style={{ textDecoration: "none", color: "inherit" }}>Start Game</Link>
                </button>
            </div>
        </>
    )
}

export default Starting;