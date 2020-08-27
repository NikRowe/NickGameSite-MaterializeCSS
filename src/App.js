import React from "react";
import { Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import MyFooter from'./Components/MyFooter'
import "./App.css";

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
    <footer>
      <MyFooter />
    </footer>
  </div>
)

export default App;