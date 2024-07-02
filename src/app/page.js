"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Tile from "@components/tile";
import SocialMediaTile from "./_components/socialMediaTile";
import portfolioPic from "../../public/portfolio.png";
import githubIcon from "../../public/github-icon.png";
import linkedinIcon from "../../public/linkedin-icon.png";

export default function Home() {
  const [current, setCurrent] = useState("about");
  console.log(current);

  function listenScrollEvent(e) {
    const experience = document.getElementById("experience");
    const projects = document.getElementById("projects");
    const about = document.getElementById("about");
    console.log(
      about.offsetTop,
      experience.offsetTop,
      projects.offsetTop,
      window.scrollY
    );

    // const rightpanel = document.getElementById("rightpanel");

    // console.log(experience.isScrolledIntoView);
    // console.log(rightpanel);
    // console.log(window.scrollY);
    if (experience.offsetTop - 100 > window.scrollY) {
      setCurrent("about");
    } else if (
      window.scrollY >= experience.offsetTop - 100 &&
      projects.offsetTop - 100 > window.scrollY
    ) {
      // console.log(window.scrollY > experience.offsetTop - 96);
      setCurrent("experience");
    } else {
      // console.log(window.scrollY > projects.offsetTop);
      setCurrent("projects");
    }
  }

  useEffect(() => {
    // window.removeEventListener("scroll", listenScrollEvent);
    window.addEventListener("scroll", listenScrollEvent);
    return function () {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <main className={styles.main}>
      <header className={`${styles.leftPanel} ${styles.panel}`}>
        <div className={`${styles.aboutMe}`}>
          <h1>
            <a href="">Justin Cai</a>
          </h1>
          <h2>Software Engineer, New York</h2>
          <p>A man of many interests... mostly building technology.</p>
          <nav>
            <ul className={`${styles.navBar}`}>
              <li>
                <a
                  href="#about"
                  className={current == "about" ? `${styles.current}` : ``}
                >
                  <span className={`${styles.indicator}`}></span>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={current == "experience" ? `${styles.current}` : ``}
                >
                  <span className={`${styles.indicator}`}></span>
                  <span>Experience</span>
                </a>
              </li>
              {/* <li>
                <a
                  href="#projects"
                  className={current == "projects" ? `${styles.current}` : ``}
                >
                  <span className={`${styles.indicator}`}></span>
                  <span>Projects</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
        <ul className={`${styles.socialMedia}`}>
          <SocialMediaTile
            icon={githubIcon}
            href="https://github.com/justinqcai"
          />
          <SocialMediaTile
            icon={linkedinIcon}
            href="https://linkedin.com/in/justincai"
          />
        </ul>
      </header>
      <div className={`${styles.rightPanel} ${styles.panel}`}>
        <section id="about">
          <h1>About</h1>
          <p>
            Growing up in an era of widespread technological growth, I quickly
            became captivated by computers, cameras, video games, and technology
            in general. This fascination turned into curiosity, then a hobby,
            and now I get the privilege of solving technical problems for a
            living!
          </p>
          <p>
            Both professionally and in my free time, I&apos;ve used a variety of
            technologies to build websites, mobile apps, back-end APIs, and even
            machine learning models. I love trying my hand at creating different
            types of applications, and as a lifelong learner I&apos;m always
            looking for new projects and technologies to work on.
          </p>
          <p>
            Outside of coding, I enjoy lifting weights, playing basketball,
            reading, and learning!
          </p>
        </section>
        <section id="experience">
          <h1>Experience</h1>
          <ol className={`${styles.jobList}`}>
            <Tile
              date="2023 - Present"
              jobTitle="Software Engineer"
              company="Capital One"
              link="https://capitalone.com"
            >
              Refactored 30,000+ lines of code to significantly improve
              architectural design and efficiency of REST APIs. Upgraded
              large-scale microservices (2.7MM+ unique customers per month) to
              use serverless computing, saving over 15 hours of developer time a
              month and cutting compute costs by 10%. Coordinated with Product
              and Cyber teams to identify and fix 200+ potential security and
              fraud vulnerabilities.
            </Tile>
            <Tile
              date="2022 - Present"
              jobTitle="Associate Software Engineer"
              company="Capital One"
              link="https://capitalone.com"
            >
              Integrated a document upload plugin with the dispute filing flow
              in Capital One Mobile, enabling customers to securely upload proof
              to support their dispute. Self-service dispute resolution improved
              by 30%. Increased test coverage by 200% for both our plugins,
              easily saving over 10 hours of developer time a month in bug
              bounties and manual testing. CEO Rich Fairbank applauded our
              efforts in “spearheading Capital One’s success in top-notch
              dispute resolution”.
            </Tile>
            <Tile
              date="2021"
              jobTitle="Software Engineering Intern"
              company="Capital One"
              link="https://capitalone.com"
            >
              Conducted thorough analysis and documentation of legacy API
              backends, detailing backend calls, response timeouts, expected
              request/responses, and more for each endpoint.
            </Tile>
          </ol>
        </section>
        <section id="projects">
          <ul>
            <Tile
              picture={{
                src: portfolioPic,
                alt: "Personal website",
              }}
              // date="2024"
              projectName="justinqcai.com"
              // company="Capital One"
              link="https://justinqcai.com"
            >
              Built a website using Next.js and React to display my resume and
              interests.
            </Tile>
          </ul>
        </section>
        <footer>
          <p>
            Made with{" "}
            <a href="https://nextjs.org" target="_blank">
              Next.js{" "}
            </a>{" "}
            and{" "}
            <a href="https://react.dev" target="_blank">
              React
            </a>{" "}
            - design inspired by{" "}
            <a href="https://brittanychiang.com/" target="_blank">
              Brittany Chiang
            </a>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}
