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
        </p>
      </section>

      <section className="kitchen-visuals">
        <div className="fridge-preview" onClick={() => window.location.href = '/fridge'}>
          <img src="/images/fridge-icon.png" alt="Fridge" />
          <p>Go to Fridge</p>
        </div>

        <div className="pantry-preview" onClick={() => window.location.href = '/pantry'}>
          <img src="/images/pantry-icon.png" alt="Pantry" />
          <p>Go to Pantry</p>
        </div>
      </section>
    </main>
  );
}

export default About;
