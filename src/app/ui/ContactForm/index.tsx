"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/navigation";

import { ContactFormInputs, contactFormSchema } from "@/lib";

import styles from "./styles.module.css";

export const ContactForm = () => {
  const router = useRouter();
  const [isLoadingSendMessage, setIsLoadingSendMessage] = useState(false);

  const handleSubmit = (values: ContactFormInputs) => {
    setIsLoadingSendMessage((c) => !c);
    setTimeout(() => {
      setIsLoadingSendMessage((c) => !c);
      alert("Email sent successfully");
      router.push("/");
    }, 3000);
    console.info(values);
  };

  return (
    <>
      <Formik<ContactFormInputs>
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={toFormikValidationSchema(contactFormSchema)}
      >
        {({ errors }) => {
          return (
            <Form className={styles["form-container"]}>
              <h1>Contact Me</h1>
              <div className={styles["control-box"]}>
                <label className={styles["form-label"]}>Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className={`${styles.textfield} ${
                    !!errors.name && styles["textfield-error"]
                  }`}
                />
                {!!errors.name && (
                  <div className={styles["label-error"]}>{errors.name}</div>
                )}
              </div>

              <div className={styles["control-box"]}>
                <label className={styles["form-label"]}>Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className={`${styles.textfield} ${
                    !!errors.email && styles["textfield-error"]
                  }`}
                />
                {!!errors.email && (
                  <div className={styles["label-error"]}>{errors.email}</div>
                )}
              </div>

              <div className={styles["control-box"]}>
                <label className={styles["form-label"]}>Message</label>
                <Field
                  as="textarea"
                  type="text"
                  name="message"
                  className={`${styles.textfield} ${styles["text-area-h"]} ${
                    !!errors.message && styles["textfield-error"]
                  }`}
                  placeholder="Message"
                />
                {!!errors.message && (
                  <div className={styles["label-error"]}>{errors.message}</div>
                )}
              </div>

              <button
                disabled={isLoadingSendMessage}
                className={styles.button}
                type="submit"
              >
                {isLoadingSendMessage ? "Sending message...." : "Submit"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
