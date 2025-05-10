


function Header (){

return(

<div className="header">
<header className="text">
  <h1 className="textbold"
  >Welcome to Mindful Kitchen</h1>
</header>
<img src  ="/Images/Mindful Kitchen Logo Design.png" alt="Mindful Kitchen Logo" className="mk-log"
style={{width:'120px',height:'auto'}} />
<nav className="bg-green-100 py-3 shadow-sm">
  <ul className="navbar">
    <li><a href="/" className="hover:text-green-900">Home</a></li>
    <li><a href="/fridge" className="hover:text-green-900">Fridge</a></li>
    <li><a href="/pantry" className="hover:text-green-900">Pantry</a></li>
    <li><a href="/resources" className="hover:text-green-900">Resources</a></li>
    <li><a href="/about" className="font-bold text-green-900">About</a></li>
  </ul>
</nav>
</div>

)
}

export default Header