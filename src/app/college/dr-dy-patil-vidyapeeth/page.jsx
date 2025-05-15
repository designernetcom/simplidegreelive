"use client";

import React, { useState, useEffect, useRef } from "react";
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
import RollingLine from "../../../../components/RollingLine";

// SpecializationModal Component
const courseBrochures = {
  Diploma: "/assets/brochure/DY-PATIL/Diploma-Brochure.pdf",
  "Online BBA": "/assets/brochure/DY-PATIL/BBA-Brochure.pdf",
  "Executive MBA": "/assets/brochure/DY-PATIL/Executive-MBA-Brochure.pdf",
  "Online BCS": "/assets/brochure/DY-PATIL/BCS-Brochure.pdf",
  "Online MBA": "/assets/brochure/DY-PATIL/MBA-Brochure.pdf",
  "Online BHS": "/assets/brochure/DY-PATIL/BHS-Brochure.pdf",
};
const courseSpecializations = {
  "Online MBA": {
    specializations: [
      { name: "Full Fee", fees: 222000 },
      { name: "Semester Fee", fees: 55000 },
      { name: "EMI", fees: 8750 },
    ],
    brochure: "/assets/brochure/DR-DYPATIL/Prospectus-2025-DPUCOL-Online.pdf",
  },
  "Online BBA": {
    specializations: [
      { name: "Full Fee", fees: 150000 },
      { name: "Semester Fee", fees: 25000 },
      { name: "EMI", fees: 6250 },
    ],
    brochure: "/assets/brochure/DR-DYPATIL/Prospectus-2025-DPUCOL-Online.pdf",
  },
};
function SpecializationModal({
  isSpecializationModalOpen,
  selectedCourseName,
  selectedCourseSpecializations,
  handleCloseSpecializationModal,
  brochurePath,
}) {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!isSpecializationModalOpen) return null;

  const handleDownloadBrochure = () => {
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    // Enhanced validation
    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    console.log("Brochure form submitted:", formData);

    const link = document.createElement("a");
    link.href = brochurePath || "/assets/brochure/default-brochure.pdf";
    link.download = brochurePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsFormModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
    setFormData({ name: "", email: "", phone: "" });
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
                    <style jsx>{`
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
                          animation: fadeIn 0.4s ease forwards ${index * 0.15}s !important;
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
                    `}</style>
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
  const [reviewData, setReviewData] = useState({
    reviewerName: "",
    comment: "",
  });
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] =
    useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sectionRefs = useRef({});

  const courseSpecializations = {
    "Online BBA": [
      { name: "Marketing Management", fees: 145000 },
      { name: "Human Resource Management", fees: 145000 },
      { name: "Finance Management", fees: 145000 },
      { name: "IT Management", fees: 145000 },
    ],

    "Online MBA": [
      { name: "Marketing Management", fees: 189400 },
      { name: "Human Resource Management", fees: 189400 },
      { name: "Finance Management", fees: 189400 },
      { name: "IT Management", fees: 189400 },
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

  // IntersectionObserver for scroll-based navigation
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px 0px 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        sectionRefs.current[section] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs.current[section]) {
          observer.unobserve(sectionRefs.current[section]);
        }
      });
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

  const handleSubmit = async (e, isCourseModal = false) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Form submitted:", formData);
      if (isCourseModal) handleClose();
      e.target.reset();
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

  const [isMounted, setIsMounted] = useState(false);

  // Updated courses array with dynamic feeRange
  const courses = [

    
    {
      name: "Online MBA",
      feeRange: "INR 1,89,400",
      imageSrc: "/assets/img/universities/MBA.png",
    },{
      name: "Online BBA",
      feeRange: "INR 1,45,000",
      imageSrc: "/assets/img/universities/BBA.png",
    },

   
  ];

  const groupedCourses = [];
  const coursesPerSlide = 3;
  for (let i = 0; i < courses.length; i += coursesPerSlide) {
    groupedCourses.push(courses.slice(i, i + coursesPerSlide));
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>Dr. D.Y. Patil Vidyapeeth - Online Education Courses</title>
        <meta
          name="description"
          content="Explore online learning programs at Dr. D.Y. Patil Vidyapeeth, including Diploma, Online BBA, Executive MBA, Online BCS, Online MBA, and Online BHS courses."
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src="https://store.learningroutes.in/images/colleges/Dr-DY-patil-vidyapeeth/hero-image/DYpatilvidyapeethbanner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="Dr. D.Y. Patil Vidyapeeth campus banner"
            width={1900}
            height={840}
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
                <span>Dr. D.Y. Patil Vidyapeeth</span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Dr. D.Y. Patil Vidyapeeth
            </h1>
            <p className="headCarousal_location__7rFlL">Pune, Maharashtra</p>
            <p className="headCarousal_ranking__1yTOY">NIRF Rank: 44</p>
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
                      onClick={
                        item.id === "Enquire Now"
                          ? () => setIsCourseModalOpen(true)
                          : undefined
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
                        Dr. D.Y. Patil Vidyapeeth
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        Announcing the Centre for Online Learning (COL) of Dr.
                        D. Y. Patil Vidyapeeth: Bridging the Gap Between
                        Tradition and Innovation Dr. D. Y. Patil Vidyapeeth's
                        Centre for Online Learning (DPU-COL), at the center in
                        online education, is designed to satisfy the changing
                        demands of today's students while guaranteeing that they
                        gain knowledge and skills that are relevant to the
                        industry. In contrast to conventional in-person
                        educational approaches, COL focuses only on providing
                        top-notch instruction via cutting-edge online techniques
                        that combine the best aspects of both worlds. Our online
                        programs are carefully designed to impart critical
                        leadership and management skills, meeting the needs of
                        the industry and enabling students to succeed. Our
                        curriculum, which was created by a top board of
                        academics and business executives, is full of case
                        studies and real-world applications. Our online programs
                        equip students with the necessary skills to succeed in
                        their professions by providing them with a platform to
                        investigate job options and acquire a competitive
                        advantage in the placement arena. Accredited by NAAC,
                        AICTE, ASSOCHAM, AIU, and WES, and recognized by
                        prestigious organizations like the UGC, Dr. D.Y. Patil
                        Vidyapeeth's Centre for Online Learning maintains strict
                        academic standards to guarantee the level of education
                        we offer. These recommendations not only support our
                        teaching philosophy but also attest to our graduates'
                        qualifications, giving them more academic authority in
                        the eyes of potential employers.
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
                          INR 1,89,400
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
                            fontSize: "30px",
                            lineHeight: 1.4,
                            fontWeight: 450,
                            margin: 0,
                          }}
                        >
                          INR 50,000
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
                            fontSize: "30px",
                            lineHeight: 1.4,
                            fontWeight: 500,
                            margin: 0,
                            fontFamily: "Queens", // Added font-family with fallback
                          }}
                        >
                          INR 10522 /{" "}
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
                          "Globally accredited programmes",
                          "Affordable and flexible learning experience",
                          "Online academic sessions with a weekly planner",
                          "Webinars by industry experts",
                          "Highly interactive e-learning content",
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
                            Explore online learning courses at Center for Online
                            Learning, Dr. D.Y. Patil Vidyapeeth, Pune
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
                                              <Image
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
                                                (e.currentTarget.style.boxShadow =
                                                  "0 6px 20px rgba(232, 158, 38, 0.5)")
                                              }
                                              onMouseLeave={(e) =>
                                                (e.currentTarget.style.boxShadow =
                                                  "none")
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
                    <style jsx>{`
                      .collegeDetails_maxWidth {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 15px;
                      }
                      .courses_wrapper {
                        padding: 40px 0;
                      }
                      .work-sans {
                        font-family: "Work Sans", sans-serif;
                      }
                      .carousel-control-prev,
                      .carousel-control-next {
                        width: 5%;
                        opacity: 0.7;
                      }
                      .carousel-control-prev-icon,
                      .carousel-control-next-icon {
                        background-color: #0c2d50;
                        border-radius: 50%;
                      }
                      @media (max-width: 768px) {
                        .expert_container {
                          padding: 20px !important;
                        }
                        .card.expert_card {
                          max-width: 100% !important;
                          margin-bottom: 15px;
                        }
                        .d-flex {
                          flex-direction: column !important;
                          align-items: center;
                        }
                      }
                      @media (max-width: 480px) {
                        h2.work-sans {
                          font-size: 20px !important;
                        }
                        p.courses_course_college_name {
                          font-size: 14px !important;
                        }
                        .card-body {
                          padding: 15px !important;
                        }
                      }
                    `}</style>
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
                              course: "Certificate Programme (Online)",
                              eligibility:
                                "Bachelor's Degree Holder / Graduate in any Discipline from a Recognised University or a Diploma Holders.",
                            },
                            {
                              course: "Online MBA",
                              eligibility:
                                "A candidate applying for the program should have passed a bachelor's degree from a recognized university in any discipline. Minimum 50% aggregate marks or 45% in case of candidates belonging to reserved categories.",
                            },
                            {
                              course: "Online BBA",
                              eligibility:
                                "HSC (10+2) or its equivalent exam with any stream and English as one of the subjects from a recognized Board.",
                            },
                            {
                              course: "Executive MBA",
                              eligibility:
                                "Bachelor's degree from a recognized university with at least 50% marks and relevant work experience.",
                            },
                            {
                              course: "Online BCS",
                              eligibility:
                                "HSC (10+2) or its equivalent with Mathematics as a subject from a recognized Board.",
                            },
                            {
                              course: "Online BHS",
                              eligibility:
                                "HSC (10+2) or its equivalent in Science stream from a recognized Board.",
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
                          onSubmit={(e) => handleSubmit(e)}
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
                            type="tel"
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
                            <option value="Online BBA">Online BBA</option>
                            <option value="Executive MBA">Executive MBA</option>
                            <option value="Online BCS">Online BCS</option>
                            <option value="Online MBA">Online MBA</option>
                            <option value="Online BHS">Online BHS</option>
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
                              Earn a UGC-entitled degree, recognized around the
                              globe
                            </div>
                            <div>
                              {[
                                "AIU Membership",
                                "AICTE Approved",
                                "WES Recognised",
                                "ASSOCHAM Membership",
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
                              alt="Dr. D.Y. Patil Vidyapeeth sample degree certificate"
                              loading="lazy"
                              width={500}
                              height={500}
                              decoding="async"
                              className="Certificates_img__GOe9v"
                              style={{
                                color: "transparent",
                                border: "1px solid ",
                                borderRadius: "20px",
                              }}
                              src="/assets/course/DEGREE.jpeg"
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
                      <h2 className="Admissions_heading__paqsP">
                        Admission Process
                      </h2>
                      <p className="Admissions_description__sKdUj">
                        The admission process takes place online. Fresh
                        admissions start in January every year. There are direct
                        admissions, and no entrance exam is conducted. The
                        admission procedure for 2025 for the online courses at
                        Dr. D.Y. Patil Vidyapeeth is as follows:
                      </p>
                      {[
                        "Learner's Authentication",
                        "Admission Form",
                        "Admission confirmation by the university",
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
                          Our students have an opportunity to
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
                            ₹ 6 LPA
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
                            ₹ 21 LPA
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
                      <h3 className="placement_heading__iEHZj">
                        Our Students Work At
                      </h3>
                      <div className="partners_container___c9cx">
                        {[
                          {
                            src: "https://store.learningroutes.in/images/colleges/Dr-DY-patil-vidyapeeth/placement-partners/bajaj-capitals.webp",
                            alt: "Bajaj Capitals logo",
                          },
                          {
                            src: "https://store.learningroutes.in/images/colleges/Dr-DY-patil-vidyapeeth/placement-partners/hdfc.webp",
                            alt: "HDFC logo",
                          },
                          {
                            src: "https://store.learningroutes.in/images/colleges/Dr-DY-patil-vidyapeeth/placement-partners/capgemini.webp",
                            alt: "Capgemini logo",
                          },
                          {
                            src: "https://store.learningroutes.in/images/colleges/Dr-DY-patil-vidyapeeth/placement-partners/american-express.webp",
                            alt: "American Express logo",
                          },
                          {
                            src: "https://store.learningroutes.in/images/colleges/Dr-DY-patil-vidyapeeth/placement-partners/RSPL.webp",
                            alt: "RSPL logo",
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
                                className="partners_plac_img__htNsk"
                                src={partner.src}
                              />
                            </div>
                          </div>
                        ))}
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
                  <form onSubmit={(e) => handleSubmit(e, true)}>
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
                      <option value="Online BBA">Online BBA</option>
                      <option value="Executive MBA">Executive MBA</option>
                      <option value="Online BCS">Online BCS</option>
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online BHS">Online BHS</option>
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
        brochurePath={courseBrochures[selectedCourseName]}
      />
      <Footer />
    </>
  );
}
