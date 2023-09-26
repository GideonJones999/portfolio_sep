import React from "react";
import "../styles/AboutMe.scss";

function AboutMe() {
  const current = new Date();
  const getCurrentYear = `${current.getFullYear()}`;
  const getCurrentMonth = `${current.getMonth() + 1}`;
  const getCurrentDay = `${current.getDate()}`;

  let currentAge = 0;
  if ((getCurrentMonth == 4 && getCurrentDay >= 19) || getCurrentMonth > 4) {
    currentAge = getCurrentYear - 2003;
  } else {
    currentAge = getCurrentYear - 2004;
  }

  return (
    <div className="container">
      <div className="aboutText">
        <h4>
          Hey! I'm Gideon Jones. I'm {currentAge} years old, and I'm a Software
          Engineer.
        </h4>
        <p>
          I am currently studying at{" "}
          <a href="https://www.byu.edu/" target="_blank">
            BYU Provo
          </a>{" "}
          majoring in{" "}
          <a
            href="https://cs.byu.edu/education/undergraduate/programs/software-engineering/"
            target="_blank"
          >
            Software Development
          </a>
          . It has been an amazing opportunity to learn more about how the world
          really works and what I can do to make significant changes.{" "}
        </p>
        <p>
          In 2021 I graduated from the Web Page, Digital/Multimedia, and
          Information Resources Design Program at{" "}
          <a
            href="https://mtec.edu/programs/web-programming-development/"
            target="_blank"
          >
            Mountainland Technical College
          </a>
          . It was an amazing experience, as it was the first time I had ever
          had a serious and important class that taught me the fundamentals of
          programming websites.{" "}
        </p>{" "}
        <p>
          As a part of my MTECH experience, I had an externship with{" "}
          <a href="https://www.3octaves.com/" target="_blank">
            Three Octaves
          </a>{" "}
          where I worked on several projects, including using React in the
          Front-end, Go in the Back-end, and Testing to make sure it was all
          working correctly.{" "}
          <a href="https://www.linkedin.com/in/jason-baddley/" target="_blank">
            Jason Baddley
          </a>{" "}
          was my supervisor.
        </p>
        <p>
          I've been around computers for as long as I can remember, and learning
          how to code on them has been a delight. I started coding around the
          age of 10, using Scratch, and around this same time, my dad introduced
          me to Unity, and all the possibilities that came with that. I've been
          coding off and on with Unity since, making small games here and there.
        </p>
        <p>
          I've always been a bit of a nerd. I love reading, writing, video
          games, and movies. I love the opportunity to tell stories and to
          inspire others to become better people through the examples of heroes.
          I love redemption, I love sacrifice, I love all of it.{" "}
        </p>
        <p>
          I've participated in{" "}
          <a href="https://nanowrimo.org/" target="_blank">
            NaNoWriMo
          </a>{" "}
          (National Novel Writing Month) twice, and I finished it the second
          time. The goal of NaNoWriMo is to write 50,000 words in a month, or
          about 1,667 words a day. They were awesome experiences, but they were
          needless to say... difficult. Unfortunately, these stories didn't turn
          out the best, per se, but I did learn a lot about writing, and how
          much time I could spend on just one project. I've spent hours on
          coding projects since then, but that was the first real opportunity to
          work hard on just one project.
        </p>
        <p>That's me!</p>
      </div>
    </div>
  );
}

export default AboutMe;
