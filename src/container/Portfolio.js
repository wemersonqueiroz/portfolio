import React from "react"
import WorksDetails from "../components/Works"
import Images from "../images/Images"

export default function Works() {
  return (
    <section className="my-work" id="works">
      <h2 className="section__title section__title--work"> My Work</h2>
      <p className="section__subtitle">A selection of my range of work</p>
      <div class="portfolio">
        {/* portfolio ITEM 04*/}
        <WorksDetails
          projectLink="https://niche-invest.com"
          projectImage={Images.portfolio.portfolio04}
        />
        {/* portfolio ITEM 03*/}
        <WorksDetails
          projectLink="https://manage-tailwind.pages.dev/"
          projectImage={Images.portfolio.portfolio03}
        />
        {/* portfolio ITEM 02*/}
        <WorksDetails
          projectLink="https://wemersonqueiroz.github.io/bootstrap-tindog/"
          projectImage={Images.portfolio.portfolio02}
        />
        {/* portfolio ITEM 01*/}
        <WorksDetails
          projectLink="https://hidden-ravine-54566.herokuapp.com/"
          projectImage={Images.portfolio.portfolio01}
        />
      </div>
    </section>
  )
}
