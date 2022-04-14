import React from "react"

export default function Services() {
  return (
    <section className="my--services" id="my-services">
      <h2 className="section__title section__title--services"> What I do </h2>
      <div className="services">
        <div className="service">
          <h3>h3</h3>
          <p>p</p>
        </div>
        <div className="service">
          <h3>Web Development</h3>
          <p> lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="service">
          <h3>Web Development</h3>
          <p>lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  )
}
