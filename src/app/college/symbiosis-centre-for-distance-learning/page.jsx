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
  const [isLoading, setIsLoading] = useState(false); // For form submission loading state
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // For FAQ accordion

  const courseSpecializations = {
    Diploma: [
      { name: "Creative Writing in English", fees: 21000 },
      { name: "Digital Marketing", fees: 46000 },
    ],
    Certificate: [
      { name: "Cyber Law", fees: 10000 },
      { name: "Blockchain Technology", fees: 16000 },
    ],
    "Post Graduate Diploma (PGD)": [
      { name: "Business Administration", fees: 46000 },
      { name: "Data Science", fees: 65000 },
    ],
    "Single Courses (PG Certificate)": [
      { name: "Finance Management", fees: 10000 },
    ],
    "Post Graduate Certificate (PGC)": [
      { name: "Educational Administration", fees: 29000 },
      { name: "Management Accounting", fees: 80000 },
    ],
    "Post Graduate Programme": [
      { name: "International Business", fees: 46000 },
      { name: "Supply Chain Management", fees: 65000 },
    ],
    "Executive Post Graduate Diploma": [
      { name: "Leadership and Strategy", fees: 80000 },
    ],
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Invalid email format");
      return;
    }
    setIsLoading(true);
    try {
      // Placeholder for API call
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
    setIsLoading(true);
    try {
      // Placeholder for API call
      console.log("Enquiry submitted:", data);
      form.reset();
      setFormData({ name: "", email: "", phone: "", program: "", state: "" });
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewData.reviewerName || !reviewData.comment) {
      alert("Please fill out all fields");
      return;
    }
    setIsLoading(true);
    try {
      // Placeholder for API call
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

  return (
    <>
      <Head>
        <title>Symbiosis Centre for Distance Learning - Online Courses</title>
        <meta
          name="description"
          content="Explore online and distance learning programs at Symbiosis Centre for Distance Learning (SCDL), including Diploma, Certificate, Post Graduate Diploma, and more, with UGC, AICTE, and NAAC A++ accreditation."
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/symbiosis-centre-for-distance-learning/hero-image/SCDLbanner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="Symbiosis Centre for Distance Learning campus banner"
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
                <span>Symbiosis Centre for Distance Learning</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Symbiosis Centre for Distance Learning
            </h1>
            <p className="headCarousal_location__7rFlL">Pune, Maharashtra</p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Rank: 32 (University Category)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              <Image
                src="https://store.learningroutes.in/images/colleges/symbiosis-centre-for-distance-learning/accrediations/AICTE.webp"
                alt="AICTE accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <Image
                src="https://store.learningroutes.in/images/colleges/symbiosis-centre-for-distance-learning/accrediations/UGC.webp"
                alt="UGC accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <Image
                src="https://store.learningroutes.in/images/colleges/symbiosis-centre-for-distance-learning/accrediations/NAACA++.webp"
                alt="NAAC A++ accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
            </div>
            <div className="headCarousal_proceedCompareContainer__rekWb">
              <a href="/top-university">
                <button
                  className="headCarousal_collegeCompare__znhHH"
                  aria-label="Add to compare"
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
                        Symbiosis Centre for Distance Learning
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Symbiosis Centre for Distance Learning (SCDL), founded
                        in 2001, is one of India's leading distance learning
                        institutions. SCDL offers a wide range of Postgraduate
                        Diploma, Diploma, and Certificate programmes in fields
                        such as business management, international business,
                        information technology, banking and finance, supply
                        chain management, and more. With a robust curriculum
                        designed by experienced faculty and industry experts,
                        SCDL ensures high-quality education. The institute has
                        strong industry partnerships with companies like IBM,
                        Cognizant, Infosys, and Wipro, enhancing career
                        opportunities for students.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "80,000+ Students",
                          "1.2M Alumni",
                          "47+ Nationalities",
                          "1,600+ Faculty",
                          "100+ Programmes",
                          "Career Support",
                          "Top-Ranked Distance Learning",
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
                          Explore online learning courses at Symbiosis Centre
                          for Distance Learning
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
                              { course: "Diploma", fee: "₹ 21,000 - ₹ 46,000" },
                              {
                                course: "Certificate",
                                fee: "₹ 10,000 - ₹ 16,000",
                              },
                              {
                                course: "Post Graduate Diploma (PGD)",
                                fee: "₹ 46,000 - ₹ 65,000",
                              },
                              {
                                course: "Single Courses (PG Certificate)",
                                fee: "₹ 10,000",
                              },
                              {
                                course: "Post Graduate Certificate (PGC)",
                                fee: "₹ 29,000 - ₹ 80,000",
                              },
                              {
                                course: "Post Graduate Programme",
                                fee: "₹ 46,000 - ₹ 65,000",
                              },
                              {
                                course: "Executive Post Graduate Diploma",
                                fee: "₹ 80,000",
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
                              course: "Diploma",
                              eligibility:
                                "XII Standard pass-out with minimum 50% marks in English Subject. Diploma holder / Bachelor's Degree Holder / Graduate in any discipline from a recognised University with 50% marks in English subject. Completed Diploma / Bachelor's Degree / Graduation in English medium. International / SAARC Graduate from a recognised/accredited University / Institution. Students awaiting final year results can apply, subject to completing their bachelor's degree within the period specified by SCDL.",
                            },
                            {
                              course: "Certificate",
                              eligibility:
                                "Graduate in any field from a recognised university.",
                            },
                            {
                              course: "Post Graduate Diploma (PGD)",
                              eligibility:
                                "Bachelor's degree holder / Graduate in any discipline from a recognised University. International / SAARC Graduate from a recognised/accredited University / Institution. Students awaiting final year results can apply, subject to completing their bachelor's degree within the period specified by SCDL.",
                            },
                            {
                              course: "Single Courses (PG Certificate)",
                              eligibility:
                                "Graduate in any field from a recognised university.",
                            },
                            {
                              course: "Post Graduate Certificate (PGC)",
                              eligibility:
                                "Graduate in any field from a recognised university.",
                            },
                            {
                              course: "Post Graduate Programme",
                              eligibility:
                                "Graduate in any field from a recognised university.",
                            },
                            {
                              course: "Executive Post Graduate Diploma",
                              eligibility:
                                "Graduate in any field from a recognised university with relevant work experience.",
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
                            <option value="Diploma">Diploma</option>
                            <option value="Certificate">Certificate</option>
                            <option value="Post Graduate Diploma (PGD)">
                              Post Graduate Diploma (PGD)
                            </option>
                            <option value="Single Courses (PG Certificate)">
                              Single Courses (PG Certificate)
                            </option>
                            <option value="Post Graduate Certificate (PGC)">
                              Post Graduate Certificate (PGC)
                            </option>
                            <option value="Post Graduate Programme">
                              Post Graduate Programme
                            </option>
                            <option value="Executive Post Graduate Diploma">
                              Executive Post Graduate Diploma
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
                        <div>
                          <p className="scholarshop_scholarshipDetail__m_Jhr">
                            SCDL offers merit-based scholarships for
                            top-performing students and need-based financial aid
                            for eligible candidates. Contact the admissions
                            office for detailed eligibility criteria and
                            application procedures.
                          </p>
                        </div>
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
                              Earn a UGC-recognised degree, valued globally
                            </div>
                            <div>
                              {[
                                "UGC Recognised",
                                "NAAC A++ Approved",
                                "AICTE Approved",
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
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
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
                              alt="SCDL sample certificate"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              data-nimg={1}
                              className="Certificates_img__GOe9v"
                              style={{ color: "transparent" }}
                              src="/assets/course/DEGREE.jpeg"
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
                          <div>
                            <p className="emi_para__0BeXd">
                              <span className="emi_title__UXhF1">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="emi_diamondIcon__XqB7W"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                                </svg>
                                Flexible EMI Options:{" "}
                              </span>
                              Choose from easy EMI plans available for 9 or 12
                              months, with monthly payments ranging from ₹6,000
                              to ₹8,000.
                            </p>
                          </div>
                          <div>
                            <p className="emi_para__0BeXd">
                              <span className="emi_title__UXhF1">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="emi_diamondIcon__XqB7W"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                                </svg>
                                Special Discount:{" "}
                              </span>
                              Pay the total fee in one instalment immediately
                              and receive a ₹5,000 discount.
                            </p>
                          </div>
                          <div>
                            <p className="emi_para__0BeXd">
                              <span className="emi_title__UXhF1">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="emi_diamondIcon__XqB7W"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                                </svg>
                                Payment Schedule:{" "}
                              </span>
                              Pay the first instalment or the entire fee
                              immediately upon admission. The second instalment
                              is due within 45 days of the first instalment or
                              by the final due date for full fee payment,
                              whichever comes first.
                            </p>
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
                        The admission process is conducted online, with fresh
                        admissions starting in January each year. No entrance
                        exam is required. The admission procedure for 2025 at
                        Symbiosis Centre for Distance Learning is as follows:
                      </p>
                      {[
                        "Sign up on the Apply Online portal.",
                        "Purchase the application form.",
                        "Fill in the details online.",
                        "Upload all necessary documents.",
                        "Make the programme fee payment.",
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
                            Symbiosis Centre for Distance Learning conducts
                            classes and exams in On-Demand Computer Examination
                            mode, remotely proctored through its enhanced
                            digital learning platform.
                          </p>
                          {[
                            "Symbiosis University distance education offers computer-based online exams at authorised exam centres.",
                            "You can schedule computer-based exams at your convenience, on a preferred day and time, at an SCDL-approved local exam centre.",
                            "You can reserve a period using your personal student login. SCDL offers computer-based exams at more than 75 exam centres in India.",
                            "Official results are released within fifteen working days after the exam date.",
                          ].map((point, index) => (
                            <div key={index}>
                              <p className="Exam_paragraph__CFH4S">
                                <span className="Exam_title__zgD3N" />
                                {point}
                              </p>
                            </div>
                          ))}
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
                          Our students have an opportunity to
                        </h3>
                        {[
                          "Learn employability skills through assessments and tests",
                          "Secure jobs that suitably fit their profile",
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
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              src="/assets/simpli-images/check.webp"
                            />
                            <p>{point}</p>
                          </div>
                        ))}
                      </div>
                      <div className="placement_placementBanner__ACCRS">
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 4 LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 43 LPA
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
                            src: "/assets/placement-partners/ibm.webp",
                            alt: "IBM logo",
                          },
                          {
                            src: "/assets/placement-partners/cognizant.webp",
                            alt: "Cognizant logo",
                          },
                          {
                            src: "/assets/placement-partners/infosys.webp",
                            alt: "Infosys logo",
                          },
                          {
                            src: "/assets/placement-partners/wipro.webp",
                            alt: "Wipro logo",
                          },
                        ].map((partner, index) => (
                          <div key={index}>
                            <div className="partners_imgBox__yD_6o">
                              <Image
                                alt={partner.alt}
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                src={partner.src}
                              />
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="collegeDetails_maxWidth__6vBVL" id="FAQ's">
                    <div className="faq_container__v2O04">
                      <h2 className="faq_heading__ypOPH">FAQ's</h2>
                      <div className="faq_faqMainContainer__T9i6Q">
                        {[
                          {
                            question: "Is an SCDL degree valid?",
                            answer:
                              "Yes, SCDL degrees are recognised by UGC and valid for employment and further studies in India and abroad.",
                          },
                          {
                            question:
                              "Is the Symbiosis Centre for Distance Learning approved by UGC?",
                            answer:
                              "Yes, SCDL is approved by the University Grants Commission (UGC) and accredited by AICTE and NAAC A++.",
                          },
                          {
                            question:
                              "Is Symbiosis distance learning worth it?",
                            answer:
                              "SCDL offers high-quality education with a robust curriculum, industry partnerships, and career support, making it a valuable option for distance learners.",
                          },
                          {
                            question: "Does SCDL provide placement?",
                            answer:
                              "SCDL offers placement assistance through partnerships with companies like IBM, Cognizant, Infosys, and Wipro, helping students secure suitable job opportunities.",
                          },
                          {
                            question: "What is the ranking of SCDL in India?",
                            answer:
                              "SCDL is ranked 32 in the NIRF University category, reflecting its reputation as a leading distance learning institute.",
                          },
                          {
                            question:
                              "What are the fees for a distance learning MBA from Symbiosis?",
                            answer:
                              "SCDL does not offer a traditional MBA but provides Post Graduate Diploma (PGD) in Business Administration, with fees ranging from ₹46,000 to ₹65,000.",
                          },
                        ].map((faq, index) => (
                          <div className="faq_faqMain__ACefH" key={index}>
                            <div
                              className="faq_questionContainer__zAsad"
                              onClick={() => toggleFaq(index)}
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
                              <div className="faq_answer__tXz9Y">
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
                        Symbiosis Centre for Distance Learning Review
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
                                        data-nimg={1}
                                        className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                        style={{ color: "transparent" }}
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
                      <div className="CollegeReview_college_page_details_verified_review_container__m7rGG" />
                    </div>
                  </div> */}
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
                  <h6>Struggling with Career Growth?</h6>
                  <h6 className="td_mb_20">Get Free Career Consultation</h6>
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
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                      <option value="Post Graduate Diploma (PGD)">
                        Post Graduate Diploma (PGD)
                      </option>
                      <option value="Single Courses (PG Certificate)">
                        Single Courses (PG Certificate)
                      </option>
                      <option value="Post Graduate Certificate (PGC)">
                        Post Graduate Certificate (PGC)
                      </option>
                      <option value="Post Graduate Programme">
                        Post Graduate Programme
                      </option>
                      <option value="Executive Post Graduate Diploma">
                        Executive Post Graduate Diploma
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
      )} */}
      <Footer />
    </>
  );
}
