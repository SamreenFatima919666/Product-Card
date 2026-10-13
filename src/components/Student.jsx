// function Student({name , age , city}){
// return (
// <>
// <h1>name: {name}</h1>
//  <h1>age: {age}</h1>
//   <h1>city: {city}</h1>
//   </>
// )
// }

import { useState } from "react";

// export default Student

function App(){
    const [Student , setStudent] = useState({
    name : "Ali Raza",
    RollNo : 23,
    age: 12,
    city:"Lahore"


})
return(
    <div>
       <h2>{Student.name}</h2>
       <p>{Student.RollNo}</p>
       <p>{Student.age}</p>
       <p>{Student.city}</p>
       <button onClick={() =>setStudent({
        ...Student,
        city:"Karachi",
       })}>change city </button>
    </div>
    
)}
export default App







