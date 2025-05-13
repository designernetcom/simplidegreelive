"use client";
import React, { useState, useEffect } from "react";
import SecondMenu from "../../../../components/Header/Menu/SecondMenu";
import Footer from "../../../../components/Footer/Footer";
import FirstVisitModal from "../../../../components/FirstVisitModal";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/ecbb68b163419596.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";
import "./amitypage.css"
import RollingLine from "../../../../components/RollingLine";

import Image from "next/image";

// SpecializationModal Component
const courseSpecializations = {
  "Online BCom": {
    specializations: [
      { name: "Full Fee", fees: 222000 },
      { name: "Semester Fee", fees: 55000 },
      { name: "EMI", fees: 8750 },
    ],
    brochure: "/assets/brochure/NMIMS-Online-MBA-Brochure.pdf",
  },
  "Online BBA": {
    specializations: [
      { name: "Full Fee", fees: 150000 },
      { name: "Semester Fee", fees: 25000 },
      { name: "EMI", fees: 6250 },
    ],
    brochure: "/assets/brochure/UG-Brochure_A224.pdf",
  },
  "Online B.COM": {
    specializations: [
      { name: "Full Fee", fees: 10800 },
      { name: "Semester Fee", fees: 18000 },
      { name: "EMI", fees: 4500 },
    ],
    brochure: "/assets/brochure/NMIMS-Online-MBA-Brochure.pdf",
  },
  "Online DIPLOMA": {
    specializations: [
      { name: "Full Fee", fees: 110000 },
      { name: "Semester Fee", fees: 55000 },
      { name: "EMI", fees: 9160 },
    ],
    brochure: "/assets/brochure/Diploma-and-Certificate-Program_V1.pdf",
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
                fontSize: "16px",
              }}
              aria-label="Close form modal"
            >
              <span className="btn-close" />
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
  const [isModalOpen, setIsModalOpen] = useState(false); // For FirstVisitModal modal
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
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] =
    useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState(""); // To store the course name for modal title

  const courseSpecializations = {
    "Online BA": [
      { name: "Full Fee", fees: 87120 },
      { name: "Semester Fee", fees: 16500 },
      { name: "EMI", fees: 3630 },
    ],
    "Online BA-JMC": [
      { name: "Full Fee", fees: 149600 },
      { name: "Semester Fee", fees: 29000 },
      { name: "EMI", fees: 6233 },
    ],
    "Online BBA": [
      { name: "Full Fee", fees: 145200 },
      { name: "Semester Fee", fees: 27500 },
      { name: "EMI", fees: 6050 },
    ],
    "Online BCA": [
      { name: "Full Fee", fees: 132000 },
      { name: "Cloud", fees: 25000 },
      { name: "EMI", fees: 5500 },
    ],
    "Online BCOM": [
      { name: "Full Fee", fees: 87120 },
      { name: "Semester Fee", fees: 16500 },
      { name: "EMI", fees: 5500 },
    ],
    "Online MA-JMC": [
      { name: "Full Fee", fees: 156400 },
      { name: "Semester Fee", fees: 42500 },
      { name: "EMI", fees: 6233 },
    ],

    "Online MBA": [
      { name: "Full Fee", fees: 183000 },
      { name: "Semester Fee", fees: 49750 },
      { name: "EMI", fees: 7628 },
    ],
    "Online MBA with Dual Specialisation": [
      { name: "Full Fee", fees: 275080 },
      { name: "Semester Fee", fees: 74750 },
      { name: "EMI", fees: 11461 },
    ],
    "Online MCA": [
      { name: "Full Fee", fees: 156400 },
      { name: "Cloud", fees: 42500 },
      { name: "Artificial Intelligence", fees: 6516 },
    ],

    "Online MCOM FM": [
      { name: "Full Fee", fees: 110400 },
      { name: "Semester Fee", fees: 30000 },
      { name: "EMI", fees: 4600 },
    ],
    "Online BBA-MBA": [
      { name: "Full Fee", fees: 318136 },
      { name: "Semester Fee", fees: 57633 },
      { name: "EMI", fees: 13255 },
    ],
    "Online BCOM-MBA": [
      { name: "Full Fee", fees: 260452 },
      { name: "Semester Fee", fees: 47183 },
      { name: "EMI", fees: 10852 },
    ],
    "Online BCA-MCA": [
      { name: "Full Fee", fees: 279680 },
      { name: "Semester Fee", fees: 50667 },
      { name: "EMI", fees: 11653 },
    ],
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

    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose(); // Close modal after submission
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
      name: "Online BCom",
      feeRange: "₹ 99000-₹ 250000",
      imageSrc: "/assets/img/universities/MBA-SMU.png",
    },
    {
      name: "Online MA",
      feeRange: "₹ 130000-₹ 250000",
      imageSrc: "/assets/img/universities/MSC-DS.png",
    },
    {
      name: "Online BBA",
      feeRange: "₹ 165000-₹ 225000",
      imageSrc: "/assets/img/universities/BBA.png",
    },
    {
      name: "Online MCA",
      feeRange: "₹ 170000-₹ 250000",
      imageSrc: "/assets/img/universities/MCA.png",
    },
    {
      name: "Online MBA",
      feeRange: "₹ 199000-₹ 299000",
      imageSrc: "/assets/img/universities/BBA.png",
    },
    {
      name: "Online MBA with Dual Specialisation",
      feeRange: "₹ 299000",
      imageSrc: "/assets/img/universities/MBA.png",
    },
    {
      name: "Online BA",
      feeRange: "₹ 99000-₹ 170000",
      imageSrc: "/assets/img/universities/DIPLOMA.png",
    },
    {
      name: "Online MAJMC",
      feeRange: "₹ 170000",
      imageSrc: "/assets/img/universities/BBA.png",
    },
    {
      name: "Online MCOM FM",
      feeRange: "₹ 120000",
      imageSrc:
        "/assets/img/universities/Masters-of-Computer-Applications-.png",
    },
    {
      name: "Online BCA",
      feeRange: "₹ 132000",
      imageSrc: "/assets/img/universities/BBA.png",
    },
    {
      name: "Online BBA-MBA",
      feeRange: "₹ 318136",
      imageSrc: "/assets/img/universities/BBA-MUJ.png",
    },
    {
      name: "Online BCOM-MBA",
      feeRange: "₹ 260452",
      imageSrc: "/assets/img/universities/MCOM-MUJ.png",
    },
  ];

  const groupedCourses = [];
  const coursesPerSlide = 3; // Adjust based on design needs
  for (let i = 0; i < courses.length; i += coursesPerSlide) {
    groupedCourses.push(courses.slice(i, i + coursesPerSlide));
  }

  return (
    <>
      <SecondMenu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <img
            src="/assets/img/mba-distance/amity.jpg"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="hero-image"
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
                <span>Amity University Online</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Amity University Online
            </h1>
            <p className="headCarousal_location__7rFlL">Noida, Uttar Pradesh</p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Ranking: 49 (Overall Category)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/naac.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/ugc.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/aicte.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/aiu.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
              <img
                src="https://store.learningroutes.in/images/colleges/amity-university-online/accreditations/acu.webp"
                alt="accreditation"
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
                      href={
                        item.id !== "Enquire Now" ? `#${item.id}` : undefined
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
                      Amity University Online
                    </h2>
                    <div className="CourseAbout_course_about_container__xEAH5">
                      <p>
                        The Amity Education Group is a not-for-profit
                        organization that was started in 1986 by the Chauhan
                        family. Today, the University has a presence in more
                        than 11 countries with over 1,75,000 students. To cater
                        to the educational needs of a larger segment of
                        individuals, Amity took the initiative to offer
                        education through the online mode. Thus, Amity
                        University became the first university in India to gain
                        approval from the UGC to offer online degrees in 2009.
                        To ensure that students make the most out of their
                        online learning experience, the university has set up a
                        one-of-its-kind platform, AMIGO, that takes care of all
                        the study-related needs of students. With its innovative
                        thinking and futuristic approach, Amity University is
                        closing the gaps in education by making quality higher
                        education accessible to all.
                      </p>
                    </div>
                    {/* <div className="about_collegeDetails__67FzM">
                      <p
                        style={{
                          fontSize: "16px",
                          fontFamily:
                            "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                          fontStyle: "normal",
                        }}
                      >
                        The institute was founded in 1994 as a distance
                        education arm of SVKM's NMIMS. Over the last several
                        years, NMIMS CDOE has developed and delivered quality
                        education programs, curriculum, and services to
                        democratise education with equal opportunity for
                        everyone to excel at their desired skills. By building a
                        thriving ecosystem for a community of learners, NMIMS
                        CDOE has helped them nurture their aspiration to achieve
                        their goals and thrive in a competitive and dynamically
                        evolving corporate marketplace.
                      </p>
                      <image src="/assets/img/icon/naac.png" />
                    </div> */}

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
                          INR 1,83,080
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
                          INR 49,500
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
                            fontFamily: "Queens", // Added font-family with fallback
                          }}
                        >
                          INR 7628 /{" "}
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
                      <h4
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
                      </h4>
                      <div className="Highlights_grid__zFaon">
                        <div className="Highlights_pointContainer__5_snP">
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
                            Learn from the Faculty of International Repute
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Advanced Learning Material including physical books,
                            audiobooks, etc
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Real Time Industry Projects for Portfolio Building
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Support Team: Student Relationship Manager
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Career Assistance and Exclusive Virtual Job Fairs
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Guest Lectures and Webinars
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Interview Preparations
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Open Education Policy
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Two Degrees Simultaneously - Free of Cost
                          </div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
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
                            Professional Add-on Courses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="collegeDetails_maxWidth" id="Courses">
                    <div className="courses_wrapper">
                      <div
                        className="expert_container"
                        style={{
                          background: "#f4eceb",
                          borderRadius: "25px",
                          padding: "40px",
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
                            Explore online learning courses in Amity University
                            Online
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
                                                src={
                                                  course.imageSrc ||
                                                  "https://via.placeholder.com/600x573"
                                                }
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
                                                padding: "10px 20px",
                                                background:
                                                  "linear-gradient(90deg, #e89e26, #c47b1e)",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "50px",
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
                                                padding: "10px 20px",
                                                background: "transparent",
                                                color: "#0c2d50",
                                                border: "2px solid #0c2d50",
                                                borderRadius: "50px",
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
                    <h4
                      style={{
                        fontSize: "24px",
                        margin: "20px 0",
                        fontFamily:
                          "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                        fontStyle: "normal",
                        fontWeight: "700",
                      }}
                    >
                      Courses Eligibility
                    </h4>
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
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MA</td>
                            <td>
                              Graduate in any field from a recognised university
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BBA</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MCA</td>
                            <td>
                              Graduate in any field from a recognised university
                              with a minimum of 50% marks in aggregate (5%
                              relaxation for SC/ST Categories)
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MBA</td>
                            <td>
                              Graduation in any field with a minimum of 40%
                              marks in aggregate from a recognized university or
                              graduation in any field with less than 40% marks
                              in aggregate + an eligibility test
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BA</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MAJMC</td>
                            <td>
                              Graduate in any field from a recognised university
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online MCom</td>
                            <td>
                              Graduate in any field from a recognised university
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online BCA</td>
                            <td>10+2 in any stream from a recognised board</td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Online Certificate Programme</td>
                            <td>10+2</td>
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
                        <form className="collegenquiry_form__uF7mS">
                          <input
                            type="text"
                            placeholder="Name*"
                            name="name"
                            defaultValue=""
                          />
                          <input
                            type="email"
                            placeholder="Email*"
                            name="email"
                            defaultValue=""
                          />
                          <input
                            type="number"
                            placeholder="Phone*"
                            name="phone"
                            defaultValue=""
                          />
                          <select name="program">
                            <option value="" selected>
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
                            <option value="IT Certifications">
                              IT Certifications
                            </option>
                            <option value="Help Me Decide">
                              Help Me Decide
                            </option>
                          </select>
                          <select name="state">
                            <option value="" selected>
                              State/Province
                            </option>
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
                            <option value="West Bengal">West Bengal</option>
                          </select>
                          <button
                            type="submit"
                            className="collegenquiry_submit_btn__cjBuo"
                          >
                            Submit
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
                              Earn an UGC entitled degree, recognized around the
                              globe
                            </div>
                            <div>
                              <div className="Certificates_pointBox__xwwq4">
                                <div
                                  className="Certificates_point__XYWLq"
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Recognized and accredited degree
                                </div>
                              </div>
                              <div className="Certificates_pointBox__xwwq4">
                                <div
                                  className="Certificates_point__XYWLq"
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  NAAC and AICTE-approved degree
                                </div>
                              </div>
                              <div className="Certificates_pointBox__xwwq4">
                                <div
                                  className="Certificates_point__XYWLq"
                                  style={{
                                    fontSize: "16px",
                                    fontFamily:
                                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                    fontStyle: "normal",
                                  }}
                                >
                                  Degree recognized in both private and public
                                  sector
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img
                              alt="certificate_url"
                              loading="lazy"
                              width={500}
                              height={500}
                              decoding="async"
                              data-nimg={1}
                              className="Certificates_img__GOe9v"
                              style={{
                                color: "transparent",
                                border: "1px solid ",
                                borderRadius: "20px",
                              }}
                              src="/assets/course/amity-degree.png"
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
                        The admissions process takes place in online mode. Fresh
                        admission starts from the month of January of every
                        year. There are direct admissions, no entrance exam is
                        conducted for the admission process. The admission
                        procedure 2025 for the online course at Amity University
                        Online is as follows:
                      </p>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 1
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
                          Visit the official website to initiate the application
                          process
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 2
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
                          Register using essential details such as Name, Email
                          ID, and Contact Details
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 3
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
                          Receive an email containing the registration number
                          and password
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 4
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
                          Provide information about education and work
                          experience, followed by an undertaking
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 5
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
                          Make the payment with the registration amount of INR
                          5,500; additional time is provided for pending
                          payments
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP 6
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
                          Attach the necessary documents, including 10th and
                          12th mark sheets, degree certificates, UG mark sheet
                          and degree, Aadhar Card or any government ID, and a
                          photograph
                        </div>
                      </div>
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
                          Our students have an opportunity of
                        </h3>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <p
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Learn employability skills through assessments and
                            tests
                          </p>
                        </div>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <p
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                            }}
                          >
                            Job that suitably fits the student profile
                          </p>
                        </div>
                      </div>
                      <div className="placement_placementBanner__ACCRS">
                        <div className="placementBanner_container__upl7e">
                          <p
                            className="placementBanner_heading__yGlah"
                            style={{ color: "#000" }}
                          >
                            ₹ 18 LPA
                          </p>
                          <p
                            className="placementBanner_description__O3FqH"
                            style={{
                              fontSize: "16px",
                              fontFamily:
                                "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                              fontStyle: "normal",
                              color: "#000",
                            }}
                          >
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p
                            className="placementBanner_heading__yGlah"
                            style={{ color: "#000" }}
                          >
                            ₹ 25 LPA
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
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <FirstVisitModal closeModal={closeModal} />
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
                      type="text"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <input
                      type="text"
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
                      <option value="online_mba">Online MBA</option>
                      <option value="executive_mba">Executive MBA</option>
                      <option value="online_mca">Online MCA</option>
                      <option value="online_msc">Online MSC</option>
                      <option value="online_mcom">Online MCOM</option>
                      <option value="online_ma">Online MA</option>
                      <option value="online_pgdm">Online PGDM</option>
                      <option value="distance_med">Distance MEd</option>
                      <option value="pg_diploma">PG Diploma</option>
                      <option value="online_bba">Online BBA</option>
                      <option value="online_bca">Online BCA</option>
                      <option value="online_bsc">Online BSC</option>
                      <option value="online_bcom">Online BCom</option>
                      <option value="online_ba">Online BA</option>
                      <option value="distance_bed">Distance BEd</option>
                      <option value="it_certifications">
                        IT Certifications
                      </option>
                      <option value="help_me_decide">Help Me Decide</option>
                    </select>
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">States/Province*</option>
                      <option value="andhra_pradesh">Andhra Pradesh</option>
                      <option value="arunachal_pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="assam">Assam</option>
                      <option value="bihar">Bihar</option>
                      <option value="chhattisgarh">Chhattisgarh</option>
                      <option value="goa">Goa</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="haryana">Haryana</option>
                      <option value="himachal_pradesh">Himachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="kerala">Kerala</option>
                      <option value="madhya_pradesh">Madhya Pradesh</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="manipur">Manipur</option>
                      <option value="meghalaya">Meghalaya</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="odisha">Odisha</option>
                      <option value="punjab">Punjab</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="tamil_nadu">Tamil Nadu</option>
                      <option value="telangana">Telangana</option>
                      <option value="tripura">Tripura</option>
                      <option value="uttar_pradesh">Uttar Pradesh</option>
                      <option value="uttarakhand">Uttarakhand</option>
                      <option value="west_bengal">West Bengal</option>
                      <option value="andaman_and_nicobar_islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="chandigarh">Chandigarh</option>
                      <option value="dadra_and_nagar_haveli_and_daman_and_diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="lakshadweep">Lakshadweep</option>
                      <option value="delhi">Delhi</option>
                      <option value="puducherry">Puducherry</option>
                    </select>
                    <div className="td_form_card_bottom td_mb_15 mt-3">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium w-100"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>Submit</span>
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
