"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./Link.module.css";

import React from "react";

const Links = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.path}
      className={`${style.navLink} ${pathName === link.path && style.active}`}
    >
      {link.name}
    </Link>
  );
};

export default Links;
