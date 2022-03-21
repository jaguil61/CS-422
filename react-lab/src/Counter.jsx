import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    /* DONE: (Counter): Use this.state to set a default value of the count to 5.*/
    this.state = {count: 5};
  };


  incrementCount = () => {
    /* DONE: (Counter): Use setState() to modify the count.*/
    this.setState({count: this.state.count+1});
  };

  render() {
    return (
      /* DONE: (Counter): Create a div with className = "counter". 
      Inside the div class (1) write code to display the value of count; 
      (2) add a button that calls incrementCount() when clicked*/
      
      <div className="counter">
      <p>{this.state.count}</p>
      <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

//DONE: export Counter
export default Counter;
