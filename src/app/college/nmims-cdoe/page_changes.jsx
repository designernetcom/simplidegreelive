"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { debounce } from "lodash";
import axios from "axios";
import Menu from "../../../../components/Header/Menu/Menu";
import Footer from "../../../../components/Footer/Footer";
import FirstVisitModal from "../../../../components/FirstVisitModal";
import EnquiryModel from "../../../../components/EnquiryModel";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";
import RollingLine from "../../../../components/RollingLine";

// Course specializations brochures
const courseSpecializations = {
  "Online MBA": {
    brochure: "/assets/brochure/NMIMS-MBA/NMIMS-Online-MBA-Brochure.pdf",
  },
  "Online BBA": {
    brochure: "/assets/brochure/NMIMS-BBA/UG_Brochure_A224.pdf",
  },
  "Online BCOM": {
    brochure: "/assets/brochure/NMIMS-B.COM/NMIMS-Online-MBA-Brochure.pdf",
  },
  "Online DIPLOMA": {
    brochure: "/assets/brochure/Diploma/Diploma-and-Certificate-Program_V1.pdf",
  },
};

// SpecializationModal Component
function SpecializationModal({
  isSpecializationModalOpen,
  selectedCourseName,
  selectedCourseSpecializations,
  handleCloseSpecializationModal,
  brochurePath,
}) {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    program: selectedCourseName || "",
    state: "",
  });

  if (!isSpecializationModalOpen) return null;

  const handleDownloadBrochure = () => {
    setIsFormModalOpen(true);
  };

  const handleOpenEnquiryModal = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: selectedCourseName || "",
      state: "",
    });
  };

  const handleFormSubmit = (e, isBrochureDownload = false) => {
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

    console.log(
      isBrochureDownload
        ? "Brochure form submitted:"
        : "Enquiry form submitted:",
      formData
    );

    if (isBrochureDownload) {
      const link = document.createElement("a");
      link.href = brochurePath || "/assets/brochure/default-brochure.pdf";
      link.download = brochurePath.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setIsFormModalOpen(false);
    setIsEnquiryModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: selectedCourseName || "",
      state: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: selectedCourseName || "",
      state: "",
    });
  };

  return (
    <>
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
                    <p
                      style={{
                        color: "#555",
                        fontSize: "14px",
                        fontFamily:
                          "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                      }}
                    >
                      Inclusive of all taxes
                    </p>
                    <button
                      onClick={handleOpenEnquiryModal}
                      style={{
                        padding: "5px 5px",
                        background:
                          "linear-gradient(90deg,rgb(11, 9, 5),rgb(21, 20, 19))",
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
                        Object.assign(e.currentTarget.style, {
                          boxShadow: "0 6px 20px rgba(21, 21, 20, 0.5)",
                        })
                      }
                      onMouseLeave={(e) =>
                        Object.assign(e.currentTarget.style, {
                          boxShadow: "none",
                        })
                      }
                      aria-label="Enquire about course"
                    >
                      Enquire Now
                    </button>
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
            <form onSubmit={(e) => handleFormSubmit(e, true)}>
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
      {isEnquiryModalOpen && (
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
              onClick={handleCloseEnquiryModal}
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
              onMouseOver={(e) => (e.currentTarget.style.color = "#007bff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#151419")}
              aria-label="Close enquiry modal"
            >
              ×
            </button>
            <p
              style={{
                fontSize: "16px",
                fontFamily:
                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                color: "#555",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Get personalized career consultation
            </p>
            <form onSubmit={(e) => handleFormSubmit(e, false)}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="enquiry-name"
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
                  id="enquiry-name"
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
                  htmlFor="enquiry-email"
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
                  id="enquiry-email"
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
                  htmlFor="enquiry-phone"
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
                  id="enquiry-phone"
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
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="enquiry-program"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Program
                </label>
                <select
                  id="enquiry-program"
                  name="program"
                  value={formData.program}
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
                >
                  <option value="">Choose a program</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Online BBA">Online BBA</option>
                  <option value="Executive MBA">Executive MBA</option>
                  <option value="Online BCS">Online BCS</option>
                  <option value="Online MBA">Online MBA</option>
                  <option value="Online BHS">Online BHS</option>
                  <option value="Help Me Decide">Help Me Decide</option>
                </select>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="enquiry-state"
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  State/Province
                </label>
                <select
                  id="enquiry-state"
                  name="state"
                  value={formData.state}
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
                >
                  <option value="">Select State/Province</option>
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
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#0d2638",
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
                  Submit Enquiry
                </button>
              </div>
            </form>
            <p
              style={{
                fontSize: "14px",
                fontFamily:
                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                color: "#555",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Your personal information is secure with us.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// Page Component
export default function Page() {
  const [activeSection, setActiveSection] = useState("About");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] =
    useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showModal, setShowModal] = useState(false);
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
  const [universityData, setUniversityData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const maxRetries = 3;

  // Fetch data from the Laravel API
  useEffect(() => {
    const fetchUniversityData = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(
          "https://netcomindia.xyz/api/careerpage"
        );
        const data = Array.isArray(response.data)
          ? response.data[0]
          : response.data;
        setUniversityData(data);
        setError(null);
        setIsFetching(false);
      } catch (err) {
        console.error("Error fetching university data:", err);
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
          }, 2000);
        } else {
          setError({
            general: "Failed to fetch university data. Please try again later.",
            details: err.message,
          });
          setIsFetching(false);
        }
      }
    };

    fetchUniversityData();
  }, [retryCount]);

  // Course specializations with API data
  const courseSpecializationsData = universityData
    ? {
        "Online BCOM": [
          { name: "Commerce", fees: universityData.online_bcom_fees || 108000 },
        ],
        "Online BBA": [
          {
            name: "Business Administration",
            fees: universityData.online_bba_fees || 150000,
          },
        ],
        "Online MBA": [
          {
            name: "Business Management",
            fees: universityData.online_mba_fees || 220000,
          },
          {
            name: "Marketing Management",
            fees: universityData.online_mba_fees || 220000,
          },
          {
            name: "Operations and Data Sciences Management",
            fees: universityData.online_mba_fees || 220000,
          },
          {
            name: "Human Resources Management",
            fees: universityData.online_mba_fees || 220000,
          },
          {
            name: "Finance Management",
            fees: universityData.online_mba_fees || 220000,
          },
        ],
        "Online DIPLOMA": [
          {
            name: "Diploma in Operations Management",
            fees: universityData.online_diploma_fees || 105000,
          },
          {
            name: "Diploma in Marketing Management",
            fees: universityData.online_diploma_fees || 105000,
          },
          {
            name: "Diploma in Human Resource Management",
            fees: universityData.online_diploma_fees || 105000,
          },
          {
            name: "Diploma in Financial Management",
            fees: universityData.online_diploma_fees || 105000,
          },
          {
            name: "Diploma in Business Management",
            fees: universityData.online_diploma_fees || 105000,
          },
        ],
      }
    : {
        "Online BCOM": [{ name: "Commerce", fees: 108000 }],
        "Online BBA": [{ name: "Business Administration", fees: 150000 }],
        "Online MBA": [
          { name: "Business Management", fees: 220000 },
          { name: "Marketing Management", fees: 220000 },
          { name: "Operations and Data Sciences Management", fees: 220000 },
          { name: "Human Resources Management", fees: 220000 },
          { name: "Finance Management", fees: 220000 },
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
      courseSpecializationsData[courseName]?.map((spec) => spec.fees) || [];
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
        const element = document.getElementById(section);
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

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!formData.name.trim()) {
      setError({ general: "Name is required" });
      setIsLoading(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError({ general: "Invalid email format" });
      setIsLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setError({ general: "Phone number must be 10 digits" });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://netcomindia.xyz/api/enquiries",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setSuccess(response.data.message || "Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        state: "",
      });
    } catch (err) {
      console.error("Submission Error:", err);
      if (err.response) {
        setError({
          general: err.response.data.message || "Server error occurred",
          details: err.response.data.errors || null,
        });
      } else if (err.request) {
        setError({ general: "Network error: Unable to reach the server" });
      } else {
        setError({ general: "An unexpected error occurred: " + err.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!formData.name.trim()) {
      setError({ general: "Name is required" });
      setIsLoading(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError({ general: "Invalid email format" });
      setIsLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setError({ general: "Phone number must be 10 digits" });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://netcomindia.xyz/api/enquiries",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      setSuccess(response.data.message || "Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        state: "",
      });
      setIsCourseModalOpen(false);
    } catch (err) {
      console.error("Submission Error:", err);
      if (err.response) {
        setError({
          general: err.response.data.message || "Server error occurred",
          details: err.response.data.errors || null,
        });
      } else if (err.request) {
        setError({ general: "Network error: Unable to reach the server" });
      } else {
        setError({ general: "An unexpected error occurred: " + err.message });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewSpecialization = (courseName) => {
    setSelectedCourseName(courseName);
    setSelectedCourseSpecializations(
      courseSpecializationsData[courseName] || []
    );
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

  if (isFetching) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>
          Loading university data... (Attempt {retryCount + 1} of{" "}
          {maxRetries + 1})
        </p>
      </div>
    );
  }

  if (error && !universityData) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        <p>{error.general}</p>
        <button
          onClick={() => {
            setRetryCount(0);
            setError(null);
            setIsFetching(true);
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {universityData?.name ||
            "NMIMS Centre for Distance and Online Education"}{" "}
          - Courses & Admissions
        </title>
        <meta
          name="description"
          content={
            universityData?.about ||
            "Explore distance and online degree programs at NMIMS Centre for Distance and Online Education, including BCom, BBA, MBA, and EMBA."
          }
        />
      </Head>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <Image
            src={
              universityData?.logo || "/assets/img/mba-distance/nmns-code.jpg"
            }
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt={`${
              universityData?.name ||
              "NMIMS Centre for Distance and Online Education"
            } campus banner`}
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
                <span>
                  {universityData?.name ||
                    "NMIMS Centre for Distance and Online Education"}
                </span>
              </span>
            </nav>
            <h1 className="headCarousal_collegeHeading__KBbuL">
              {universityData?.name ||
                "NMIMS Centre for Distance and Online Education"}
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
            <div className="headCarousal_proceedCompareContainer__rekWb">
              {/* ... (carousel section unchanged, omitted for brevity) */}
            </div>
          </div>
        </div>
        <div className="college_collegWrapper__vaQh1">
          <div className="college_collegeContainer__nqZS1">
            <div className="college_dataSection__0M4eV">
              <div className="collegeDetails_detailsPage__0qlWI">
                <div className="collegeDetails_scroller__kwBjm">
                  {/* ... (scroller section unchanged, omitted for brevity) */}
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
                      {universityData?.title ||
                        "NMIMS Centre for Distance and Online Education"}
                    </h2>
                    <div className="CourseAbout_course_about_container__xEAH5">
                      <div className="CourseAbout_course_about_left_col__KRo_I">
                        <p>
                          {universityData?.about ||
                            "The institute was founded in 1994 as a distance education arm of SVKM's NMIMS..."}
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
                          INR{" "}
                          {universityData?.full_course_fees?.toLocaleString() ||
                            "2,20,000"}
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
                          INR{" "}
                          {universityData?.each_semester_fee?.toLocaleString() ||
                            "55,000"}
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
                          INR{" "}
                          {universityData?.emi_starting_at?.toLocaleString() ||
                            "8,750"}{" "}
                          / <span style={{ fontSize: "20px" }}>Month</span>
                        </p>
                        <p
                          className="placementBanner_description__O3FqH"
                          style={{ color: "#000" }}
                        >
                          Terms & conditions apply
                        </p>
                      </div>
                      {/* ... (media queries unchanged, omitted for brevity) */}
                    </div>
                    <RollingLine />
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
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
                              Explore online learning courses in{" "}
                              {universityData?.name ||
                                "NMIMS Centre for Distance and Online Education"}
                            </p>
                            <div className="Expert_Expert__allCardsContainer__kKnmL">
                              {[
                                {
                                  name: "Online MBA",
                                  feeRange: getFeeRange("Online MBA"),
                                  imageSrc: "/assets/img/universities/MBA.png",
                                },
                                {
                                  name: "Online BBA",
                                  feeRange: getFeeRange("Online BBA"),
                                  imageSrc: "/assets/img/universities/BBA.png",
                                },
                                {
                                  name: "Online BCOM",
                                  feeRange: getFeeRange("Online BCOM"),
                                  imageSrc: "/assets/img/universities/BCOM.png",
                                },
                                {
                                  name: "Online DIPLOMA",
                                  feeRange: getFeeRange("Online DIPLOMA"),
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
                                          ></span>
                                          {course.feeRange}
                                        </p>
                                        <a
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                          className="spnm"
                                        >
                                          <span>
                                            <span
                                              onClick={() => setShowModal(true)}
                                              style={{ cursor: "pointer" }}
                                            >
                                              Enquire Now
                                            </span>
                                            <EnquiryModel
                                              showModal={showModal}
                                              setShowModal={setShowModal}
                                            />
                                          </span>
                                        </a>
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
                  {/* ... (rest of the sections unchanged: Course Eligibility, Enquire Now, Certification, Admission, Placement, omitted for brevity) */}
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
        brochurePath={courseSpecializations[selectedCourseName]?.brochure}
      />
      <Footer />
    </>
  );
}
