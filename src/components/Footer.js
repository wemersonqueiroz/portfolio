import React from "react"

export default function Footer() {
  return (
    <div>
      <a href="mailto:hello@wemerson.dev" class="footer__link">
        hello@wemerson.dev
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a clasName="social-list__link" href="https://twitter.com/">
            Twitter
          </a>
        </li>
        <li className="social-list__item">
          <a clasName="social-list__link" href="https://github.com/">
            Github
          </a>
        </li>
        <li className="social-list__item">
          <a clasName="social-list__link" href="https://linkedin.com/">
            Linkedin
          </a>
        </li>

        <li className="social-list__item">
          <a clasName="social-list__link" href="https://instagram.com">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  )
}
