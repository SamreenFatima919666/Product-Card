
import { useState } from 'react';
import './App.css';

export default function App(){
  const [form , setForm] = useState({
    name : "",
    email : "",
    password : ""

  })
 const handleChange = (e) =>{
  const {name , value} = e.target;
  setForm({
    ...form,
    [name] : value,
  });
 }
 const handleSubmit = (e) =>{
  e.preventDefault();
  if (!form.name || !form.email) {
    alert("Please Fill Your Required Fields")
    return;
  }
  else{
    alert("Form Submit Successfully")
  };
 }

  return(
<>
<form onSubmit={handleSubmit}>
<input 
type="text"
name='name'
placeholder='Enter your name please'
value={form.name}
onChange={handleChange}
/>
<input 
type="email"
name = "email"
value = {form.email}
placeholder='Enter your email'
onChange={handleChange}
/>
<input
 type="password"
 name='password'
 value={form.password}
 onChange={handleChange}
 placeholder='Enter you password'
 />

<p>Name : {form.name}</p>
<p>Email : {form.email}</p>
<p>Password : {form.password}</p>

<button type='submit'>Submit</button>
</form>
</>
  )
}






























