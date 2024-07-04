import React from "react";

import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "Page to show about me profile Information",
};

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h1>About Me</h1>
        <br />
        <p>
          I am a dedicated and innovative Software Engineer with a passion for
          developing high-quality, scalable, and efficient software solutions.
          With a solid foundation in computer science and a deep understanding
          of various programming languages and frameworks, I specialize in
          creating robust applications and systems that solve real-world
          problems.
        </p>
        <br />
        <p>
          My experience spans the full software development lifecycle, from
          requirements gathering and system design to implementation, testing,
          and maintenance. I thrive in collaborative environments, working
          closely with cross-functional teams to deliver impactful projects on
          time and within budget.
        </p>
        <br />
        <p>Key strengths include:</p>
        <br />
        <ul style={{ listStylePosition: "inside" }}>
          <li>
            Proficiency in languages such as Python, Java, C++, and JavaScript.
          </li>
          <li>
            Expertise in software development methodologies like Agile and
            Scrum.
          </li>
          <li>
            Strong problem-solving skills and the ability to think critically
            and creatively.
          </li>
          <li>
            Excellent communication skills, enabling effective collaboration
            with technical and non-technical stakeholders
          </li>
        </ul>
        <br />
        <p>
          I am committed to continuous learning and staying up-to-date with the
          latest industry trends and technologies to ensure my solutions are
          always cutting-edge. My goal is to leverage my skills and experience
          to contribute to the success of dynamic and forward-thinking
          organizations.
        </p>
      </div>
    </div>
  );
}
