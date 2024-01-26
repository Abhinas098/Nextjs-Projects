"use client";
import React, { useState } from "react";
import styles from "./NavLinks.module.css";
import Links from "../link/Links";
import Menu from "@/components/Svgs/Menu";
import Close from "@/components/Svgs/Close";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <Links link={link} key={link.name} />
        ))}
      </div>

      <div className={styles.menu} onClick={() => setOpen((open) => !open)}>
        {!open ? <Menu /> : <Close />}
      </div>
      {open && (
        <div className={styles.responsiveLinks}>
          {links.map((link) => (
            <Links link={link} key={link.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;
