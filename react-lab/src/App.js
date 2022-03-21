import React, { Component } from "react";
import "./App.css";
//DONE: Import HelloWorld.jsx and Counter.jsx
import "./HelloWorld.jsx";
import "./Counter.jsx";
import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";
import FilteredList from "./FilteredList";

const produce = [
  { name: "Apple Jacks", type: "Circular" },
  { name: "Banana Nut Cheerios", type: "Circular" },
  { name: "Cookie Crisps", type: "Circular" },
  { name: "Honey Nut Cheerios", type: "Circular" },
  { name: "Fruit Loops", type: "Circular" },
  { name: "Reeses Puffs", type: "Circular" },
  { name: "Captain Crunch", type: "Square" },
  { name: "Cinnamon Toast Crunch", type: "Square" },
  { name: "Golden Grahams", type: "Square" },
  { name: "Chex", type: "Square" },
  { name: "Life", type: "Square" },
  { name: "Frosted Mini Wheats", type: "Square" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*DONE: (HelloWorld): create an instance of the HelloWorld Component*/}
        <HelloWorld />

        {/*DONE: (Counter): create an instance of the Counter Component*/}
        <Counter />

        {/*DONE: (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list*/}
        <FilteredList items={produce}/> 
      </div>
    );
  }
}

export default App;
