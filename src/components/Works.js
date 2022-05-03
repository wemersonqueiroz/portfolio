import React from "react"

/**
 * @param {string} projectLink e.g "www.wemerson.dev"/ "githubPage"
 * @param {string} projectImage e.g {Images.category.filename}
 */

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
