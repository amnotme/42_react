import React, { Component } from 'react';
import './App.css';
class Calculator extends Component {
 	constructor(props) {
		super(props);
		this.state = {
			num1 : 0,
			num2 : 0,
			result: 0
		};
		this.setNum1  = this.setNum1.bind(this);
		this.setNum2  = this.setNum2.bind(this);
		this.add      = this.add.bind(this);
		this.subtract = this.subtract.bind(this);
		this.divide   = this.divide.bind(this);
		this.multiply = this.multiply.bind(this);
		this.clear    = this.clear.bind(this);
	}
	
	setNum1(e) {
		const changeNum1 = e.target.value ? parseInt(e.target.value, 10) : "";
		this.setState({ num1 : changeNum1} );
	}

	setNum2(e) {
		const changeNum2 = e.target.value ? parseInt(e.target.value, 10) : "";
		this.setState({ num2 : changeNum2} );
	}

	add(e) {
		e.preventDefault();
		const res = this.state.num1 + this.state.num2;
		this.setState({ result: res });
	}
	subtract(e) {
		e.preventDefault();
		const res = this.state.num1 - this.state.num2;
		this.setState({ result: res });
	}
	multiply(e) {
		e.preventDefault();
		const res = this.state.num1 * this.state.num2;
		this.setState({ result: res });
	}
	divide(e) {
		e.preventDefault();
		const res = this.state.num1 / this.state.num2;
		this.setState({ result: res });
	}
	clear(e) {
		e.preventDefault();
		this.setState({ result: 0, num1 : 0, num2 : 0});
	}
	render() {
	const { num1, num2, result } = this.state;
	const { setNum1, setNum2, add, subtract, multiply, divide, clear } = this;
	return (
      <div className="App">
		<input type="text" 
			name="num1" 
			onChange={ setNum1 } 
			value={ num1 }/>
		<input type="text" 
			name="num2" 
			onChange={ setNum2 }
      		value={ num2 } />
		<br />
		<button onClick={ add }>+</button>
		<button onClick={ subtract }>-</button>
		<button onClick={ multiply }>*</button>
		<button onClick={ divide }>/</button>
		<button onClick={ clear }>clear</button>	
		<h1>{result}</h1>
	  </div>
    );
  }
}

export default Calculator;
