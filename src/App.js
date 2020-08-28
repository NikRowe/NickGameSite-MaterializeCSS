import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import MyFooter from './Components/MyFooter'
import "./App.css";


class App extends Component {

  // LISTENS FOR SCROLL ON PAGE AND THEN DISPLAYS THE CORRECT NAVBAR //
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100
      const nav = document.getElementById('navbar')
      const navScrolled = document.getElementById('navScrolled')
      const popOver = document.getElementById('popOver')
      if (isTop) {
        nav.classList.add('hide')
        navScrolled.classList.remove('hide')
        popOver.classList.add('popOverScrolled')
        popOver.classList.remove('popOver')
      } else {
        nav.classList.remove('hide')
        navScrolled.classList.add('hide')
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  render() {
    return (
      <div>
        <header >
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
  }
}

export default App;