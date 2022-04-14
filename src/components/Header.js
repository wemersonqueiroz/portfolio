import React from "react"
import profile from "../images/profile.png"
import Nav from "./Nav"

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={profile} alt="" />
      </div>
      <Nav />
    </header>
  )
}
