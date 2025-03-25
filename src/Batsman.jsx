import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes]= useState(0);
    const [four, setFour]= useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updateFour = four+1;
        setFour(updateFour);
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes +1 ;
        setSixes(updateSixes);
        setRuns(updatedRuns);
    }

    const handleDecrease =() =>{
        const updatedRuns = runs-1;
        setRuns(updatedRuns);
    }

    const handleReset = () => {
        const reset =  0;
        const upSixes = 0;
        const upFour = 0;
        setSixes(upSixes);
        setFour(upFour);
        setRuns(reset);  
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Six: {sixes}</p>
            <p>Four: {four}</p>
            {   
                runs >= 50 && <p>Congratulation Your Score: 50</p>
            }
           
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

//1.API : url: https://jsonplaceholder.typicode.com/users
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data));


//2. API asynchronous Style
// const loadData = async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// }