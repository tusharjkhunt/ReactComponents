import React, { Component } from "react";
//import Movies from "../src/components/movies";
import Navbar from "./components/reusable/navbar";
import Counters from "./components/reusable/counters";
import "./App.css";

class App extends Component {
  state = {
    count: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const count = this.state.count.map(eachCount => {
      eachCount.value = 0;
      return eachCount;
    });
    this.setState({ count });
  };
  handleDelete = id => {
    const count = this.state.count.filter(eachCount => eachCount.id !== id);
    this.setState({ count });
  };
  handleIncrement = id => {
    const count = this.state.count.map(eachCount => {
      if (eachCount.id === id) eachCount.value++;
      return eachCount;
    });
    this.setState({ count });
  };
  handleDecrement = id => {
    const count = this.state.count.map(eachCount => {
      if ((eachCount.id === id) & (eachCount.value !== 0)) eachCount.value--;
      return eachCount;
    });
    this.setState({ count });
  };
  handleTotalCount = () => {
    return this.state.count.filter(eachCount => eachCount.value !== 0).length;
  };
  render() {
    return (
      <main role="main" className="container">
        <Navbar totalCount={this.handleTotalCount()} />
        <Counters
          count={this.state.count}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </main>
    );
  }
}

export default App;
