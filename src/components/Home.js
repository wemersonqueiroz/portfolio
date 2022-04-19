import React from "react"
import profile00 from "../images/profile00.png"

export default function Home() {
  return (
    <section className="intro" id="home">
      <h1 class="section__title section__title--intro">
        Hi, I am <strong>Wemerson Queiroz</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">Frontend dev</p>
      <img src={profile00} className="intro__img" alt="" />
    </section>
  )
}
