import React from "react"
import ReactDOM from "react-dom"
import Header from "./container/Header"
import Home from "./container/Home"
import Services from "./container/Services"
import About from "./container/About"
import Portfolio from "./container/Portfolio"
import Footer from "./container/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
