"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { debounce } from "lodash";
import Menu from "../../../../components/Header/Menu/Menu";
import Footer from "../../../../components/Footer/Footer";
import FirstVisitModal from "../../../../components/FirstVisitModal";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";

export default function Page() {
  const [activeSection, setActiveSection] = useState("About");
  const [isModalOpen, setIsModalOpen] = useState(false); // For FirstVisitModal
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
  const [reviewData, setReviewData] = useState({
    reviewerName: "",
    comment: "",
  });
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] =
    useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const courseSpecializations = {
    "Online MCA": [
      { name: "Cloud Computing", fees: 40000 },
      { name: "Data Science", fees: 42000 },
    ],
    "Online MBA": [
      { name: "Finance", fees: 35000 },
      { name: "Marketing", fees: 35000 },
    ],
    "Online Diploma (DHM)": [{ name: "Hotel Management", fees: 20000 }],
    "Distance MA": [
      { name: "English", fees: 10000 },
      { name: "Sociology", fees: 22000 },
    ],
    "Distance MBA": [{ name: "Human Resource Management", fees: 34000 }],
    "Distance MLIB": [{ name: "Library Science", fees: 9000 }],
    "Distance MSc": [
      { name: "Mathematics", fees: 25000 },
      { name: "Physics", fees: 27000 },
    ],
    "Distance MCA": [{ name: "Software Development", fees: 40000 }],
    "Distance MCom": [{ name: "Accounting", fees: 12400 }],
  };

  const getFeeRange = (courseName) => {
    const fees =
      courseSpecializations[courseName]?.map((spec) => spec.fees) || [];
    if (fees.length === 0) return "N/A";
    const min = Math.min(...fees);
    const max = Math.max(...fees);
    return min === max
      ? `₹ ${min.toLocaleString()}`
      : `₹ ${min.toLocaleString()}-₹ ${max.toLocaleString()}`;
  };

  useEffect(() => {
    const sections = [
      "About",
      "High",
      "Courses",
      "Course Eligibility",
      "Enquire Now",
      "Scholarships",
      "Certification",
      "EMI Details",
      "Admission",
      "Exam",
      "Placement",
      "FAQ's",
      "Review",
    ];

    const handleScroll = debounce(() => {
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
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
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

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e, isCourseModal = false) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      program: form.program.value,
      state: form.state.value,
    };

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      alert("Invalid email format");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Form submitted:", data);
      // Example: await fetch("/api/enquire", { method: "POST", body: JSON.stringify(data) });
      form.reset();
      setFormData({ name: "", email: "", phone: "", program: "", state: "" });
      if (isCourseModal) setIsCourseModalOpen(false);
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewData.reviewerName || reviewData.comment.length < 10) {
      alert("Please provide a name and a review with at least 10 characters.");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Review submitted:", reviewData);
      // Example: await fetch("/api/reviews", { method: "POST", body: JSON.stringify(reviewData) });
      setReviewData({ reviewerName: "", comment: "" });
    } catch (error) {
      alert("Error submitting review");
    } finally {
      setIsLoading(false);
    }
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
      <Head>
        <title>
          Delhi Degree College - Online & Distance Education Courses
        </title>
        <meta
          name="description"
          content="Discover affordable online and distance learning programs at Delhi Degree College, Badarpur, offering MCA, MBA, MA, MSc, MCom, and diploma courses with AICTE and UGC-DEB accreditation."
        />
      </Head>
      <Menu />
      <div>
        <a
          className="float"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918806099993&text=I'm%20looking%20for"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            style={{ color: "white" }}
            className="my_float"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
        <div>
          <button
            className="enquirynow_enquirynow_btn__mRuEZ"
            style={{ transformOrigin: "bottom right" }}
            onClick={() => setIsCourseModalOpen(true)}
            aria-label="Enquire Now"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" />
            </svg>
            Enquire Now
          </button>
        </div>
        <div>
          <div className="headCarousal_collegeCarousal__4a5Bq">
            <Image
              src="https://store.learningroutes.in/images/colleges/Delhi-Degree-College/hero-image/banner.webp"
              fetchPriority="high"
              className="headCarousal_clg_banner__CXazi"
              alt="Delhi Degree College campus banner"
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
                  <span> Delhi Degree College</span>
                </span>
              </nav>
              <h1 className="headCarousal_collegeHeading__KBbuL">
                Delhi Degree College
              </h1>
              <p className="headCarousal_location__7rFlL">
                Badarpur, New Delhi
              </p>
              <p className="headCarousal_ranking__1yTOY">NIRF Rank: N/A</p>
              <div className="headCarousal_accreditation__HUqxZ">
                <Image
                  src="https://store.learningroutes.in/images/colleges/Delhi-Degree-College/accreditations/NAAC.webp"
                  alt="NAAC accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://store.learningroutes.in/images/colleges/Delhi-Degree-College/accreditations/ugc.webp"
                  alt="UGC-DEB accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://store.learningroutes.in/images/colleges/Delhi-Degree-College/accreditations/aicte.webp"
                  alt="AICTE accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
              </div>
              <div className="headCarousal_proceedCompareContainer__rekWb">
                <a href="/top-university">
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
                      { id: "Scholarships", text: "Scholarships" },
                      { id: "Certification", text: "Certifications" },
                      { id: "EMI Details", text: "EMI Details" },
                      { id: "Admission", text: "Admission Procedure" },
                      { id: "Exam", text: "Examination Pattern" },
                      { id: "Placement", text: "Placement" },
                      { id: "FAQ's", text: "FAQ's" },
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
                        <h2 className="about_collegeDetailsHeading__AA_dr">
                          Delhi Degree College
                        </h2>
                        <p className="about_collegeDetailsDescription__7Swyd">
                          Based in Badarpur, New Delhi, Delhi Degree College was
                          founded in 1996. The institute provides affordable
                          full-time and part-time degree programs accredited by
                          AICTE and UGC-DEB. Students can choose from a variety
                          of online and distance learning programs, with fees
                          ranging from ₹6,000 to ₹45,000, covering disciplines
                          such as Business and Management, IT and Software,
                          Humanities, Science, and Hospitality. Delhi Degree
                          College is ideal for students seeking flexible,
                          cost-effective higher education to advance their
                          careers.
                        </p>
                      </div>
                    </div>
                    <div className="collegeDetails_maxWidth__6vBVL" id="High">
                      <div className="Highlights_container__yqw8t">
                        <h2 className="Highlights_heading__QnGK2">
                          Highlights
                        </h2>
                        <div className="Highlights_grid__zFaon">
                          {[
                            "AICTE and UGC-DEB accredited programs",
                            "Affordable fees ranging from ₹6,000 to ₹45,000",
                            "Flexible online and distance learning options",
                            "Scholarships available for eligible students",
                            "Experienced faculty and modern infrastructure",
                          ].map((highlight, index) => (
                            <div
                              className="Highlights_pointContainer__5_snP"
                              key={index}
                            >
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
                              <div>{highlight}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Courses"
                    >
                      <div className="courses_wrapper__5pXR3">
                        <div className="courses_container__c_BRe">
                          <h2 className="courses_heading__nCyjm">Courses</h2>
                          <p className="courses_course_college_name__Reg2z">
                            Explore online and distance learning courses at
                            Delhi Degree College
                          </p>
                          <table className="courses_course_table__llAtE">
                            <thead style={{ background: "var(--dark-blue)" }}>
                              <tr className="courses_course_head__M4Cun">
                                <th>Courses</th>
                                <th style={{ textAlign: "center" }}>
                                  Fee Range
                                </th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                "Online MCA",
                                "Online MBA",
                                "Online Diploma (DHM)",
                                "Distance MA",
                                "Distance MBA",
                                "Distance MLIB",
                                "Distance MSc",
                                "Distance MCA",
                                "Distance MCom",
                              ].map((course, index) => (
                                <tr
                                  className="courses_tbody__ZPCxV"
                                  key={index}
                                >
                                  <td>{course}</td>
                                  <td style={{ textAlign: "center" }}>
                                    {getFeeRange(course)}
                                  </td>
                                  <td
                                    style={{ textAlign: "center" }}
                                    className="group_btn"
                                  >
                                    <button
                                      className="courses_enqnow__8Vb3P"
                                      onClick={() => setIsCourseModalOpen(true)}
                                      aria-label={`Enquire about ${course}`}
                                    >
                                      Enquire Now
                                    </button>
                                    <button
                                      className="courses_viewSpsl__lrjH5"
                                      onClick={() =>
                                        handleViewSpecialization(course)
                                      }
                                      aria-label={`View specializations for ${course}`}
                                    >
                                      View Specialization
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Course Eligibility"
                    >
                      <h2 className="courseEligibility_eligible_heading__5Qd_3">
                        Course Eligibility
                      </h2>
                      <div className="courseEligibility_wrapper__WDP1x">
                        <table className="courseEligibility_eligible_table__ZvMdh">
                          <thead>
                            <tr className="courseEligibility_eligible_head__GsY_a">
                              <th>Courses</th>
                              <th>Eligibility</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                course: "Online MCA",
                                eligibility:
                                  "Bachelor’s degree in any discipline with Mathematics at 10+2 or graduation level",
                              },
                              {
                                course: "Online MBA",
                                eligibility:
                                  "Bachelor’s degree in any discipline with minimum 50% marks",
                              },
                              {
                                course: "Online Diploma (DHM)",
                                eligibility:
                                  "10+2 or equivalent from a recognized board",
                              },
                              {
                                course: "Distance MA",
                                eligibility:
                                  "Bachelor’s degree in any discipline",
                              },
                              {
                                course: "Distance MBA",
                                eligibility:
                                  "Bachelor’s degree in any discipline with minimum 50% marks",
                              },
                              {
                                course: "Distance MLIB",
                                eligibility:
                                  "Bachelor’s degree in Library Science or equivalent",
                              },
                              {
                                course: "Distance MSc",
                                eligibility:
                                  "Bachelor’s degree in relevant science discipline",
                              },
                              {
                                course: "Distance MCA",
                                eligibility:
                                  "Bachelor’s degree with Mathematics at 10+2 or graduation level",
                              },
                              {
                                course: "Distance MCom",
                                eligibility:
                                  "Bachelor’s degree in Commerce or equivalent",
                              },
                            ].map((item, index) => (
                              <tr
                                className="courseEligibility_eligible_tbody__q_tOM"
                                key={index}
                              >
                                <td>{item.course}</td>
                                <td>{item.eligibility}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Enquire Now"
                    >
                      <div className="collegenquiry_collegeform__wTRAT">
                        <h2 className="collegenquiry_form_heading__GszFG">
                          Get Free Career Consultation
                        </h2>
                        <div className="collegenquiry_form_div__RSaaQ">
                          <form
                            className="collegenquiry_form__uF7mS"
                            onSubmit={handleFormSubmit}
                          >
                            <input
                              type="text"
                              placeholder="Name*"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="email"
                              placeholder="Email*"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="number"
                              placeholder="Phone*"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                            <select
                              name="program"
                              value={formData.program}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Choose a Program*</option>
                              <option value="Online MCA">Online MCA</option>
                              <option value="Online MBA">Online MBA</option>
                              <option value="Online Diploma (DHM)">
                                Online Diploma (DHM)
                              </option>
                              <option value="Distance MA">Distance MA</option>
                              <option value="Distance MBA">Distance MBA</option>
                              <option value="Distance MLIB">
                                Distance MLIB
                              </option>
                              <option value="Distance MSc">Distance MSc</option>
                              <option value="Distance MCA">Distance MCA</option>
                              <option value="Distance MCom">
                                Distance MCom
                              </option>
                              <option value="Help Me Decide">
                                Help Me Decide
                              </option>
                            </select>
                            <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                            >
                              <option value="">State/Province*</option>
                              {[
                                "Andhra Pradesh",
                                "Arunachal Pradesh",
                                "Assam",
                                "Bihar",
                                "Chhattisgarh",
                                "Goa",
                                "Gujarat",
                                "Haryana",
                                "Himachal Pradesh",
                                "Jharkhand",
                                "Karnataka",
                                "Kerala",
                                "Madhya Pradesh",
                                "Maharashtra",
                                "Manipur",
                                "Meghalaya",
                                "Mizoram",
                                "Nagaland",
                                "Odisha",
                                "Punjab",
                                "Rajasthan",
                                "Sikkim",
                                "Tamil Nadu",
                                "Telangana",
                                "Tripura",
                                "Uttar Pradesh",
                                "Uttarakhand",
                                "West Bengal",
                                "Andaman and Nicobar Islands",
                                "Chandigarh",
                                "Dadra and Nagar Haveli and Daman and Diu",
                                "Lakshadweep",
                                "Delhi",
                                "Puducherry",
                              ].map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                            <button
                              type="submit"
                              className="collegenquiry_submit_btn__cjBuo"
                              disabled={isLoading}
                            >
                              {isLoading ? "Submitting..." : "Submit"}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Scholarships"
                    >
                      <div className="scholarshop_container__KSXI8">
                        <h2 className="scholarshop_heading__wLasH">
                          Scholarships
                        </h2>
                        <div>
                          <p className="scholarshop_scholarshipDetail__m_Jhr">
                            Delhi Degree College offers scholarships for
                            meritorious students and those from economically
                            weaker sections. Eligible candidates can apply for
                            scholarships covering up to 50% of tuition fees
                            based on academic performance or financial need.
                            Contact the admission office for detailed criteria
                            and application process.
                          </p>
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
                              <h2 className="Certificates_heading__Jr9Js">
                                Sample Certificate
                              </h2>
                              <div className="Certificates_subHeading__CKwq6">
                                Earn a UGC-DEB and AICTE-entitled degree,
                                recognized globally
                              </div>
                              <div>
                                {[
                                  "AICTE and UGC-DEB accredited",
                                  "Practical and industry-oriented curriculum",
                                  "Flexible learning schedules",
                                ].map((point, index) => (
                                  <div
                                    className="Certificates_pointBox__xwwq4"
                                    key={index}
                                  >
                                    <Image
                                      alt="Check icon"
                                      loading="lazy"
                                      width={20}
                                      height={20}
                                      decoding="async"
                                      src="/assets/simpli-images/check.webp"
                                    />
                                    <div className="Certificates_point__XYWLq">
                                      {point}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              {/* <Image
                                alt="Delhi Degree College sample degree certificate"
                                loading="lazy"
                                width={300}
                                height={200}
                                decoding="async"
                                className="Certificates_img__GOe9v"
                                src="/assets/course/ddc-degree.jpeg"
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="EMI Details"
                    >
                      <div className="emi_container__k2QbZ">
                        <h2 className="emi_heading__fOAZV">EMI Details</h2>
                        <div>
                          <div className="emi_emiDesc__GhNMM">
                            <p className="emi_emiDetail__gOPHp">
                              Flexible EMI options available for course fees,
                              with 6 to 12-month plans at low or no interest.
                              Contact the admission office for details.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Admission"
                    >
                      <div className="Admissions_container__lpKQv">
                        <h2 className="Admissions_heading__paqsP">
                          Admission Process
                        </h2>
                        <p className="Admissions_description__sKdUj">
                          The admission process is conducted online, with fresh
                          admissions starting in January each year. No entrance
                          exam is required. The 2025 admission procedure for
                          online and distance courses at Delhi Degree College is
                          as follows:
                        </p>
                        {[
                          "Visit the official website of Delhi Degree College.",
                          "Complete the online application form with personal details.",
                          "Select the desired course and specialization.",
                          "Pay the course fees to confirm admission.",
                          "Receive login credentials upon confirmation.",
                        ].map((step, index) => (
                          <div className="Admissions_step__4mDzm" key={index}>
                            <div className="Admissions_stepCount__f9yhl">
                              STEP {index + 1}
                            </div>
                            <div className="Admissions_stepText___L_GT">
                              {step}
                            </div>
                          </div>
                        ))}
                        <div className="Admissions_stepHide__nIt_6" />
                      </div>
                    </div>
                    <div className="collegeDetails_maxWidth__6vBVL" id="Exam">
                      <div className="Exam_container__muz_Z">
                        <h2 className="Exam_heading__jCWCC">
                          Examination Pattern
                        </h2>
                        <div>
                          <div className="Exam_examDesc___HPjs">
                            <p className="Exam_text__iZpVR">
                              Examinations at Delhi Degree College are conducted
                              online with remote proctoring. Assessments include
                              assignments, projects, and semester-end exams.
                              Detailed schedules are provided via the learning
                              portal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Placement"
                    >
                      <div className="placement_container__iALXL">
                        <div>
                          <h2 className="placement_heading__iEHZj">
                            Online Placement Partners
                          </h2>
                          <h3 className="placement_subHeading__1vY2G">
                            Our students have opportunities to:
                          </h3>
                          {[
                            "Develop employability skills through workshops",
                            "Connect with top recruiters from leading companies",
                            "Secure jobs aligned with their profiles",
                          ].map((point, index) => (
                            <div
                              className="placementSubpoint_subHeadingPoints__uE7MR"
                              key={index}
                            >
                              <Image
                                alt="Check icon"
                                loading="lazy"
                                width={20}
                                height={20}
                                decoding="async"
                                src="/assets/simpli-images/check.webp"
                              />
                              <p>{point}</p>
                            </div>
                          ))}
                        </div>
                        <div className="placement_placementBanner__ACCRS">
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ 5 LPA
                            </p>
                            <p className="placementBanner_description__O3FqH">
                              Average Salary
                            </p>
                          </div>
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ 10 LPA
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
                        {/* <h3 className="placement_heading__iEHZj">
                          Our Students Work At
                        </h3>
                        <div className="partners_container___c9cx">
                          {[
                            {
                              name: "Wipro",
                              src: "/assets/simpli-images/partners/wipro.webp",
                            },
                            {
                              name: "TCS",
                              src: "/assets/simpli-images/partners/tcs.webp",
                            },
                            {
                              name: "Cognizant",
                              src: "/assets/simpli-images/partners/cognizant.webp",
                            },
                            {
                              name: "HCL",
                              src: "/assets/simpli-images/partners/hcl.webp",
                            },
                            {
                              name: "Tech Mahindra",
                              src: "/assets/simpli-images/partners/techmahindra.webp",
                            },
                          ].map((partner, index) => (
                            <div key={index}>
                              <div className="partners_imgBox__yD_6o">
                                <Image
                                  alt={`${partner.name} placement logo`}
                                  fetchPriority="high"
                                  width={122}
                                  height={95}
                                  decoding="async"
                                  className="partners_plac_img__htNsk"
                                  src={partner.src}
                                />
                              </div>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="collegeDetails_maxWidth__6vBVL" id="FAQ's">
                      <div className="faq_container__qXyX9">
                        <h2 className="faq_heading__i5z0v">FAQ's</h2>
                        <div className="faq_faqDesc__c2z0r">
                          <p className="faq_text__uXj2k">
                            <strong>Q: Are the degrees recognized?</strong>
                            <br />
                            A: Yes, all degrees are accredited by AICTE and
                            UGC-DEB, recognized globally.
                            <br />
                            <br />
                            <strong>Q: What is the mode of examination?</strong>
                            <br />
                            A: Examinations are conducted online with remote
                            proctoring.
                            <br />
                            <br />
                            <strong>Q: Are scholarships available?</strong>
                            <br />
                            A: Yes, scholarships are offered based on merit and
                            financial need.
                          </p>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                      <div className="CollegeReview_college_page_details_review_container__KbbIU">
                        <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                          Delhi Degree College Review
                        </h2>
                        <div>
                          <form onSubmit={handleReviewSubmit}>
                            <div className="CollegeReview_college_page_details_review_form_container__rP5km">
                              <div className="CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd">
                                <p className="CollegeReview_college_page_details_review_form_rating_count__oLqL0">
                                  0 out of 5
                                </p>
                                <div>
                                  {Array(5)
                                    .fill()
                                    .map((_, index) => (
                                      <span className="star" key={index}>
                                        <Image
                                          alt="Star rating"
                                          loading="lazy"
                                          width={20}
                                          height={20}
                                          decoding="async"
                                          className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                          src="/assets/simpli-images/Star-Two.webp"
                                        />
                                      </span>
                                    ))}
                                </div>
                              </div>
                              <div className="CollegeReview_rating_form_container__q_Xvp">
                                <input
                                  className="CollegeReview_reviewer_name__Fdlnr"
                                  type="text"
                                  placeholder="Enter your name"
                                  required
                                  name="reviewerName"
                                  value={reviewData.reviewerName}
                                  onChange={handleReviewChange}
                                  aria-label="Reviewer name"
                                />
                                <textarea
                                  placeholder="Write your review (minimum 10 characters)"
                                  className="CollegeReview_college_page_details_review_form_input__niDf2"
                                  name="comment"
                                  required
                                  value={reviewData.comment}
                                  onChange={handleReviewChange}
                                  aria-label="Review comment"
                                />
                                <button
                                  className="CollegeReview_college_page_details_review_form_btn__xh_S#pragma once
Sn"
                                  disabled={isLoading}
                                  aria-label="Submit review"
                                >
                                  {isLoading ? "Submitting..." : "Send message"}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_container__m7rGG" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          id="firstVisitModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="firstVisitModalLabel"
          aria-hidden="false"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3"
                  onClick={closeModal}
                  aria-label="Close first visit modal"
                ></button>
                <FirstVisitModal closeModal={closeModal} />
              </div>
            </div>
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
                    aria-label="Close course enquiry modal"
                    style={{
                      right: "-10px",
                      height: "5em",
                      width: "3em",
                      top: "-20px",
                    }}
                  ></button>
                  <h3>Struggling with Career Growth?</h3>
                  <h2 className="td_mb_20">Get Free Career Consultation</h2>
                  <form onSubmit={(e) => handleFormSubmit(e, true)}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      aria-label="Name"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      aria-label="Email"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      aria-label="Phone"
                    />
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      aria-label="Program"
                    >
                      <option value="">Choose a program*</option>
                      <option value="Online MCA">Online MCA</option>
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online Diploma (DHM)">
                        Online Diploma (DHM)
                      </option>
                      <option value="Distance MA">Distance MA</option>
                      <option value="Distance MBA">Distance MBA</option>
                      <option value="Distance MLIB">Distance MLIB</option>
                      <option value="Distance MSc">Distance MSc</option>
                      <option value="Distance MCA">Distance MCA</option>
                      <option value="Distance MCom">Distance MCom</option>
                      <option value="Help Me Decide">Help Me Decide</option>
                    </select>
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      aria-label="State"
                    >
                      <option value="">States/Province*</option>
                      {[
                        "Andhra Pradesh",
                        "Arunachal Pradesh",
                        "Assam",
                        "Bihar",
                        "Chhattisgarh",
                        "Goa",
                        "Gujarat",
                        "Haryana",
                        "Himachal Pradesh",
                        "Jharkhand",
                        "Karnataka",
                        "Kerala",
                        "Madhya Pradesh",
                        "Maharashtra",
                        "Manipur",
                        "Meghalaya",
                        "Mizoram",
                        "Nagaland",
                        "Odisha",
                        "Punjab",
                        "Rajasthan",
                        "Sikkim",
                        "Tamil Nadu",
                        "Telangana",
                        "Tripura",
                        "Uttar Pradesh",
                        "Uttarakhand",
                        "West Bengal",
                        "Andaman and Nicobar Islands",
                        "Chandigarh",
                        "Dadra and Nagar Haveli and Daman and Diu",
                        "Lakshadweep",
                        "Delhi",
                        "Puducherry",
                      ].map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <div className="td_form_card_bottom td_mb_15 mt-3">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium w-100"
                        disabled={isLoading}
                        aria-label="Submit enquiry"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>{isLoading ? "Submitting..." : "Submit"}</span>
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
      {isSpecializationModalOpen && (
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
                    aria-label="Close specialization modal"
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
      )}
      <Footer />
    </>
  );
}
