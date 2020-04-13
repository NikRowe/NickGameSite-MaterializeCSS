import React from "react";
import { Switch, Route } from 'react-router-dom';
import About from './Components/AboutComponent';
import AddItems from './Components/AddItemComponent'
import RemoveItems from './Components/RemoveItemComponent'
import CovidGuide from './Components/COVID-19GuideComponent'
import InventoryDashboard from './Components/InventoryDashboard';
import Navbar from './Components/Navbar'
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <div className="container ">
      <main className="main">
        <Switch>
          <Route exact path="/" component={InventoryDashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/covid-guide" component={CovidGuide} />
          <Route exact path="/items-add" component={AddItems} />
          <Route exact path="/items-remove" component={RemoveItems} />
        </Switch>
      </main>
    </div>
  </div>
)

export default App;