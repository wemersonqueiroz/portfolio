import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Works from "./components/Works"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App
