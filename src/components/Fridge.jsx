// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Fridge() {
   
    // const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate();
    const handleSubmit = (e)=>{e.preventDefault();
    // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const body = {
        name: e.target.name.value,
        category: e.target.category.value,
        quantity: e.target.quantity.value,
        expirationDate: e.target.expirationDate.value,
        dateAdded: e.target.dateAdded.value,
        location: e.target.location.value,
        notes: e.target.notes.value,
        isOpened: e.target.isOpened.value
      };
  
      // setIsLoading(true);
  
      fetch(`http://localhost:8080/api/fridge/create/new`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"},
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          navigate(`/`);
        })
        .catch((error) => console.log("error :>> ", error))
        
    };
  
    return (
      <main>
        <div className="form-container"> 
      <h1>Add Item</h1>
    <form onSubmit={handleSubmit}>
    <div className="additem"> 
        <label htmlFor= "name">Item:</label>
         <input 
         className="input-item" 
         type="text" 
         placeholder="item name" 
         name="item" 
        /> 
    </div>

   <div className="category">
         <label  htmlFor="Category">Category:</label> 
         <select className="Select"
          placeholder="Select"
          name="category">
         <option value="Dairy">Dairy</option>
         <option value="Vegetables">Vegetables</option>
         <option value="Meat">Meat</option>
         <option value="Fruits">Fruits</option>
         <option value="Breads">Breads</option>
         <option value= "Condiments&Sauces" >Condiment&Sauces </option>
        <option value="Other"> Other</option>
        </select>  
    </div>

   <div className="quantity"> 
     <label className="quantity-label" 
        htmlFor="quantity">Quantity:</label>
     <input 
         className="input-number"
         type="number" 
         placeholder="quantity"
        name="quantity"/> 
         </div>
         
   <div className="expirationDate">
    <label className="expirationDate-label" htmlFor="expiration">Expiration Date:</label>
     <input className="expirationDate-input" 
     type="date" 
     placeholder="expirationDate" 
     name="expirationDate" 
    />
    </div>

    <div className="dateAdded">
    <label className="dateAdded-label" htmlFor="dateAdded">Date Added</label>
     <input className="dateAdded-input" 
     type="date" 
     placeholder="dateAdded" 
     name="dateAdded"/>

    </div>

    <div className="location"> 
    <label className="location-label" htmlFor="location">Location:</label>
    <input className="location-input"
     type="text" 
     placeholder="location" 
     name="location" />
  
    </div>

    <div className="notes"> 
    <label className="notes-label" htmlFor="notes">Notes:</label>
    <input className="notes-input"
     type="text" 
     placeholder="notes" 
     name="notes" />

    </div>

  

    <div className="isOpened"> 
    <label className="isOpened-label" htmlFor="isOpened">Opened:</label>
    <input className="isOpened-input"
     type="checkbox" 
     placeholder="isOpened" 
     name="isOpened" />
    </div>
 <label>
<button className="submit">Submit</button> </label>
  </form> 
 </div> 
</main>

    );
  }
export default Fridge