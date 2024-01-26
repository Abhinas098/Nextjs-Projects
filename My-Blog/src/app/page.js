"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Linkdin from "@/Icons/Linkdin";
import Github from "@/Icons/Github";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Abhinas Dash</h1>
        <p className={styles.desc}>
          🚀 Aspiring React.js Developer | Passionate about creating web
          applications. <br /> <br />
          🌱 Proficient in a wide range of technologies, including React.js, for
          building dynamic user interfaces, <br /> <br />
          👨‍💻 Learning Next.js for creating performant and SEO-friendly
          full-stack web applications
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link target="_blank" href="https://abhinas.vercel.app">
              Portfolio
            </Link>
          </button>
          <button className={styles.button}>
            <Link href="/contact">Contact</Link>
          </button>
        </div>
        <div className={styles.links}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/abhinas-dash/"
          >
            <Linkdin />
          </Link>
          <Link target="_blank" href="https://github.com/Abhinas098">
            <Github />
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          fill
          src="https://avatars.githubusercontent.com/u/88656609?v=4"
          alt="Description of the image"
        />
      </div>
    </main>
  );
}
