import React from "react";
import Main from './componenets/MainComponent';
import Navbar from './componenets/Navbar'
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
  </div>
)

export default App;