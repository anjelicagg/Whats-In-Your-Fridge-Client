import { useEffect} from "react"
import useState from "react"
import { useNavigate } from "react-router-dom"
 import { useParams} from "react-router-dom"

function UpdateFridge(){
// const [isLoading, setIsLoading] = useState(true);
// const [error, setError] = useState("");

  const { foodId } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/fridge/${foodId}`)
      .then((response) => response.json())
      .then((result) => {
        setFood(result.data.food);
      })
      .catch((error) => 
    console.log(error))
        
        // setError(error.message))
    //   .finally(() => setIsLoading(false));
  }, [foodId, navigate]);

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();

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

    fetch(`http://localhost:8080/api/fridge/update/${foodId}"`, {
      method: "PUT",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        navigate("/");
      })
      .catch((error) => console.log("error :>> ", error))
    //   .finally(() => setIsLoading(false));
  };
return(

<main>
<div className="form-container"> 
<h1>Add Item</h1>
<form onSubmit={handleUpdateFormSubmit}>
<div className="additem"> 
<label htmlFor= "name">Item:</label>
 <input 
 defaultValue={food.name}
 className="input-item" 
 type="text" 
 placeholder="item name" 
 name="name"/> 
</div>

<div className="category">
 <label  htmlFor="category">Category:</label> 
 <select className="Select"
 defaultValue={food.category}
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
 defaultValue={food.quantity}
 type="number" 
 placeholder="quantity"
name="quantity"/> 
 </div>
 
<div className="expirationDate">
<label className="expirationDate-label" htmlFor="expirationDate">Expiration Date:</label>
<input className="expirationDate-input" 
defaultValue={food.expirationDate}
type="date" 
placeholder="expirationDate" 
name="expirationDate" 
/>
</div>

<div className="dateAdded">
<label className="dateAdded-label" htmlFor="dateAdded">Date Added</label>
<input className="dateAdded-input" 
defaultValue={food.dateAdded}
type="date" 
placeholder="dateAdded" 
name="dateAdded"/>

</div>

<div className="location"> 
<label className="location-label" htmlFor="location">Location:</label>
<input className="location-input"
defaultValue={food.location}
type="text" 
placeholder="location" 
name="location" />

</div>

<div className="notes"> 
<label className="notes-label" htmlFor="notes">Notes:</label>
<input className="notes-input"
defaultValue={food.notes}
type="text" 
placeholder="notes" 
name="notes" />
</div>



<div className="isOpened"> 
<label className="isOpened-label" htmlFor="isOpened">Opened:</label>
<input className="isOpened-input"
type="checkbox" 
placeholder="isOpened" 
defaultValue={food.isOpened}
name="isOpened" />
</div>
<label> <button className="submit">Submit</button> </label>
</form> 
</div> 
</main>

);
}



export default UpdateFridge