"use client";
import React from "react";

import { ContactForm } from "@/app/ui";

import styles from "./styles.module.css";

export default function ContactMe() {

  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  );
}
