import React from "react"
import Images from "../images/Images"

export default function About() {
  return (
    <section className="about-me flex flex-col items-center" id="about">
      <h2 className="section__title section__title--about justify-left">
        Who I am
      </h2>
      <p className="section__subtitle section__subtitle--about">
        Self thought Frontend Developer
      </p>
      <div className="about-me__body">
        <p>
          I'm a tech enthusiast, Star Wars Fan, coffee addicted who recently
          found a passion for working with web development.
        </p>
        <p>
          In February 2022, I discovered that I like to programme after getting
          into Solidity Smart Contract Development and JavaScript. Currently,
          I'm studying to be proficient with HTML, CSS, JavaScript and React,
          and this page is my first React app to show my skills.
        </p>
      </div>
      <img
        src={Images.profile.profile01}
        alt="profile"
        className="about-me__img w-2/4 md:w-full"
      />
    </section>
  )
}
