import logo from './logo.svg';
import astro from './astro.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: '1',
      operation: '+',
      val2: '1',
      solution: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var solution = 0;
    if(this.state.operation === '/' && +this.state.val2 === 0) {
      solution = 'Cannot divide by 0';
    } else {
      switch(this.state.operation) {
        case '+':
          solution = +this.state.val1 + +this.state.val2;
          break;
        case '-':
          solution = +this.state.val1 - +this.state.val2;
          break;
        case '*':
          solution = +this.state.val1 * +this.state.val2;
          break;
        case '/':
          solution = +this.state.val1 / +this.state.val2;
          break;
        default:
          // code block
      }
  }
    this.setState({
      solution: solution
    });
    // alert('A name was submitted: ' + this.state.solution);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={astro} className="App-logo" alt="astro"/>
          <p>Press "Solve" to generate a solution!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input onChange={this.handleChange} value={this.state.val1} type="number" name="val1" />
            </label>
            <label>
              <select onChange={this.handleChange} value={this.state.operation} name="operation">
                <option defaultValue value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
              </select>
            </label>
            <label>
              <input onChange={this.handleChange} value={this.state.val2} type="number" name="val2" />
            </label>
            <label>
              <input className="submit" type="submit" value="Solve" />
            </label>
          </form>

          <p className="solution">Solution: <b>{this.state.solution}</b></p>
        </header>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <form>
//           <label>
//             <input type="number" name="name" />
//             <select>
//               <option selected value="+">+</option>
//               <option value="-">-</option>
//               <option value="*">*</option>
//               <option value="/">/</option>
//             </select>
//             <input type="number" name="name" />
//           </label>
//           <input type="submit" value="Solve" />
//         </form>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
