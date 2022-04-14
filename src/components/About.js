import React from "react"
import profile from "../images/profile.png"

export default function About() {
  return (
    <section className="about--me" id="about">
      <h2 className="section__title section__title--about">About</h2>
      <p className="section__subtitle section__subtitle--about"></p>
      <div class="about-me__body">
        <p></p>
        <p></p>{" "}
      </div>
      <img src={profile} width="200px" alt="profile" />
    </section>
  )
}
