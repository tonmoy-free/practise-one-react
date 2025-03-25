// old time a useEffect dia data load kora

import { useEffect, useState } from "react";

export default function Players(){
    const [players, setPlayers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[]);
    return(
        <div className="card">
            <h4>Players : {players.length}</h4>
            <ol>
            { 
                players.map(player => <li>{player.title}</li>)
            }
            </ol>
            
        </div>
    )
}