import React from "react";
import Image from "next/image";
import Link from "next/link";

import UserImage from "@/assets/myprofilePicture.png";

import styles from "./styles.module.css";

export const UserInfo = () => {
  return (
    <Link href="/">
      <div className={styles.container}>
        <Image
          src={UserImage}
          width={50}
          height={50}
          alt="user-image"
          style={{ borderRadius: 100 }}
        />
        <p>Diego Cardenas</p>
      </div>
    </Link>
  );
};
