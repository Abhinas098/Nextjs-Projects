"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        `service_6vmnmqy`,
        `template_lgdne75`,
        form.current,
        `UlAq-rJGb_lA2l9_i`
      )
      .then(
        (result) => {
          toast.success(result.text);
          form.current.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  useEffect(() => {
    form?.current?.querySelector("input")?.focus();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form ref={form} onSubmit={sendEmail} className={styles.container}>
        <h1>Get in touch</h1>
        <div className={styles.block}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className={styles.block}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            name="phone"
            autoComplete="tel"
            required
          />
        </div>
        <div className={styles.block}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" name="message" required></textarea>
        </div>
        <div className={styles.block}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
