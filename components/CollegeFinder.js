// components/CollegeFinder.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CollegeFinder.module.css";

export default function CollegeFinder() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const steps = [
    {
      question: "Pick Your Level Of Education",
      options: [
        "Completed 12th",
        "College Graduate",
        "Postgraduate",
        "Diploma Holder",
      ],
      key: "educationLevel",
    },
    {
      question: "What Was Your Score In Last Degree",
      options: ["Below 50%", "50%-80%", "Above 80%"],
      key: "score",
    },
    {
      question: "Are You Employed Currently?",
      options: ["Yes", "No"],
      key: "employment",
    },
    {
      question: "What Mode Of Degree Are You Interested In?",
      options: [
        "Online Programming",
        "Online/Distance Programming",
        "Distance Programming",
      ],
      key: "degreeMode",
    },
    {
      question: "Select The Course You Wish To Pursue",
      options: ["Online MBA", "Online BBA", "Online BCA", "Distance BCom"],
      key: "course",
    },
    {
      question: "Choose Your Desired Specialisation",
      options: [
        "Marketing Management",
        "Human Resource Management",
        "Finance Management",
        "Finance and Marketing",
        "Human Resource Management and Finance",
        "IT Management",
        "Project Management",
        "Operations Management",
        "Retail Management",
        "Healthcare Management",
        "International Business",
        "Supply Chain Management",
        "Others",
      ],
      key: "specialisation",
    },
    {
      question: "Your Preferred Mode Of Study",
      options: [
        "Courses with live and recorded session",
        "Courses with recorded session",
      ],
      key: "studyMode",
    },
    {
      question: "What Are Your Goals?",
      options: [
        "Affordable Fee Structure + Placement Opportunities",
        "Upskill Myself + Build Professional Network",
        "Enhanced Professional Opportunities + Higher Salary Packages",
        "All of the above",
      ],
      key: "goals",
    },
    {
      question: "How Much Are You Planning To Spend?",
      options: [
        "Less than 1 Lacs",
        "1 Lacs - 2.5 Lacs",
        "2.5 Lacs - 4.2 Lacs",
        "4.2 Lacs - 6 Lacs",
        "Above 6 Lacs",
      ],
      key: "budget",
    },
    {
      question: "Want To Avail Flexible Payment Through EMIs?",
      options: ["Yes", "No"],
      key: "emi",
    },
  ];

  const totalSteps = steps.length;
  const progressPercentage =
    step <= totalSteps ? ((step - 1) / totalSteps) * 100 : 100;

  const handleOptionSelect = (key, option) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: option,
    }));
  };

  const handleNextClick = () => {
    if (step <= steps.length && answers[steps[step - 1].key]) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://netcomindia.xyz/api/college-finder-submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      }
    );

    if (response.ok) {
      router.push("/top-university");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.collegeFinder}>
      <div className={styles.container}>
        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className={styles.progressText}>
          Step {step > totalSteps ? totalSteps : step} of {totalSteps + 1}
        </p>

        <h3 className={styles.heading}>
          {step <= steps.length ? steps[step - 1].question : "Submit"}
        </h3>

        {step <= steps.length && (
          <>
            <div className={styles.optionsGrid}>
              {steps[step - 1].options.map((option, index) => (
                <div
                  key={index}
                  className={`${styles.optionCard} ${
                    answers[steps[step - 1].key] === option
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect(steps[step - 1].key, option)
                  }
                >
                  <span className={styles.title}>{option}</span>
                  {answers[steps[step - 1].key] === option && (
                    <span className={styles.tick}>✓</span>
                  )}
                </div>
              ))}
            </div>
            <button
              className={styles.nextButton}
              onClick={handleNextClick}
              disabled={!answers[steps[step - 1].key]}
            >
              Next
            </button>
          </>
        )}

        {step > steps.length && (
          <form onSubmit={handleSubmit}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
