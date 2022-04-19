import React from "react"
import services from "../images/services.jpg"

export default function Services() {
  return (
    <section
      style={{ backgroundImage: `url(${services})` }}
      className="my-services"
      id="my-services">
      <h2 className="section__title section__title--services"> What I do </h2>
      <div className="services">
        <div className="service">
          <h3>Frontend Web Development</h3>
          <p>
            Responsive web pages using HTML, CSS, JavaScript and ReactJs
            library.
          </p>
        </div>
      </div>
      <a href="#works" className="btn">
        My Work
      </a>
    </section>
  )
}
