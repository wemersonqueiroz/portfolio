import React from "react"

const WorksDetails = props => {
  const { projectLink, projectImage } = props
  return (
    <a
      href={projectLink}
      className="portfolio__item"
      target="_blank"
      rel="noreferrer">
      <img src={projectImage} alt="" className="portfolio__img" />
    </a>
  )
}
export default WorksDetails
