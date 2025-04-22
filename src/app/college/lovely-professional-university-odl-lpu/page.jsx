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
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";

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
    "Distance MSc": [{ name: "Mathematics", fees: 54000 }],
    "Distance BBA": [{ name: "Management", fees: 75000 }],
    "Distance DBA": [{ name: "Business Administration", fees: 26000 }],
    "Distance MA": [
      { name: "English", fees: 24000 },
      { name: "History", fees: 30000 },
    ],
    "Distance MLIS": [{ name: "Library and Information Science", fees: 13000 }],
    "Distance MBA": [
      { name: "Finance", fees: 54000 },
      { name: "Marketing", fees: 54000 },
    ],
    "Distance BCom": [{ name: "Commerce", fees: 57000 }],
    "Distance MCA": [{ name: "Computer Applications", fees: 54000 }],
    "Distance MCom": [{ name: "Commerce", fees: 38000 }],
    "Distance BSc": [{ name: "Information Technology", fees: 75000 }],
    "Distance BCA": [{ name: "Computer Applications", fees: 75000 }],
    "Distance DCA": [{ name: "Computer Applications", fees: 26000 }],
    "Distance DLIS": [{ name: "Library and Information Science", fees: 13000 }],
    "Distance BA": [{ name: "Arts", fees: 36000 }],
    "Distance BLIS": [{ name: "Library and Information Science", fees: 13000 }],
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
        <title>LPU Online - Courses & Admissions</title>
        <meta
          name="description"
          content="Explore online and distance learning programs at LPU Online, including MSc, BBA, DBA, MA, MLIS, MBA, BCom, MCA, MCom, BSc, BCA, DCA, DLIS, BA, and BLIS."
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/LPU-Online/hero-image/banner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="LPU Online campus banner"
            width={240}
            height={240}
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <h1 className="headCarousal_collegeHeading__KBbuL">LPU Online</h1>
            <p className="headCarousal_location__7rFlL">Phagwara, Punjab</p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Rank: 45 (Overall)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              {[
                { src: "UGC_DEB.webp", alt: "UGC-DEB accreditation" },
                { src: "AICTE.webp", alt: "AICTE accreditation" },
                { src: "NAAC A++.webp", alt: "NAAC A++ accreditation" },
                { src: "WES.webp", alt: "WES accreditation" },
              ].map((acc, index) => (
                <Image
                  key={index}
                  src={`https://store.learningroutes.in/images/colleges/LPU-Online/accreditations/${acc.src}`}
                  alt={acc.alt}
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <div className="headCarousal_proceedCompareContainer__rekWb">
              <a href="colleges.html">
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
                        LPU Online
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        One of the most eminent educational institutions
                        globally, Lovely Professional University was established
                        in 2005 and presently is a global hub for innovation and
                        academic excellence. LPU offers a wide range of
                        bachelor’s, master's, and doctoral programmes,
                        accredited and ranked by various eminent educational
                        bodies like NAC, UGC, NCTE, etc. To make learning more
                        flexible and accessible for students, Lovely
                        Professional University started its online educational
                        platform, LPU Online. It offers UG and PG degrees via
                        online learning that are equally credible and taught by
                        top-notch university faculty. LPU Online provides 24/7
                        academic support through its learning management system
                        and additional master classes taught by experts in
                        various industries. Interactive live lectures are held
                        on weekends, and recorded video content is readily
                        available and easily accessible to the students. LPU
                        Online offers a variety of opportunities, brings
                        different cultures onto a single platform, and makes
                        learning a joyful, holistic, and enriching experience
                        for the students. With an impeccable placement record
                        and extensive alumni network, Lovely Professional
                        University has established itself as one of the best
                        educational institutions in India.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "Flexible learning mode",
                          "Online proctored examination mode",
                          "Live lectures on weekends",
                          "Easily accessible recorded sessions",
                          "Industry-relevant curriculum",
                          "Global classroom experience",
                          "Campus immersion opportunities",
                          "International outlook for enriched and enhanced learning",
                          "Affordable UGC-recognised degrees",
                          "Easy pay EMI option",
                          "24/7 academic support",
                          "Master classes by industry experts",
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
                          Explore online learning courses in Lovely Professional
                          University ODL (LPU)
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
                                name: "Distance MSc",
                                feeRange: getFeeRange("Distance MSc"),
                              },
                              {
                                name: "Distance BBA",
                                feeRange: getFeeRange("Distance BBA"),
                              },
                              {
                                name: "Distance DBA",
                                feeRange: getFeeRange("Distance DBA"),
                              },
                              {
                                name: "Distance MA",
                                feeRange: getFeeRange("Distance MA"),
                              },
                              {
                                name: "Distance MLIS",
                                feeRange: getFeeRange("Distance MLIS"),
                              },
                              {
                                name: "Distance MBA",
                                feeRange: getFeeRange("Distance MBA"),
                              },
                              {
                                name: "Distance BCom",
                                feeRange: getFeeRange("Distance BCom"),
                              },
                              {
                                name: "Distance MCA",
                                feeRange: getFeeRange("Distance MCA"),
                              },
                              {
                                name: "Distance MCom",
                                feeRange: getFeeRange("Distance MCom"),
                              },
                              {
                                name: "Distance BSc",
                                feeRange: getFeeRange("Distance BSc"),
                              },
                              {
                                name: "Distance BCA",
                                feeRange: getFeeRange("Distance BCA"),
                              },
                              {
                                name: "Distance DCA",
                                feeRange: getFeeRange("Distance DCA"),
                              },
                              {
                                name: "Distance DLIS",
                                feeRange: getFeeRange("Distance DLIS"),
                              },
                              {
                                name: "Distance BA",
                                feeRange: getFeeRange("Distance BA"),
                              },
                              {
                                name: "Distance BLIS",
                                feeRange: getFeeRange("Distance BLIS"),
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
                        Course Eligibility
                      </h2>
                      <table className="courseEligibility_eligible_table__ZvMdh">
                        <thead>
                          <tr className="courseEligibility_eligible_head__GsY_a">
                            <th>Courses</th>
                            <th>Eligibility</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MCA</td>
                            <td>
                              BCA/B.Sc. (Computer Science)/B.Sc. (Information
                              Technology)/Bachelor's degree in computer science
                              engineering or equivalent OR Any Graduation with
                              Computer Science as a subject for three years with
                              Mathematics/Statistics/QT/Business Math as one of
                              the subjects at Graduation or 10+2 level or
                              equivalent OR B.A. or B.Com. or B.Sc. (any
                              Graduation) with
                              Mathematics/Statistics/QT/Business Math as one of
                              the subjects at Graduation or 10+2 level or
                              equivalent (with additional bridge courses)
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MCom</td>
                            <td>
                              Bachelor's degree (Commerce, Management,
                              Economics, Accounts, or Math/Economics as one of
                              the subjects/ courses) or equivalent.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MA</td>
                            <td>
                              Bachelor's degree (any discipline) or equivalent.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MBA</td>
                            <td>
                              Bachelor’s degree in any discipline or equivalent
                              or Completed Company Secretary (CS) course from
                              Institute of Company Secretaries of India (ICSI)
                              or Completed Chartered Accountancy (CA) course
                              from Institute of Chartered Accountants of India
                              (ICAI) or Completed Cost & Management Accountancy
                              (CMA) from Institute of Cost Accountants of India
                              (ICAI)
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MSc</td>
                            <td>
                              Bachelor’s degree in any discipline with
                              Mathematics as a subject or B.Tech. or B.E. or
                              B.Sc. (Engineering) or equivalent.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BCA</td>
                            <td>
                              Completed 10+2 or 10+3 diploma from a recognised
                              board/institution.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BA</td>
                            <td>
                              Completed 10+2 or 10+3 diploma from a recognised
                              board/institution.
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
                            <option value="Distance MSc">Distance MSc</option>
                            <option value="Distance BBA">Distance BBA</option>
                            <option value="Distance DBA">Distance DBA</option>
                            <option value="Distance MA">Distance MA</option>
                            <option value="Distance MLIS">Distance MLIS</option>
                            <option value="Distance MBA">Distance MBA</option>
                            <option value="Distance BCom">Distance BCom</option>
                            <option value="Distance MCA">Distance MCA</option>
                            <option value="Distance MCom">Distance MCom</option>
                            <option value="Distance BSc">Distance BSc</option>
                            <option value="Distance BCA">Distance BCA</option>
                            <option value="Distance DCA">Distance DCA</option>
                            <option value="Distance DLIS">Distance DLIS</option>
                            <option value="Distance BA">Distance BA</option>
                            <option value="Distance BLIS">Distance BLIS</option>
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
                    id="Scholarships"
                  >
                    <div className="scholarshop_container__KSXI8">
                      <h2 className="scholarshop_heading__wLasH">
                        Scholarships
                      </h2>
                      <div>
                        <div>
                          <p className="scholarshop_scholarshipDetail__m_Jhr">
                            Lovely Professional University provides scholarships
                            and financial aid to students based on particular
                            needs, like specific disabilities or if there are
                            orphans or any other specified needs. Financial
                            assistance is also offered to the serving/retired
                            defence/CAPF/paramilitary personnel and their
                            dependents.
                          </p>
                          {[
                            "Depending on performance in LPUNEST, you can avail of scholarships under three different categories cut off.",
                            "The top 20 rank holders in the merit list of a recognised school board are eligible for scholarship and fee concessions.",
                            "LPU Online provides scholarships to provide financial assistance to students, i.e. Economically Weaker Sections (EWS), and special categories that include single girl child, single mothers, students from minorities, transgender and non-traditional students, or for Serving/ Retired Defence/ CAPF/ Para- Military Personnel and their Dependents, who need support for pursuing or continuing with their higher education.",
                            "All the top students who apply to LPU and clear the exam conducted by the Indian Government can get Scholarships up to INR 250,000 (approximately USD 3200) per year.",
                            "LPU offers a special scholarship scheme to students who want to pursue innovation, startup, & entrepreneurship.",
                          ].map((desc, index) => (
                            <div
                              className="scholarshop_scholarDesc__hpzVr"
                              key={index}
                            >
                              <p className="scholarshop_description__Qzg2d">
                                <span className="scholarshop_title__k4_Sc">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    className="scholarshop_diamondIcon__Spg2t"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
                                  </svg>
                                </span>
                                {desc}
                              </p>
                            </div>
                          ))}
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
                              Earn a degree that is recognized around the globe
                            </div>
                            <div>
                              {[
                                "UGC-DEB Recognized and accredited degree",
                                "NAAC A++ grade recognised",
                                "AICTE recognised & WES recognised",
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
                              alt="LPU Online sample degree certificate"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              className="Certificates_img__GOe9v"
                              src="https://store.learningroutes.in/images/colleges/LPU-Online/certification/certification.webp"
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
                            LPU Online offers EMI options with zero processing
                            fees for students to pay the fees for their
                            respective programs. Total Fee, if paid in Lump Sum:
                            Eligible students can also avail of a 25-30% student
                            grant on the overall semester course fee at LPU
                            Online, which reduces the overall cost of the online
                            programme.
                          </p>
                          {[
                            "No-Cost EMI: You can pay your fees for monthly installments at no additional cost.",
                            "Student Grant: If you are an eligible candidate, you can avail yourself of up to 30% of the student grant on course fees.",
                            "Scholarships: LPU offers various scholarships to students based on several parameters, which brings down the total programme fee.",
                          ].map((desc, index) => (
                            <div key={index}>
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
                                  {desc.split(": ")[0]}:
                                </span>
                                {desc.split(": ")[1]}
                              </p>
                            </div>
                          ))}
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
                        procedure 2025 for the online course at LPU Online is as
                        follow:
                      </p>
                      {[
                        "Registration: Sign up and pay the initial registration fee.",
                        "Online Application Form: Fill in the details, pay program fee and upload relevant documents",
                        "Document verification by University: Sit back and wait for admission confirmation",
                        "Student Registration and LMS Activation: Get your LMS credentials over the email",
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
                          <p className="Exam_text__iZpVR" />
                          {[
                            "Mode of Examination: Flexible, online, and proctored examination mode with LPU e-Connect (Learning Management System for Online and Distance Learners).",
                            "Proctoring: Exams are monitored remotely via webcam, and an additional device for third-eye view to ensure integrity.",
                            "Flexibility: Choose your exam time within a designated window.",
                            "Location: Take exams from home or a convenient location of your choice.",
                            "Basic Requirements: (1) Laptop or desktop with a microphone and webcam. (2) Internet: Stable, high-speed connection. (3) Browser: Latest version of Google Chrome.",
                          ].map((desc, index) => (
                            <div key={index}>
                              <p className="Exam_paragraph__CFH4S">
                                <span className="Exam_title__zgD3N">
                                  {desc.split(": ")[0]}:
                                </span>
                                {desc.split(": ")[1]}
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
                          Our students have an opportunity of
                        </h3>
                        {[
                          "Learn employability skills through assessments and tests",
                          "Top recruiters from leading Companies",
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
                            ₹ 5 LPA
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
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="FAQ's">
                    <div className="faq_container__v2O04">
                      <h2 className="faq_heading__ypOPH">FAQ's</h2>
                      <div className="faq_faqMainContainer__T9i6Q">
                        {[
                          "Is distance education available at LPU?",
                          "Is LPU Online recognised by UGC?",
                          "Is the LPU Online degree valid?",
                          "Is LPU Online worth it?",
                          "Does LPU Online provide placement?",
                          "Is LPU Online recognised by WES?",
                        ].map((ques, index) => (
                          <div className="faq_faqMain__ACefH" key={index}>
                            <div className="faq_questionContainer__zAsad">
                              <div className="faq_ques__Hgq7Z">
                                Q.{index + 1} {ques}
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
                                  <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
                                  <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                                </svg>
                              </div>
                            </div>
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
                        LPU Online Review
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
                                        alt="rating"
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
                      <option value="Distance MSc">Distance MSc</option>
                      <option value="Distance BBA">Distance BBA</option>
                      <option value="Distance DBA">Distance DBA</option>
                      <option value="Distance MA">Distance MA</option>
                      <option value="Distance MLIS">Distance MLIS</option>
                      <option value="Distance MBA">Distance MBA</option>
                      <option value="Distance BCom">Distance BCom</option>
                      <option value="Distance MCA">Distance MCA</option>
                      <option value="Distance MCom">Distance MCom</option>
                      <option value="Distance BSc">Distance BSc</option>
                      <option value="Distance BCA">Distance BCA</option>
                      <option value="Distance DCA">Distance DCA</option>
                      <option value="Distance DLIS">Distance DLIS</option>
                      <option value="Distance BA">Distance BA</option>
                      <option value="Distance BLIS">Distance BLIS</option>
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
