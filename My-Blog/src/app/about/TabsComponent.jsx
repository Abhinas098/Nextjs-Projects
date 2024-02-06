"use client";
import React from "react";
import styles from "./About.module.css";

const TabsComponent = ({ activeTab, handleTabChange }) => {
  return (
    <div className={styles.tabsContainer}>
      <button
        onClick={() => handleTabChange("education")}
        className={activeTab === "education" ? styles.active : ""}
      >
        Education
      </button>
      <button
        onClick={() => handleTabChange("experience")}
        className={activeTab === "experience" ? styles.active : ""}
      >
        Experience
      </button>
      <button
        onClick={() => handleTabChange("skills")}
        className={activeTab === "skills" ? styles.active : ""}
      >
        Skills
      </button>
    </div>
  );
};

export default TabsComponent;
