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
    <div className="aboutMe-div">
      <div className="aboutText">
        <h4>
          Hey! I'm Gideon Jones. I'm {currentAge} years old, and I'm a Software
          Engineer.
        </h4>
        <p>
          I'm so excited to get more into the coding world! I've been around
          computers for as long as I can remember, and learning how to code on
          them has been a delight.{" "}
        </p>
        <p>
          I started coding around the age of 10, using Scratch (Look only if you
          dare!). Around this same time, my dad introduced me to Unity, and all
          the possibilities that came with that. I've been coding off and on
          with Unity since. I'm currently working on a 3D Original Zelda Clone,
          and a Metroidvania, which have been some really fun projects. I've
          always been a huge nerd. I love reading and writing, video games and
          DnD. I love the Marvel movies, tolerate a few of the DC movies, and
          I'm slowly making my way through the Wheel of Time books. Speaking of
          writing, I've participated in NaNoWriMo (National Novel Writing Month)
          twice, and I finished it the second time! The goal of NaNoWriMo is to
          write 50,000 words in a month, or about 1,667 words a day. They were
          awesome experiences, but they were needless to say... difficult.
          Unfortunately, these stories didn't turn out the best, per se, but I
          did learn a lot about writing, and how much time I could spend on just
          one project. I've spent hours on coding projects since then, but that
          was the first real opportunity to work hard on just one project. As I
          said earlier, I love Dungeons and Dragons! It's such a fun chance to
          hang out with my friends, create worlds and stories, and be part of an
          epic adventure! I've been playing for the fast few years, and I've
          loved every second of it. I have actually achieved my Eagle Scout with
          the Boy Scouts of America! I achieved this on July 20, 2017. It was a
          lot of hard work, but in the end it was worth it. For my project, I
          made 2 LEGO tables for Thunder Ridge Elementary, so kids with special
          needs could play with LEGOs. It was a really cool experience to give
          those to the kids, everyone seemed so thrilled to have them. I'm
          currently working as an Online Grocery Pickup Associate at Walmart. Me
          and my team will do several different jobs, with each leading into the
          next. We often deal with high-stress situations, and perform Customer
          Service at the same time. While I'm on the clock, I'm hard working,
          friendly, and I make sure things get done. Working at Walmart doesn't
          sound like much, I'll admit. However, it's been a great opportunity to
          be around people that I'm usually not around, and it's also been a
          good opportunity to make money, even though I'm a teenager. If you'd
          like to talk to my manager, contact me, and I can get you in touch!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
