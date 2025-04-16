import React from "react";

function AboutPage() {
  return (
    <div className="">
      <header className="text">
        <h1 className="textbold ">Welcome to Mindful Kitchen</h1>
      </header>

      <nav className="bg-green-100 py-3 shadow-sm">
        <ul className="navbar">
          <li><a href="/" className="hover:text-green-900">Home</a></li>
          <li><a href="/fridge" className="hover:text-green-900">Fridge</a></li>
          <li><a href="/pantry" className="hover:text-green-900">Pantry</a></li>
          <li><a href="/resources" className="hover:text-green-900">Resources</a></li>
          <li><a href="/about" className="font-bold text-green-900">About</a></li>
        </ul>
      </nav>

      <main className="main">
        <div className="main-section">
          <h2 className="header">Our Mission</h2>
          <p className="paragraph">
            Mindful Kitchen is built to help neurodivergent individuals manage their kitchens with ease,
            reduce food waste, and take the guesswork out of meal planning. We know the fridge and pantry
            can feel like chaos — this app brings clarity and control.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div onClick={() => window.location.href='/fridge'} className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition w-64">
            <img src="/images/fridge-icon.png" alt="Fridge" className="w-24 h-auto mx-auto" />
            <p className="mt-4 text-green-700 font-medium">Go to Fridge</p>
          </div>

          <div onClick={() => window.location.href='/pantry'} className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-lg transition w-64">
            <img src="/images/pantry-icon.png" alt="Pantry" className="w-24 h-auto mx-auto" />
            <p className="mt-4 text-green-700 font-medium">Go to Pantry</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage; 