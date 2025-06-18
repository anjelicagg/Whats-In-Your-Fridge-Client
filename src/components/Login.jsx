import { useState } from "react";

function Login (){
const [formData, setFormData] = useState({
    username: "",
    password:"",
});
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
     <form>  
        <label HTMLfor="username">Username:</label>
        <input type="text" id="username" name="username" value="Username"/>
        <label HTMLfor="password">Password:</label>
        <input type="text" id="password" name="password" value="Password"/>
        <input type="submit" value="Submit"/>
     </form>
</div>
</main>
    )
}
export default Login; 