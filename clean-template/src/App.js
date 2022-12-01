// import './App.css';

// function App() {
//   const people = [
//     {
//       name: 'James',
//       age: 31,
//     },
//     {
//       name: 'John',
//       age: 45,
//     },
//     {
//       name: 'Paul',
//       age: 65,
//     },
//     {
//       name: 'Ringo',
//       age: 49,
//     },
//     {
//       name: 'George',
//       age: 34,
//     }
//   ];
//   return  (
//     <div>
//       {people.filter(person => person.age < 60).map(filteredPerson => (
//         <li>
//         <strong>Name:</strong> {filteredPerson.name} <strong>Age:</strong> {filteredPerson.age}
//         </li>
//       ))}
//     </div>
//   );
// }

// export default App;

// // Solución formateada en una tabla
// //   <table>
// //       <thead>
// //         <th>
// //           <td>Name</td>
// //           <td>Age</td>
// //         </th>
// //       </thead>
// //       <tbody>
// //         {filteredList.map((member) => (
// //           <tr>
// //             <td>
// //               <strong>Name: </strong> {member.first_name}
// //             </td>
// //             <strong>Age: {member.age}</strong>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>

import "./App.css";
import listMovies from "./components/Movies/Movies";

function App() {
  const memberList = [
    {
      id: 1,
      first_name: "Byram",
      age: 56,
    },
    {
      id: 2,
      first_name: "Clementius",
      age: 67,
    },
    {
      id: 3,
      first_name: "Leonid",
      age: 33,
    },
    {
      id: 4,
      first_name: "Ashli",
      age: 86,
    },
    {
      id: 5,
      first_name: "Dale",
      age: 15,
    },
    {
      id: 6,
      first_name: "Tremain",
      age: 83,
    },
    {
      id: 7,
      first_name: "Magdalene",
      age: 40,
    },
    {
      id: 8,
      first_name: "Robb",
      age: 87,
    },
    {
      id: 9,
      first_name: "Frankie",
      age: 11,
    },
    {
      id: 10,
      first_name: "Hammad",
      age: 37,
    },
  ];
  const filteredList = memberList.filter((member) => {
    return member.age < 50;
  });

  <table>
    <thead>
      <th>
        <td>Name</td>
        <td>Age</td>
      </th>
    </thead>
    <tbody>
      {filteredList.map((member) => (
        <tr>
          <td>
            <strong>Name: </strong> {member.first_name}
          </td>
          <strong>Age: {member.age}</strong>
        </tr>
      ))}
    </tbody>
  </table>;
}

export default App;
