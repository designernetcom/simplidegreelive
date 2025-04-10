"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
const pathname = usePathname();
const [fixedHeader, setFixedHeader] = useState(false);
const [openMenuMobile, setOpenMenuMobile] = useState(false);
const [isUniversityModalOpen, setIsUniversityModalOpen] = useState(false);
const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
const [isUniversityDropdownOpen, setIsUniversityDropdownOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated universities array with image paths
  const universities = [
    {
      name: "Maharashtra",
      href: "/top-university",
      icon: "/assets/img/icon/maharastra.webp",
    },

    {
      name: "Karnataka",
      href: "/top-university",
      icon: "/assets/img/icon/Bengaluru.webp",
    },
    {
      name: "Telangana",
      href: "/top-university",
      icon: "/assets/img/icon/Hyderabad.webp",
    },
    {
      name: "Gujarat",
      href: "/top-university",
      icon: "/assets/img/icon/Ahmedabad.webp",
    },
    {
      name: "Punjab",
      href: "/top-university",
      icon: "/assets/img/icon/punjab.webp",
    },
    {
      name: "Uttar Pradesh",
      href: "/top-university",
      icon: "/assets/img/icon/up.webp",
    },
    {
      name: "Rajasthan",
      href: "/top-university",
      icon: "/assets/img/icon/rajasthan.webp",
    },
    {
      name: "Haryana",
      href: "/top-university",
      icon: "/assets/img/icon/Chandigarh.webp",
    },
    {
      name: "Tamil Nadu",
      href: "/top-university",
      icon: "/assets/img/icon/tamilnadu.webp",
    },
    {
      name: "New Delhi",
      href: "/top-university",
      icon: "/assets/img/icon/Delhi.webp",
    },
  ];

  const toggleMobileMenu = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  const openUniversityModal = () => {
    setIsUniversityModalOpen(true);
  };
const toggleUniversityDropdown = () => {
  setIsUniversityDropdownOpen(!isUniversityDropdownOpen);
};


  const closeUniversityModal = () => {
    setIsUniversityModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className={fixedHeader ? "fixed-header" : ""}>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        style={{
          display: "none",
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 10000,
          background: "#0c2d50",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        className="mobile-toggle"
      >
        {openMenuMobile ? "✕" : "☰"}
      </button>

      {/* Top Navigation Bar */}
      <div className="TopNavbar_topNavBar__Container__63eNB">
        <div className="TopNavbar_topNavBar__flexContainer__jpTqI">
          <div className="TopNavbar_topNavBar__linksContainer__5ci9a">
            {[
              { href: "/top-university", text: "Top Universities & Colleges" },
              { href: "/trending-course", text: "Trending Courses" },
              { href: "/study-abroad", text: "Study Abroad" },
              { href: "/exam", text: "Entrance Exams" },
              // {
              //   href: "/distance/univercity/distance-mba-in-business-management-2",
              //   text: "Career Guidance",
              // },
              { href: "/webstories", text: "Web Stories" },
            ].map((item) => (
              <div key={item.href} className="TopNavbar_topNavBar__link__Y5UGY">
                <Link href={item.href} className="TopNavbar_linkComp__iHTrA">
                  <p style={{ color: "#0c2d50" }}>{item.text}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="TopNavbar_topNavBar__loginContainer__d8NFn">
            <div className="TopNavbar_phoneBtn__TCkgd">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                fontSize="1.3rem"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "#0c2d50" }}
              >
                <path d="M152.27,37.93a8,8,0,0,1,9.80-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.80A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.80c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.80c-5.12-19.16-18.50-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.40,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.20-.25.39-.50.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.40,64.60,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
              </svg>
              <a href="tel:+918806099993" style={{ color: "#0c2d50" }}>
                8806099993
              </a>
            </div>
            <div className="TopNavbar_phoneBtn__TCkgd">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                className="TopNavbar_topNavBar__login_icon__DYr7p"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "#0c2d50" }}
              >
                <path d="M313.60 304c-28.70 0-42.50 16-89.60 16-47.10 0-60.80-16-89.60-16C60.20 304 0 364.20 0 438.40V464c0 26.50 21.50 48 48 48h352c26.50 0 48-21.50 48-48v-25.60c0-74.20-60.20-134.40-134.40-134.40zM400 464H48v-25.60c0-47.60 38.80-86.40 86.40-86.40 14.60 0 38.30 16 89.60 16 51.70 0 74.90-16 89.60-16 47.60 0 86.40 38.80 86.40 86.40V464zM224 288c79.50 0 144-64.50 144-144S303.50 0 224 0 80 64.50 80 144s64.50 144 144 144zm0-240c52.90 0 96 43.10 96 96s-43.10 96-96 96-96-43.10-96-96 43.10-96 96-96z" />
              </svg>
              <a
                
                onClick={openLoginModal}
                style={{ color: "#0c2d50",cursor:"pointer" }}
              >
                login
              </a>
            </div>
         
            <Link
              href="/free-courses"
              className="TopNavbar_topNavBar__freeCoursesBtn__48l_Q"
              style={{ color: "#0c2d50" }}
            >
              Free Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="MainNavbar_mainNavBar__container__WxyCm">
        <div className="MainNavbar_mainNavBar__flexContainer__uxuMS">
          <div>
            <Link href="/">
              <Image
                alt="logo"
                fetchPriority="high"
                width={635}
                height={213}
                src="/assets/img/Simplidegree logo 3.png"
                className="MainNavbar_mainNavBar__image__ZE0A9"
              />
            </Link>
          </div>
          <div
            className="MainNavbar_mainNavBar__navbarContainer__8aIZC"
            style={{
              display: openMenuMobile ? "block" : "flex",
              position: openMenuMobile ? "fixed" : "relative",
              top: openMenuMobile ? "0" : "auto",
              left: openMenuMobile ? "0" : "auto",
              width: openMenuMobile ? "100%" : "auto",
              height: openMenuMobile ? "100vh" : "auto",
              backgroundColor: openMenuMobile ? "#0c2d50" : "transparent",
              zIndex: openMenuMobile ? 9998 : "auto",
              padding: openMenuMobile ? "20px" : "0",
            }}
          >
            <div className="MainNavbar_mainNavBar__exploreButton__llabC">
              <Link
                href="/online-pg-programmes"
                className="Modal_buttonXl__4JKO_"
              >
                Explore Courses
              </Link>
            </div>
            <div
              className="MainNavbar_mainNavBar__buttonsContainer__QAT3r"
              style={{
                backgroundColor: openMenuMobile ? "transparent" : "#0c2d50",
                display: "flex",
                flexDirection: openMenuMobile ? "column" : "row",
                position: "relative",
              }}
            >
              {/* Top University with Modal Trigger */}
              <div className="MainNavbar_mainNavBar__buttons__fxxQT">
                <div onClick={openUniversityModal}>
                  <Link href="#" className="MainNavbar_link__Je6tm">
                    Top University
                  </Link>
                </div>
              </div>

              {/* Other Navigation Items */}
              {[
                {
                  href: "/college-finder",
                  text: "College Finder",
                  special: (
                    <span className="MainNavbar_glowEffect__ORd8S">
                      AI Based
                    </span>
                  ),
                },
                {
                  href: "/freecounseling",
                  text: "Free Counselling",
                  icon: (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="MainNavbar_flashingIcon__290hO"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" />
                    </svg>
                  ),
                },
                { href: "/careers", text: "Career" },
                { href: "/blog", text: "Blogs" },
                { href: "/contact", text: "Contact Us" },
              ].map((item) => (
                <div
                  key={item.href}
                  className="MainNavbar_mainNavBar__buttons__fxxQT"
                >
                  <Link
                    href={item.href}
                    className="MainNavbar_link__Je6tm"
                    onClick={() => openMenuMobile && setOpenMenuMobile(false)}
                  >
                    {item.icon} {item.text} {item.special}
                  </Link>
                </div>
              ))}

              <div className="MainNavbar_mainNavBar__referral__wb9C6">
                <Link
                  href="/refer-and-earn"
                  onClick={() => openMenuMobile && setOpenMenuMobile(false)}
                >
                  <div className="MainNavbar_tooltip__r7Ode">
                    <Image
                      alt="referral"
                      loading="lazy"
                      width={24}
                      height={25}
                      src="/assets/img/referal.png"
                    />
                    <span className="MainNavbar_tooltipText__Mu_xF">
                      Refer and Earn
                      <span className="MainNavbar_rupee__AoHAZ">₹ 5000</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={styles.mobileNavbar}>
        <div className={styles.mobileNavbarHeader}>
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/img/Simplidegree_logo_white.png"
              width={150}
              height={10}
              className={styles.mobileNavbarLogo}
            />
          </Link>
          <button
            className={styles.mobileNavbarToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={
                openMenuMobile ? styles.hamburgerOpen : styles.hamburger
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <div
          className={`${styles.mobileNavbarMenu} ${
            openMenuMobile ? styles.active : ""
          }`}
          style={{
            background: "hsla(0, 0%, 8%, 0.7)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className={styles.menuOverlay}>
            {/* TopNavbar Links */}
            <Link href="/top-university" onClick={toggleMobileMenu}>
              Top Universities & Colleges
            </Link>
            <div className={styles.dropdownContainer}>
              <button
                onClick={toggleUniversityDropdown}
                className={styles.dropdownToggle}
                style={{ color: "#fff" }}
              >
                Top University {isUniversityDropdownOpen ? "▲" : "▼"}
              </button>
              {isUniversityDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {universities.slice(0, 4).map((uni) => (
                    <Link
                      key={uni.name}
                      href={uni.href}
                      className={styles.dropdownItem}
                      onClick={toggleMobileMenu}
                      style={{ color: "#fff" }}
                    >
                      <Image
                        alt={`${uni.name} icon`}
                        src={uni.icon}
                        width={30}
                        height={25}
                        className={styles.dropdownIcon}
                      />
                      {uni.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/trending-course" onClick={toggleMobileMenu}>
              Trending Courses
            </Link>
            <Link href="/study-abroad" onClick={toggleMobileMenu}>
              Study Abroad
            </Link>
            <Link href="/exam" onClick={toggleMobileMenu}>
              Entrance Exams
            </Link>
            <Link href="/webstories" onClick={toggleMobileMenu}>
              Web Stories
            </Link>
            <Link href="/free-courses" onClick={toggleMobileMenu}>
              Free Courses
            </Link>
            <div className={styles.mobileLogin} onClick={openLoginModal}>
              Login
            </div>

            {/* MainNavbar Links */}
            <Link href="/online-pg-programmes" onClick={toggleMobileMenu}>
              Explore Courses
            </Link>

            <Link href="/college-finder" onClick={toggleMobileMenu}>
              College Finder
              <span
                className="MainNavbar_glowEffect__ORd8S"
                style={{
                  width: "100px",
                  height: "30px",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  backgroundColor: "var(--mustard-yellow)",
                  position: "relative",
                  zIndex: 0,
                  borderRadius: "5px",
                  fontSize: "12px",
                  padding: "5px",
                  cursor: "pointer",
                  display: "flex", // Added to align text and span properly
                  alignItems: "center", // Vertically center content
                  justifyContent: "center", // Horizontally center content
                  textDecoration: "none", // Remove underline from Link
                }}
              >
                AI Based
              </span>
            </Link>
            <Link href="/freecounseling" onClick={toggleMobileMenu}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                className={styles.flashingIcon}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" />
              </svg>
              Free Counselling
            </Link>
            <Link href="/careers" onClick={toggleMobileMenu}>
              Career
            </Link>
            <Link href="/blog" onClick={toggleMobileMenu}>
              Blogs
            </Link>
            <Link href="/contact" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
            <Link href="/refer-and-earn" onClick={toggleMobileMenu}>
              <div className={styles.referral}>
                <Image
                  alt="referral"
                  loading="lazy"
                  width={24}
                  height={25}
                  src="/assets/img/referal.png"
                />
                Refer and Earn <span className={styles.rupee}>₹ 5000</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* University Modal */}
      {isUniversityModalOpen && (
        <div className={styles.universityModalOverlay}>
          <div className={styles.universityModal}>
            <button
              onClick={closeUniversityModal}
              className={styles.universityModalClose}
            >
              ✕
            </button>
            <h2 className={styles.universityModalTitle}>Popular States</h2>
            <div className={styles.universityModalGrid}>
              {universities.map((uni) => (
                <Link
                  key={uni.name}
                  href={uni.href}
                  className={styles.universityModalItem}
                  onClick={closeUniversityModal}
                >
                  <Image
                    alt={`${uni.name} icon`}
                    src={uni.icon}
                    width={60}
                    height={50}
                    className={styles.universityModalIcon}
                  />
                  <span className={styles.universityModalText}>{uni.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Login Modal */}
      {isLoginModalOpen && (
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
            zIndex: 10000,
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              width: window.innerWidth <= 768 ? "90%" : "900px", // Responsive width
              maxWidth: "95%",
              display: "flex",
              flexDirection: window.innerWidth <= 768 ? "column" : "row", // Stack vertically on mobile
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            {/* Left Side: Image */}
            <div
              style={{
                flex: window.innerWidth <= 768 ? "none" : 1, // Remove flex on mobile
                height: window.innerWidth <= 768 ? "200px" : "500px", // Reduce height on mobile
                backgroundImage: "url('/assets/course/login.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: window.innerWidth <= 768 ? "block" : "block", // Ensure it’s visible
              }}
            ></div>

            {/* Right Side: Form */}
            <div
              style={{
                flex: window.innerWidth <= 768 ? "none" : 1, // Remove flex on mobile
                padding: window.innerWidth <= 768 ? "20px" : "30px", // Reduce padding on mobile
                backgroundColor: "#f9fafb",
                position: "relative",
                width: window.innerWidth <= 768 ? "100%" : "auto", // Full width on mobile
              }}
            >
              <button
                onClick={closeLoginModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: window.innerWidth <= 768 ? "1.2rem" : "1.5rem", // Smaller close button on mobile
                  cursor: "pointer",
                  color: "#0c2d50",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                onMouseLeave={(e) => (e.target.style.color = "#0c2d50")}
              >
                ✕
              </button>
              {/* Login Banner */}

              <div>
                {/* Logo */}
                <img
                  src="/assets/img/Simplidegree logo 3.png"
                  alt="Logo"
                  style={{
                    width: window.innerWidth <= 768 ? "150px" : "200px", // Smaller logo on mobile
                    margin: window.innerWidth <= 768 ? "20px auto" : "20px 0",
                    display: "block",
                  }}
                />
              </div>
              {/* <div
                style={{
                  backgroundColor: "#0c2d50",
                  color: "#fff",
                  textAlign: "center",
                  padding: window.innerWidth <= 768 ? "8px" : "10px", // Smaller padding on mobile
                  borderRadius: "6px",
                  marginBottom: "20px",
                  fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem", // Smaller text on mobile
                }}
              >
                Sign in to get started
              </div> */}
              <h2
                style={{
                  color: "#0c2d50",
                  marginBottom: "20px",
                  fontSize: window.innerWidth <= 768 ? "1.5rem" : "1.8rem", // Smaller heading on mobile
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Login
              </h2>
              <form>
                {/* Login With Email */}
                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#0c2d50",
                      fontWeight: "500",
                      fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem", // Smaller label on mobile
                    }}
                  >
                    Login With Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    style={{
                      width: "100%",
                      padding: window.innerWidth <= 768 ? "10px" : "12px", // Smaller padding on mobile
                      borderRadius: "6px",
                      border: "1px solid #d1d5db",
                      fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem", // Smaller text on mobile
                      backgroundColor: "#fff",
                      transition:
                        "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0c2d50";
                      e.target.style.boxShadow =
                        "0 0 5px rgba(12, 45, 80, 0.3)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db";
                      e.target.style.boxShadow = "none";
                    }}
                    required
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="password"
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#0c2d50",
                      fontWeight: "500",
                      fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem", // Smaller label on mobile
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    style={{
                      width: "100%",
                      padding: window.innerWidth <= 768 ? "10px" : "12px", // Smaller padding on mobile
                      borderRadius: "6px",
                      border: "1px solid #d1d5db",
                      fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem", // Smaller text on mobile
                      backgroundColor: "#fff",
                      transition:
                        "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0c2d50";
                      e.target.style.boxShadow =
                        "0 0 5px rgba(12, 45, 80, 0.3)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db";
                      e.target.style.boxShadow = "none";
                    }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: window.innerWidth <= 768 ? "10px" : "12px", // Smaller padding on mobile
                    background: "linear-gradient(90deg, #0c2d50, #1a4a7a)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: window.innerWidth <= 768 ? "1rem" : "1.1rem", // Smaller text on mobile
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(12, 45, 80, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Login
                </button>
              </form>
              <p
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: "#6b7280",
                  fontSize: window.innerWidth <= 768 ? "0.85rem" : "0.9rem", // Smaller text on mobile
                }}
              >
                New User?{" "}
                <Link
                  href="/signup"
                  style={{
                    color: "#0c2d50",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                  onMouseLeave={(e) => (e.target.style.color = "#0c2d50")}
                >
                  Sign Up
                </Link>
              </p>
              <p
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  color: "#6b7280",
                  fontSize: window.innerWidth <= 768 ? "0.8rem" : "0.85rem", // Smaller text on mobile
                }}
              >
                Your personal information is secure with us
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
