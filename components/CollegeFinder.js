// components/CollegeFinder.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./CollegeFinder.module.css";

export default function CollegeFinder() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    birthdate: "", // Added birthdate
    program: "", // Added program
    province: "", // Added province
  });

  const router = useRouter(); // Initialize router

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextClick = () => {
    if (step <= steps.length && answers[steps[step - 1].key]) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...answers, ...formData });
    // Redirect to top-university page
    router.push("/top-university");
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
          {step <= steps.length ? steps[step - 1].question : "Enquiry Form"}
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

        {step === steps.length + 1 && (
          <form className={styles.enquiryForm} onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Birthdate Field */}
            <div className={styles.formGroup}>
              <label>Date of Birth</label>
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Field */}
            <div className={styles.formGroup}>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Choose Program Field */}
            <div className={styles.formGroup}>
              <label>Choose Program</label>
              <select
                name="program" // Changed className to name
                value={formData.program}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a Program</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="arts">Arts</option>
                <option value="science">Science</option>
              </select>
            </div>

            {/* Select Province Field */}
            <div className={styles.formGroup}>
              <label>Select Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a Province</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Goa">Goa</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
