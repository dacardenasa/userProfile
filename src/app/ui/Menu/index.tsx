"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useWindowSize } from "@/hooks";

import MenuIcon from "@/assets/menu-alt.png";
import CloseMenuIcon from "@/assets/close-alt.png";

import styles from "./styles.module.css";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowSize();

  const toggleMenu = () => setIsMenuOpen((c) => !c);

  useEffect(() => {
    if (size.width >= 768) {
      setIsMenuOpen(false);
    }
  }, [size]);

  return (
    <nav className={styles.container}>
      {size.width && size.width <= 768 ? (
        <>
          <button onClick={toggleMenu} className={styles.button}>
            {isMenuOpen ? (
              <Image
                src={CloseMenuIcon}
                width={50}
                height={50}
                alt="close-menu-icon"
              />
            ) : (
              <Image src={MenuIcon} width={30} height={30} alt="menu-icon" />
            )}
          </button>
        </>
      ) : null}
      <ul
        className={styles["list-container"]}
        style={isMenuOpen ? { visibility: "visible" } : {}}
      >
        <li>
          <Link
            href="/aboutMe"
            {...(isMenuOpen ? { onClick: toggleMenu } : {})}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/interests"
            {...(isMenuOpen ? { onClick: toggleMenu } : {})}
          >
            Interests
          </Link>
        </li>
        <li>
          <Link
            href="/contactMe"
            {...(isMenuOpen ? { onClick: toggleMenu } : {})}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
