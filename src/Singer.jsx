import './App.css'

export default function Singer({singer}){
    return (
        <div className='singer'>
            <h3>name: {singer.name} </h3>
            <p>age: {singer.age}</p>
        </div>
    )
}