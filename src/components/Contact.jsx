import React, {useState} from "react";


function Contact(){
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });
    const [submitted,setSubmit]=useState(false)
    const [errors,setErrors]=useState({});
    const handleChange =(e)=> {
        const {name,value} = e.target;
        setFormData=>[name];value
    }
   
    
    const handleSubmit = (e) =>{
        console.log("Contact Form Submitted",formData);
        alert("Thanks for reaching out!");
        setFormData({name:"", email:"",message:""})

};
    return (
        <main className="content-container">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required/>

                <label htmlFor="email">Email:</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required/>

                <label htmlFor="message">Message:</label>
                <textarea 
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required/>

                <button type="submit"> Send Message</button>
            </form>
        </main>
    )
}
export default Contact