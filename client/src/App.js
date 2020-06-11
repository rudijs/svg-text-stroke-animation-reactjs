import React from "react"
import logo from "./logo.svg"
import "./App.css"

import Amazing from "./components/Amazing"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Amazing />
      </header>
    </div>
  )
}

export default App
