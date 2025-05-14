"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { debounce } from "lodash";
import Menu from "../../../../components/Header/Menu/Menu";
import Footer from "../../../../components/Footer/Footer";
import FirstVisitModal from "../../../../components/FirstVisitModal";
import "../../styles/5107c2122129e0bb.css";
// import "../../styles/style.css";
//  import "../../styles/global.css";

import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";







import RollingLine from "../../../../components/RollingLine";

// SpecializationModal Component
const courseSpecializations = {
  "Online MBA": {
    brochure: "/assets/brochure/NMIMS-MBA/NMIMS-Online-MBA-Brochure.pdf",
  },
  "Online BBA": {
    brochure: "/assets/brochure/NMIMS-BBA/UG_Brochure_A224.pdf",
  },
  "Online B.COM": {
    brochure: "/assets/brochure/NMIMS-B.COM/NMIMS-Online-MBA-Brochure.pdf",
  },
  "Online DIPLOMA": {
    brochure: "/assets/brochure/Diploma/Diploma-and-Certificate-Program_V1.pdf",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    "Online BCOM": [{ name: "Commerce", fees: 108000 }],
    "Online BBA": [
      // { name: "Marketing", fees: 141000 },
      // { name: "Finance", fees: 141000 },
      // { name: "Business Analytics", fees: 169200 },
      { name: "Business Administration", fees: 150000 },
    ],
    "Online MBA": [
      { name: "Business Management", fees: 210000 },
      { name: "Marketing Management", fees: 210000 },
      { name: "Operations & Supply Chain Management", fees: 210000 },
      {name:"Operations and Data Sciences Management",fees:210000},
      { name: "Human Resources Management", fees: 210000 },
      { name: "Finance Management", fees: 210000 },
    ],
    "Online DIPLOMA": [
      { name: "Diploma in Operations Management", fees: 105000 },
      { name: "Diploma in Marketing Management", fees: 105000 },
      { name: "Diploma in Human Resource Management", fees: 105000 },
      { name: "Diploma in Financial Management", fees: 105000 },
      { name: "Diploma in Business Management", fees: 105000 },
    ],
  };

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
    ];

    const handleScroll = debounce(() => {
      const scrollY = window.scrollY + 100;
      let closestSection = "About";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section); // Fixed typo
        if (element) {
          const offsetTop = element.offsetTop;
          const distance = Math.abs(scrollY - offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      setActiveSection(closestSection);
    }, 10);

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
            width={1667}
            height={833}
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
            <div
              className="headCarousal_proceedCompareContainer__rekWb"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                padding: "20px",
                // background: "#f8f9fa",
                borderRadius: "10px",
                margin: "0 auto",
                maxWidth: "1200px",
              }}
            >
              <a style={{ flex: "1", minWidth: "220px", maxWidth: "280px" }}>
                <button
                  className="headCarousal_collegeCompare__znhHH"
                  style={{
                    width: "100%",
                    padding: "20px",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e9ecef 100%)",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily:
                      "'__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif'",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#ff5c35",
                    }}
                  >
                    82000+
                  </span>
                  <br />
                  <span style={{ fontSize: "16px", color: "#151419" }}>
                    Alumni across the world
                  </span>
                </button>
              </a>
              <a
                href="/top-university"
                style={{ flex: "1", minWidth: "220px", maxWidth: "280px" }}
              >
                <button
                  className="headCarousal_collegeCompare__znhHH"
                  style={{
                    width: "100%",
                    padding: "20px",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e9ecef 100%)",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily:
                      "'__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif'",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#ff5c35",
                    }}
                  >
                    40+
                  </span>
                  <br />
                  <span style={{ fontSize: "16px", color: "#151419" }}>
                    Years of legacy
                  </span>
                </button>
              </a>
              <a
                href="/top-university"
                style={{ flex: "1", minWidth: "220px", maxWidth: "280px" }}
              >
                <button
                  className="headCarousal_collegeCompare__znhHH"
                  style={{
                    width: "100%",
                    padding: "20px",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e9ecef 100%)",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily:
                      "'__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif'",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#ff5c35",
                    }}
                  >
                    157000+
                  </span>
                  <br />
                  <span style={{ fontSize: "16px", color: "#151419" }}>
                    Lives transformed
                  </span>
                </button>
              </a>
              <a
                href="/top-university"
                style={{ flex: "1", minWidth: "220px", maxWidth: "280px" }}
              >
                <button
                  className="headCarousal_collegeCompare__znhHH"
                  style={{
                    width: "100%",
                    padding: "20px",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e9ecef 100%)",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    textAlign: "center",
                    fontFamily:
                      "'__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif'",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#ff5c35",
                    }}
                  >
                    8000+
                  </span>
                  <br />
                  <span style={{ fontSize: "16px", color: "#151419" }}>
                    Corporate firms our alumni work for
                  </span>
                </button>
              </a>
              <style>
                {`
      @media (max-width: 768px) {
        .headCarousal_proceedCompareContainer__rekWb {
          display: none !important;
        }
      }
    `}
              </style>
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
                    <div className="CourseAbout_course_about_container__xEAH5">
                      <div className="CourseAbout_course_about_left_col__KRo_I">
                        <p>
                          The institute was founded in 1994 as a distance
                          education arm of SVKM's NMIMS. Over the last several
                          years, NMIMS CDOE has developed and delivered quality
                          education programs, curriculum, and services to
                          democratise education with equal opportunity for
                          everyone to excel at their desired skills. By building
                          a thriving ecosystem for a community of learners,
                          NMIMS CDOE has helped them nurture their aspiration to
                          achieve their goals and thrive in a competitive and
                          dynamically evolving corporate marketplace.
                        </p>
                      </div>
                      <div className="CourseAbout_course_about_right_col__q4drQ">
                        <a href="">
                          <img
                            alt="about_img"
                            loading="lazy"
                            width={800}
                            height={500}
                            decoding="async"
                            data-nimg={1}
                            className="CourseAbout_course_about_img__6V0u_"
                            style={{ color: "transparent" }}
                            src="/assets/img/universities/media_1733210710057.png"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="placement_placementBanner__ACCRS"
                      style={{
                        paddingBottom: "30px",
                        paddingTop: "30px",
                        marginBottom: "10px",
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
                          INR 2,20,000
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
                          INR 55,000
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
                          INR 8,750 /{" "}
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

                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Courses"
                    style={{}}
                  >
                    <div className="courses_wrapper__5pXR3">
                      <div>
                        <div
                          className="Expert_Expert__Container__f2HSI"
                          style={{
                            background: "#f4eceb",
                            borderRadius: "25px",
                          }}
                        >
                          <div className="Expert_Expert__CardsContainer__DDdzT">
                            <h2
                              style={{
                                fontSize: "24px",
                                margin: "0px 0",
                                fontFamily:
                                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                                fontStyle: "normal",
                                fontWeight: "700",
                              }}
                            >
                              Courses
                            </h2>
                            <p className="courses_course_college_name__Reg2z">
                              Explore online learning courses in NMIMS Centre
                              for Distance and Online Education
                            </p>
                            <div className="Expert_Expert__allCardsContainer__kKnmL">
                              {[
                                {
                                  name: "Online MBA",
                                  feeRange: "INR 2,20,000",
                                  imageSrc: "/assets/img/universities/MBA.png",
                                },
                                {
                                  name: "Online BBA",
                                  feeRange: "INR 1,50,000",
                                  imageSrc: "/assets/img/universities/BBA.png",
                                },
                                {
                                  name: "Online BCOM",
                                  feeRange: "INR 1,08,000",
                                  imageSrc:
                                    "/assets/img/universities/BCOM.png",
                                },
                                {
                                  name: "Online DIPLOMA",
                                  feeRange: "INR 1,10,000",
                                  imageSrc:
                                    "/assets/img/universities/DIPLOMA.png",
                                },
                              ].map((course, index) => (
                                <div key={index}>
                                  <div className="Expert_Expert__cardContainer__2y7vz">
                                    <div className="Expert_Expert__cardData__ocQ6N">
                                      <div className="Expert_Expert__flexContainer__iCU0T">
                                        <div className="Expert_Expert__imageContainer__zoZB6">
                                          <img
                                            alt={`Course Image - ${course.name}`}
                                            loading="lazy"
                                            width={600}
                                            height={573}
                                            decoding="async"
                                            className="Expert_Expert__image__8wv_Z"
                                            src={course.imageSrc}
                                          />
                                        </div>
                                        <p>{course.name}</p>
                                        <p>
                                          <span
                                            style={{
                                              fontSize: "12px",
                                              color: "#ee3620",
                                            }}
                                          >
                                            {/* 24 Month */}
                                          </span>{" "}
                                          {course.feeRange}
                                        </p>
                                        <button
                                          className="courses_viewSpsl__lrjH5"
                                          onClick={() =>
                                            setIsCourseModalOpen(true)
                                          }
                                          aria-label={`Enquire about ${course.name}`}
                                        >
                                          Enquire Now
                                        </button>
                                      </div>
                                    </div>
                                    <button
                                      className="Expert_Expert__cardButton__cRBRJ"
                                      onClick={() =>
                                        handleViewSpecialization(course.name)
                                      }
                                      aria-label={`View specializations for ${course.name}`}
                                    >
                                      View Specialization
                                    </button>
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
                      <div
                        style={{
                          background: "#fff",
                          border: "1px solid",
                          padding: "5px 10px 15px 10px",
                          borderRadius: "20px",
                        }}
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
                          Get Free Career Consultation
                        </h2>
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
                            <option value="Online EMBA">Online EMBA</option>
                            <option value="Online BBA">Online BBA</option>
                            <option value="Online BCom">Online BCom</option>
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
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p
                            className="placementBanner_heading__yGlah"
                            style={{ color: "#000" }}
                          >
                            ₹ 20 LPA
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
          style={{ backgroundColor: "rgba(21, 0, 0, 0.6)" }}
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
                      class
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
