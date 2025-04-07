"use client";

import React, { useState } from "react";
import Link from "next/link";

const educationLevels = ["High School", "Undergraduate", "Postgraduate"];

const CollegeFinderPage = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleSelection = (level) => {
    setSelectedEducation(level);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Navbar */}
      <div className={styles.navbarContainer} />

      {/* Form Section */}
      <div className={styles.formContainer}>
        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>Pick Your Level Of Education</h3>
        </div>

        {/* Education Level Selection */}
        <div className={styles.selectionContainer}>
          {educationLevels.map((level) => (
            <div
              key={level}
              className={`${styles.selectionBox} ${
                selectedEducation === level ? styles.selectedBox : ""
              }`}
              onClick={() => handleSelection(level)}
            >
              <p className={styles.selectionText}>{level}</p>
              {selectedEducation === level && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="2"
                  className={styles.checkIcon}
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button className={styles.nextButton} disabled={!selectedEducation}>
            {selectedEducation ? (
              <Link
                href="/What-Was-Your-Score-In-Last-Degree"
                className={styles.link}
              >
                NEXT
              </Link>
            ) : (
              "NEXT"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinderPage;
