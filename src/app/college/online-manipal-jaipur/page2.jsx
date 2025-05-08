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
import "../../styles/main.css";

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
      { name: "Finance", fees: 110000 },
      { name: "Marketing", fees: 150000 },
      { name: "Data Analytics", fees: 280000 },
    ],
    "Online MCom": [{ name: "Accounting", fees: 75000 }],
    "Online BBA": [{ name: "Management", fees: 135000 }],
    "Online BCom": [{ name: "Commerce", fees: 75000 }],
    "Online MA": [
      { name: "Journalism", fees: 75000 },
      { name: "Public Policy", fees: 140000 },
    ],
    "Online MCA": [{ name: "Computer Applications", fees: 98000 }],
    "Online BCA": [{ name: "Computer Applications", fees: 135000 }],
    "Online BA": [{ name: "Arts", fees: 75000 }],
    "Online MSc": [{ name: "Data Science", fees: 280000 }],
    "Online PGCP": [
      { name: "General Management", fees: 110000 },
      { name: "Advanced Management", fees: 140000 },
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
        <title>Online Manipal - Courses & Admissions</title>
        <meta
          name="description"
          content="Explore online degree programs at Online Manipal, including MBA, MCom, BBA, BCom, MA, MCA, BCA, BA, MSc, and PGCP."
        />
      </Head>
      <Menu />
      
    <div>
      <div className="headCarousal_collegeCarousal__4a5Bq">
  <img alt="hero-image" fetchpriority="high" width={240} height={240} decoding="async" data-nimg={1} className="headCarousal_clg_banner__CXazi" style={{color: 'transparent'}} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=256&q=75   256w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=384&q=75   384w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=640&q=75   640w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=750&q=75   750w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=828&q=75   828w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=1080&q=75 1080w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=1200&q=75 1200w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=1920&q=75 1920w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=2048&q=75 2048w,
      /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=3840&q=75 3840w
    " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fhero-image%2Famitybanner.webp&w=3840&q=75" />
  <div className="headCarousal_gradientOverlayStyle__DEkSg" />
  <div className="headCarousal_collegeHeadingContainer__E4uDz">
    <nav className="Breadcrumb_breadcrumb__j1UHX">
      <span className="Breadcrumb_breadcrumbItem__lnXIo"><a className="Breadcrumb_link__zmGnw" href="/">Home</a><span className="Breadcrumb_separator__e7M6o">/</span></span><span className="Breadcrumb_breadcrumbItem__lnXIo"><a className="Breadcrumb_link__zmGnw" href="/colleges">Colleges</a><span className="Breadcrumb_separator__e7M6o">/</span></span><span className="Breadcrumb_breadcrumbItem__lnXIo"><span>Amity University Online</span></span>
    </nav>
    <h1 className="headCarousal_collegeHeading__KBbuL">
      Amity University Online
    </h1>
    <p className="headCarousal_location__7rFlL">
      Noida Uttar Pradesh
    </p>
    <p className="headCarousal_ranking__1yTOY">
      NIRF Ranking: 49 (Overall Category)
    </p>
    <div className="headCarousal_accreditation__HUqxZ">
      <img src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/naac.webp" alt="accreditation" className="headCarousal_accImg__NoM8M" width={20} height={20} /><img src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/ugc.webp" alt="accreditation" className="headCarousal_accImg__NoM8M" width={20} height={20} /><img src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/aicte.webp" alt="accreditation" className="headCarousal_accImg__NoM8M" width={20} height={20} /><img src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/aiu.webp" alt="accreditation" className="headCarousal_accImg__NoM8M" width={20} height={20} /><img src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/acu.webp" alt="accreditation" className="headCarousal_accImg__NoM8M" width={20} height={20} />
    </div>
    <div className="headCarousal_proceedCompareContainer__rekWb">
      <a href="/colleges"><button className="headCarousal_collegeCompare__znhHH">
          Add To Compare
        </button></a>
    </div>
  </div>
</div>

<div className="college_collegWrapper__vaQh1">
  <div className="college_collegeContainer__nqZS1">
    <div className="college_dataSection__0M4eV">
      <div className="collegeDetails_detailsPage__0qlWI">
        <div className="collegeDetails_scroller__kwBjm">
          <a className="collegeDetails_scrollerElement__iuUFa" id="link-About" href="#About"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_selectedBox___Y1P_ collegeDetails_textWhite__q6ndV">
              About
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-High" href="#High"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Highlights
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Courses" href="#Courses"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Courses
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Course Eligibility" href="#Course Eligibility"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Course Eligibility
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Enquire Now" href="#Enquire Now"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              <div style={{display: 'flex', alignItems: 'center', gap: 5}}>
                <div>Enquire Now</div>
                <div className="college_blink__yxq74" />
              </div></div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Scholarships" href="#Scholarships"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Scholarships
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Certification" href="#Certification"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Certifications
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Admission" href="#Admission"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Admission Procedure
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Exam" href="#Exam"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Examination Pattern
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Placement" href="#Placement"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Placement
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-FAQ's" href="#FAQ's"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              FAQ's
            </div></a><a className="collegeDetails_scrollerElement__iuUFa" id="link-Review" href="#Review"><div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
              Review
            </div></a>
        </div>
        <div className="collegeDetails_detailsContainer__6A8oL">
          <div className="collegeDetails_maxWidth__6vBVL" id="About">
            <div className="about_collegeDetails__67FzM">
              <h2 className="about_collegeDetailsHeading__AA_dr">
                Amity University Online
              </h2>
              <p className="about_collegeDetailsDescription__7Swyd">
                The Amity Education Group is a not-for-profit organization
                that was started in 1986 by the Chauhan family. Today, the
                University has a presence in more than 11 countries with
                over 1,75,000 students. To cater to the educational needs
                of a larger segment of individuals, Amity took the
                initiative to offer education through the online mode.
                Thus, Amity University became the first university in
                India to gain approval from the UGC to offer online
                degrees in 2009. To ensure that students make the most out
                of their online learning experience, the university has
                set up a one-of-its-kind platform, AMIGO, that takes care
                of all the study-related needs of students. With its
                innovative thinking and futuristic approach, Amity
                University is closing the gaps in education by making
                quality higher education accessible to all.
              </p>
              <div className="about_video_container__SYZ_V">
                <iframe loading="lazy" src="https://www.youtube.com/embed/Shb51giMj5w?si=lrHCA2h9fcP3sThs" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="High">
            <div className="Highlights_container__yqw8t">
              <h2 className="Highlights_heading__QnGK2">Highlights</h2>
              <div className="Highlights_grid__zFaon">
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>
                    Learn from the Faculty of International Repute
                  </div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>
                    Advanced Learning Material including physical books,
                    audiobooks, etc
                  </div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>
                    Real Time Industry Projects for Portfolio Building
                  </div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>Support Team: Student Relationship Manager</div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>
                    Career Assistance and Exclusive Virtual Job Fairs
                  </div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>Guest Lectures and Webinars</div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>Interview Preparations</div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>Open Education Policy</div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>Two Degrees Simultaneously - Free of Cost</div>
                </div>
                <div className="Highlights_pointContainer__5_snP">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="Highlights_pointIcon__m_iYg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l5 5-5 5-5-5 5-5z" />
                  </svg>
                  <div>Professional Add-on Courses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
            <div className="courses_wrapper__5pXR3">
              <div className="courses_container__c_BRe">
                <h2 className="courses_heading__nCyjm">Courses</h2>
                <p className="courses_course_college_name__Reg2z">
                  Explore online learning courses in
                  {/* */}Amity University Online
                </p>
                <table className="courses_course_table__llAtE">
                  <thead style={{background: 'var(--dark-blue)'}}>
                    <tr className="courses_course_head__M4Cun">
                      <th>Courses</th>
                      <th style={{textAlign: 'center'}}>Fee Range</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-bcom">Online BCom</a>
                      </td>
                      <td style={{textAlign: 'center'}}>₹ 99000-₹ 250000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-ma">Online MA</a>
                      </td>
                      <td style={{textAlign: 'center'}}>
                        ₹ 130000-₹ 250000
                      </td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-bba">Online BBA</a>
                      </td>
                      <td style={{textAlign: 'center'}}>
                        ₹ 165000-₹ 225000
                      </td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-mca">Online MCA</a>
                      </td>
                      <td style={{textAlign: 'center'}}>
                        ₹ 170000-₹ 250000
                      </td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-mba">Online MBA</a>
                      </td>
                      <td style={{textAlign: 'center'}}>
                        ₹ 199000-₹ 299000
                      </td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-mba">Online MBA with Dual Specialisation</a>
                      </td>
                      <td style={{textAlign: 'center'}}>₹ 299000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-ba">Online BA</a>
                      </td>
                      <td style={{textAlign: 'center'}}>₹ 99000-₹ 170000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>Online MAJMC</td>
                      <td style={{textAlign: 'center'}}>₹ 170000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-mcom">Online MCom</a>
                      </td>
                      <td style={{textAlign: 'center'}}>₹ 120000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-bca">Online BCA</a>
                      </td>
                      <td style={{textAlign: 'center'}}>
                        ₹ 150000-₹ 225000
                      </td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>
                        <a className="courses_courseLink__FAoj3" href="https://www.learningroutes.in/courses/online-msc">Online MSc</a>
                      </td>
                      <td style={{textAlign: 'center'}}>₹ 250000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                    <tr className="courses_tbody__ZPCxV">
                      <td>Online Certificate Programme</td>
                      <td style={{textAlign: 'center'}}>₹ 17000-₹ 75000</td>
                      <td style={{textAlign: 'center'}} className="group_btn">
                        <button className="courses_enqnow__8Vb3P">
                          Enquire Now</button><button className="courses_viewSpsl__lrjH5">
                          View Specialization
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Course Eligibility">
            <div className="courseEligibility_wrapper__WDP1x">
              <div className="courseEligibility_container__fIu_K">
                <h2>Courses Eligibility</h2>
                <table className="courseEligibility_course_table__Sr9wq">
                  <thead style={{background: 'var(--dark-blue)'}}>
                    <tr className="courseEligibility_eligible_head__GsY_a">
                      <th>Courses</th>
                      <th>Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online BCom</td>
                      <td>
                        <span>10+2 in any stream from a recognised board<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MA</td>
                      <td>
                        <span>Graduate in any field from a recognised
                          university<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online BBA</td>
                      <td>
                        <span>10+2 in any stream from a recognised board<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MCA</td>
                      <td>
                        <span>Graduate in any field from a recognised
                          university with a minimum of 50% marks in
                          aggregate (5% relaxation for SC/ST
                          Categories)<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MBA</td>
                      <td>
                        <span>Graduation in any field with a minimum of 40%
                          marks in aggregate from a recognized university
                          or graduation in any field with less than 40%
                          marks in aggregate + an eligibility test<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MBA with Dual Specialisation</td>
                      <td>
                        <span>Graduation in any field with a minimum of 40%
                          marks in aggregate from a recognized university
                          or graduation in any field with less than 40%
                          marks in aggregate + an eligibility test<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online BA</td>
                      <td>
                        <span>10+2 in any stream from a recognised board<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MAJMC</td>
                      <td>
                        <span>Graduate in any field from a recognised
                          university<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MCom</td>
                      <td>
                        <span>Graduate in any field from a recognised
                          university<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online BCA</td>
                      <td>
                        <span>10+2 in any stream from a recognised board<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online MSc</td>
                      <td>
                        <span>Bachelor's degree in any science stream is
                          required<br /></span>
                      </td>
                    </tr>
                    <tr className="courseEligibility_eligible_tbody__q_tOM">
                      <td>Online Certificate Programme</td>
                      <td>
                        <span>Some basic knowledge would be useful but no
                          prior experience is required<br /></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Enquire Now">
            <div className="collegenquiry_collegeform__wTRAT">
              <h2 className="collegenquiry_form_heading__GszFG">
                Get Free Career Consultation
              </h2>
              <div className="collegenquiry_formcontainer__Cyi0q">
                <div className="collegenquiry_formsubhead__nFqYe">
                  <h4>Feel free to fill the form</h4>
                </div>
                <div className="collegenquiry_form_div__RSaaQ">
                  <form className="collegenquiry_form__uF7mS">
                    <input type="text" placeholder="Name*" name="name" defaultValue /><input type="email" placeholder="Email*" name="email" defaultValue /><input type="number" placeholder="Phone*" name="phone" defaultValue /><select className="collegenquiry_selectInput__M6Iun" name="program">
                      <option value selected>
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
                      <option value="Data Science">Data Science</option>
                      <option value="IT Certifications">
                        IT Certifications
                      </option>
                      <option value="Help Me Decide">
                        Help Me Decide
                      </option></select><select className="collegenquiry_selectInput__M6Iun" name="state">
                      <option value selected>State/Province</option>
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
                      <option value="West Bengal">
                        West Bengal
                      </option></select><button type="submit" className="collegenquiry_submit_btn__cjBuo">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Scholarships">
            <div className="scholarshop_container__KSXI8">
              <h2 className="scholarshop_heading__wLasH">Scholarships</h2>
              <div>
                <div>
                  <p className="scholarshop_scholarshipDetail__m_Jhr">
                    Amity University aims to empower the next generation
                    of leaders. The university provides financial support
                    to underprivileged students who believe in dreaming
                    big. Until now, the university has supported over
                    50,000 dreams through its diverse range of
                    scholarships. It is time to experience high-quality
                    education at affordable prices. To avail yourself of a
                    100% and 50% scholarship, you must be in the top 5%
                    and 10% of the merit list, respectively. Here is a
                    list of scholarships that you can avail yourself of
                    during admission or post-admission:
                  </p>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>On-Admission Scholarship - UG Programme
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Scholarship Based on CUET - 2025 for UG
                        Programmes
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Scholarship for B.Tech Programmes
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Scholarship Based on CLAT - 2025 for UG Law
                        Programmes
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Scholarship PG Programmes
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Scholarship Based on CAT Percentile - PG
                        Programmes
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Sports Scholarship
                      </span>
                    </p>
                  </div>
                  <div className="scholarshop_scholarDesc__hpzVr">
                    <p className="scholarshop_description__Qzg2d">
                      <span className="scholarshop_title__k4_Sc"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="scholarshop_diamondIcon__Spg2t" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" /></svg>Martyr’s Scholarship
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Certification">
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
                      <div className="Certificates_pointBox__xwwq4">
                        <img alt="check-image" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{color: 'transparent'}} srcSet="
                            /_next/image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                          " src="/_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75" />
                        <div className="Certificates_point__XYWLq">
                          Recognized and accredited degree
                        </div>
                      </div>
                      <div className="Certificates_pointBox__xwwq4">
                        <img alt="check-image" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{color: 'transparent'}} srcSet="
                            /_next/image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                          " src="/_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75" />
                        <div className="Certificates_point__XYWLq">
                          NAAC and AICTE-approved degree
                        </div>
                      </div>
                      <div className="Certificates_pointBox__xwwq4">
                        <img alt="check-image" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{color: 'transparent'}} srcSet="
                            /_next/image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                          " src="/_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75" />
                        <div className="Certificates_point__XYWLq">
                          Degree recognized in both private and public
                          sector
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img alt="certificate_url" loading="lazy" width={300} height={200} decoding="async" data-nimg={1} className="Certificates_img__GOe9v" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fcertification%2Famity-online-sample-degree-certificate.webp&w=384&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fcertification%2Famity-online-sample-degree-certificate.webp&w=640&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fcertification%2Famity-online-sample-degree-certificate.webp&w=640&q=75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Admission">
            <div className="Admissions_container__lpKQv">
              <h2 className="Admissions_heading__paqsP">Admission Process</h2>
              <p className="Admissions_description__sKdUj">
                The admissions process takes place in online mode. Fresh
                admission starts from the month of January of every year.
                There are direct admissions, no entrance exam is conducted
                for the admission process.The addmission procedure
                {/* */}2025{/* */}
                for the online course at
                {/* */}Amity University Online{/* */}
                is as follow:
              </p>
              <div className="Admissions_step__4mDzm">
                <div className="Admissions_stepCount__f9yhl">
                  STEP
                  {/* */}1
                </div>
                <div className="Admissions_stepText___L_GT">
                  Visit the official website to initiate the application
                  process
                </div>
              </div>
              <div className="Admissions_step__4mDzm">
                <div className="Admissions_stepCount__f9yhl">
                  STEP
                  {/* */}2
                </div>
                <div className="Admissions_stepText___L_GT">
                  Register using essential details such as Name, Email ID,
                  and Contact Details
                </div>
              </div>
              <div className="Admissions_step__4mDzm">
                <div className="Admissions_stepCount__f9yhl">
                  STEP
                  {/* */}3
                </div>
                <div className="Admissions_stepText___L_GT">
                  Receive an email containing the registration number and
                  password
                </div>
              </div>
              <div className="Admissions_step__4mDzm">
                <div className="Admissions_stepCount__f9yhl">
                  STEP
                  {/* */}4
                </div>
                <div className="Admissions_stepText___L_GT">
                  Provide information about education and work experience,
                  followed by an undertaking
                </div>
              </div>
              <div className="Admissions_step__4mDzm">
                <div className="Admissions_stepCount__f9yhl">
                  STEP
                  {/* */}5
                </div>
                <div className="Admissions_stepText___L_GT">
                  Make the payment with the registration amount of INR
                  5,500; additional time is provided for pending payments
                </div>
              </div>
              <div className="Admissions_step__4mDzm">
                <div className="Admissions_stepCount__f9yhl">
                  STEP
                  {/* */}6
                </div>
                <div className="Admissions_stepText___L_GT">
                  Attach the necessary documents, including 10th and 12th
                  mark sheets, degree certificates, UG mark sheet and
                  degree, Aadhar Card or any government ID, and a
                  photograph
                </div>
              </div>
              <div className="Admissions_stepHide__nIt_6" />
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Exam">
            <div className="Exam_container__muz_Z">
              <h2 className="Exam_heading__jCWCC">Examination Pattern</h2>
              <div>
                <div className="Exam_examDesc___HPjs">
                  <p className="Exam_text__iZpVR">
                    Amity University conducts online exams through a
                    well-structured and simple process. The exam is
                    conducted in a secure online environment. Here is the
                    examination pattern.
                  </p>
                  <div>
                    <p className="Exam_paragraph__CFH4S">
                      <span className="Exam_title__zgD3N">Continuous Assessment: </span>Regular assignments and quizzes conducted
                      throughout the course.​
                    </p>
                  </div>
                  <div>
                    <p className="Exam_paragraph__CFH4S">
                      <span className="Exam_title__zgD3N">Proctored Online Exams: </span>Mid-term and end-term examinations are conducted
                      that test the entire syllabus.
                    </p>
                  </div>
                  <div>
                    <p className="Exam_paragraph__CFH4S">
                      <span className="Exam_title__zgD3N">Project Work: </span>Evaluation through Final semester project work.​
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Placement">
            <div className="placement_container__iALXL">
              <div>
                <h2 className="placement_heading__iEHZj">
                  Online Placement Partners
                </h2>
                <h3 className="placement_subHeading__1vY2G">
                  Our students have an opportunity of
                </h3>
                <div className="placementSubpoint_subHeadingPoints__uE7MR">
                  <img alt="img" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{color: 'transparent'}} srcSet="
                      /_next/image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                    " src="/_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75" />
                  <p>
                    Learn employability skills through assessments and
                    tests
                  </p>
                </div>
                <div className="placementSubpoint_subHeadingPoints__uE7MR">
                  <img alt="img" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} style={{color: 'transparent'}} srcSet="
                      /_next/image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                    " src="/_next/image?url=%2Fimages%2Fcheck.png&w=48&q=75" />
                  <p>Job that suitably fits the student profile</p>
                </div>
              </div>
              <div className="placement_placementBanner__ACCRS">
                <div className="placementBanner_container__upl7e">
                  <p className="placementBanner_heading__yGlah">₹ 18 LPA</p>
                  <p className="placementBanner_description__O3FqH">
                    Average Salary
                  </p>
                </div>
                <div className="placementBanner_container__upl7e">
                  <p className="placementBanner_heading__yGlah">₹ 25 LPA</p>
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
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fgoogle.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fgoogle.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fgoogle.webp&w=256&q=75" />
                  </div>
                </div>
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fibm.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fibm.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fibm.webp&w=256&q=75" />
                  </div>
                </div>
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fmetlife.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fmetlife.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fmetlife.webp&w=256&q=75" />
                  </div>
                </div>
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fmicrosoft.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fmicrosoft.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fmicrosoft.webp&w=256&q=75" />
                  </div>
                </div>
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Famerican-express.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Famerican-express.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Famerican-express.webp&w=256&q=75" />
                  </div>
                </div>
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fsamsung.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fsamsung.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fsamsung.webp&w=256&q=75" />
                  </div>
                </div>
                <div>
                  <div className="partners_imgBox__yD_6o">
                    <img alt="placement-logo" fetchpriority="high" width={122} height={95} decoding="async" data-nimg={1} className="partners_plac_img__htNsk" style={{color: 'transparent'}} srcSet="
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fpaytm.webp&w=128&q=75 1x,
                        /_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fpaytm.webp&w=256&q=75 2x
                      " src="/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Famity-university-online%2Fplacement-partners%2Fpaytm.webp&w=256&q=75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="FAQ's">
            <div className="faq_container__v2O04">
              <h2 className="faq_heading__ypOPH">FAQ's</h2>
              <div className="faq_faqMainContainer__T9i6Q">
                <div className="faq_faqMain__ACefH">
                  <div className="faq_questionContainer__zAsad">
                    <div className="faq_ques__Hgq7Z">
                      Q.{/* */}1{/* */}
                      {/* */}Are Amity Online degree programmes
                      recognised and valid?
                    </div>
                    <div className="faq_accordionIcon__8lbAd">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="faq_icon__lyHtn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
                        <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="faq_faqMain__ACefH">
                  <div className="faq_questionContainer__zAsad">
                    <div className="faq_ques__Hgq7Z">
                      Q.{/* */}2{/* */}
                      {/* */}Is the entire learning process at Amity
                      Online conducted virtually?
                    </div>
                    <div className="faq_accordionIcon__8lbAd">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="faq_icon__lyHtn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
                        <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="faq_faqMain__ACefH">
                  <div className="faq_questionContainer__zAsad">
                    <div className="faq_ques__Hgq7Z">
                      Q.{/* */}3{/* */}
                      {/* */}Does Amity Online provide placement support
                      to students?
                    </div>
                    <div className="faq_accordionIcon__8lbAd">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="faq_icon__lyHtn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
                        <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="faq_faqMain__ACefH">
                  <div className="faq_questionContainer__zAsad">
                    <div className="faq_ques__Hgq7Z">
                      Q.{/* */}4{/* */}
                      {/* */}What are the eligibility criteria for Amity
                      Online courses?
                    </div>
                    <div className="faq_accordionIcon__8lbAd">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="faq_icon__lyHtn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
                        <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="faq_faqMain__ACefH">
                  <div className="faq_questionContainer__zAsad">
                    <div className="faq_ques__Hgq7Z">
                      Q.{/* */}5{/* */}
                      {/* */}Can I pursue an Amity Online course while
                      working full-time?
                    </div>
                    <div className="faq_accordionIcon__8lbAd">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="faq_icon__lyHtn" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
                        <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collegeDetails_maxWidth__6vBVL" id="Review">
            <div className="CollegeReview_college_page_details_review_container__KbbIU" id="contact">
              <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                Amity University Online{/* */}
                Review
              </h2>
              <div>
                <form>
                  <div className="CollegeReview_college_page_details_review_form_container__rP5km">
                    <div className="CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd">
                      <p className="CollegeReview_college_page_details_review_form_rating_count__oLqL0">
                        0{/* */}
                        out of 5
                      </p>
                      <div>
                        <span className="star"><img alt="rating" loading="lazy" width={400} height={400} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7" style={{color: 'transparent'}} srcSet="
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            " src="/_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75" /></span><span className="star"><img alt="rating" loading="lazy" width={400} height={400} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7" style={{color: 'transparent'}} srcSet="
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            " src="/_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75" /></span><span className="star"><img alt="rating" loading="lazy" width={400} height={400} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7" style={{color: 'transparent'}} srcSet="
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            " src="/_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75" /></span><span className="star"><img alt="rating" loading="lazy" width={400} height={400} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7" style={{color: 'transparent'}} srcSet="
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            " src="/_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75" /></span><span className="star"><img alt="rating" loading="lazy" width={400} height={400} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7" style={{color: 'transparent'}} srcSet="
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            " src="/_next/image?url=%2Fimages%2FStarTwo.png&w=828&q=75" /></span>
                      </div>
                    </div>
                    <div className="CollegeReview_rating_form_container__q_Xvp">
                      <input className="CollegeReview_reviewer_name__Fdlnr" type="text" placeholder="Enter your name" required name="reviewerName" defaultValue /><textarea placeholder="Write your reviews" className="CollegeReview_college_page_details_review_form_input__niDf2" name="comment" required defaultValue={""} /><button className="CollegeReview_college_page_details_review_form_btn__xh_Sn">
                        Send message
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
                        V
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          VK Upadhyay
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-04-21
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      I completed an MBA from Amity University last year,
                      and it was one of my best decisions. The admission
                      process was straightforward, the faculty was
                      helpful, and the programme enhanced my skills.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        S
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Suraj
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-05-07
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      A fast-moving online program. It was not that
                      difficult to clear it. If you are working, this
                      course can help.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        R
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Riya
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-07-12
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      Honestly, I wasn’t sure if I could manage studying
                      alongside my job, but Amity Online made it so much
                      easier. The flexibility to learn at my own pace and
                      the super supportive faculty really made a
                      difference. The course was well-structured and easy
                      to follow, and whenever I had a question, the
                      support team was quick to help.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        M
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Mukta
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-09-02
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      Studying LLB at Amity University has been a
                      transformative experience. The faculty members are
                      knowledgeable and approachable, and the moot court
                      sessions really helped build my confidence. The
                      practical exposure here is amazing!
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        P
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Parvati
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-09-12
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      I am studying for a masters in Sociology at Amity
                      University. The syllabus is up to date with the
                      current scenario. It also comprises certain
                      assignments that helped me to gain practical
                      experience in my subject. The faculties here are
                      cooperative. My overall experience at Amity is
                      excellent.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        H
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Himani
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-09-21
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      Amity's Faculty was really supportive during my
                      Masters. Despite being an online course, I got the
                      chance to interact with my peers and expand my
                      network through Industry Workshops. The best part of
                      the course was the complete focused Career Guidance
                      with a strong placement support.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        N
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Nishita
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-10-27
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      Amity University Noida is an excellent choice for
                      skills and projects. My B.ed journey was made smooth
                      through the faculty. Along with projects I was given
                      a chance to explore internships. Its a yes if you
                      want great exposure.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        S
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Sammy
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2024-11-09
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      I am in the fifth semester of my BCom at Amity
                      University. It has been a great journey here. The
                      faculty is so generous that they are assisting me
                      with placement drives. The fact that I was actively
                      involved in the workshops and masterclasses made
                      receiving the placements so much easier.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        S
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Shaalu
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2025-01-27
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      As a mother of two, I never thought I could continue
                      my studies. Amity University’s flexible online
                      learning allowed me to study at my own pace. The
                      well-structured modules and recorded lectures helped
                      me manage both family and education. Today, I hold a
                      degree without compromising my responsibilities.
                    </div>
                  </div>
                </div>
                <div>
                  <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                    <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                      <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                        V
                      </div>
                      <div>
                        <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                          Vijay
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                          <div>
                            <img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" /><img alt="Colored Star" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="CollegeReview_college_page_details_rating_img__IUdrQ" style={{color: 'transparent'}} srcSet="
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              " src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                      Reviewed on
                      {/* */}2025-02-07
                    </div>
                    <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                      I had a long gap in education and was hesitant to
                      return to studying. Amity Online made the transition
                      easy with its simplified learning structure and
                      supportive faculty. Now, I feel more confident in my
                      career and have even landed a better-paying job.
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
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online MCom">Online MCom</option>
                      <option value="Online BBA">Online BBA</option>
                      <option value="Online BCom">Online BCom</option>
                      <option value="Online MA">Online MA</option>
                      <option value="Online MCA">Online MCA</option>
                      <option value="Online BCA">Online BCA</option>
                      <option value="Online BA">Online BA</option>
                      <option value="Online MSc">Online MSc</option>
                      <option value="Online PGCP">Online PGCP</option>
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
