import React from "react"
import Images from "../images/Images"

export default function Home() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Wemerson Queiroz</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">Frontend dev</p>
      <img src={Images.profile.profile00} className="intro__img" alt="" />
    </section>
  )
}
