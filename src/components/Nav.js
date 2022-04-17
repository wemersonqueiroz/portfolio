import React from "react"

export default function Nav() {
  function closeNav() {
    document.body.classList.remove("nav-open")
  }
  return (
    <nav onClick={closeNav} className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          {" "}
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li class="nav__item">
          {" "}
          <a href="#my-services" className="nav__link">
            My Services
          </a>
        </li>
        <li class="nav__item">
          {" "}
          <a href="#about" className="nav__link">
            About me
          </a>
        </li>
        <li class="nav__item">
          {" "}
          <a href="#works" className="nav__link">
            My Work
          </a>
        </li>
        <li class="nav__item">
          {" "}
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
