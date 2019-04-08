import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div> 
      <div className="App">
        <h1>New York City Deaths Rates</h1>
      </div>
      <div >
        <div> 
          <button  className="btn"
              >Leading causes of death</button> 
        </div>
        <div>
          <button  className="btn"
              >Death per year</button> 
        </div>
        <div >
         <button  className="btn"
              >Anything else</button> 
        </div>
      </div>
    </div>
    );
  }
}

export default App;
