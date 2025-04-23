"use client";
import React, { useState, useEffect } from "react";
import SecondMenu from "../../../../components/Header/Menu/SecondMenu";
import Footer from "../../../../components/Footer/Footer";
import FirstVisitModal from "../../../../components/FirstVisitModal";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/ecbb68b163419596.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";

import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState("About");
  const [isModalOpen, setIsModalOpen] = useState(false); // For FirstVisitModal modal
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false); // For Courses Enquire Now modal
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] =
    useState(false); // For Specialization modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    state: "",
  });
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] =
    useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState(""); // To store the course name for modal title

  const courseSpecializations = {
    "Online BCom": [
      { name: "Accounting and Finance", fees: 100000 },
      { name: "Taxation", fees: 120000 },
      { name: "Banking", fees: 150000 },
    ],
    "Online MA": [
      { name: "English Literature", fees: 130000 },
      { name: "Clinical Psychology", fees: 180000 },
      { name: "Sociology", fees: 160000 },
    ],
    "Online BBA": [
      { name: "Marketing Management", fees: 170000 },
      { name: "Human Resource Management", fees: 165000 },
      { name: "Entrepreneurship", fees: 200000 },
    ],
    "Online MCA": [
      { name: "Data Science", fees: 180000 },
      { name: "Cloud Computing", fees: 200000 },
      { name: "Artificial Intelligence", fees: 220000 },
    ],
    "Online MBA": [
      { name: "Finance", fees: 199000 },
      { name: "Marketing", fees: 210000 },
      { name: "Operations Management", fees: 250000 },
    ],
    "Online MBA with Dual Specialisation": [
      { name: "Finance + Marketing", fees: 299000 },
      { name: "HR + Operations", fees: 299000 },
      { name: "Marketing + International Business", fees: 299000 },
    ],
    "Online BA": [
      { name: "Economics", fees: 100000 },
      { name: "Political Science", fees: 110000 },
      { name: "History", fees: 99000 },
    ],
    "Online MAJMC": [
      { name: "Digital Journalism", fees: 170000 },
      { name: "Advertising and PR", fees: 170000 },
    ],
    "Online MCom": [
      { name: "Financial Management", fees: 120000 },
      { name: "International Business", fees: 130000 },
    ],
    "Online BCA": [
      { name: "Software Development", fees: 160000 },
      { name: "Cybersecurity", fees: 180000 },
      { name: "Web Development", fees: 200000 },
    ],
    "Online MSc": [
      { name: "Applied Mathematics", fees: 250000 },
      { name: "Environmental Science", fees: 240000 },
    ],
    "Online Certificate Programme": [
      { name: "Digital Marketing", fees: 25000 },
      { name: "Business Analytics", fees: 40000 },
      { name: "Project Management", fees: 60000 },
    ],
  };

  useEffect(() => {
    const sections = [
      "About",
      "High",
      "Courses",
      "Course Eligibility",
      "Enquire Now",
      "Certification",
      "Admission",
      "Placement",
      "Review",
    ];

    const handleScroll = () => {
      let currentSection = "About";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsCourseModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      state: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose(); // Close modal after submission
  };

  const handleViewSpecialization = (courseName) => {
    setSelectedCourseName(courseName);
    setSelectedCourseSpecializations(courseSpecializations[courseName] || []);
    setIsSpecializationModalOpen(true);
  };

  const handleCloseSpecializationModal = () => {
    setIsSpecializationModalOpen(false);
    setSelectedCourseSpecializations([]);
    setSelectedCourseName("");
  };

  return (
    <>
      <SecondMenu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <img
            src="/assets/img/mba-distance/amity.jpg"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="hero-image"
            width={240}
            height={240}
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <nav class="Breadcrumb_breadcrumb__j1UHX">
              <span class="Breadcrumb_breadcrumbItem__lnXIo">
                <a class="Breadcrumb_link__zmGnw" href="/">
                  Home
                </a>
                <span class="Breadcrumb_separator__e7M6o">/</span>
              </span>
              <span class="Breadcrumb_breadcrumbItem__lnXIo">
                <a class="Breadcrumb_link__zmGnw" href="/top-university">
                  Colleges
                </a>
                <span class="Breadcrumb_separator__e7M6o">/</span>
              </span>
              <span class="Breadcrumb_breadcrumbItem__lnXIo">
                <span>Amity University Online</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Amity University Online
            </h1>
            <p className="headCarousal_location__7rFlL">Noida, Uttar Pradesh</p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Ranking: 49 (Overall Category)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/naac.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/ugc.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/aicte.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/aiu.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/acu.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
            </div>
            <div className="headCarousal_proceedCompareContainer__rekWb">
              <a href="#">
                <button className="headCarousal_collegeCompare__znhHH">
                  Add To Compare
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="college_collegWrapper__vaQh1">
          <div className="college_collegeContainer__nqZS1">
            <div className="college_dataSection__0M4eV">
              <div className="collegeDetails_detailsPage__0qlWI">
                <div className="collegeDetails_scroller__kwBjm">
                  {[
                    { id: "About", text: "About" },
                    { id: "High", text: "Highlights" },
                    { id: "Courses", text: "Courses" },
                    { id: "Course Eligibility", text: "Course Eligibility" },
                    { id: "Enquire Now", text: "Enquire Now" },
                    { id: "Certification", text: "Certifications" },
                    { id: "Admission", text: "Admission Procedure" },
                    { id: "Placement", text: "Placement" },
                    { id: "Review", text: "Review" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      className="collegeDetails_scrollerElement__iuUFa"
                      id={`link-${item.id}`}
                      href={
                        item.id !== "Enquire Now" ? `#${item.id}` : undefined
                      }
                      onClick={
                        item.id === "Enquire Now" ? openModal : undefined
                      }
                    >
                      <div
                        className={`collegeDetails_sectionBox__ZGGBm ${
                          activeSection === item.id
                            ? "collegeDetails_selectedBox___Y1P_ collegeDetails_textWhite__q6ndV"
                            : "collegeDetails_textBlack__LRxI5"
                        }`}
                      >
                        {item.id === "Enquire Now" ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            <div>{item.text}</div>
                            <div className="college_blink__yxq74" />
                          </div>
                        ) : (
                          item.text
                        )}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="collegeDetails_detailsContainer__6A8oL">
                  <div className="collegeDetails_maxWidth__6vBVL" id="About">
                    <div className="about_collegeDetails__67FzM">
                      <h4
                        style={{
                          fontSize: "24px",
                          margin: "20px 0",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                          fontWeight: "700",
                        }}
                      >
                        Amity University Online
                      </h4>
                      <p
                        style={{
                          fontSize: "16px",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                        }}
                      >
                        The Amity Education Group is a not-for-profit
                        organization that was started in 1986 by the Chauhan
                        family. Today, the University has a presence in more
                        than 11 countries with over 1,75,000 students. To cater
                        to the educational needs of a larger segment of
                        individuals, Amity took the initiative to offer
                        education through the online mode. Thus, Amity
                        University became the first university in India to gain
                        approval from the UGC to offer online degrees in 2009.
                        To ensure that students make the most out of their
                        online learning experience, the university has set up a
                        one-of-its-kind platform, AMIGO, that takes care of all
                        the study-related needs of students. With its innovative
                        thinking and futuristic approach, Amity University is
                        closing the gaps in education by making quality higher
                        education accessible to all.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h4
                        style={{
                          fontSize: "24px",
                          margin: "20px 0",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                          fontWeight: "700",
                        }}
                      >
                        Highlights
                      </h4>
                      <div className="Highlights_grid__zFaon">
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Learn from the Faculty of International Repute
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Advanced Learning Material including physical books,
                            audiobooks, etc
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Real Time Industry Projects for Portfolio Building
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Support Team: Student Relationship Manager
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Career Assistance and Exclusive Virtual Job Fairs
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Guest Lectures and Webinars
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Interview Preparations
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Open Education Policy
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Two Degrees Simultaneously - Free of Cost
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Professional Add-on Courses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
                    <div className="courses_wrapper__5pXR3">
                      <div className="courses_container__c_BRe">
                        <h4
                          style={{
                            fontSize: "24px",
                            margin: "20px 0",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                            fontWeight: "700",
                          }}
                        >
                          Courses
                        </h4>
                        <p className="courses_course_college_name__Reg2z">
                          Explore online learning courses in Amity University
                          Online
                        </p>
                        <table className="courses_course_table__llAtE">
                          <thead style={{ background: "var(--dark-blue)" }}>
                            <tr className="courses_course_head__M4Cun">
                              <th
                                style={{
                                  fontSize: "16px",
                                  fontFamily:
                                    "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                  fontStyle: "normal",
                                }}
                              >
                                Courses
                              </th>
                              <th
                                style={{
                                  fontSize: "16px",
                                  textAlign: "center",
                                  fontFamily:
                                    "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                  fontStyle: "normal",
                                }}
                              >
                                Fee Range
                              </th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="courses_tbody__ZPCxV">
                              <td
                                style={{
                                  fontSize: "16px",
                                  fontFamily:
                                    "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                  fontStyle: "normal",
                                }}
                              >
                                Online BCom
                              </td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 99000-₹ 250000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online BCom")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MA</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 130000-₹ 250000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online MA")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online BBA</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 165000-₹ 225000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online BBA")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MCA</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 170000-₹ 250000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online MCA")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MBA</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 199000-₹ 299000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online MBA")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MBA with Dual Specialisation</td>
                              <td style={{ textAlign: "center" }}>₹ 299000</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization(
                                      "Online MBA with Dual Specialisation"
                                    )
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online BA</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 99000-₹ 170000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online BA")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MAJMC</td>
                              <td style={{ textAlign: "center" }}>₹ 170000</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online MAJMC")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MCom</td>
                              <td style={{ textAlign: "center" }}>₹ 120000</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online MCom")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online BCA</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 150000-₹ 225000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online BCA")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online MSc</td>
                              <td style={{ textAlign: "center" }}>₹ 250000</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization("Online MSc")
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Online Certificate Programme</td>
                              <td style={{ textAlign: "center" }}>
                                ₹ 17000-₹ 75000
                              </td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={() => setIsCourseModalOpen(true)}
                                >
                                  Enquire Now
                                </button>
                                <button
                                  className="courses_viewSpsl__lrjH5"
                                  onClick={() =>
                                    handleViewSpecialization(
                                      "Online Certificate Programme"
                                    )
                                  }
                                >
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Course Eligibility"
                  >
                    <h4
                      style={{
                        fontSize: "24px",
                        margin: "20px 0",
                        fontFamily:
                          "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                        fontStyle: "normal",
                        fontWeight: "700",
                      }}
                    >
                      Courses Eligibility
                    </h4>
                    <div className="courseEligibility_wrapper__WDP1x">
                      <table className="courseEligibility_eligible_table__ZvMdh">
                        <thead>
                          <tr className="courseEligibility_eligible_head__GsY_a">
                            <th>Courses</th>
                            <th>Eligibility</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BCom</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MA</td>
                            <td>
                              Graduate in any field from a recognised university
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BBA</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MCA</td>
                            <td>
                              Graduate in any field from a recognised university
                              with a minimum of 50% marks in aggregate (5%
                              relaxation for SC/ST Categories)
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MBA</td>
                            <td>
                              Graduation in any field with a minimum of 40%
                              marks in aggregate from a recognized university or
                              graduation in any field with less than 40% marks
                              in aggregate + an eligibility test
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BA</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MAJMC</td>
                            <td>
                              Graduate in any field from a recognised university
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MCom</td>
                            <td>
                              Graduate in any field from a recognised university
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BCA</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online Certificate Programme</td>
                            <td>10+2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Enquire Now"
                  >
                    <div className="collegenquiry_collegeform__wTRAT">
                      <h2
                        style={{
                          fontSize: "24px",
                          margin: "20px 0",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                          fontWeight: "700",
                        }}
                      >
                        Get Free Career Consultation
                      </h2>
                      <div className="collegenquiry_form_div__RSaaQ">
                        <form className="collegenquiry_form__uF7mS">
                          <input
                            type="text"
                            placeholder="Name*"
                            name="name"
                            defaultValue=""
                          />
                          <input
                            type="email"
                            placeholder="Email*"
                            name="email"
                            defaultValue=""
                          />
                          <input
                            type="number"
                            placeholder="Phone*"
                            name="phone"
                            defaultValue=""
                          />
                          <select name="program">
                            <option value="" selected>
                              Choose a Program*
                            </option>
                            <option value="Online MBA">Online MBA</option>
                            <option value="Executive MBA">Executive MBA</option>
                            <option value="Online MCA">Online MCA</option>
                            <option value="Online MSC">Online MSC</option>
                            <option value="Online MCOM">Online MCOM</option>
                            <option value="Online MA">Online MA</option>
                            <option value="Online PGDM">Online PGDM</option>
                            <option value="Distance MEd">Distance MEd</option>
                            <option value="PG Diploma">PG Diploma</option>
                            <option value="Online BBA">Online BBA</option>
                            <option value="Online BCA">Online BCA</option>
                            <option value="Online BSC">Online BSC</option>
                            <option value="Online BCom">Online BCom</option>
                            <option value="Online BA">Online BA</option>
                            <option value="Distance BEd">Distance BEd</option>
                            <option value="IT Certifications">
                              IT Certifications
                            </option>
                            <option value="Help Me Decide">
                              Help Me Decide
                            </option>
                          </select>
                          <select name="state">
                            <option value="" selected>
                              State/Province
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                          <button
                            type="submit"
                            className="collegenquiry_submit_btn__cjBuo"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Certification"
                  >
                    <div className="Certificates_wrapper__hjNB4">
                      <div className="Certificates_container__X9Jsj">
                        <div className="Certificates_detail_img_container__jHvTy">
                          <div>
                            <h2
                              style={{
                                fontSize: "24px",
                                margin: "20px 0",
                                fontFamily:
                                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                fontStyle: "normal",
                                fontWeight: "700",
                              }}
                            >
                              Sample Certificate
                            </h2>
                            <div
                              className="Certificates_subHeading__CKwq6"
                              style={{
                                fontSize: "16px",
                                fontFamily:
                                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                fontStyle: "normal",
                              }}
                            >
                              Earn an UGC entitled degree, recognized around the
                              globe
                            </div>
                            <div>
                              <div className="Certificates_pointBox__xwwq4">
                                <div
                                  className="Certificates_point__XYWLq"
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Recognized and accredited degree
                                </div>
                              </div>
                              <div className="Certificates_pointBox__xwwq4">
                                <div
                                  className="Certificates_point__XYWLq"
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  NAAC and AICTE-approved degree
                                </div>
                              </div>
                              <div className="Certificates_pointBox__xwwq4">
                                <div
                                  className="Certificates_point__XYWLq"
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Degree recognized in both private and public
                                  sector
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img
                              alt="certificate_url"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              data-nimg={1}
                              className="Certificates_img__GOe9v"
                              style={{ color: "transparent" }}
                              src="/assets/course/amity-degree.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Admission"
                  >
                    <div className="Admissions_container__lpKQv">
                      <h2
                        style={{
                          fontSize: "24px",
                          margin: "20px 0",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                          fontWeight: "700",
                        }}
                      >
                        Admission Process
                      </h2>
                      <p
                        className="Admissions_description__sKdUj"
                        style={{
                          fontSize: "16px",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                        }}
                      >
                        The admissions process takes place in online mode. Fresh
                        admission starts from the month of January of every
                        year. There are direct admissions, no entrance exam is
                        conducted for the admission process. The admission
                        procedure 2025 for the online course at Amity University
                        Online is as follows:
                      </p>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 1
                        </div>
                        <div
                          className="Admissions_stepText___L_GT"
                          style={{
                            fontSize: "16px",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                          }}
                        >
                          Visit the official website to initiate the application
                          process
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 2
                        </div>
                        <div
                          className="Admissions_stepText___L_GT"
                          style={{
                            fontSize: "16px",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                          }}
                        >
                          Register using essential details such as Name, Email
                          ID, and Contact Details
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 3
                        </div>
                        <div
                          className="Admissions_stepText___L_GT"
                          style={{
                            fontSize: "16px",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                          }}
                        >
                          Receive an email containing the registration number
                          and password
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 4
                        </div>
                        <div
                          className="Admissions_stepText___L_GT"
                          style={{
                            fontSize: "16px",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                          }}
                        >
                          Provide information about education and work
                          experience, followed by an undertaking
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 5
                        </div>
                        <div
                          className="Admissions_stepText___L_GT"
                          style={{
                            fontSize: "16px",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                          }}
                        >
                          Make the payment with the registration amount of INR
                          5,500; additional time is provided for pending
                          payments
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 6
                        </div>
                        <div
                          className="Admissions_stepText___L_GT"
                          style={{
                            fontSize: "16px",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                          }}
                        >
                          Attach the necessary documents, including 10th and
                          12th mark sheets, degree certificates, UG mark sheet
                          and degree, Aadhar Card or any government ID, and a
                          photograph
                        </div>
                      </div>
                      <div className="Admissions_stepHide__nIt_6" />
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Placement"
                  >
                    <div className="placement_container__iALXL">
                      <div>
                        <h2
                          style={{
                            fontSize: "24px",
                            margin: "20px 0",
                            fontFamily:
                              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                            fontStyle: "normal",
                            fontWeight: "700",
                          }}
                        >
                          Online Placement Partners
                        </h2>
                        <h3 className="placement_subHeading__1vY2G">
                          Our students have an opportunity of
                        </h3>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <p
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Learn employability skills through assessments and
                            tests
                          </p>
                        </div>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <p
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Job that suitably fits the student profile
                          </p>
                        </div>
                      </div>
                      <div className="placement_placementBanner__ACCRS">
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 18 LPA
                          </p>
                          <p
                            className="placementBanner_description__O3FqH"
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 25 LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Highest Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">3x</p>
                          <p className="placementBanner_description__O3FqH">
                            Interview Opportunities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <FirstVisitModal closeModal={closeModal} />
          </div>
        </div>
      )}
      {isCourseModalOpen && (
        <div
          className="modal fade show d-block"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <div className="td_form_card_in position-relative">
                  <button
                    type="button"
                    className="btn-close "
                    onClick={handleClose}
                    style={{
                      right: "-10px",
                      height: "5em",
                      width: "3em",
                      top: "-20px",
                    }}
                  ></button>
                  <h6>Struggling with Career Growth?</h6>
                  <h6>Get Free Career Consultation</h6>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a program*</option>
                      <option value="online_mba">Online MBA</option>
                      <option value="executive_mba">Executive MBA</option>
                      <option value="online_mca">Online MCA</option>
                      <option value="online_msc">Online MSC</option>
                      <option value="online_mcom">Online MCOM</option>
                      <option value="online_ma">Online MA</option>
                      <option value="online_pgdm">Online PGDM</option>
                      <option value="distance_med">Distance MEd</option>
                      <option value="pg_diploma">PG Diploma</option>
                      <option value="online_bba">Online BBA</option>
                      <option value="online_bca">Online BCA</option>
                      <option value="online_bsc">Online BSC</option>
                      <option value="online_bcom">Online BCom</option>
                      <option value="online_ba">Online BA</option>
                      <option value="distance_bed">Distance BEd</option>
                      <option value="it_certifications">
                        IT Certifications
                      </option>
                      <option value="help_me_decide">Help Me Decide</option>
                    </select>
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">States/Province*</option>
                      <option value="andhra_pradesh">Andhra Pradesh</option>
                      <option value="arunachal_pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal_pradesh">Himachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya_pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil_nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar_pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west_bengal">West Bengal</option>
                      <option value="andaman_and_nicobar_islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="chandigarh">Chandigarh</option>
                      <option value="dadra_and_nagar_haveli_and_daman_and_diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="lakshadweep">Lakshadweep</option>
                      <option value="delhi">Delhi</option>
                      <option value="puducherry">Puducherry</option>
                    </select>
                    <div className="td_form_card_bottom td_mb_15 mt-3">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium w-100"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>Submit</span>
                        </span>
                      </button>
                    </div>
                  </form>
                  <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0 mt-3">
                    Your personal information is secure with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {isSpecializationModalOpen && (
        <div
          className="modal fade show d-block"
          id="specializationModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="specializationModalLabel"
          aria-hidden="false"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <div className="td_form_card_in position-relative">
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3"
                    onClick={handleCloseSpecializationModal}
                  ></button>
                  <h2 className="td_mb_20">
                    {selectedCourseName} Specializations
                  </h2>
                  <table className="table table-bordered">
                    <thead
                      style={{ background: "var(--dark-blue)", color: "white" }}
                    >
                      <tr>
                        <th>Specialization Name</th>
                        <th style={{ textAlign: "center" }}>Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCourseSpecializations.length > 0 ? (
                        selectedCourseSpecializations.map((spec, index) => (
                          <tr key={index}>
                            <td>{spec.name}</td>
                            <td style={{ textAlign: "center" }}>
                              ₹ {spec.fees.toLocaleString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" style={{ textAlign: "center" }}>
                            No specializations available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <Footer />
    </>
  );
}
