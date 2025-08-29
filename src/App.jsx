import { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";

function App() {
    return (
        <>
            <h1>Magic Match</h1>
            <button>NewGame</button>
            <CardGrid />
            <p>Turns: 1</p>
        </>
    );
}

export default App;
