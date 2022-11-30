// // import './App.css';
// import { useState } from "react";
// import Person from "./Components/Person"

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Person/>
//      {/* <p>Has clicado {count} veces</p> /}
//       {/ <button onClick={()=> setCount(count +1)}>Pulsame</button> */}
//     </div>
//   );
// }

// export default App;
// // import './Person.css';
// import { useState } from "react";

// function Person() {
//     const [person, setPersonInfo] = useState({
//         name:"John",
//         age:27,
//         enemys:["Skynet","T-800","T-1000","T-x"],
//         father:"unknown"
//     });
//     const updateFather = ()=>{
//        setPersonInfo(previousState=>{
//         return{
//             ...previousState,father:"Kyle Reese"
//         }
//        })
//     }
//   return (
//     <div>
//         <h1>Character info</h1>
//         <h2>Name: {person.name}</h2>
//         <h2>Age: {person.age}</h2>
//         <h2>Enemys: {person.enemys}</h2>
//         <h2>Father: {person.father}</h2>
//         <button type="button" onClick={updateFather}>Update</button>

//     </div>
//   );
// }

// export default Person;

// ----------------------------------------------------------------------
// //import './App.css';
// import { useState } from "react";

// import Counter from "./components/Counter";

// function App() {
//   const [count, setCount] = useState(0);

//   const handlePlusOne = () => {
//     setCount(count + 1);
//   };
//   const handleTimesFive = () => {
//     setCount(count * 5);
//   };
//   const handleMinusOne = () => {
//     setCount(count - 1);
//   };
//   const handleDivideByHundred = () => {
//     if (count !== 0) {
//       setCount(count / 100);
//     } else {
//       console.log("Division of 0 not allowed");
//     }
//   };

//   return (
//     <div>
//       <Counter count={count} />
//       <button onClick={handlePlusOne}>Pulsame para sumar</button>
//       <button onClick={handleTimesFive}>Pulsame para multiplicar por 5</button>
//       <button onClick={handleMinusOne}>Pulsame para restar</button>
//       <button onClick={handleDivideByHundred}>
//         Pulsame para dividir por 100
//       </button>
//     </div>
//   );
// }

// export default App;



