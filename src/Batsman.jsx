import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }

    const handleReset = () => {
        const reset =  0;
        setRuns(reset);  
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}