import React from "react";

import { UserInfo } from "../userInfo";
import { Menu } from "../Menu";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <UserInfo />
      <Menu />
    </div>
  );
};
