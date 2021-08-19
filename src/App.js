import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // this is just a JS syntax (Class Method Declaration)
    // this.state.count += 1; -> it will not show on screen
    // this.setState({ count: this.state.count + 1 }); -> this will show on screen because react will execute render(), too
    // but using this.state.count (using external state) can have performance issue.
    // so we use this
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // this.state.count -= 1; -> not show on screen
    // this.setState({ count: this.state.count - 1 }); -> performance issue
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
