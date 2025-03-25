import { use } from "react"

export default function Office({officePromise}){
  const officeUser = use(officePromise)
    return(
       <div className="card">
         <h2>Office : {officeUser.length} </h2>
       </div>
    )
}