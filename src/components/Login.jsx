import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){
const [formData, setFormData] = useState({
    username:"",
    password:"",
});
const navigate= useNavigate();
const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev)=> ({...prev,[name]:value}))
};
const handleSubmit = (e) => {
    e.preventDefault()
    console.log("The Kitchen is open!", formData);
} 
    return(
        <main className ="content-container"> 
        <div className = "login-container">
        <form onSubmit={handleSubmit}>  
        <label htmlFor="username">Username:</label>
        <input  type="text" id="username" name="username" value={FormData.username} onChange={handleChange}/>

        <label htmlFor="password">Password:</label>
        <input type="text"  id="password" name="password" value={FormData.password}/>
        <button className="submit" type="submit" value="Login">Login</button>
        <button className="signup" type="submit" value="SignUp" onClick={()=>navigate("/signup")}>Signup</button>
     </form>
</div>
</main>
    )
}
export default Login; 