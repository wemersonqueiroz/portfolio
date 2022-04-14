import React from "react"
import profile from "../images/profile.png"

export default function Works() {
  return (
    <section className="my-work" id="works">
      <h2 class="section__title"> My Work</h2>
      <p class="section__subtitle"></p>
      <div class="portifolio">
        <a href="#" class="portifolio__item" alt="">
          <img src={profile} alt="" className="portifolio__img" />
        </a>
      </div>
    </section>
  )
}
