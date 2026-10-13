// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import Navbar from "./components/Navbar.jsx"
//import user from './components/user.jsx'
// import ProductCard from './components/ProductCard.jsx'
// import CounterButton from './components/CounterButton';
// import CounterDisplay from './components/CounterDisplay';
import { useState } from 'react';
import './App.css';

export default function App(){
  function handleClick(){
    alert("you clicked me!")


  }
  return(
    <button onClick={handleClick}>
      click me
    </button>
  )
}








































// function App(){
//   const [count , setCount ] = useState(0);

//   return(
//     <div>
//       <CounterDisplay count = {count} />
//       <CounterButton setCount ={setCount}/>
//     </div>
//   )
// }
// export default App;


 // Array practice start

// function App(){
//   const [fruit , setFruit] = useState(["Apple" ,"Mango"])

//   return(
//     <div>
//       {fruit.map((fruits , index) =>(
//       <p key={index}>{fruits}</p>
//     ))}
//        <button onClick={()  => setFruit([...fruit, "orange"])}> Add fruit</button>
//       <button onClick={()  => setFruit(fruit.filter((fruit) => fruit !="Apple"))}> Remove fruit</button>
//       </div>
//   );



// }
// export default App

// Array practice end





// nested object
// function App(){
//   const[user , setUser]= useState({
//     name: "Fatima",
//     address:{
//       city: "Lahore",
//       country : " Pakistan"
//     }
//   })

// return (
//   <div>
//     <h1>{user.name}</h1>
// <p>{user.address.city}</p>
// <p>{user.address.country}</p>
//    <button onClick={()=>setUser({
//     ...user,
//     address:{
//       ...user.address,
//       city: user.address.city === "Lahore" ? "Islamabad" : "Lahore"
//     }
//    })}>click me to change city</button>
//   </div>
// )
// }
// export default App


// nested object


















// function App(){
//     const [Student , setStudent] = useState({
//     name : "Ali Raza",
//     RollNo : 23,
//     age: 12,
//     city:"Lahore"


// })
// return(
//     <div>
//        <h2>{Student.name}</h2>
//        <p>{Student.RollNo}</p>
//        <p>{Student.age}</p>
//        <p>{Student.city}</p>
//        <button onClick={() =>setStudent({
//         ...Student,
//         city:"Karachi",
//        })}>change city </button>
//     </div>
    
// )}
// export default App





















// const Products = [
// {
//   name: "Laptop",
//    category: "Electronics", 
//    price: 85000,
//     stock: 5
// },
// {
//  name: "Mouse",
//   category: "Accessories",
//    price: 1500,
//     stock: 0 
// },
// {
//  name: "Keyboard", 
//  category: "Accessories",
//   price: 3500,
//    stock: 10
// },
// {
// name: "Monitor",
//  category: "Electronics",
//   price: 25000,
//    stock: 3
// },
// {
// name: "USB Cable", 
// category: "Accessories",
//  price: 700,
//   stock: 15
// }
// ]
// function App(){
//      const [count, setCount] = useState(0);
//   return(
//     <div>
//     <h1>Cart Item :{count}</h1>
//     <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
//     {Products.map((product)=>(

//     <ProductCard 
//      productName = {product.name}
//        category =  {product.category}
//         price = {product.price}
//          stock = {product.stock}  
//          setCount={setCount}  />
//   ))}
//     </div>
//     </div>
//   )
// }
// export default App;






















// function App(){
//   const [count, setCount] = useState(0);
//   return(
//     <>
//     <h1>Count : {count}</h1>
//     <button onClick={() =>setCount(count + 1)}>Increment</button>

    
//     </>
//   )
// }
// export default App;





// function App(){
//   return (
//     <>
//     <Student name='Ali' age={23} city="Lahore" />
//     </>
//   )
// }
// export default App








// function App() {
//   return (
//     <>
//     <h1>Hello</h1>
//     <Navbar/>
//   </>
//   );
  
// }
// export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }


