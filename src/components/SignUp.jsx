function SignUp (){
const [FormData,setFormData]=useState({
    username:"",
    password:"",});

const handleChange = (e) =>{ 
const {name,value} =e.target;setFormData
 =>(prev => ({...prev,[name]:value}));
 ; 
 const handleSubmit = (e) => {
    e.preventDefault()
        console.log("Congratulations, you're an official User",formData)
    
 } 
  return(
        <main className ="content-container"> 
        <div className = "signup-container">
     <form onSubmit={handleSubmit}>  
        <label HTMLfor="username">Username:</label>
        <input  type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>

        <label HTMLfor="password">Password:</label>
        <input type="text"  id="password" name="password" value="Password"/>
        <input type="submit" value="SignUp"/>
     </form>
</div>
</main>
    )
}
export default SignUp;