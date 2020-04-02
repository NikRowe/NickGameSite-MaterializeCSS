import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Items from './ItemsListComponent';
import About from './AboutComponent';
import AddItems from './AddItemComponent'
import RemoveItems from './RemoveItemComponent'

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Items} />
      <Route exact path="/about" component={About} />
      <Route exact path="/items-add" component={AddItems} />
      <Route exact path="/items-remove" component={RemoveItems} />
    </Switch>
  </main>
)

export default Main;

