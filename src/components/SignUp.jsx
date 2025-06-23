import React from "react"
import useState from "react"

function SignUp (){
const [FormData,setFormData]=useState({
    username:"",
    password:"",});

const handleChange = (e) =>{ 
const {name,value} =e.target;setFormData((prev) => ({ ...prev, [name]: value }));
}
  
 const handleSubmit = (e) => {
    e.preventDefault()
        console.log("Congratulations, you're an official User",FormData)
    
 } 
  return(
        <main className ="content-container"> 
        <div className = "signup-container">
     <form onSubmit={handleSubmit}>  
        <label htmlFor="username">Username:</label>
        <input  type="text" id="username" name="username" value={FormData.username} onChange={handleChange}/>

        <label htmlFor="password">Password:</label>
        <input type="text"  id="password" name="password" value="{formData.password}"/>
        <input type="submit" value="SignUp"/>
     </form>
</div>
</main>
    );
}
export default SignUp