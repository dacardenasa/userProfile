import React from "react";

import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interests",
  description: "Page to show user interests",
};

export default function Interests() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h1>My Interests</h1>
        <br />
        <p>
          Based on my current positions as Software developer, these are my most
          common interests:
        </p>
        <br />
        <ul style={{ listStylePosition: "inside" }}>
          <li>
            <b>Open Source Contributions:</b> Actively contributing to various
            open source projects on GitHub, with a focus on improving code
            quality and developing new features.
          </li>
          <li>
            <b>Machine Learning:</b> Exploring machine learning algorithms and
            their applications in real-world problems, including natural
            language processing and computer vision.
          </li>
          <li>
            <b>Cybersecurity:</b> Staying updated on the latest cybersecurity
            trends and best practices to ensure the development of secure
            software applications.
          </li>
          <li>
            <b>Tech Meetups and Conferences:</b> Participating in local and
            international tech meetups and conferences to network with fellow
            professionals and stay informed about industry advancements.
          </li>
          <li>
            <b>Algorithm Optimization:</b> Passionate about optimizing
            algorithms to enhance performance and efficiency in software
            applications.
          </li>
          <li>
            <b>Coding Challenges:</b>Enjoy solving coding challenges on
            platforms like LeetCode, HackerRank, and CodeSignal to continually
            sharpen problem-solving skills.
          </li>
          <li>
            <b>Agile Methodologies:</b> Enthusiastic about implementing Agile
            practices to enhance team collaboration and project management.
          </li>
          <li>
            <b>Blockchain Technology:</b> Interested in the potential of
            blockchain technology and its applications beyond cryptocurrencies,
            such as smart contracts and decentralized applications.
          </li>
          <li>
            <b>Gaming Development:</b> Developing and experimenting with indie
            games using game development frameworks and engines like Unity and
            Unreal Engine.
          </li>
        </ul>
      </div>
    </div>
  );
}
