import React from "react"

/**
 * @param {string} mailTo e.g mailto:hello@wemerson.dev
 * @param {string} textMailTo e.g "email me at hello@wemerson.dev"
 */
const MailToLink = props => {
  const { mailTo, textMailTo } = props

  return (
    <a href={mailTo} className="footer__link">
      {textMailTo}
    </a>
  )
}

export default MailToLink
