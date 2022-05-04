import React from "react"
/**
 * @param {string} socialLink e.g "www.github.com/wemersonqueiroz"
 * @param {string} socialIcon e.g "fa-linkedin" - search icons on F.A
 * F.A = FontAwesome
 */
const Social = props => {
  const { socialLink, socialIcon } = props

  return (
    <li className="social-list__item">
      <a
        className="social-list__link"
        href={socialLink}
        target="_blank"
        rel="noreferrer">
        <i className={`fa-brands ${socialIcon}`} />
      </a>
    </li>
  )
}
export default Social
