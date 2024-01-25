import React from "react";
import Link from "../link/Links";
import styles from "./NavLinks.module.css";
import Links from "../link/Links";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Links link={link} key={link.name} />
      ))}
    </div>
  );
};

export default NavLinks;
