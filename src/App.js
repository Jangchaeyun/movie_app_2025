import React from "react";

function Food({ fav }) {
  return <h1>I love {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>안녕!!!</h1>
      <Food fav="pasta" />
      <Food fav="ramen" />
      <Food fav="kimbap" />
      <Food fav="bibimbap" />
    </div>
  );
}

export default App;
