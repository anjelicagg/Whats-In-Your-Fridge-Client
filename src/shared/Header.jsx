
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* <h1 className="Home-Title">Welcome to Mindful Kitchen</h1> */}
        <div className ="MK-Logo" >
          <img src="/Images/MK-Logo.png" className="MK-Logo" alt="cartoon brain next to cartoon fridge"/>
       
         </div>
      </div>

      <nav>
        <ul className="navbar">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/fridge" className="nav-link">Kitchen</a></li>
          <li><a href="/about" className="nav-link active">About</a></li>
          <li><a href="/login" className="nav-link active">Login</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
