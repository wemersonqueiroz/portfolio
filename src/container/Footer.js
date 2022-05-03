import React from "react"
import MailToLink from "../components/MailToLink"
import Social from "../components/Social"

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <MailToLink
        mailTo="mailto:hello@wemerson.dev"
        textMailTo="hello@wemerson.dev"
      />
      <ul className="social-list">
        <Social
          socialLink="https://twitter.com/wemersonqueiroz"
          socialIcon="fa-twitter"
        />
        <Social
          socialLink="https://github.com/wemersonqueiroz"
          socialIcon="fa-github"
        />
        <Social
          socialLink="https://www.linkedin.com/in/wemersonsouza/"
          socialIcon="fa-linkedin"
        />
        <Social
          socialLink="https://instagram.com/wemerson.dev"
          socialIcon="fa-instagram-square"
        />
      </ul>
    </footer>
  )
}

export default Footer
