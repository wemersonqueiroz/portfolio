import React from "react"
import profile from "../images/profile.png"

export default function Home() {
  return (
    <section className="Intro" id="home">
      <h1 class="section__title section__title--intro">
        Hi, I am <strong>Wemerson Queiroz</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Front-end dev
      </p>
      <img src={profile} width="200px" />
    </section>
  )
}
