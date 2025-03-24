
import './App.css'
import ToDo from './ToDo';
import Actor from './Actor';
import Singer from './Singer';
import Counter from './Counter';
import Batsman from './Batsman';

function App() {
  // const actors = ['Bappa Raj', 'Omor Sunny', 'Salman Sha'];
  // // const time = 50;

  // const singers = [
  //   { id: 1, name: 'Dr.Mahfuz', age: 68 },
  //   { id: 2, name: 'Tahsan', age: 45 },
  //   { id: 3, name: 'Shuvro Dev', age: 57 }
  // ]

  function handleClick() {
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me1</button>
      <button onClick={handleClick3}>Click Me2</button>
      <button onClick={() => alert('click 4')}>Click Me4</button>
      <button onClick={function handleClick2() {
        alert('clicked 2')
      }}>Click Me3</button>

      {/* arrow function dia rap kora */}
      <button onClick={() => handleAdd5(10)}>add nember</button>





      {/* {
        singers.map(singer =><Singer key={singer.id} singer={singer}></Singer>)
      } */}




      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tach="JS"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Shabana" tech="java"></Developer>
      <Player name="tamim" runs="5000"></Player>
      <Player name="mushi" runs="5000"></Player>
      <Salami event="Roja EID" amount="20 "></Salami>
      <Salami event="Graduation"></Salami> */}


      {/* <ToDo
        task="Learn React"
        isDone={true}
        time={time}>
      </ToDo>
      <ToDo task="Revise Js" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={true} time=""></ToDo>
     */}
    </>
  )
}

function Salami({ event, amount = 0 }) {
  return (
    <div className='student'>
      <p>Salami For: {event} </p>
      <p>Amount: {amount} </p>

    </div>
  )
}
//object destructuring use kore name,run key name babohar kora ,props ar bodole
function Player({ name, runs }) {
  //  console.log(props)
  return (
    <div className='student'>
      <h3>Name:{name} </h3>
      <p>Runs:{runs} </p>
    </div>
  )
}

function Developer(props) {
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
    }}>
      <h3>Developer:{props.name} </h3>
      <p>Technology:{props.tech} </p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Jolil';

  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }

  return (
    <p style={personStyle}>I am a person {name} {age}.</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}

function Pet() {
  return (
    <p>Cat</p>
  )
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>kola</li>
        <li>komola</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
