import { use, useEffect, useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";

function App() {
    const [turns, setTurns] = useState(1);
    const [reset, setReset] = useState(false);

    function handleTurns() {
        setTurns(turns + 1);
    }

    function handleReset() {
        setTurns(1);
        setReset(true);
    }

    return (
        <>
            <h1>Magic Match</h1>
            <button onClick={handleReset}>NewGame</button>
            <CardGrid
                handleTurns={handleTurns}
                setReset={setReset}
                reset={reset}
            />
            <p>Turns: {turns}</p>
        </>
    );
}

export default App;
