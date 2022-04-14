import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
    </div>
  )
}

export default App
