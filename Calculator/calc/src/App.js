import React, { Component } from 'react';
import "./App.css";
import Key from './components/Key';
import Outcome from './components/Outcome';

class App extends Component {
state = {
  result: ''
};
buttonClicked= (buttonName) => {
  if(buttonName === "=") {
    this.calculate(); 
  } else if (buttonName === 'C') {
    this.reset()
  } else if(buttonName === 'CE'){
    this.backspace()
  } else
  this.setState({
    result: this.state.result + buttonName
  });
};

backspace = () => {
  this.setState({
    result: this.state.result.slice(0, -1)
  })
}
reset = () => {
  this.setState({
    result:""
  })
}
calculate = () => {
 try {
   this.setState({
    result: (eval(this.state.result) || "") + ""
  });
} catch (e) {
  this.setState({
    result:"error"

  });
}
};
  render() {
    return ( 
    <div className="App">
    <div className= "calc-body">
    <Outcome result={this.state.result}/>
      <Key buttonClicked={this.buttonClicked}/>
    </div>
    </div>
  );
}
}
export default App;