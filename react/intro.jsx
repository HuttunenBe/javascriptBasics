// 01-hello-world → Basic JSX, rendering a component

function Hello() {
  return <h1>Hello World!</h1>;
}

// export default Hello;

// 02-jsx-syntax → Understanding JSX rules and expressions

function Syntax() {
  const name = "John Wick";
  const age = 50;
  const dog = false;

  return (
    <>
      <h2>Hello {name}!</h2>
      <p>You are {age} years old</p>
      <p>Do you have a dog: {dog.toString()}</p>
    </>
  );
}

export default Syntax;

// 03-components → Functional components and returning JSX

function Greeting() {
  return <h2>Hello there!</h2>;
}

function App() {
  return (
    <>
      <h2>Hello App</h2>
      <Greeting /> {/*Include child component*/}
    </>
  );
}

// 04-props → Passing data to components

function PassData({ message }) {
  return <p>{message}</p>;
}

function App() {
  return (
    <>
      <h2>Hello App</h2>
      <Greeting />
      <PassData message="I am Data" /> {/*Passing data via props*/}
    </>
  );
}

// export default App;

// 05-state → useState basics

import { useState } from "react";

function StateCounter() {
  const [count, setCount] = useState(0); //Initial state

  const add = () => {
    setCount(count + 3);
  };

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={add}>Add 3</button>
    </div>
  );
}

// Other ways to initialize state
const [count, setCount] = useState(0); //Number
const [name, setName] = useState(""); //String
const [isTrue, setisTrue] = useState(false); //Boolean

const [arrayItems, setArrayItems] = useState([]); //Empty Array
const [user, setUser] = useState({ name: "Alina", age: 27 }); //Object
