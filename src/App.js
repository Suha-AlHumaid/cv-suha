import React, { Component } from 'react'
import About from './components/About'
import WorkExp from './components/ WorkExpereince'
import Skills from './components/ Skills'
import Education from './components/ Education'
import './style.css'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="part2">
        <About/>
        <WorkExp/>
        <Skills/>
        <Education/>
        </div>
      </div>
    )
  }
}
