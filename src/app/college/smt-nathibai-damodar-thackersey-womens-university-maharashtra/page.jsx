"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { debounce } from "lodash";

// Dynamically import components with SSR disabled
const Menu = dynamic(() => import("../../../../components/Header/Menu/Menu"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../../components/Footer/Footer"), {
  ssr: false,
});
const EnquiryModel = dynamic(
  () => import("../../../../components/EnquiryModel"),
  { ssr: false }
);

// CSS imports
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
  const [showModal, setShowModal] = useState(false);
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] =
    useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    state: "",
  });
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] =
    useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reviewFormData, setReviewFormData] = useState({
    reviewerName: "",
    comment: "",
  });

  const courseSpecializations = {
    "Distance BA": [
      { name: "English", fees: 17790 },
      { name: "History", fees: 17790 },
      { name: "Sociology", fees: 17790 },
    ],
    "Distance BCom": [{ name: "Accountancy", fees: 17790 }],
    "Distance MA": [
      { name: "Education", fees: 24960 },
      { name: "English", fees: 24960 },
    ],
    "Distance MCom": [{ name: "Commerce", fees: 24960 }],
    "Distance PG Diploma": [{ name: "Early Childhood Education", fees: 15000 }],
    "Distance Certificate": [{ name: "Guidance and Counselling", fees: 5000 }],
  };

  const getFeeRange = (courseName) => {
    const fees =
      courseSpecializations[courseName]?.map((spec) => spec.fees) || [];
    if (fees.length === 0) return "Contact for details";
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
      "Certification",
      "Admission",
      "Placement",
      "Review",
    ];

    const handleScroll = debounce(() => {
      const scrollY = window.scrollY + 100;
      let closestSection = "About";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const distance = Math.abs(scrollY - element.offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      setActiveSection(closestSection);
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleHeaderScroll = () => {
      setFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleHeaderScroll);
      handleScroll.cancel();
    };
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    setReviewFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Invalid email format");
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Phone number must be 10 digits");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Form submitted:", formData);
      handleCloseModal();
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnquirySubmit = async (e) => {
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
    if (!/^[0-9]{10}$/.test(data.phone)) {
      alert("Phone number must be 10 digits");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Enquiry submitted:", data);
      form.reset();
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        state: "",
      });
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewFormData.reviewerName.trim()) {
      alert("Name is required");
      return;
    }
    if (!reviewFormData.comment.trim()) {
      alert("Review comment is required");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Review submitted:", reviewFormData);
      setReviewFormData({ reviewerName: "", comment: "" });
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

  const states = [
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
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
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
  ];

  return (
    <>
      <Head>
        <title>
          SNDT Women's University, Maharashtra - Courses & Admissions
        </title>
        <meta
          name="description"
          content="Explore distance learning programs at Smt. Nathibai Damodar Thackersey Women's University, Maharashtra, including BA, BCom, MA, MCom, and more."
        />
        <meta
          property="og:title"
          content="SNDT Women's University, Maharashtra"
        />
        <meta
          property="og:description"
          content="Explore distance learning programs at SNDT Women's University."
        />
        <meta
          property="og:image"
          content="https://store.learningroutes.in/images/colleges/Smt-Nathibai-Damodar-Thackersey-Women_s-University-Maharashtra/hero-image/banner.webp"
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/Smt-Nathibai-Damodar-Thackersey-Women_s-University-Maharashtra/hero-image/banner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="SNDT Women's University campus banner"
            width={240}
            height={240}
            layout="responsive"
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <nav className="Breadcrumb_breadcrumb__j1UHX">
              <span className="Breadcrumb_breadcrumbItem__lnXIo">
                <a className="Breadcrumb_link__zmGnw" href="/">
                  Home
                </a>
                <span className="Breadcrumb_separator__e7M6o">/</span>
              </span>
              <span className="Breadcrumb_breadcrumbItem__lnXIo">
                <a className="Breadcrumb_link__zmGnw" href="/top-university">
                  Colleges
                </a>
                <span className="Breadcrumb_separator__e7M6o">/</span>
              </span>
              <span className="Breadcrumb_breadcrumbItem__lnXIo">
                <span>SNDT Women's University, Maharashtra</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Smt. Nathibai Damodar Thackersey Women's University, Maharashtra
            </h1>
            <p className="headCarousal_location__7rFlL">Mumbai, Maharashtra</p>
            <p className="headCarousal_ranking__1yTOY">NIRF Rank: ---</p>
            <div className="headCarousal_accreditation__HUqxZ">
              <Image
                src="https://store.learningroutes.in/images/colleges/Smt-Nathibai-Damodar-Thackersey-Women_s-University-Maharashtra/accreditations/NAAC A.webp"
                alt="NAAC A accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <Image
                src="https://store.learningroutes.in/images/colleges/Smt-Nathibai-Damodar-Thackersey-Women_s-University-Maharashtra/accreditations/UGC.webp"
                alt="UGC accreditation"
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
                    { id: "Certification", text: "Certifications" },
                    { id: "Admission", text: "Admission Procedure" },
                    { id: "Placement", text: "Placement" },
                    { id: "Review", text: "Review" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      className="collegeDetails_scrollerElement__iuUFa"
                      id={`link-${item.id}`}
                      href={`#${item.id}`}
                      onClick={
                        item.id === "Enquire Now" ? handleOpenModal : undefined
                      }
                      aria-current={
                        activeSection === item.id ? "true" : undefined
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
                        Smt. Nathibai Damodar Thackersey Women's University,
                        Maharashtra
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Established in 1916, SNDT is the first Women’s
                        university in India as well as South-East Asia.
                        Headquartered in Churchgate Campus, Mumbai, this
                        University is providing quality education to thousands
                        of women in various disciplines. The Centre for Distance
                        Education (CDE) offers several certificate/diploma/
                        degree/post-graduate courses in various disciplines to
                        thousands of girls/ housewives/working women who could
                        not complete their education (not even SSC/HSC), but are
                        strongly motivated to upgrade their educational and/or
                        professional qualifications.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "Approved by renowned governing bodies.",
                          "Affordable fees.",
                          "UG and PG liberal programmes",
                          "Job-oriented short-term courses",
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
                  <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
                    <div className="courses_wrapper__5pXR3">
                      <div className="courses_container__c_BRe">
                        <h2 className="courses_heading__nCyjm">Courses</h2>
                        <p className="courses_course_college_name__Reg2z">
                          Explore online learning courses in Smt. Nathibai
                          Damodar Thackersey Women's University, Maharashtra
                        </p>
                        <table className="courses_course_table__llAtE">
                          <thead style={{ background: "var(--dark-blue)" }}>
                            <tr className="courses_course_head__M4Cun">
                              <th>Courses</th>
                              <th style={{ textAlign: "center" }}>Fee Range</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                name: "Distance BA",
                                feeRange: getFeeRange("Distance BA"),
                              },
                              {
                                name: "Distance BCom",
                                feeRange: getFeeRange("Distance BCom"),
                              },
                              {
                                name: "Distance MA",
                                feeRange: getFeeRange("Distance MA"),
                              },
                              {
                                name: "Distance MCom",
                                feeRange: getFeeRange("Distance MCom"),
                              },
                              {
                                name: "Distance PG Diploma",
                                feeRange: getFeeRange("Distance PG Diploma"),
                              },
                              {
                                name: "Distance Certificate",
                                feeRange: getFeeRange("Distance Certificate"),
                              },
                            ].map((course, index) => (
                              <tr className="courses_tbody__ZPCxV" key={index}>
                                <td>{course.name}</td>
                                <td style={{ textAlign: "center" }}>
                                  {course.feeRange}
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                    aria-label={`Enquire about ${course.name}`}
                                  >
                                    Enquire Now
                                  </button>
                                  <button
                                    className="courses_viewSpsl__lrjH5"
                                    onClick={() =>
                                      handleViewSpecialization(course.name)
                                    }
                                    aria-label={`View specializations for ${course.name}`}
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
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance BA</td>
                            <td>
                              Candidates who have cleared their 12th Standard or
                              equivalent examinations from a recognized
                              Council/Board can apply for the course.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance BCom</td>
                            <td>
                              Candidates who have cleared their 12th Standard or
                              equivalent examinations from a recognized
                              Council/Board can apply for the course.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance MA</td>
                            <td>
                              Candidates must have a Bachelor’s Degree in any
                              discipline from a recognized Indian/Foreign
                              University.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance MCom</td>
                            <td>
                              Candidates must have a Bachelor’s Degree in any
                              discipline from a recognized Indian/Foreign
                              University.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance PG Diploma</td>
                            <td>
                              Candidates must have a Bachelor’s Degree in any
                              discipline from a recognized Indian/Foreign
                              University.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance Certificate</td>
                            <td>
                              Candidates who have cleared their 10th Standard or
                              equivalent examinations from a recognized
                              Council/Board can apply for the course.
                            </td>
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
                      <h2 className="collegenquiry_form_heading__GszFG">
                        Get Free Career Consultation
                      </h2>
                      <div className="collegenquiry_form_div__RSaaQ">
                        <form
                          className="collegenquiry_form__uF7mS"
                          onSubmit={handleEnquirySubmit}
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
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                          >
                            <option value="">State/Province*</option>
                            {states.map((state) => (
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
                              Earn a degree that is recognized around the globe
                            </div>
                            <div>
                              {[
                                "Provides reading facility for 9 to 10 Hours Daily.",
                                "E-Resources.",
                                "Opportunity for working women to complete higher education",
                                "Opportunity for lifelong learning to increase professional qualities",
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6 GazettevBVL"
                    id="Admission"
                  >
                    <div className="Admissions_container__lpKQv">
                      <h2 className="Admissions_heading__paqsP">
                        Admission Process
                      </h2>
                      <p className="Admissions_description__sKdUj">
                        The admissions process takes place in online mode. Fresh
                        admission starts from the month of January of every
                        year. There are direct admissions, no entrance exam is
                        conducted for the admission process. The admission
                        procedure for 2025 for the online course at Smt.
                        Nathibai Damodar Thackersey Women's University,
                        Maharashtra is as follows:
                      </p>
                      {[
                        "Visit the official website.",
                        "Register yourself.",
                        "Select the course & pay the fees.",
                        "Wait for the confirmation message.",
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
                          Our students have an opportunity to:
                        </h3>
                        {[
                          "Learn employability skills through assessments and tests",
                          "Connect with top recruiters from leading companies",
                          "Find jobs that suit their profile",
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
                            ₹ 6 LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 12 LPA
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
                      <div className="partners_container___c9cx" />
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                    <div
                      className="CollegeReview_college_page_details_review_container__KbbIU"
                      id="contact"
                    >
                      <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                        Smt. Nathibai Damodar Thackersey Women's University,
                        Maharashtra Review
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
                                        alt="rating star"
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
                                value={reviewFormData.reviewerName}
                                onChange={handleReviewChange}
                              />
                              <textarea
                                placeholder="Write your reviews"
                                className="CollegeReview_college_page_details_review_form_input__niDf2"
                                name="comment"
                                required
                                value={reviewFormData.comment}
                                onChange={handleReviewChange}
                              />
                              <button
                                className="CollegeReview_college_page_details_review_form_btn__xh_Sn"
                                disabled={isLoading}
                              >
                                {isLoading ? "Submitting..." : "Send message"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="CollegeReview_college_page_details_verified_review_container__m7rGG" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <EnquiryModel
          showModal={showModal}
          setShowModal={setShowModal}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          states={states}
        />
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
                    className="btn-close"
                    onClick={handleCloseSpecializationModal}
                    aria-label="Close specialization modal"
                    style={{
                      right: "-10px",
                      height: "5em",
                      width: "3em",
                      top: "-20px",
                    }}
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
