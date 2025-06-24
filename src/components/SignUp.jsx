import React, {useState} from "react"

function SignUp (){
const [FormData,setFormData]=useState({
    username:"",
    password:"",});

const handleChange = (e) =>{ 
const {name,value} =e.target;setFormData((prev) => ({ ...prev, [name]: value }));
}
  
 const handleSubmit = (e) => {
    e.preventDefault()
        console.log("Congratulations, you're an official Mindful Kitchen User",FormData)
    
 }; 
  return(
        <main className ="content-container"> 
        <div className = "signup-container">
     <form onSubmit={handleSubmit}>  
       
        <label htmlFor="firstName">First Name:</label>
        <input type="firstName"  id="firstName" name="firstName" value={FormData.firstName} onChange={handleChange}/>
        <label htmlFor="lastName">Last Name:</label>
        <input type="lastName"  id="lastName" name="lastName" value={FormData.lastName} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={FormData.email} onChange={handleChange}/>
       <label htmlFor="username">Username:</label>
        <input  type="text" id="username" name="username" value={FormData.username} onChange={handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={FormData.password} onChange={handleChange}/>
        <button className="submit" type="submit" value="SignUp">Submit</button>
     </form>
</div>
</main>
    );
}
export default SignUp