import React from "react"

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <a href="mailto:hello@wemerson.dev" class="footer__link">
        hello@wemerson.dev
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            clasName="social-list__link"
            href="https://twitter.com/wemersonqueiroz"
            target="_blank"
            rel="noreferrer">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            clasName="social-list__link"
            href="https://github.com/wemersonqueiroz"
            target="_blank"
            rel="noreferrer">
            <i class="fa-brands fa-github" />
          </a>
        </li>
        <li className="social-list__item">
          <a
            clasName="social-list__link"
            href="https://www.linkedin.com/in/wemersonsouza/"
            target="_blank"
            rel="noreferrer">
            <i class="fa-brands fa-linkedin" />
          </a>
        </li>

        <li className="social-list__item">
          <a
            clasName="social-list__link"
            href="https://instagram.com/wemerson.dev"
            target="_blank">
            <i class="fa-brands fa-instagram-square" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
