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
const FirstVisitModal = dynamic(
  () => import("../../../../components/FirstVisitModal"),
  {
    ssr: false,
  }
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
  const [isModalOpen, setIsModalOpen] = useState(false); // For FirstVisitModal
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false); // For Enquiry modal
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
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [fixedHeader, setFixedHeader] = useState(false);

  const courseSpecializations = {
    "Distance BA(Hons)": [
      { name: "History", fees: 15000 },
      { name: "Economics", fees: 15000 },
    ],
    "Distance BCom": [
      { name: "Accounting", fees: 18000 },
      { name: "Finance", fees: 18000 },
    ],
    "Distance BSc": [
      { name: "Mathematics", fees: 20000 },
      { name: "Physics", fees: 20000 },
    ],
    "Distance MA": [
      { name: "English", fees: 25000 },
      { name: "Sociology", fees: 25000 },
    ],
    "Distance MCom": [{ name: "Commerce", fees: 28000 }],
    "Distance MSc": [
      { name: "Mathematics", fees: 30000 },
      { name: "Botany", fees: 30000 },
    ],
    "Distance MBA": [
      { name: "Finance", fees: 35000 },
      { name: "Marketing", fees: 35000 },
    ],
    "Executive MBA": [{ name: "General Management", fees: 40000 }],
    "Distance MHRM": [{ name: "Human Resource Management", fees: 32000 }],
    "Distance MCA": [{ name: "Computer Applications", fees: 35000 }],
    "Distance MJMC": [{ name: "Journalism", fees: 30000 }],
    "Distance PG Diploma Programme": [
      { name: "Public Administration", fees: 20000 },
    ],
    "Distance Diploma Programme": [{ name: "Music", fees: 15000 }],
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
    // Handle active section tracking
    const sections = [
      "About",
      "High",
      "Courses",
      "Course Eligibility",
      "Enquire Now",
      "Certification",
      "Admission",
      "Placement",
      "FAQs",
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
      setFixedHeader(window.scrollY > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      handleClose();
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
    if (!reviewData.reviewerName.trim()) {
      alert("Name is required");
      return;
    }
    if (!reviewData.comment.trim()) {
      alert("Review comment is required");
      return;
    }
    setIsLoading(true);
    try {
      console.log("Review submitted:", reviewData);
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

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const states = [
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
  ];

  return (
    <>
      <Head>
        <title>
          School of Distance Education, Andhra University - Online Courses
        </title>
        <meta
          name="description"
          content="Explore distance learning programs at School of Distance Education, Andhra University, offering UGC-DEB approved degrees with NAAC A++ accreditation."
        />
        <meta
          property="og:title"
          content="School of Distance Education, Andhra University"
        />
        <meta
          property="og:description"
          content="Discover distance education programs at Andhra University."
        />
        <meta
          property="og:image"
          content="https://store.learningroutes.in/images/colleges/School-of-Distance-Education-Andhra-University/hero-image/banner.webp"
        />
      </Head>
      <Menu fixedHeader={fixedHeader} />
      <div>
        <a
          className="float"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918806099993&text=I%27m%20looking%20for"
          aria-label="Contact us on WhatsApp"
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
        <a
          className="float enquire-now"
          onClick={() => setIsCourseModalOpen(true)}
          aria-label="Enquire Now"
        >
          <span>Enquire Now</span>
        </a>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/School-of-Distance-Education-Andhra-University/hero-image/banner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="School of Distance Education, Andhra University hero image"
            width={240}
            height={240}
            layout="responsive"
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <nav className="Breadcrumb_breadcrumb__j1UHX">
              <span className="Breadcrumb_breadcrumbItem__lnXIo">
                <a
                  className="Breadcrumb_link__zmGnw"
                  href="/"
                  aria-label="Home"
                >
                  Home
                </a>
                <span className="Breadcrumb_separator__e7M6o">/</span>
              </span>
              <span className="Breadcrumb_breadcrumbItem__lnXIo">
                <a
                  className="Breadcrumb_link__zmGnw"
                  href="/top-university"
                  aria-label="Colleges"
                >
                  Colleges
                </a>
                <span className="Breadcrumb_separator__e7M6o">/</span>
              </span>
              <span className="Breadcrumb_breadcrumbItem__lnXIo">
                <span>School of Distance Education, Andhra University</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              School of Distance Education, Andhra University
            </h1>
            <p className="headCarousal_location__7rFlL">
              Visakhapatnam, Andhra Pradesh
            </p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Rank: 41 (Overall)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              {[
                { src: "NAAC_A++.webp", alt: "NAAC A++ Accreditation" },
                { src: "UGC_DEB.webp", alt: "UGC-DEB Approved" },
              ].map((accreditation, index) => (
                <Image
                  key={index}
                  src={`https://store.learningroutes.in/images/colleges/School-of-Distance-Education-Andhra-University/accreditations/${accreditation.src}`}
                  alt={accreditation.alt}
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <div className="headCarousal_proceedCompareContainer__rekWb">
              <a href="/top-university">
                <button
                  className="headCarousal_collegeCompare__znhHH"
                  aria-label="Add to Compare"
                >
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
                    { id: "About", label: "About" },
                    { id: "High", label: "Highlights" },
                    { id: "Courses", label: "Courses" },
                    { id: "Course Eligibility", label: "Course Eligibility" },
                    { id: "Enquire Now", label: "Enquire Now" },
                    { id: "Certification", label: "Certifications" },
                    { id: "Admission", label: "Admission Procedure" },
                    { id: "Placement", label: "Placement" },
                    { id: "FAQs", label: "FAQs" },
                    { id: "Review", label: "Review" },
                  ].map((section) => (
                    <a
                      key={section.id}
                      className="collegeDetails_scrollerElement__iuUFa"
                      id={`link-${section.id}`}
                      href={`#${section.id}`}
                      aria-current={
                        activeSection === section.id ? "page" : undefined
                      }
                    >
                      <div
                        className={`collegeDetails_sectionBox__ZGGBm ${
                          activeSection === section.id
                            ? "collegeDetails_selectedBox___Y1P_ collegeDetails_textWhite__q6ndV"
                            : "collegeDetails_textBlack__LRxI5"
                        }`}
                      >
                        {section.label === "Enquire Now" ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            <div>{section.label}</div>
                            <div className="college_blink__yxq74" />
                          </div>
                        ) : (
                          section.label
                        )}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="collegeDetails_detailsContainer__6A8oL">
                  <div className="collegeDetails_maxWidth__6vBVL" id="About">
                    <div className="about_collegeDetails__67FzM">
                      <h2 className="about_collegeDetailsHeading__AA_dr">
                        School of Distance Education, Andhra University
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Established in 1926 by the Madras University Act, Andhra
                        University has been delivering high-quality education to
                        students nationwide. The School of Distance Education
                        aims to build expertise in business accounting,
                        financial accounting, and proficiency in business and
                        other fields, helping working professionals manage work
                        and studies. Andhra University equips students with
                        professional and practical management techniques across
                        key functional domains, offering a wide range of courses
                        in Humanities, Commerce, Science, and Management
                        studies.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "E-books",
                          "Virtual Lab Environments",
                          "Tutorial Recorded Videos",
                          "Animated/Gamified Modules",
                        ].map((point, index) => (
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
                            <div>{point}</div>
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
                          Explore distance learning courses at School of
                          Distance Education, Andhra University
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
                                course: "Distance BA(Hons)",
                                fee: getFeeRange("Distance BA(Hons)"),
                              },
                              {
                                course: "Distance BCom",
                                fee: getFeeRange("Distance BCom"),
                              },
                              {
                                course: "Distance BSc",
                                fee: getFeeRange("Distance BSc"),
                              },
                              {
                                course: "Distance MA",
                                fee: getFeeRange("Distance MA"),
                              },
                              {
                                course: "Distance MCom",
                                fee: getFeeRange("Distance MCom"),
                              },
                              {
                                course: "Distance MSc",
                                fee: getFeeRange("Distance MSc"),
                              },
                              {
                                course: "Distance MBA",
                                fee: getFeeRange("Distance MBA"),
                              },
                              {
                                course: "Executive MBA",
                                fee: getFeeRange("Executive MBA"),
                              },
                              {
                                course: "Distance MHRM",
                                fee: getFeeRange("Distance MHRM"),
                              },
                              {
                                course: "Distance MCA",
                                fee: getFeeRange("Distance MCA"),
                              },
                              {
                                course: "Distance MJMC",
                                fee: getFeeRange("Distance MJMC"),
                              },
                              {
                                course: "Distance PG Diploma Programme",
                                fee: getFeeRange(
                                  "Distance PG Diploma Programme"
                                ),
                              },
                              {
                                course: "Distance Diploma Programme",
                                fee: getFeeRange("Distance Diploma Programme"),
                              },
                            ].map((item, index) => (
                              <tr className="courses_tbody__ZPCxV" key={index}>
                                <td>{item.course}</td>
                                <td style={{ textAlign: "center" }}>
                                  {item.fee}
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={() => setIsCourseModalOpen(true)}
                                    aria-label={`Enquire about ${item.course}`}
                                  >
                                    Enquire Now
                                  </button>
                                  <button
                                    className="courses_viewSpsl__lrjH5"
                                    onClick={() =>
                                      handleViewSpecialization(item.course)
                                    }
                                    aria-label={`View specializations for ${item.course}`}
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
                              course: "Distance BA(Hons)",
                              eligibility:
                                "Candidates passing their 12th standard from any recognised board can apply.",
                            },
                            {
                              course: "Distance BCom",
                              eligibility:
                                "Candidates who have passed their 12th standard in commerce stream from any recognised board can apply.",
                            },
                            {
                              course: "Distance BSc",
                              eligibility:
                                "Candidates who have passed their 12th standard in science stream from any recognised board can apply.",
                            },
                            {
                              course: "Distance MA",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree spanning a minimum of 3 years duration.",
                            },
                            {
                              course: "Distance MCom",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree spanning a minimum of 3 years duration.",
                            },
                            {
                              course: "Distance MSc",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree spanning a minimum of 3 years duration.",
                            },
                            {
                              course: "Distance MBA",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree spanning a minimum of 3 years duration.",
                            },
                            {
                              course: "Executive MBA",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree from a recognised university.",
                            },
                            {
                              course: "Distance MHRM",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree from a recognised university.",
                            },
                            {
                              course: "Distance MCA",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree from a recognised university.",
                            },
                            {
                              course: "Distance MJMC",
                              eligibility:
                                "Candidates need to obtain at least 50% marks (45% for reserved category) in their Bachelor's degree from a recognised university.",
                            },
                            {
                              course: "Distance PG Diploma Programme",
                              eligibility:
                                "Candidates passing their 12th standard from any recognised board can apply.",
                            },
                            {
                              course: "Distance Diploma Programme",
                              eligibility:
                                "Candidates passing their 12th standard from any recognised board can apply.",
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
                            <option value="Distance BA(Hons)">
                              Distance BA(Hons)
                            </option>
                            <option value="Distance BCom">Distance BCom</option>
                            <option value="Distance BSc">Distance BSc</option>
                            <option value="Distance MA">Distance MA</option>
                            <option value="Distance MCom">Distance MCom</option>
                            <option value="Distance MSc">Distance MSc</option>
                            <option value="Distance MBA">Distance MBA</option>
                            <option value="Executive MBA">Executive MBA</option>
                            <option value="Distance MHRM">Distance MHRM</option>
                            <option value="Distance MCA">Distance MCA</option>
                            <option value="Distance MJMC">Distance MJMC</option>
                            <option value="Distance PG Diploma Programme">
                              Distance PG Diploma Programme
                            </option>
                            <option value="Distance Diploma Programme">
                              Distance Diploma Programme
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
                              The University has established a credible
                              educational status
                            </div>
                            <div>
                              {[
                                "Pedagogy: Helps maintain work-life balance",
                                "Convenience: Flexibility to study as per your comfort & convenience",
                                "Interaction Level: Live lectures and feedback policy",
                                "Networking Opportunity: Connect with various industry professionals",
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
                              alt="Andhra University sample certificate"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              className="Certificates_img__GOe9v"
                              src="/assets/simpli-images/placeholder-certificate.webp"
                            /> */}
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
                      <h2 className="Admissions_heading__paqsP">
                        Admission Process
                      </h2>
                      <p className="Admissions_description__sKdUj">
                        The admission process takes place online. Fresh
                        admissions start in January each year. There are direct
                        admissions, and no entrance exam is conducted. The
                        admission procedure for 2025 at School of Distance
                        Education, Andhra University is as follows:
                      </p>
                      {[
                        "Go to the official website of Andhra University.",
                        "Click on the Apply Online option present on the top right corner of the website.",
                        "Fill all the details required, and information related to the chosen field will be sent to the provided email.",
                        "Go through all the information, submit the required documents, and upon verification, the candidate will be admitted after paying the required fees.",
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
                          "Placement assistance provided based on academic profiles",
                          "Top recruiting companies",
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
                      <h3 className="placement_heading__iEHZj">
                        Our Students Work At
                      </h3>
                      <div className="partners_container___c9cx">
                        {[
                          { src: "tcs.webp", alt: "TCS" },
                          { src: "infosys.webp", alt: "Infosys" },
                          { src: "wipro.webp", alt: "Wipro" },
                          { src: "cognizant.webp", alt: "Cognizant" },
                        ].map((partner, index) => (
                          <div key={index}>
                            <div className="partners_imgBox__yD_6o">
                              <Image
                                alt={partner.alt}
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                className="partners_plac_img__htNsk"
                                src={`/assets/simpli-images/${partner.src}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="FAQs">
                    <div className="faq_container__v2O04">
                      <h2 className="faq_heading__ypOPH">FAQs</h2>
                      <div className="faq_faqMainContainer__T9i6Q">
                        {[
                          {
                            question:
                              "Is a degree from Andhra University’s School of Distance Education valid?",
                            answer:
                              "Yes, degrees are UGC-DEB approved and recognized globally for employment and further studies.",
                          },
                          {
                            question: "Is Andhra University approved by UGC?",
                            answer:
                              "Yes, Andhra University is approved by the UGC and accredited with NAAC A++.",
                          },
                          {
                            question:
                              "Is Andhra University’s Distance MBA program worth it?",
                            answer:
                              "The Distance MBA offers a comprehensive curriculum, flexible learning, and placement support, ideal for working professionals.",
                          },
                          {
                            question:
                              "Does Andhra University provide placement assistance?",
                            answer:
                              "Yes, the university offers placement assistance with top recruiters based on academic profiles.",
                          },
                          {
                            question:
                              "What are the fees for distance programs at Andhra University?",
                            answer:
                              "Fees range from ₹15,000 for Diploma programs to ₹40,000 for Executive MBA, depending on the program and specialization.",
                          },
                        ].map((faq, index) => (
                          <div className="faq_faqMain__ACefH" key={index}>
                            <div
                              className="faq_questionContainer__zAsad"
                              onClick={() => toggleFaq(index)}
                              role="button"
                              aria-expanded={openFaqIndex === index}
                              aria-controls={`faq-answer-${index}`}
                            >
                              <div className="faq_ques__Hgq7Z">
                                Q.{index + 1} {faq.question}
                              </div>
                              <div className="faq_accordionIcon__8lbAd">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 24 24"
                                  className="faq_icon__lyHtn"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d={
                                      openFaqIndex === index
                                        ? "M19 13H5v-2h14v2z"
                                        : "M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z"
                                    }
                                  />
                                  {openFaqIndex !== index && (
                                    <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                                  )}
                                </svg>
                              </div>
                            </div>
                            {openFaqIndex === index && (
                              <div
                                className="faq_answer__tXz9Y"
                                id={`faq-answer-${index}`}
                              >
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                    <div
                      className="CollegeReview_college_page_details_review_container__KbbIU"
                      id="contact"
                    >
                      <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                        School of Distance Education, Andhra University Review
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
                              />
                              <textarea
                                placeholder="Write your reviews"
                                className="CollegeReview_college_page_details_review_form_input__niDf2"
                                name="comment"
                                required
                                value={reviewData.comment}
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
                      <div className="CollegeReview_college_page_details_verified_review_container__m7rGG">
                        <div>
                          <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                            <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                              <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                                S
                              </div>
                              <div>
                                <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                                  Suresh
                                </div>
                                <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                                  <div>
                                    {Array(5)
                                      .fill()
                                      .map((_, index) => (
                                        <Image
                                          key={index}
                                          alt="Colored Star"
                                          loading="lazy"
                                          width={20}
                                          height={20}
                                          decoding="async"
                                          className="CollegeReview_college_page_details_rating_img__IUdrQ"
                                          src="/assets/simpli-images/Star-One.webp"
                                        />
                                      ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                              Reviewed on 2024-08-15
                            </div>
                            <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                              Excellent distance learning programs with flexible
                              study options.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          role="dialog"
          aria-labelledby="firstVisitModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <button
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
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close course enquiry modal"
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
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <input
                      type="tel"
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
                      <option value="Distance BA(Hons)">
                        Distance BA(Hons)
                      </option>
                      <option value="Distance BCom">Distance BCom</option>
                      <option value="Distance BSc">Distance BSc</option>
                      <option value="Distance MA">Distance MA</option>
                      <option value="Distance MCom">Distance MCom</option>
                      <option value="Distance MSc">Distance MSc</option>
                      <option value="Distance MBA">Distance MBA</option>
                      <option value="Executive MBA">Executive MBA</option>
                      <option value="Distance MHRM">Distance MHRM</option>
                      <option value="Distance MCA">Distance MCA</option>
                      <option value="Distance MJMC">Distance MJMC</option>
                      <option value="Distance PG Diploma Programme">
                        Distance PG Diploma Programme
                      </option>
                      <option value="Distance Diploma Programme">
                        Distance Diploma Programme
                      </option>
                      <option value="Help Me Decide">Help Me Decide</option>
                    </select>
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">States/Province*</option>
                      {states.map((state) => (
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
