import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

import("./app.scss");

// Vinicio - this is just a different way of creating 'dummy components' with functions
// const Header = () => {
//   return (
//     <header>
//       <h1>Header</h1>
//     </header>
//   );
// };

// class Footer extends React.Component {
//   render() {
//     return <footer>&copy; 2018 Code Fellows</footer>;
//   }
// }

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = event => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = event => {
    event.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div id="counter">
        <h4>{this.state.counter}</h4>
        <a className="counterButton" href="/" onClick={this.decrementCounter}>
          Decrement
        </a>
        <a className="counterButton" href="/" onClick={this.incrementCounter}>
          Increment
        </a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
