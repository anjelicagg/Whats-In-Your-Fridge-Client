function Login (){

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