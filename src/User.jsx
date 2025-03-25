

export default function User({user}){
    console.log(user)
    //destructuring
    const {name, email, phone} = user;
    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email : {email}</p>
            <p>Phobe : {phone}</p>
        </div>
    )
}