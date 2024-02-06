"use client";
import Image from "next/image";
import style from "./About.module.css";
import TabsComponent from "./TabsComponent";
import { useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Reactjs",
  "Redux",
  "Nextjs",
  "Firebase",
  "MongoDb",
  "Python",
  "Php",
];

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className={style.main}>
      <div className={style.imgContainer}>
        <Image
          src="https://avatars.githubusercontent.com/u/88656609?v=4"
          alt="Description of the image"
          fill
        />
      </div>
      <div className={style.contentContainer}>
        <h1>About Me</h1>
        <p className={style.content}>
          Hey there, I'm <i>Abhinas Dash</i>, a 2022 BCA graduate from Berhmapur
          University, With a strong foundation in programming and a passion for
          front-end development, I specialize in <i> React.js </i>
          and
          <i> Next.js </i>Excited to embark on a career journey where I can
          leverage my skills to create innovative and responsive web
          applications.
        </p>
        <br />
        <TabsComponent
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
        <div className={style.tabContent}>
          {activeTab === "education" && (
            <div className={style.career}>
              <div>
                <h3>Berhmapur University </h3>
                <p>BCA (Batchelor of Computer Application) - (2022 Passout)</p>
              </div>
              <br />
              <div>
                <h3>Tara Tarini Govt. College</h3>
                <p>12 th science - 2019</p>
              </div>
            </div>
          )}
          {activeTab === "experience" && (
            <div className={style.career}>
              <div className={style.exp}>
                <h3>Sharpener Tech</h3>
                <p>Front-end (Reactjs) Trainee (2022-2023)</p>
              </div>
              <br />
              <div className={style.exp}>
                <h3>Oasys Infobyte</h3>
                <p>Web Developer Intern - 2022</p>
              </div>
            </div>
          )}
          {activeTab === "skills" && (
            <div className={style.skills}>
              <ul className={style.skillList}>
                {skills.map((skill) => (
                  <li key={skill} className={style.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
