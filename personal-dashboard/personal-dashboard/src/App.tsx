import React from 'react';
import Weather from "./components/Weather";
import News from "./components/News";
import ToDo from "./components/ToDo";

import './App.css';

function App() {
  return (
    <main>
    <h1>Greetings, Samay </h1>
    <Weather/>
    <section>
      <div>
        <h3>Latest headlines</h3>
        <News/>
      </div>
      <div>
        <h3>Today's Agenda</h3>
      <ToDo/>
      </div>
    </section>
  </main>
  );
}

export default App;
