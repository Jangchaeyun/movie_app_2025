import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "파스타",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKuJ29sfo1_gy6jrbo3l0hX8SC8hOJpnqKA&s",
  },
  {
    id: 2,
    name: "비빔밥",
    image:
      "https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg",
  },
  {
    id: 3,
    name: "라면",
    image:
      "https://i.namu.wiki/i/2mrBrfSDXbBJHLjgyycsAhB0qLvjSZbvswmGtVTAupaEfuQ8Xuzp8wJiXyeDTsqz7blqGRYSjW5mbo1Wc4GP_w.webp",
  },
  {
    id: 4,
    name: "초밥",
    image:
      "https://i.namu.wiki/i/vwbKQLdn5CzWLTdLHKb2rYjLZS6icyFb6b6PdEz_3Y_0gJQqRMuhHGgogptO19gl3NZMnRsTvjYlA-0-JRSrbw.webp",
  },
  {
    id: 5,
    name: "카레라이스",
    image:
      "https://i.namu.wiki/i/QUSohbmt0G1CuYZKW-skuN5K3HAjf88GgTttXS0EphnSMWN8UkV-nYCb3hCCNNbs2m6pjyNF2MLbdQO8cBy1gA.webp",
  },
]; // foodLike 변수에 베열을 저장함

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
