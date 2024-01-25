import React from "react";
import NavLinks from "./headerLinks/NavLinks";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>Header</div>
      <NavLinks />
    </div>
  );
};

export default Header;
