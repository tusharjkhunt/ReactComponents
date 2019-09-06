import React, { Component } from "react";
class Counter extends Component {
  styleValue = {
    fontSize: 18
  };
  render() {
    let dynamicBadge = "badge m-4 badge-";
    dynamicBadge += this.props.count.value === 0 ? "warning" : "primary";
    return (
      <div>
        <span style={this.styleValue} className={dynamicBadge}>
          {this.formateCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.count.id)}
          style={{ margin: 5 }}
          className="btn btn-outline-success btn-m"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.count.id)}
          style={{ margin: 5 }}
          className="btn btn-outline-danger btn-m"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.count.id)}
          className="btn btn-outline-danger btn-m"
        >
          Delete
        </button>
      </div>
    );
  }
  formateCount() {
    const { value } = this.props.count;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
