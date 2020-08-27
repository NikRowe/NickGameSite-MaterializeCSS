import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import About from './Components/AboutComponent';
import AddItems from './Components/AddItemComponent'
import RemoveItems from './Components/RemoveItemComponent'
import CovidGuide from './Components/COVID-19GuideComponent'
import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import "./App.css";

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <div className="container">
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/covid-guide" component={CovidGuide} />
          <Route exact path="/items-add" component={AddItems} />
          <Route exact path="/items-remove" component={RemoveItems} />
        </Switch>
      </main>
    </div>
    <footer className="page-footer">
      <div className="container">
        <div className="row footer-links">
          <ul >
            <li><Link to="/" className="col">PRIVACY POLICY</Link></li>
            <li><Link to="/"className="col">TERMS OF USE</Link></li>
            <li><Link to="/"className="col">COPYRIGHT COMPLIANCE</Link></li>
            <li><Link to="/"className="col">ARBITRATION FAQ</Link></li>
            <li><Link to="/"className="col">CLOSED CAPTIONING CONTACT</Link></li>
            <li><Link to="/"className="col"> GROWNUPS</Link></li>
            <li><Link to="/"className="col">TV SCHEDULE</Link></li>
            <li><Link to="/"className="col">WORK WITH US</Link></li>
            <li><Link to="/"className="col">KEEP VIACOM</Link></li>
            <li><Link to="/"className="col">TV RATINGS</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
)

export default App;