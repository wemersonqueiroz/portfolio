import React from "react"

export default function Nav() {
  return (
    <>
      <button className="nav--toggle" aria-label="toggle navigation">
        <span className="hamburguer"> </span>{" "}
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li class="nav__item">
            {" "}
            <a href="#">Home</a>
          </li>
          <li class="nav__item">
            {" "}
            <a href="#">My Services</a>
          </li>
          <li class="nav__item">
            {" "}
            <a href="#">About me</a>
          </li>
          <li class="nav__item">
            {" "}
            <a href="#">My Work</a>
          </li>
          <li class="nav__item">
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
