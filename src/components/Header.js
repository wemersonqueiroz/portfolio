import React from "react"
import Nav from "./Nav"

export default function Header() {
  function handleClick() {
    document.body.classList.toggle("nav-open")
  }
  return (
    <header>
      <div className="logo">Wemerson Queiroz</div>
      <button
        onClick={handleClick}
        className="nav-toggle"
        aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <Nav />
    </header>
  )
}
