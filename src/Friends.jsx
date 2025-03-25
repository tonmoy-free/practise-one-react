import { use } from "react"

// export default function Friends({friendsPromise}){
    
//     const friends = use(friendsPromise);
//     console.log(friends);
//     return(
//         <div className="card">
//            <h3>Friends: {friends.length}</h3> 
//            <p>55</p>
//         </div>
//     )
// }

export default function Users({ friendsPromise }) {

    const friends = use(friendsPromise);
    //console.log(users);

    return (
        <div className="card">
            <h3>friends: {friends.length} </h3>
        </div>
    )
}