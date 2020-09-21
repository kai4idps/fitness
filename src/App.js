import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Button from "./Button"

function App() {
  const { headingText } = styles

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2 style={headingText} className="flow-text">
            Slider React Demo
          </h2>
          <p className="flow-text">
            Learn how to use Materialize CSS framework in ReactJS
          </p>
          <Button />
        </div>
      </header>
    </div>
  )
}

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300,
  },
}

export default App
