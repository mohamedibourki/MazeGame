import Countdown from "react-countdown";
import DraggableElements2 from "./DraggableElements2";

function Game2() {
  const Completionist = () => <span>Time Over</span>;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {`${minutes}`}:{`${seconds}`}
        </span>
      );
    }
  };
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>
          <Countdown date={Date.now() + 20000} renderer={renderer} />
        </h1>

        <h1>Level : 2</h1>
      </header>
      <div className="border">
        <DraggableElements2 />
      </div>
    </>
  )
}

export default Game2;