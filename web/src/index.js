import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import About from './views/about'
import Home from './views/home'
import Log from './Log';
import Reg from './Reg';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={About} path="/about" />
        <Route exact component={Home} path="/" />
        <Route exact component={Log} path="/Log" />
        <Route exact component={Reg} path="/Reg" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
