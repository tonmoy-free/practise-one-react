// export default function ToDo({task ,isDone}){
//     return(
//        <li>Task: {task} </li> 
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }else{
//         return <li>Pending : {task}</li>
//     }
// } 



// export default function ToDo({task, isDone, time}){
//     if(isDone === true){
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>Pending : {task}</li>
    
// } 



// Conditional rendering: 3 ternary
// condition ? true : false

// export default function ToDo({task, isDone, time = 0}){
//     return isDone ? <li>Done: {task} time: {time}</li> : <li>Not Done: {task}</li>
// }



// conditional rendering: 4 && 
// export default function ToDo({task, isDone, time = 0}){
//          return isDone && <li>Done: {task} time: {time}</li>
//      }



// conditional rendering: 5 || 
//  export default function ToDo({task, isDone, time = 0}){
//           return isDone || <li>Not Done: {task} time: {time}</li>
//       }



// export default function ToDo({task, isDone}){
//     let listitem;
//     if(isDone === true){
//         return null
//     }else{
//         return <li>Pending : {task}</li>
//     }
// } 


// conditional rendering: 6 use variable 
export default function ToDo({task, isDone, time}){
    // const displayTime = time? time: 100;
    let listitem;
    if(isDone === true){
        listitem = <li>Done: {task} time: {time ? 'I am done' : 'Not done yet'}</li>
    }else{
        listitem = <li>Pending : {task}</li>
    }
    return listitem
}