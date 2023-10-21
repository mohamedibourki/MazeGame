import Countdown from "react-countdown";
import React from 'react';

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

    function allowDrop(ev) {
        ev.preventDefault()
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id)
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>
                    <Countdown date={Date.now() + 9000} renderer={renderer} />
                </h1>

                <h1>Level : 1</h1>
            </header>
            <div className="border">
                <div className="ball" id="drag1" draggable="true" onDragStart={drag}></div>
                <div className="goal" onDragOver={allowDrop} onDrop={drop}></div>
            </div>
        </>
    )
}

export default Game;