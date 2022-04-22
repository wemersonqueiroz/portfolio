import React from "react"
import portfolio00 from "../images/portfolio00.png"
import portfolio01 from "../images/portfolio01.png"
import tindog from "../images/tindog.png"

export default function Works() {
  return (
    <section className="my-work" id="works">
      <h2 class="section__title section__title--work"> My Work</h2>
      <p class="section__subtitle">A selection of my range of work</p>
      <div class="portfolio">
        {/* portfolio ITEM 01*/}
        <a href="#" class="portfolio__item" alt="">
          <img src={portfolio00} alt="" className="portfolio__img" />
        </a>
        {/* portfolio ITEM 02*/}
        <a
          href="https://wemersonqueiroz.github.io/bootstrap-tindog/"
          class="portfolio__item"
          target="_blank"
          rel="noreferrer">
          <img src={tindog} alt="" className="portfolio__img" />
        </a>
        {/* portfolio ITEM 03*/}
        <a
          href="https://hidden-ravine-54566.herokuapp.com/"
          class="portfolio__item"
          alt="Newsletter Page">
          <img src={portfolio01} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  )
}
