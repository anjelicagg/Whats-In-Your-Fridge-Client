import { useState } from "react";
import { useEffect} from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Home ()  {
  const [food,setFood]= useState([])
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage ]=useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/fridge/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => setFood(result.data.food))
      .catch((error) => 
      console.log(error))
        // setError(error.message))
      // .finally(() => setIsLoading(false));
  }, []);
  const handleDeleteFood=(foodId)=>{
    const confirm = window.confirm("Delete item?");

    if (!confirm) {
      return;
    }

    fetch(`http://localhost:8080/api/fridge/delete/${foodId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        window.location.reload();
      })
      .catch((error) => console.log("error :>> ", error));
      
  }
  const dateFormat = (date) => {
    const myDate = new Date(date).toLocaleDateString()
    console.log(myDate)
    return myDate;
  };
  return (
    <div className="kitchen">
       <main className="main-content">
      <section className="intro-text">
        <h2>Your Kitchen, Organized</h2>
        <p>Track your food, reduce waste, and support your routine with ease.</p>
      </section>
    </main>
   

    {food.map((foodItems) => (     
    <ul key={foodItems._id}> 
    <li> Name: {foodItems.name} </li>
   <li> Category:{foodItems.category} </li>
   <li> Quantity: {foodItems.quantity}</li>
  <li> Expiration Date:  {foodItems.expirationDate}</li>
   <li>Date Added: {foodItems.dateAdded  }</li>
    <li >Location: {foodItems.location}</li>
    <li >Notes:{foodItems.notes}</li>
    <li >Opened: {foodItems.isOpened? "Yes": "No"}</li>
   <button onClick={() => navigate(`/fridge/${foodItems._id}/update`)} >Edit</button>
   <button onClick={() => handleDeleteFood(foodItems._id)}>Delete</button>
    </ul>
    
))}

    </div>
  );
};

export default Home;
