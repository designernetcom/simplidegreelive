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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    state: "",
  });
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] = useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const courseSpecializations = {
    "Online BCom": [
      { name: "Accounting and Finance", fees: 99000 },
      { name: "Taxation", fees: 99000 },
      { name: "Banking", fees: 99000 },
    ],
    "Online BBA": [
      { name: "Marketing Management", fees: 141000 },
      { name: "Human Resource Management", fees: 150000 },
      { name: "Entrepreneurship", fees: 169200 },
    ],
    "Online MBA": [
      { name: "Finance", fees: 315000 },
      { name: "Marketing", fees: 315000 },
      { name: "Operations Management", fees: 315000 },
    ],
    "Online EMBA": [
      { name: "Leadership", fees: 400000 },
      { name: "Strategic Management", fees: 400000 },
    ],
  };

  const getFeeRange = (courseName) => {
    const fees = courseSpecializations[courseName]?.map((spec) => spec.fees) || [];
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
      "Certification",
      "Admission",
      "Placement",
    ];

    const handleScroll = debounce(() => {
      const scrollY = window.scrollY + 100; // Offset for better UX
      let closestSection = "About";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const distance = Math.abs(scrollY - offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
          console.log(`Section: ${section}, OffsetTop: ${offsetTop}, Distance: ${distance}`);
        } else {
          console.warn(`Element with id="${section}" not found`);
        }
      });

      console.log(`Active section: ${closestSection}`);
      setActiveSection(closestSection);
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Clean up debounced function
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Invalid email format");
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
    setIsLoading(true);
    try {
      console.log("Enquiry submitted:", data);
      form.reset();
    } catch (error) {
      alert("Error submitting form");
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
          NMIMS Centre for Distance and Online Education - Courses & Admissions
        </title>
        <meta
          name="description"
          content="Explore distance and online degree programs at NMIMS Centre for Distance and Online Education, including BCom, BBA, MBA, and EMBA."
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="/assets/img/mba-distance/nmns-code.jpg"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="NMIMS Centre for Distance and Online Education campus banner"
            width={240}
            height={240}
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
                <span> NMIMS Centre for Distance and Online Education</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              NMIMS Centre for Distance and Online Education
            </h1>
            <p className="headCarousal_location__7rFlL">Mumbai, Maharashtra</p>
            <p className="headCarousal_ranking__1yTOY">NIRF Rank: Top 100</p>
            <div className="headCarousal_accreditation__HUqxZ">
              <Image
                src="https://store.learningroutes.in/images/colleges/NMIMS-Centre-for-Distance-and-Online-Education/accreditations/NAAC A+.webp"
                alt="NAAC A+ accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
                           <Image
                src="https://store.learningroutes.in/images/colleges/NMIMS-Centre-for-Distance-and-Online-Education/accreditations/UGC.webp"
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
                        NMIMS Centre for Distance and Online Education
                      </h2>
                      <p
                        style={{
                          fontSize: "16px",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                        }}
                      >
                        The NMIMS Centre for Distance and Online Education is
                        India’s leading institution for providing
                        career-oriented quality education. All courses are UGC
                        certified with accreditation from NAAC Grade A+. The
                        institute has been assisting thousands of students for
                        more than four decades to get quality education. It was
                        founded in 1981 and was awarded
                        “Deemed-to-be-University” status in 2003. The Indian
                        youth living in urban and rural areas were looking for
                        quality education programs that could be completed
                        without attending the classroom setting, so it
                        established distance and open learning centers to offer
                        easily accessible quality education to students around
                        the nation. The courses here are designed to help
                        working professionals who want to upgrade their careers
                        without compromising their job scenarios.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
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
                        Highlights
                      </h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "Easily accessible self-learning material",
                          "Budget-friendly courses",
                          "Facilitates live as well as recorded lectures",
                          "Holistic and integrative approach",
                          "Networking opportunities with notable Alumni Network",
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
                            <div
                              style={{
                                fontSize: "16px",
                                fontFamily:
                                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                fontStyle: "normal",
                              }}
                            >
                              {highlight}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
                    <div className="courses_wrapper__5pXR3">
                      <div className="courses_container__c_BRe">
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
                          Courses
                        </h2>
                        <p className="courses_course_college_name__Reg2z">
                          Explore online learning courses in NMIMS Centre for
                          Distance and Online Education
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
                            {[
                              {
                                name: "Online BCom",
                                feeRange: getFeeRange("Online BCom"),
                              },
                              {
                                name: "Online BBA",
                                feeRange: getFeeRange("Online BBA"),
                              },
                              {
                                name: "Online MBA",
                                feeRange: getFeeRange("Online MBA"),
                              },
                              {
                                name: "Online EMBA",
                                feeRange: getFeeRange("Online EMBA"),
                              },
                            ].map((course, index) => (
                              <tr className="courses_tbody__ZPCxV" key={index}>
                                <td
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  {course.name}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  {course.feeRange}
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={() => setIsCourseModalOpen(true)}
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
                            <td>Online BCom</td>
                            <td>10+2 with minimum 50% marks</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BBA</td>
                            <td>10+2 with minimum 50% marks</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MBA</td>
                            <td>Bachelor's degree with minimum 50% marks</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online EMBA</td>
                            <td>
                              Bachelor's Degree with minimum 55% marks and 3+
                              years of work experience
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
                            <option value="Distance MBA">Distance MBA</option>
                            <option value="Distance EMBA">Distance EMBA</option>
                            <option value="Distance BBA">Distance BBA</option>
                            <option value="Distance BCom">Distance BCom</option>
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
                              Earn a degree that is recognized around the globe
                            </div>
                            <div>
                              {[
                                "Excellent teaching faculty from IIM and IIT",
                                "24/7 student support services via calls, emails, and chats",
                                "Offers interview opportunities with top start-up companies",
                                "Flexible and self-paced learning throughout the program",
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
                                    src="/assets/img/home_6/check.png"
                                  />
                                  <div
                                    className="Certificates_point__XYWLq"
                                    style={{
                                      fontSize: "16px",
                                      fontFamily:
                                        "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {point}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Image
                              alt="NMIMS sample degree certificate"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              data-nimg={1}
                              className="Certificates_img__GOe9v"
                              style={{ color: "transparent" }}
                              src="/assets/img/others/nmims-mba.jpg"
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
                        The admission process takes place online. Fresh
                        admissions start in January every year. There are direct
                        admissions, and no entrance exam is conducted. The
                        admission procedure for 2025 for the online courses at
                        NMIMS Centre for Distance and Online Education is as
                        follows:
                      </p>
                      {[
                        "Fill out the registration form with the admission fee",
                        "Submit documents for verification",
                        "Deposit the tuition fee",
                        "Get confirmation notification regarding admission and credentials",
                      ].map((step, index) => (
                        <div className="Admissions_step__4mDzm" key={index}>
                          <div className="Admissions_stepCount__f9yhl">
                            STEP {index + 1}
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
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              src="/assets/img/home_6/check.png"
                            />
                            <p
                              style={{
                                fontSize: "16px",
                                fontFamily:
                                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                fontStyle: "normal",
                              }}
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="placement_placementBanner__ACCRS">
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 12 LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 20 LPA
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
                      <option value="Distance MBA">Distance MBA</option>
                      <option value="Distance EMBA">Distance EMBA</option>
                      <option value="Distance BBA">Distance BBA</option>
                      <option value="Distance BCom">Distance BCom</option>
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