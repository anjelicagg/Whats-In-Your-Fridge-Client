import React from "react";
import '../App.css'; 

function About() {
  return (
    <main className="main-content">
      <section className="intro-text">
        <h2>Our Mission</h2>
        <p>
          Mindful Kitchen is built to help neurodivergent individuals manage their kitchens with ease,
          reduce food waste, and take the guesswork out of meal planning. We know the fridge and pantry
          can feel like chaos — this app brings clarity and control.
        </p> <div className="dopamine-about">
        <img src ="/Images/dope-kitchen.jpeg" alt />
        </div>
      </section>

      <section className="kitchen-visuals">
        <div className="fridge-preview" onClick={() => window.location.href = '/fridge'}>
          <img src="/Images/fridge-icon.jpeg" alt="Fridge" />
          <p>Go to Fridge</p>
        </div>

        <div className="pantry-preview" onClick={() => window.location.href = '/signup'}>
          <img src="/Images/pantry-icon.jpg" alt="Pantry" />
          <p>Sign Up!</p>
        </div>
      </section>
    </main>
  );
}

export default About;
