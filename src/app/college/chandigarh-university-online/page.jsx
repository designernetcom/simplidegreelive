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
    "Online MBA": [
      { name: "Finance", fees: 210668 },
      { name: "Business Analytics", fees: 210668 },
    ],
    "Online MSc - Data Science": [{ name: "Data Science", fees: 146668 }],
    "Online MSc - Mathematics": [{ name: "Mathematics", fees: 100000 }],
    "Online MCA": [{ name: "Computer Applications", fees: 140000 }],
    "Online MA - English": [{ name: "English", fees: 100000 }],
    "Online MA - Economics": [{ name: "Economics", fees: 100000 }],
    "Online MA - JMC": [
      { name: "Journalism and Mass Communication", fees: 120000 },
    ],
    "Online BBA": [{ name: "Business Administration", fees: 168000 }],
    "Online BBA (ACCA)": [{ name: "ACCA", fees: 400000 }],
    "Online BCA": [{ name: "Computer Applications", fees: 170664 }],
    "Online BA - JMC": [
      { name: "Journalism and Mass Communication", fees: 166668 },
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
        <title>Chandigarh University Online - Courses & Admissions</title>
        <meta
          name="description"
          content="Explore online learning programs at Chandigarh University Online, including MBA, MSc, MCA, MA, BBA, BCA, and BA with flexible learning and placement support."
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/chandigarh-university/hero-image/chandigarhuniversitybanner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="Chandigarh University Online campus banner"
            width={240}
            height={240}
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Chandigarh University Online
            </h1>
            <p className="headCarousal_location__7rFlL">Mohali, Punjab</p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Rank: 32 (Overall)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              {[
                { src: "ugc.webp", alt: "UGC accreditation" },
                { src: "naac-a+.webp", alt: "NAAC A+ accreditation" },
                { src: "aiu.webp", alt: "AIU accreditation" },
                { src: "acu.webp", alt: "ACU accreditation" },
                { src: "iau.webp", alt: "IAU accreditation" },
                { src: "nchmct.webp", alt: "NCHMCT accreditation" },
              ].map((acc, index) => (
                <Image
                  key={index}
                  src={`https://store.learningroutes.in/images/colleges/chandigarh-university/accreditations/${acc.src}`}
                  alt={acc.alt}
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
              ))}
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
                        Chandigarh University Online
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Established in 2012, Chandigarh University is a leading
                        educational institution offering its students a unique
                        amalgamation of professional and academic excellence.
                        The university has been accredited with the prestigious
                        A+ grade by the National Assessment and Accreditation
                        Council (NAAC). To provide quality higher education to a
                        larger chunk of people, the university has established
                        an Open & Distance Learning and an Online Learning Arm.
                        Both these institutions offer a diverse range of
                        programmes paired with flexibility, experiential
                        learning and interdisciplinary orientation. It allows
                        students to explore their interests and pursue their
                        dream careers. To make sure that students can reap
                        maximum benefits out of their distance/ online learning
                        experience, the university has in place an advanced
                        learning management system. Students can use it to
                        access study material and track their progress.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "UGC-recognized Online Degree Programmes",
                          "AICTE-approved MBA degree",
                          "Connect with University E-Knowledge Resource System",
                          "Regular Live interactive Sessions with Industry Experts",
                          "Internationally Recognized Programmes",
                          "Affordable Fee with EMI Option",
                          "Weekly Case Study Discussions for Each Programme",
                          "Advanced Learning Management System (LMS)",
                          "Placement Assistance",
                          "Flexible Exam Slot Booking System",
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
                          Explore online learning courses in Chandigarh
                          University Online
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
                                name: "Online MBA",
                                link: "https://www.learningroutes.in/courses/online-mba",
                                feeRange: getFeeRange("Online MBA"),
                              },
                              {
                                name: "Online MSc - Data Science",
                                link: "https://www.learningroutes.in/courses/online-msc",
                                feeRange: getFeeRange(
                                  "Online MSc - Data Science"
                                ),
                              },
                              {
                                name: "Online MSc - Mathematics",
                                link: "https://www.learningroutes.in/courses/online-msc",
                                feeRange: getFeeRange(
                                  "Online MSc - Mathematics"
                                ),
                              },
                              {
                                name: "Online MCA",
                                link: "https://www.learningroutes.in/courses/online-mca",
                                feeRange: getFeeRange("Online MCA"),
                              },
                              {
                                name: "Online MA - English",
                                link: "https://www.learningroutes.in/courses/online-ma",
                                feeRange: getFeeRange("Online MA - English"),
                              },
                              {
                                name: "Online MA - Economics",
                                link: "https://www.learningroutes.in/courses/online-ma",
                                feeRange: getFeeRange("Online MA - Economics"),
                              },
                              {
                                name: "Online MA - JMC",
                                link: "https://www.learningroutes.in/courses/online-ma",
                                feeRange: getFeeRange("Online MA - JMC"),
                              },
                              {
                                name: "Online BBA",
                                link: "https://www.learningroutes.in/courses/online-bba",
                                feeRange: getFeeRange("Online BBA"),
                              },
                              {
                                name: "Online BBA (ACCA)",
                                link: "https://www.learningroutes.in/courses/online-bba",
                                feeRange: getFeeRange("Online BBA (ACCA)"),
                              },
                              {
                                name: "Online BCA",
                                link: "https://www.learningroutes.in/courses/online-bca",
                                feeRange: getFeeRange("Online BCA"),
                              },
                              {
                                name: "Online BA - JMC",
                                link: "https://www.learningroutes.in/courses/online-ba",
                                feeRange: getFeeRange("Online BA - JMC"),
                              },
                            ].map((course, index) => (
                              <tr className="courses_tbody__ZPCxV" key={index}>
                                <td>
                                  <a
                                    className="courses_courseLink__FAoj3"
                                    href={course.link}
                                  >
                                    {course.name}
                                  </a>
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
                              course: "Online MBA",
                              eligibility:
                                "Bachelor degree in any discipline from recognized University/ Institution. Graduates of recognized professional programs like CA/ ICWA etc. are also eligible to apply.",
                            },
                            {
                              course: "MBA X",
                              eligibility:
                                "Applicants must have a minimum of 2 years of work experience in an organization or a CGPA of 6.0 or above in their undergraduate studies, regardless of the field of study.",
                            },
                            {
                              course: "Online MBA - Business Analytics",
                              eligibility:
                                "Bachelor degree in any discipline from recognized University/ Institution. Graduates of recognized professional programs like CA/ ICWA etc. are also eligible to apply.",
                            },
                            {
                              course: "Online MSc - Data Science",
                              eligibility:
                                "A candidate must have earned a Bachelor's degree in B.A./BCA/B.Sc. (Statistics or Mathematics or Computer Science) /B.E/B.Tech or an equivalent undergraduate degree in any of the following subjects from a recognized Board/ University: Computer Science/ Mathematics/ Statistics",
                            },
                            {
                              course: "Online MSc - Mathematics",
                              eligibility:
                                "Bachelor's Degree with Mathematics as compulsory subject from a recognized Board / University.",
                            },
                            {
                              course: "Online MCA",
                              eligibility:
                                "A candidate shall have passed the qualifying examination of BCA/ B.Sc. (Computer Science)/ B.Sc. (IT) / B.E. (CSE)/ B.Tech.(CSE) / B.E. (IT) / B.Tech. (IT) or passed any graduation degree (e.g.: B.E/ B.Tech / B.Sc. / B.Com. / B.A/ B.Voc) with Mathematics, Business Mathematics, Programming or Statistics at 10+2 level or at Graduation level.",
                            },
                            {
                              course: "Online MA - English",
                              eligibility:
                                "Graduation in any discipline or equivalemnt, preferably with English as a subject OR Bachelor's of Arts (Hons.) in English.",
                            },
                            {
                              course: "Online MA - Economics",
                              eligibility:
                                "Bachelor's Degree with Economics as one of the compulsory subject at Graduation level.",
                            },
                            {
                              course: "Online MA - JMC",
                              eligibility:
                                "Bachelor's Degree or its equivalent from a recognized Board / University.",
                            },
                            {
                              course: "Online BBA",
                              eligibility:
                                "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
                            },
                            {
                              course: "Online BBA - Business Analytics",
                              eligibility:
                                "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
                            },
                            {
                              course: "Online BBA (ACCA)",
                              eligibility:
                                "10+2 or an equivalent examination in any stream conducted by a recognised board, university, or council.",
                            },
                            {
                              course: "Online BCA",
                              eligibility:
                                "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
                            },
                            {
                              course: "Online BA - JMC",
                              eligibility:
                                "10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council.",
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
                            <option value="Online MBA">Online MBA</option>
                            <option value="Online MSc - Data Science">
                              Online MSc - Data Science
                            </option>
                            <option value="Online MSc - Mathematics">
                              Online MSc - Mathematics
                            </option>
                            <option value="Online MCA">Online MCA</option>
                            <option value="Online MA - English">
                              Online MA - English
                            </option>
                            <option value="Online MA - Economics">
                              Online MA - Economics
                            </option>
                            <option value="Online MA - JMC">
                              Online MA - JMC
                            </option>
                            <option value="Online BBA">Online BBA</option>
                            <option value="Online BBA (ACCA)">
                              Online BBA (ACCA)
                            </option>
                            <option value="Online BCA">Online BCA</option>
                            <option value="Online BA - JMC">
                              Online BA - JMC
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
                              Earn an UGC entitled degree, recognized around the
                              globe
                            </div>
                            <div>
                              {[
                                "Recognized and accredited degree",
                                "NAAC and NCHMCT-approved degree",
                                "Degree recognized in both private and public sector",
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
                              alt="Chandigarh University Online sample degree certificate"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              className="Certificates_img__GOe9v"
                              src="https://store.learningroutes.in/images/colleges/chandigarh-university/certification/chandigarh-university-sample-certificate.webp"
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
                        procedure 2025 for the online course at Chandigarh
                        University Online is as follow:
                      </p>
                      {[
                        "Visit www.onlinecu.in and click on 'Apply Now/Enquire Now'",
                        "At the homepage under 'Register Today', fill up the required details and click on 'Register Now' (Full Name, Email ID, Mobile No, Programme, Date of Birth)",
                        "Login to fill up the application using the User ID and Password sent through SMS and Email",
                        "Click on the 'Application Form', fill it with your details, and pay the Program Fee",
                        "Click on 'Document Upload' and upload all necessary documents and a recent passport-size photograph, then click on 'Submit'",
                        "For any query, email admissions@onlinecu.in or call at 1800121388800",
                      ].map((step, index) => (
                        <div className="Admissions_step__4mDzm" key={index}>
                          <div className="Admissions_stepCount__f9yhl">
                            STEP {index + 1}
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            {index === 5 ? (
                              <>
                                For any query, email{" "}
                                <a href="mailto:admissions@onlinecu.in">
                                  admissions@onlinecu.in
                                </a>{" "}
                                or call at 1800121388800
                              </>
                            ) : (
                              step
                            )}
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
                          "Learn employability skills through assessments and tests",
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
                            ₹ 12 LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ 54 LPA
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
                      {/* Uncomment to include placement partners */}
                      {/* <h3 className="placement_heading__iEHZj">Our Students Work At</h3>
                      <div className="partners_container___c9cx">
                        {[
                          { src: "google.webp", alt: "Google placement partner" },
                          { src: "microsoft.webp", alt: "Microsoft placement partner" },
                          { src: "amazon.webp", alt: "Amazon placement partner" },
                          { src: "dell.webp", alt: "Dell placement partner" },
                          { src: "cognizant.webp", alt: "Cognizant placement partner" },
                          { src: "deloitte.webp", alt: "Deloitte placement partner" },
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
                                src={`https://store.learningroutes.in/images/colleges/chandigarh-university/placement-partners/${partner.src}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                    <div
                      className="CollegeReview_college_page_details_review_container__KbbIU"
                      id="contact"
                    >
                      <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                        Chandigarh University Online Review
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
                  <h6 className="td_mb_20">Get Free Career Consultation</h6>
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
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online MSc - Data Science">
                        Online MSc - Data Science
                      </option>
                      <option value="Online MSc - Mathematics">
                        Online MSc - Mathematics
                      </option>
                      <option value="Online MCA">Online MCA</option>
                      <option value="Online MA - English">
                        Online MA - English
                      </option>
                      <option value="Online MA - Economics">
                        Online MA - Economics
                      </option>
                      <option value="Online MA - JMC">Online MA - JMC</option>
                      <option value="Online BBA">Online BBA</option>
                      <option value="Online BBA (ACCA)">
                        Online BBA (ACCA)
                      </option>
                      <option value="Online BCA">Online BCA</option>
                      <option value="Online BA - JMC">Online BA - JMC</option>
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
