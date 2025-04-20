"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { debounce } from "lodash";
import Menu from "../../../../components/Header/Menu/Menu";
import Footer from "../../../../components/Footer/Footer";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";

export default function Page() {
  const [activeSection, setActiveSection] = useState("About");
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] =
    useState(false);
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

  const courseSpecializations = {
    "Post Graduate Certificate (PGC)": [
      { name: "General Management", fees: 180000 },
    ],
    "Executive Programme": [
      { name: "Business Analytics", fees: 325000 },
      { name: "Digital Transformation", fees: 475000 },
    ],
    "ePost Graduate Diploma": [{ name: "Business Analytics", fees: 1200000 }],
    "e-Post Graduate Programme in Management": [
      { name: "Management", fees: 2000000 },
    ],
    "Programme on Strategic Management": [
      { name: "Strategic Management", fees: 281000 },
    ],
    "Accelarated General Management Programme": [
      { name: "General Management", fees: 690000 },
    ],
    "Financial Reporting and Corporate Governance": [
      { name: "Finance and Governance", fees: 191000 },
    ],
    "Advanced Programme": [{ name: "Advanced Management", fees: 325000 }],
    "Senior Management Programme": [
      { name: "Senior Management", fees: 815000 },
    ],
    "Management and Finance for Chartered Accountants Programme": [
      { name: "Finance for CAs", fees: 350000 },
    ],
  };

  // Calculate fee range dynamically
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
      "Certification",
      "Admission",
      "Placement",
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
        <title>IIM Ahmedabad - Online Courses & Admissions</title>
        <meta
          name="description"
          content="Explore online and blended learning programs at IIM Ahmedabad, including Post Graduate Certificates, Executive Programmes, and e-Post Graduate Diplomas with top-tier faculty and placement support."
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/indian-institute-of-management-ahmedabad/hero-image/banner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="IIM Ahmedabad campus banner"
            width={240}
            height={240}
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Indian Institute of Management, Ahmedabad (IIM Ahmedabad)
            </h1>
            <p className="headCarousal_location__7rFlL">Ahmedabad, Gujarat</p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Rank: 1 (Management)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              <Image
                src="https://store.learningroutes.in/images/colleges/indian-institute-of-management-ahmedabad/accreditations/EQUIS.webp"
                alt="EQUIS accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
            </div>
            <div className="headCarousal_proceedCompareContainer__rekWb">
              <a href="/colleges">
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
                        Indian Institute of Management, Ahmedabad (IIM
                        Ahmedabad)
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Named India’s finest and Asia’s foremost business
                        school, the Indian Institute of Management Ahmedabad is
                        among the top management institutes in India. Its EQUIS
                        (European Quality Improvement System) accreditation
                        proves that the quality of academic programmes at IIMA
                        is at par with global standards. The institution caters
                        to all the needs of candidates looking for regular
                        offline courses, executive programmes, and online or
                        blended programmes while maintaining the education
                        standards equally. To help learners upgrade their
                        current expertise or explore a new field of interest,
                        Online@IIMA is committed to delivering top-notch
                        programs spread over a wide range of domains. A
                        combination of online and blended courses, both paid and
                        free, are available at IIMA.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "Award of IIMA Alumni Membership",
                          "Weekend Classes",
                          "Blended Learning Courses",
                          "High Graduate Employment Rate",
                          "Internationally Reputed Faculty",
                          "Uninterrupted Technical Support in Conducting Online Classes, Attendance, Quizzes by Technology Partner",
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
                          Explore online learning courses in Indian Institute of
                          Management, Ahmedabad (IIM Ahmedabad)
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
                                name: "Post Graduate Certificate (PGC)",
                                feeRange: getFeeRange(
                                  "Post Graduate Certificate (PGC)"
                                ),
                              },
                              {
                                name: "Executive Programme",
                                feeRange: getFeeRange("Executive Programme"),
                              },
                              {
                                name: "ePost Graduate Diploma",
                                feeRange: getFeeRange("ePost Graduate Diploma"),
                              },
                              {
                                name: "e-Post Graduate Programme in Management",
                                feeRange: getFeeRange(
                                  "e-Post Graduate Programme in Management"
                                ),
                              },
                              {
                                name: "Programme on Strategic Management",
                                feeRange: getFeeRange(
                                  "Programme on Strategic Management"
                                ),
                              },
                              {
                                name: "Accelarated General Management Programme",
                                feeRange: getFeeRange(
                                  "Accelarated General Management Programme"
                                ),
                              },
                              {
                                name: "Financial Reporting and Corporate Governance",
                                feeRange: getFeeRange(
                                  "Financial Reporting and Corporate Governance"
                                ),
                              },
                              {
                                name: "Advanced Programme",
                                feeRange: getFeeRange("Advanced Programme"),
                              },
                              {
                                name: "Senior Management Programme",
                                feeRange: getFeeRange(
                                  "Senior Management Programme"
                                ),
                              },
                              {
                                name: "Management and Finance for Chartered Accountants Programme",
                                feeRange: getFeeRange(
                                  "Management and Finance for Chartered Accountants Programme"
                                ),
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
                    <div className="courseEligibility_wrapper__WDP1x">
                      <h2 className="courseEligibility_eligible_heading__5Qd_3">
                        Courses Eligibility
                      </h2>
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
                              course: "Post Graduate Certificate (PGC)",
                              eligibility:
                                "Diploma (10+2+3)/ Bachelor’s Degree or equivalent (10+2+3 or 10+2+4)/ 2 Years Master’s Degree or Equivalent/ from a recognized university (UGC/AICTE/DEC/AIU/State Government) in any discipline Min 2 years’ experience is preferable after completion of qualifying education Participants who fulfil the above criteria but are not working currently are also eligible for the programme",
                            },
                            {
                              course: "Executive Programme",
                              eligibility:
                                "Graduate working executives (10+2+3 or equivalent) in any discipline with 50% score with at least two years of experience in operations at Senior / Middle / Junior managerial levels or entrepreneurs. Applicants with some programming language skills are preferred.",
                            },
                            {
                              course: "ePost Graduate Diploma",
                              eligibility:
                                "Bachelor's degree holders with strong quantitative and analytical problem-solving skills. Minimum of 2 years' work experience (preferably in the domain of business analytics); the experience criterion may be relaxed for candidates with exceptional academics/professional qualifications in a relevant field and A valid test score (CAT/GATE/GMAT/GRE or the ePGD-ABA qualifying-cum-aptitude test).",
                            },
                            {
                              course: "e-Post Graduate Programme in Management",
                              eligibility:
                                "Working Professionals and Entrepreneurs with a minimum of 3 years’ fulltime work experience (after completion of graduation) as on March 31,2020. Minimum Age 24 years and above as on March 31, 2020 (born on or before March 31, 1996). Holding at least a Bachelor’s Degree/CA/CS/ICWA, with at least 50 percent marks in aggregate or equivalent CGPA, awarded by any of the recognized universities",
                            },
                            {
                              course: "Programme on Strategic Management",
                              eligibility:
                                "Working executives who are graduates (10+2+3 or equivalent) in any discipline with 50% marks, with an experience profile of at least five years after graduation are eligible.",
                            },
                            {
                              course:
                                "Accelarated General Management Programme",
                              eligibility:
                                "Working managers with an experience profile of five years or more, ideally up to 10 years. Those with up to 15 years of experience but only in one functional domain, will also be considered. The candidates should be graduates/postgraduates in any discipline with 50% or more marks.",
                            },
                            {
                              course:
                                "Financial Reporting and Corporate Governance",
                              eligibility:
                                "The candidates should be graduates/postgraduates in any discipline with 50% or more marks and minimum 2 - 3 years of work experience. Executives in junior and middle management, and entrepreneurs are welcome. Participants would be selected on the basis of assessment of their work experience, academic background and motivation to do the programme as demonstrated in the application form.",
                            },
                            {
                              course: "Advanced Programme",
                              eligibility: "Information not available",
                            },
                            {
                              course: "Senior Management Programme",
                              eligibility:
                                "Working professionals/self-employed (Graduates) with minimum work experience of 10 years, and who have done well and now aspire to take a leap and lead the next level of senior management functions.",
                            },
                            {
                              course:
                                "Management and Finance for Chartered Accountants Programme",
                              eligibility:
                                "The programme is meant for CAs with more than 3 years of experience who have chosen to work with corporate sector (Indian/MNCs, large/mid-size/small firms), own or work for large CA firms, or consultancy firms. The participants may be sponsored by their employers or be self-sponsored. The applicants to the programme should be Chartered Accountants and should have reasonable comfort with English as the medium of instruction.",
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
                            <option value="Post Graduate Certificate (PGC)">
                              Post Graduate Certificate (PGC)
                            </option>
                            <option value="Executive Programme">
                              Executive Programme
                            </option>
                            <option value="ePost Graduate Diploma">
                              ePost Graduate Diploma
                            </option>
                            <option value="e-Post Graduate Programme in Management">
                              e-Post Graduate Programme in Management
                            </option>
                            <option value="Programme on Strategic Management">
                              Programme on Strategic Management
                            </option>
                            <option value="Accelarated General Management Programme">
                              Accelarated General Management Programme
                            </option>
                            <option value="Financial Reporting and Corporate Governance">
                              Financial Reporting and Corporate Governance
                            </option>
                            <option value="Advanced Programme">
                              Advanced Programme
                            </option>
                            <option value="Senior Management Programme">
                              Senior Management Programme
                            </option>
                            <option value="Management and Finance for Chartered Accountants Programme">
                              Management and Finance for Chartered Accountants
                              Programme
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
                              "Andaman and Nicobar Islands",
                              "Chandigarh",
                              "Dadra and Nagar Haveli and Daman and Diu",
                              "Lakshadweep",
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
                              Earn an EQUIS certified, recognized around the
                              globe
                            </div>
                            <div>
                              {[
                                "One of the leading Executive Programmes offering Institute in India",
                                "NIRF- 1st rank (management)",
                                "EQUIS Recognised",
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
                            {/* Uncomment and update with correct image path */}
                            {/* <Image
                              alt="IIM Ahmedabad sample certificate"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              className="Certificates_img__GOe9v"
                              src="https://store.learningroutes.in/images/colleges/indian-institute-of-management-ahmedabad/certification/sample-certificate.webp"
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
                        The admissions process takes place in online mode. Fresh
                        admission starts from the month of January of every
                        year. There are direct admissions, no entrance exam is
                        conducted for the admission process. The admission
                        procedure 2025 for the online course at Indian Institute
                        of Management, Ahmedabad (IIM Ahmedabad) is as follow:
                      </p>
                      {[
                        "Visit the official Online@IIMA page",
                        "Create an account and select the course of interest",
                        "Fill in necessary details",
                        "For paid courses, make online payment during the application process",
                        "Live courses may have a filtering process",
                        "Instructors will review your profile to ensure suitability for the course cohort",
                        "Participant selection based on assessment of work experience, academic background, and motivation demonstrated in the application form",
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
                          Our students have an opportunity of
                        </h3>
                        {[
                          "Learn employability skills through Continuous Evaluation Process",
                          "Job that suitably fits the student profile",
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
                            ₹ 26 LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 146 LPA
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
                        Indian Institute of Management, Ahmedabad (IIM
                        Ahmedabad) Review
                      </h2>
                      <div>
                        <form>
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
                                        alt="Rating star"
                                        loading="lazy"
                                        width={400}
                                        height={400}
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
                              />
                              <textarea
                                placeholder="Write your reviews"
                                className="CollegeReview_college_page_details_review_form_input__niDf2"
                                name="comment"
                                required
                              />
                              <button className="CollegeReview_college_page_details_review_form_btn__xh_Sn">
                                Send message
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
                  <h6>Get Free Career Consultation</h6>
                  <form onSubmit={(e) => handleFormSubmit(e, true)}>
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
                      <option value="Post Graduate Certificate (PGC)">
                        Post Graduate Certificate (PGC)
                      </option>
                      <option value="Executive Programme">
                        Executive Programme
                      </option>
                      <option value="ePost Graduate Diploma">
                        ePost Graduate Diploma
                      </option>
                      <option value="e-Post Graduate Programme in Management">
                        e-Post Graduate Programme in Management
                      </option>
                      <option value="Programme on Strategic Management">
                        Programme on Strategic Management
                      </option>
                      <option value="Accelarated General Management Programme">
                        Accelarated General Management Programme
                      </option>
                      <option value="Financial Reporting and Corporate Governance">
                        Financial Reporting and Corporate Governance
                      </option>
                      <option value="Advanced Programme">
                        Advanced Programme
                      </option>
                      <option value="Senior Management Programme">
                        Senior Management Programme
                      </option>
                      <option value="Management and Finance for Chartered Accountants Programme">
                        Management and Finance for Chartered Accountants
                        Programme
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
                        "Andaman and Nicobar Islands",
                        "Chandigarh",
                        "Dadra and Nagar Haveli and Daman and Diu",
                        "Lakshadweep",
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
