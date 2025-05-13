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
import "./main.css"


import RollingLine from "../../../../components/RollingLine";

// SpecializationModal Component
const courseSpecializations = {
  "Online MBA": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/MBA-MUJ-Brochure.pdf",
  },
  "Online BBA": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/BBA-MUJ-Brochure.pdf",
  },
  "Online B.COM": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/BCom-MUJ-Brochure.pdf",
  },
  "Online M.COM": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/MCom-MUJ-Brochure.pdf",
  },
  "Online BCA": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/BCA-MUJ-Brochure.pdf",
  },
  "Online MCA": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/MCA-MUJ-Brochure.pdf",
  },
  "Online MA-J&MC": {
    specializations: [],
    brochure: "/assets/brochure/MANIPAL-UNIVERSITY/MA-JMC-Brochure-MUJ.pdf",
  },
};

function SpecializationModal({
  isSpecializationModalOpen,
  selectedCourseName,
  selectedCourseSpecializations,
  handleCloseSpecializationModal,
}) {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "" });

  if (!isSpecializationModalOpen) return null;

  const handleDownloadBrochure = () => {
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const brochurePath =
      courseSpecializations[selectedCourseName]?.brochure ||
      "/assets/brochure/default-brochure.pdf";
    const link = document.createElement("a");
    link.href = brochurePath;
    link.download = brochurePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsFormModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <>
      {/* Main Specialization Modal */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "20px",
            width: "80%",
            maxWidth: "1500px",
            maxHeight: "80vh",
            overflowY: "auto",
            position: "relative",
            border: "none",
          }}
        >
          <button
            onClick={handleCloseSpecializationModal}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
            aria-label="Close specialization modal"
          >
            <span className="btn-close" />
          </button>
          <h2
            style={{
              fontSize: "24px",
              fontFamily:
                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
              fontWeight: "700",
              color: "#151419",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            {selectedCourseName} Specializations
          </h2>

          {/* Course Fee Details Section */}
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              className="placement_placementBanner__ACCRS"
              style={{
                paddingBottom: "70px",
                paddingTop: "40px",
                marginBottom: "30px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {selectedCourseSpecializations.length > 0 ? (
                selectedCourseSpecializations.map((spec, index) => (
                  <div
                    key={index}
                    className="pricing-card"
                    style={{
                      background: "#ffffff",
                      padding: "20px",
                      borderRadius: "15px",
                      width: "300px",
                      textAlign: "center",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      animation: `fadeIn 0.5s ease forwards ${index * 0.2}s`,
                      opacity: 0,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#151419",
                        marginBottom: "10px",
                        fontFamily:
                          "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                      }}
                    >
                      {spec.name}
                    </p>
                    <p
                      style={{
                        color: "#ff5c35",
                        fontSize: "32px",
                        fontWeight: "700",
                        margin: "10px 0",
                        fontFamily:
                          "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                      }}
                    >
                      ₹ {spec.fees.toLocaleString()}
                    </p>
                    <span
                      style={{
                        color: "#555",
                        fontSize: "14px",
                        fontFamily:
                          "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                      }}
                    >
                      Inclusive of all taxes
                    </span>
                    <style>
                      {`
                        @keyframes fadeIn {
                          from {
                            opacity: 0;
                            transform: translateY(20px);
                          }
                          to {
                            opacity: 1;
                            transform: translateY(0);
                          }
                        }
                        @media (max-width: 768px) {
                          .placement_placementBanner__ACCRS {
                            flex-direction: column !important;
                            align-items: center;
                            padding-bottom: 40px !important;
                            padding-top: 30px !important;
                            margin-bottom: 20px !important;
                            gap: 15px !important;
                          }
                          .pricing-card {
                            width: 100% !important;
                            max-width: 400px !important;
                            padding: 15px !important;
                            border-radius: 12px !important;
                            animation: fadeIn 0.4s ease forwards ${
                              index * 0.15
                            }s !important;
                          }
                          .pricing-card p:first-child {
                            font-size: 18px !important;
                          }
                          .pricing-card p:nth-child(2) {
                            font-size: 28px !important;
                          }
                          .pricing-card span {
                            font-size: 13px !important;
                          }
                        }
                        @media (max-width: 480px) {
                          .placement_placementBanner__ACCRS {
                            padding-bottom: 30px !important;
                            padding-top: 20px !important;
                            margin-bottom: 15px !important;
                            gap: 12px !important;
                          }
                          .pricing-card {
                            padding: 12px !important;
                            border-radius: 10px !important;
                          }
                          .pricing-card p:first-child {
                            font-size: 16px !important;
                          }
                          .pricing-card p:nth-child(2) {
                            font-size: 24px !important;
                          }
                          .pricing-card span {
                            font-size: 12px !important;
                          }
                        }
                        @media (max-width: 360px) {
                          .placement_placementBanner__ACCRS {
                            padding-bottom: 20px !important;
                            padding-top: 15px !important;
                            margin-bottom: 10px !important;
                            gap: 10px !important;
                          }
                          .pricing-card {
                            padding: 10px !important;
                            border-radius: 8px !important;
                          }
                          .pricing-card p:first-child {
                            font-size: 14px !important;
                          }
                          .pricing-card p:nth-child(2) {
                            font-size: 22px !important;
                          }
                          .pricing-card span {
                            font-size: 11px !important;
                          }
                        }
                      `}
                    </style>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#000",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  No specializations available
                </div>
              )}
            </div>

            {/* Buttons Section */}
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <button
                onClick={handleDownloadBrochure}
                style={{
                  backgroundColor: "#28a745",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontFamily:
                    "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                  fontWeight: "600",
                }}
                aria-label="Download course brochure"
              >
                Download Brochure
              </button>
              <button
                onClick={handleCloseSpecializationModal}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontFamily:
                    "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                  fontWeight: "600",
                }}
                aria-label="Close specialization modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {isFormModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1100,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "500px",
              position: "relative",
            }}
          >
            <button
              onClick={handleCloseFormModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#151419",
                fontWeight: "600",
                fontFamily:
                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#28a745")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#151419")}
              aria-label="Close form modal"
            >
              ×
            </button>
            <h6
              style={{
                fontSize: "20px",
                fontFamily:
                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                fontWeight: "600",
                color: "#151419",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Download Brochure
            </h6>
            <form onSubmit={handleFormSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                  }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#28a745",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Submit & Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
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
      { name: "Business Administration", fees: 175000 },
      { name: "Entrepreneurship & Innovation", fees: 280000 },
    ],
    "Online MCom": [{ name: "Commerce", fees: 108000 }],
    "Online BBA": [{ name: "Business Administration", fees: 135000 }],
    "Online BCom": [{ name: "Commerce", fees: 99000 }],
    "Online MA-J&MC": [
      { name: "Full Fee", fees: 140000 },
      { name: "Semester Fee", fees: 35000 },
      { name: "EMI", fees: 5833 },
    ],
    "Online MCA": [{ name: "Computer Applications", fees: 158000 }],
    "Online BCA": [{ name: "Computer Applications", fees: 135000 }],
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
  const courses = [
    {
      name: "Online MBA",
      feeRange: "₹ 1,75,000",
      imageSrc: "/assets/img/universities/MBA.png",
    },
    {
      name: "Online MCom",
      feeRange: "₹ 1,08,000",
      imageSrc: "/assets/img/universities/BBA.png",
    },
    {
      name: "Online BBA",
      feeRange: "₹ 1,35,000",
      imageSrc: "/assets/img/universities/BBA-MUJ.png",
    },
    {
      name: "Online BCom",
      feeRange: "₹ 99,000",
      imageSrc: "/assets/img/universities/MCOM-MUJ.png",
    },
    {
      name: "Online MA",
      feeRange: "₹ 1,40,000",
      imageSrc: "/assets/img/universities/DIPLOMA.png",
    },
    {
      name: "Online MCA",
      feeRange: "₹ 1,58,000",
      imageSrc: "/assets/img/universities/BBA.png",
    },
    {
      name: "Online BCA",
      feeRange: "₹ 1,35,000",
      imageSrc: "/assets/img/universities/BCOM.png",
    },
  ];

  const groupedCourses = [];
  const coursesPerSlide = 4; // Adjust based on design needs
  for (let i = 0; i < courses.length; i += coursesPerSlide) {
    groupedCourses.push(courses.slice(i, i + coursesPerSlide));
  }
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
          <Image
            src="https://store.learningroutes.in/images/colleges/online-manipal-jaipur/hero-image/onlinemanipaljaipurbanner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="Online Manipal campus banner"
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
                <span>Online Manipal</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Online Manipal
            </h1>
            <p className="headCarousal_location__7rFlL">Jaipur, Rajasthan</p>
            <p className="headCarousal_ranking__1yTOY">NIRF Rank: 14</p>
            <div className="headCarousal_accreditation__HUqxZ">
              <Image
                src="/assets/img/icon/naac.png"
                alt="NAAC A+ accreditation"
                className="headCarousal_accImg__NoM8M"
                width={130}
                height={130}
              />
              <Image
                src="/assets/img/icon/UGC.png"
                alt="UGC accreditation"
                className="headCarousal_accImg__NoM8M"
                width={130}
                height={130}
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
                        Manipal University Jaipur
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Manipal University Jaipur (MUJ) is a NAAC A+ accredited,
                        UGC approved university known for academic excellence
                        and industry-focused learning. As a part of the
                        prestigious Manipal Group, MUJ brings innovation and
                        quality to online education, empowering learners with
                        globally recognized degrees. Recognizing the growing
                        need for flexible and accessible learning, MUJ
                        introduced UGC-entitled online degree programs, allowing
                        students and working professionals to earn globally
                        recognized qualifications from anywhere. The
                        comprehensive curriculum, experienced faculty, and
                        advanced digital learning platform ensure students
                        receive a well-rounded education aligned with industry
                        standards.
                      </p>
                    </div>
                    <div
                      className="placement_placementBanner__ACCRS"
                      style={{
                        paddingBottom: "70px",
                        paddingTop: "40px",
                        marginBottom: "30px",
                      }}
                    >
                      <div className="placementBanner_container__upl7e">
                        <p
                          className="placementBanner_description__O3FqH"
                          style={{ color: "#000" }}
                        >
                          Full course fee (Four semesters)
                        </p>
                        <p
                          className="placementBanner_heading__yGlah"
                          style={{ color: "#ff5c35" }}
                        >
                          INR 1,75,000
                        </p>
                        <span style={{ color: "#000" }}>
                          Inclusive of all taxes
                        </span>
                      </div>
                      <div
                        className="placementBanner_container__upl7e"
                        style={{
                          background: "#fff",
                          padding: "10px",
                          borderRadius: "20px",
                        }}
                      >
                        <span style={{ color: "#000" }}>Each semester fee</span>
                        <p
                          className="placementBanner_heading__yGlah"
                          style={{
                            color: "#151419",
                            fontSize: "48px",
                            lineHeight: 1.4,
                            fontWeight: 450,
                            margin: 0,
                          }}
                        >
                          INR 43750
                        </p>
                        <p
                          className="placementBanner_description__O3FqH"
                          style={{ color: "#000" }}
                        >
                          Inclusive of all taxes
                        </p>
                      </div>
                      <div
                        className="placementBanner_container__upl7e"
                        style={{
                          background: "#fff",
                          padding: "15px 30px 23px 15px",
                          borderRadius: "20px",
                        }}
                      >
                        <span style={{ color: "#000" }}>EMI starting at</span>
                        <p
                          className="placementBanner_heading__yGlah"
                          style={{
                            color: "#151419",
                            fontSize: "48px",
                            lineHeight: 1.4,
                            fontWeight: 500,
                            margin: 0,
                            fontFamily: "Queens",
                          }}
                        >
                          INR 7291 /{" "}
                          <span style={{ fontSize: "20px" }}>Month</span>
                        </p>
                        <p
                          className="placementBanner_description__O3FqH"
                          style={{ color: "#000" }}
                        >
                          Terms & conditions apply
                        </p>
                      </div>
                      <style>
                        {`
      @media (max-width: 768px) {
        .placement_placementBanner__ACCRS {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 40px !important;
          padding-top: 30px !important;
          margin-bottom: 20px !important;
          gap: 15px !important;
        }
        .placementBanner_container__upl7e {
          background: #fff !important;
          padding: 15px !important;
          border-radius: 15px !important;
          width: 100% !important;
          max-width: 400px !important;
          text-align: center;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        }
        .placementBanner_heading__yGlah {
          font-size: 32px !important;
        }
        .placementBanner_heading__yGlah span {
          font-size: 18px !important;
        }
        .placementBanner_description__O3FqH {
          font-size: 14px !important;
        }
        .placementBanner_container__upl7e span:not(.placementBanner_heading__yGlah span) {
          font-size: 14px !important;
          display: block;
          margin-bottom: 8px;
        }
      }
      @media (max-width: 480px) {
        .placement_placementBanner__ACCRS {
          padding-bottom: 30px !important;
          padding-top: 20px !important;
          margin-bottom: 15px !important;
          gap: 12px !important;
        }
        .placementBanner_container__upl7e {
          padding: 12px !important;
          border-radius: 12px !important;
        }
        .placementBanner_heading__yGlah {
          font-size: 28px !important;
        }
        .placementBanner_heading__yGlah span {
          font-size: 16px !important;
        }
        .placementBanner_description__O3FqH {
          font-size: 13px !important;
        }
        .placementBanner_container__upl7e span:not(.placementBanner_heading__yGlah span) {
          font-size: 13px !important;
        }
      }
      @media (max-width: 360px) {
        .placement_placementBanner__ACCRS {
          padding-bottom: 20px !important;
          padding-top: 15px !important;
          margin-bottom: 10px !important;
          gap: 10px !important;
        }
        .placementBanner_container__upl7e {
          padding: 10px !important;
          border-radius: 10px !important;
        }
        .placementBanner_heading__yGlah {
          font-size: 24px !important;
        }
        .placementBanner_heading__yGlah span {
          font-size: 14px !important;
        }
        .placementBanner_description__O3FqH {
          font-size: 12px !important;
        }
        .placementBanner_container__upl7e span:not(.placementBanner_heading__yGlah span) {
          font-size: 12px !important;
        }
      }
    `}
                      </style>
                    </div>
                    <RollingLine />
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        {[
                          "UGC-approved degrees",
                          "Free Coursera access",
                          "Placement assistance",
                          "Prestigious Alumni status",
                          "Global classroom experience",
                          "Campus immersion opportunities",
                          "Career advancement support",
                          "Strong company network",
                          "500+ hiring partners",
                          "110+ hours of skill content",
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
                  <div className="collegeDetails_maxWidth" id="Courses">
                    <div className="courses_wrapper">
                      <div
                        className="expert_container"
                        style={{
                          padding: "20px 0%",
                          background: "#f4eceb",
                          padding: "40px",
                          borderRadius: "20px",
                        }}
                      >
                        <div className="expert_cards_container">
                          <h2
                            className="work-sans"
                            style={{
                              fontSize: "24px",
                              margin: "0 0 15px 0",
                              fontWeight: "700",
                            }}
                          >
                            Courses
                          </h2>
                          <p
                            className="courses_course_college_name work-sans"
                            style={{
                              fontSize: "16px",
                              color: "#4a5a77",
                              marginBottom: "30px",
                            }}
                          >
                            Explore online learning courses
                          </p>
                          <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              {groupedCourses.map((group, index) => (
                                <div
                                  key={index}
                                  className={`carousel-item ${
                                    index === 0 ? "active" : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-center gap-3">
                                    {group.map((course, cardIndex) => (
                                      <div
                                        key={cardIndex}
                                        className="card expert_card"
                                        style={{
                                          maxWidth: "18rem",
                                          border: "none",
                                          borderRadius: "15px",
                                          background: "#fff",
                                          boxShadow:
                                            "0 4px 15px rgba(0, 0, 0, 0.1)",
                                        }}
                                      >
                                        <div
                                          className="card-body"
                                          style={{ padding: "20px" }}
                                        >
                                          <div className="d-flex flex-column align-items-center">
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "150px",
                                                overflow: "hidden",
                                                borderRadius: "10px",
                                                marginBottom: "15px",
                                              }}
                                            >
                                              <img
                                                alt={`Course Image - ${course.name}`}
                                                loading="lazy"
                                                width={600}
                                                height={573}
                                                decoding="async"
                                                src={course.imageSrc}
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                  objectFit: "cover",
                                                }}
                                              />
                                            </div>
                                            <p
                                              className="work-sans"
                                              style={{
                                                fontSize: "16px",
                                                fontWeight: "600",
                                                color: "#0c2d50",
                                                margin: "0 0 10px 0",
                                                textAlign: "center",
                                              }}
                                            >
                                              {course.name}
                                            </p>
                                            <p
                                              className="work-sans"
                                              style={{
                                                fontSize: "14px",
                                                color: "#ee3620",
                                                margin: "0 0 15px 0",
                                                textAlign: "center",
                                              }}
                                            >
                                              {course.feeRange}
                                            </p>
                                            <button
                                              className="enquire-now work-sans"
                                              onClick={() =>
                                                setIsCourseModalOpen(true)
                                              }
                                              aria-label={`Enquire about ${course.name}`}
                                              style={{
                                                padding: "5px 5px",
                                                background:
                                                  "linear-gradient(90deg, #e89e26, #c47b1e)",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "5px",
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                width: "100%",
                                                marginBottom: "10px",
                                              }}
                                              onMouseEnter={(e) =>
                                                Object.assign(
                                                  e.currentTarget.style,
                                                  {
                                                    boxShadow:
                                                      "0 6px 20px rgba(232, 158, 38, 0.5)",
                                                  }
                                                )
                                              }
                                              onMouseLeave={(e) =>
                                                Object.assign(
                                                  e.currentTarget.style,
                                                  {
                                                    boxShadow: "none",
                                                  }
                                                )
                                              }
                                            >
                                              Enquire Now
                                            </button>
                                            <button
                                              className="view-specialization work-sans"
                                              onClick={() =>
                                                handleViewSpecialization(
                                                  course.name
                                                )
                                              }
                                              aria-label={`View specializations for ${course.name}`}
                                              style={{
                                                padding: "5px 5px",
                                                background: "transparent",
                                                color: "#0c2d50",
                                                border: "2px solid #0c2d50",
                                                borderRadius: "5px",
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                width: "100%",
                                              }}
                                              onMouseEnter={(e) =>
                                                Object.assign(
                                                  e.currentTarget.style,
                                                  {
                                                    background: "#0c2d50",
                                                    color: "#fff",
                                                  }
                                                )
                                              }
                                              onMouseLeave={(e) =>
                                                Object.assign(
                                                  e.currentTarget.style,
                                                  {
                                                    background: "transparent",
                                                    color: "#0c2d50",
                                                  }
                                                )
                                              }
                                            >
                                              View Specialization
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Course Eligibility"
                  >
                    <h2
                      className="courseEligibility_eligible_heading__5Qd_3"
                      style={{
                        fontSize: "calc(1rem + 0.8vw)",
                        fontWeight: "800",
                        color: "#0c2d50",

                        marginBottom: "20px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Course Eligibility
                    </h2>
                    <div
                      className="courseEligibility_wrapper__WDP1x"
                      style={{
                        padding: "60px 5%",
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))",
                        backdropFilter: "blur(10px)",
                        borderRadius: "20px",
                        margin: "20px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          overflowX: "auto",
                          width: "100%",
                        }}
                      >
                        <table
                          className="course eligibility_eligible_table__ZvMdh"
                          style={{
                            width: "100%",
                            borderCollapse: "separate",
                            borderSpacing: "0",
                            background: "#ffffff",
                            borderRadius: "15px",
                            overflow: "hidden",
                            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                            minWidth: "600px",
                          }}
                        >
                          <thead>
                            <tr
                              className="courseEligibility_eligible_head__GsY_a"
                              style={{
                                background:
                                  "linear-gradient(90deg, #0c2d50, #1a3a6b)",
                                color: "#fff",
                                fontSize: "calc(0.9rem + 0.1vw)",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                              }}
                            >
                              <th
                                style={{
                                  padding: "20px",
                                  textAlign: "left",
                                  boxSizing: "border-box",
                                }}
                              >
                                Courses
                              </th>
                              <th
                                style={{
                                  padding: "20px",
                                  textAlign: "left",
                                  boxSizing: "border-box",
                                }}
                              >
                                Eligibility
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                name: "Online MBA",
                                eligibility:
                                  "Bachelor’s degree (10+2+3) from a recognised university. 50% marks (45% for reserved).",
                              },
                              {
                                name: "Online MCom",
                                eligibility:
                                  "Bachelor’s degree (10+2+3) from a recognised university.",
                              },
                              {
                                name: "Online BBA",
                                eligibility:
                                  "Completed 10+2 from a recognised board or 10+3 diploma. 45% marks (40% for reserved).",
                              },
                              {
                                name: "Online BCom",
                                eligibility:
                                  "Completed 10+2 from a recognised board or 10+3 diploma. 45% marks (40% for reserved).",
                              },
                              {
                                name: "Online MA",
                                eligibility:
                                  "Bachelor’s degree (10+2+3) from a recognised university.",
                              },
                              {
                                name: "Online MCA",
                                eligibility:
                                  "Bachelor’s degree (10+2+3) in Computer Science/Applications/IT or any stream. 50% marks (45% for reserved). Compulsory bridge course if from non-IT background.",
                              },
                              {
                                name: "Online BCA",
                                eligibility:
                                  "Completed 10+2 from a recognised board or 10+3 diploma. 45% marks (40% for reserved).",
                              },
                              {
                                name: "Online BA",
                                eligibility:
                                  "Completed 10+2 from a recognised board or 10+3 diploma.",
                              },
                              {
                                name: "Online MSc",
                                eligibility:
                                  "Bachelor’s degree (10+2+3) with Maths/Statistics. 50% marks.",
                              },
                              {
                                name: "Online PGCP",
                                eligibility:
                                  "Graduation in any discipline. 50% marks.",
                              },
                            ].map((course, index) => (
                              <tr
                                className="courseEligibility_eligible_tbody__q_tOM"
                                key={index}
                                style={{
                                  background:
                                    index % 2 === 0 ? "#fafafa" : "#fff",
                                }}
                                onMouseEnter={(e) =>
                                  Object.assign(e.currentTarget.style, {
                                    background: "rgba(232, 158, 38, 0.1)",
                                  })
                                }
                                onMouseLeave={(e) =>
                                  Object.assign(e.currentTarget.style, {
                                    background:
                                      index % 2 === 0 ? "#fafafa" : "#fff",
                                  })
                                }
                              >
                                <td
                                  style={{
                                    padding: "20px",
                                    fontSize: "calc(0.9rem + 0.1vw)",
                                    color: "#0c2d50",
                                    fontWeight: "500",
                                    borderBottom:
                                      "1px solid rgba(0, 0, 0, 0.05)",
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                  }}
                                >
                                  {course.name}
                                </td>
                                <td
                                  style={{
                                    padding: "20px",
                                    fontSize: "calc(0.9rem + 0.1vw)",
                                    color: "#0c2d50",
                                    fontWeight: "400",
                                    borderBottom:
                                      "1px solid rgba(0, 0, 0, 0.05)",
                                    boxSizing: "border-box",
                                    verticalAlign: "top",
                                  }}
                                >
                                  {course.eligibility}
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
                            <option value="Online MCom">Online MCom</option>
                            <option value="Online BBA">Online BBA</option>
                            <option value="Online BCom">Online BCom</option>
                            <option value="Online MA">Online MA</option>
                            <option value="Online MCA">Online MCA</option>
                            <option value="Online BCA">Online BCA</option>
                            <option value="Online BA">Online BA</option>
                            <option value="Online MSc">Online MSc</option>
                            <option value="Online PGCP">Online PGCP</option>
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
                  {/* Other sections (Scholarships, Certification, EMI Details, Admission, Exam, Placement, FAQ's, Review) remain unchanged */}
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Scholarships"
                  >
                    {/* Unchanged Scholarships section */}
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Certification"
                  >
                    {/* Unchanged Certification section, but update images to use Next.js Image */}
                    <div className="Certificates_wrapper__hjNB4">
                      <h2
                        className="Certificates_heading__Jr9Js"
                        style={{ textAlign: "center" }}
                      >
                        Sample Certificate
                      </h2>
                      <div className="Certificates_container__X9Jsj">
                        <div className="Certificates_detail_img_container__jHvTy">
                          <div>
                            <div className="Certificates_subHeading__CKwq6">
                              Earn an UGC recognized degree, acknowledged around
                              the globe
                            </div>
                            <div>
                              {[
                                "ACU Membership",
                                "WES recognized",
                                "NAAC A+ recognized",
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
                            <Image
                              alt="Manipal sample degree certificate"
                              loading="lazy"
                              width={500}
                              height={500}
                              decoding="async"
                              src="/assets/course/Manipal-degree.jpeg"
                              className="Certificates_img__GOe9v"
                              style={{
                                color: "transparent",
                                border: "1px solid ",
                                borderRadius: "20px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="EMI Details"
                  >
                    {/* Unchanged EMI Details section */}
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Admission"
                  >
                    {/* Unchanged Admission section */}
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Exam">
                    {/* Unchanged Exam section */}
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Placement"
                  >
                    {/* Unchanged Placement section, but update images to use Next.js Image */}
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
                          <p
                            className="placementBanner_heading__yGlah"
                            style={{ color: "#000" }}
                          >
                            ₹ 9 LPA
                          </p>
                          <p
                            className="placementBanner_description__O3FqH"
                            style={{ color: "#000" }}
                          >
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p
                            className="placementBanner_heading__yGlah"
                            style={{ color: "#000" }}
                          >
                            ₹ 12 LPA
                          </p>
                          <p
                            className="placementBanner_description__O3FqH"
                            style={{ color: "#000" }}
                          >
                            Highest Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p
                            className="placementBanner_heading__yGlah"
                            style={{ color: "#000" }}
                          >
                            3x
                          </p>
                          <p
                            className="placementBanner_description__O3FqH"
                            style={{ color: "#000" }}
                          >
                            Interview Opportunities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="FAQ's">
                    {/* Unchanged FAQ's section */}
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                    {/* Add Review section if needed, similar to NMIMS */}
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
      <SpecializationModal
        isSpecializationModalOpen={isSpecializationModalOpen}
        selectedCourseName={selectedCourseName}
        selectedCourseSpecializations={selectedCourseSpecializations}
        handleCloseSpecializationModal={handleCloseSpecializationModal}
      />
      <Footer />
    </>
  );
}
