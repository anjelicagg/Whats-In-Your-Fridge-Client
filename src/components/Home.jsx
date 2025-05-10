

function Home ()  {
  return (
    <div className="kitchen">
       <main className="main-content">
      <section className="intro-snip">
        <h2>Your Kitchen, Organized</h2>
        <p>Track your food, reduce waste, and support your routine with ease.</p>
      </section>
    </main>
      <div className="appliance-container">
      <a href="/fridge" className="appliance fridge">Fridge</a>
      <a href="/pantry" className="appliance pantry">Pantry</a>
      </div>

    </div>
  );
};

export default Home;
