import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import MyFooter from './Components/MyFooter'
import "./App.css";


class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100
      const nav = document.getElementById('navbar')
      const navScrolled = document.getElementById('navScrolled')
      if (isTop) {
        nav.classList.add('hide')
        navScrolled.classList.remove('hide')
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