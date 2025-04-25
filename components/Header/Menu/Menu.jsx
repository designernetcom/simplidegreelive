"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import { Work_Sans } from "next/font/google";
import EnquiryModel from "../../EnquiryModel";
import "./Menu2.module.css";

// Shared data for courses and universities
const universities = [
  {
    name: "Maharashtra",
    href: "/colleges/Maharashtra",
    icon: "/assets/img/icon/maharastra.webp",
  },
  {
    name: "New Delhi",
    href: "/colleges/New-Delhi",
    icon: "/assets/img/icon/Delhi.webp",
  },
  {
    name: "Karnataka",
    href: "/colleges/Karnataka",
    icon: "/assets/img/icon/Bengaluru.webp",
  },
  {
    name: "Telangana",
    href: "/colleges/Telangana",
    icon: "/assets/img/icon/Hyderabad.webp",
  },
  {
    name: "Gujarat",
    href: "/colleges/Gujarat",
    icon: "/assets/img/icon/Ahmedabad.webp",
  },
  {
    name: "Punjab",
    href: "/colleges/Punjab",
    icon: "/assets/img/icon/punjab.webp",
  },
  // {
  //   name: 'Uttar Pradesh',
  //   href: '/colleges/Uttar-Pradesh',
  //   icon: '/assets/img/icon/up.webp',
  // },
  {
    name: "Rajasthan",
    href: "/colleges/Rajasthan",
    icon: "/assets/img/icon/rajasthan.webp",
  },
  {
    name: "Haryana",
    href: "/colleges/Haryana",
    icon: "/assets/img/icon/Chandigarh.webp",
  },
  {
    name: "Tamil Nadu",
    href: "/colleges/Tamil-Nadu",
    icon: "/assets/img/icon/tamilnadu.webp",
  },
];

 const courseData = {
   "Online PG Programmes": [
     {
       title: "Online MBA",
       duration: "2 Years",
       img: "/assets/img/courses/OnlineMBA.png",
       href: "online-mba",
     },
     {
       title: "Online MCA",
       duration: "2 Years",
       img: "/assets/img/courses/OnlineMCA.webp",
       href: "online-mca",
     },
     {
       title: "Online MCom",
       duration: "2 Years",
       img: "/assets/img/courses/OnlineBCom.webp",
       href: "online-mcom",
     },
     {
       title: "Online MSc",
       duration: "2 Years",
       img: "/assets/img/courses/OnlineMSc.webp",
       href: "online-msc",
     },
     {
       title: "Online MA",
       duration: "2 Years",
       img: "/assets/img/courses/OnlineMA.webp",
       href: "online-ma",
     },
     {
       title: "M.Com with ACCA",
       duration: "2 Years",
       img: "/assets/img/courses/OnlineMCom.webp",
       href: "online-acca-mcom",
     },
     {
       title: "Distance MBA",
       duration: "2 Years",
       img: "/assets/img/courses/DistanceMBA.webp",
       href: "online-mba",
     },
     {
       title: "Distance MCA",
       duration: "2 Years",
       img: "/assets/img/courses/DistanceMCA.webp",
       href: "distance-mca",
     },
     {
       title: "Distance MCom",
       duration: "2 Years",
       img: "/assets/img/courses/DistanceMCom.webp",
       href: "distance-mcom",
     },
     {
       title: "Distance MLIS",
       duration: "1 Year",
       img: "/assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp",
       href: "master-of-library-and-information-science",
     },
   ],
   "Online UG Programmes": [
     {
       title: "Online BBA",
       duration: "2 Years",
       img: "/assets/img/home_7/OnlineBBA.webp",
       href: "online-bba",
     },
     {
       title: "Online BCA",
       duration: "3 Years",
       img: "/assets/img/home_7/OnlineBCA.webp",
       href: "online-bca",
     },
     {
       title: "Online BCom",
       duration: "3 Years",
       img: "/assets/img/home_7/OnlineBCom.webp",
       href: "online-bcom",
     },
     {
       title: "Distance BA",
       duration: "3 Years",
       img: "/assets/img/home_7/DistanceBBA.webp",
       href: "distance-ba",
     },
     {
       title: "Online BA",
       duration: "3 Years",
       img: "/assets/img/home_7/OnlineBA.webp",
       href: "online-ba",
     },
     {
       title: "Distance BCA",
       duration: "3 Years",
       img: "/assets/img/home_7/DistanceBCA.webp",
       href: "distance-bca",
     },
     {
       title: "Distance BBA",
       duration: "3 Years",
       img: "/assets/img/home_7/DistanceBBA.webp",
       href: "distance-bba",
     },
     {
       title: "Distance BCom",
       duration: "3 Years",
       img: "/assets/img/home_7/DistanceBCom.webp",
       href: "distance-bcom",
     },
     {
       title: "Distance BSc",
       duration: "3 Years",
       img: "/assets/img/home_7/DistanceBSc.webp",
       href: "distance-bsc",
     },
     {
       title: "Distance BLIS",
       duration: "1 Year",
       img: "/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp",
       href: "distance-bachelor-of-library-and-information-science",
     },
   ],
   "Diploma Courses": [
     {
       title: "PGD Finance & Acc",
       duration: "1-2 years",
       img: "/assets/img/home_7/PG_Diploma_in_Finance_&_Accounting.webp",
       href: "pg-diploma-finance-accounting",
     },
     {
       title: "PGD Data Science",
       duration: "1 to 2 years",
       img: "/assets/img/home_7/PG_Diploma_in_Data_Science.webp",
       href: "pg-diploma-data-science",
     },
     {
       title: "Digital Marketing",
       duration: "1 to 2 years",
       img: "/assets/img/home_7/DigitalMarketingCertification.webp",
       href: "professional-diploma-digital-marketing",
     },
     {
       title: "PGD Retail Mgmt.",
       duration: "1 to 2 years",
       img: "/assets/img/home_7/PG_Diploma_in_Retail_Management.webp",
       href: "pg-diploma-retail-management",
     },
     {
       title: "PGD Marketing",
       duration: "1 Year",
       img: "/assets/img/home_7/PG_Diploma_in_Marketing_Management.webp",
       href: "pg-diploma-marketing-management",
     },
     {
       title: "PGD HR Mgmt.",
       duration: "1 to 2 years",
       img: "/assets/img/home_7/PG_Diploma_In_Human_Resource_Management.webp",
       href: "diploma-hr-management",
     },
     {
       title: "Banking & Finance",
       duration: "1 to 2 years",
       img: "/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp",
       href: "banking-finance-management-diploma",
     },
     {
       title: "International Trade",
       duration: "12 Months",
       img: "/assets/img/home_7/Diploma_in_International_Trade_Management.webp",
       href: "international-trade-management-diploma",
     },
     {
       title: "Cyber Law",
       duration: "1 Year",
       img: "/assets/img/home_7/Diploma_in_Cyber_Law.webp",
       href: "diploma-in-cyber-law",
     },
     {
       title: "PGD IT",
       duration: "1 Year",
       img: "/assets/img/home_7/PGDiplomainIT.webp",
       href: "pg-diploma-in-it",
     },
   ],
   "Executive Programmes": [
     {
       title: "Master of Business Administration",
       duration: "Upto 3 Years",
       img: "/assets/img/home_7/ExecutiveMBA.webp",
       href: "executive-mba",
     },
     {
       title: "EPGD Business Analytics",
       duration: "15-16 months",
       img: "/assets/img/home_7/ExecutivePGDiplomainBusinessAnalytics.webp",
       href: "executive-pg-diploma-in-business-analytics",
     },
     {
       title: "Operations and Supply Chain Mgmt.",
       duration: "6 to 12 months",
       img: "/assets/img/home_7/ExecutiveProgrammeinOperationsandSupplyChainManagement.webp",
       href: "executive-programme-in-operations-and-supply-chain-management",
     },
     {
       title: "EDP Strategic Management",
       duration: "6 - 12 months",
       img: "/assets/img/home_7/ExecutiveDevelopmentProgrammeinStrategicManagement.webp",
       href: "executive-development-programme-in-strategic-management",
     },
     {
       title: "Chief Financial Officer Programme",
       duration: "6 to 12 months",
       img: "/assets/img/courses/OnlineMA.webp",
       href: "chief-financial-officer-programme",
     },
     {
       title: "Leadership and Management",
       duration: "4 to 12 months",
       img: "/assets/img/courses/OnlineMCom.webp",
       href: "executive-programme-in-leadership-and-management",
     },
     {
       title: "EP in General Management",
       duration: "6 to 12 months",
       img: "/assets/img/courses/DistanceMBA.webp",
       href: "executive-programme-in-general-management",
     },
     {
       title: "EDP Strategic HR Management",
       duration: "6 to 12 months",
       img: "/assets/img/courses/DistanceMCA.webp",
       href: "executive-development-programme-in-strategic-human-resource-management",
     },
     {
       title: "EP in Project Management",
       duration: "6 to 12 months",
       img: "/assets/img/courses/DistanceMCom.webp",
       href: "executive-programme-in-project-management",
     },
     {
       title: "Healthcare Service Management",
       duration: "6 to 12 months",
       img: "/assets/img/courses/ExecutiveProgrammeinHealthcareServiceManagement.webp",
       href: "executive-programme-in-healthcare-service-management",
     },
   ],
   "International Programmes": [
     {
       title: "MBA - Golden Gate University",
       duration: "2 Years",
       img: "/assets/img/home_7/MBAGoldenGateUniversity.webp",
       href: "mba-from-golden-gate-university",
     },
     {
       title: "MBA - Liverpool Business School",
       duration: "2 Years",
       img: "/assets/img/home_7/LiverpoolBusinessSchool.webp",
       href: "mba-by-liverpool-business-school",
     },
     {
       title: "MBA - Edgewood",
       duration: "2 Years",
       img: "/assets/img/home_7/MBAEdgewood.webp",
       href: "mba-from-edgewood-college",
     },
     {
       title: "MBA (Global) - Deakin",
       duration: "2 Years",
       img: "/assets/img/home_7/MBAGlobalDeakin.webp",
       href: "mba-global-from-deakin-business-school",
     },
     {
       title: "MBA - UTICA",
       duration: "2 Years",
       img: "/assets/img/home_7/MBAUTICA.webp",
       href: "mba-from-utica-university",
     },
     {
       title: "MBA (90 ECTS) - IU",
       duration: "2 Years",
       img: "/assets/img/home_7/MBA90ECTSIU.webp",
       href: "mba-90-ects-by-iu-university",
     },
     {
       title: "MBA - Clarkson",
       duration: "2 Years",
       img: "/assets/img/home_7/MBAClarkson.webp",
       href: "mba-from-clarkson-university",
     },
     {
       title: "MBA - ISM",
       duration: "2 Years",
       img: "/assets/img/home_7/MBAISM.webp",
       href: "mba-from-ism-international-school-of-management-germany",
     },
     {
       title: "MBA - Sunderland",
       duration: "2 Years",
       img: "/assets/img/home_7/MBASunderland.webp",
       href: "mba-from-university-of-sunderland-uk",
     },
     {
       title: "MSBA - Golden Gate",
       duration: "2 Years",
       img: "/assets/img/home_7/MSBAGoldenGate.webp",
       href: "ms-in-business-analytics-by-golden-gate-university-usa",
     },
   ],
   "Free Courses": [
     {
       title: "Data Analytics",
       duration: "Upto 12 weeks",
       img: "/assets/img/home_7/DataAnalyticsCertification.webp",
       href: "data-analytics-certification",
     },
     {
       title: "Digital Marketing",
       duration: "Upto 6 months",
       img: "/assets/img/home_7/DigitalMarketingCertification.webp",
       href: "digital-marketing-certification",
     },
     {
       title: "Cyber Security",
       duration: "Upto 3 months",
       img: "/assets/img/home_7/CyberSecurityCertification.webp",
       href: "cyber-security-certification",
     },
     {
       title: "MS Excel",
       duration: "Upto 7 days",
       img: "/assets/img/home_7/CertificationInMsExcel.webp",
       href: "certification-in-ms-excel",
     },
     {
       title: "AI and ML",
       duration: "Upto 12 hrs",
       img: "/assets/img/home_7/CertificationInAIandML.webp",
       href: "certification-in-ai-and-ml",
     },
     {
       title: "Marketing",
       duration: "Upto months",
       img: "/assets/img/home_7/DigitalMarketingCertification.webp",
       href: "certification-in-marketing",
     },
     {
       title: "Leadership Skills",
       duration: "Upto 4 weeks",
       img: "/assets/img/home_7/CertificationInLeadershipSkills.webp",
       href: "certification-in-leadership-skills",
     },
     {
       title: "Project Management",
       duration: "Upto 22 hrs",
       img: "/assets/img/home_7/ProjectManagementCertification.webp",
       href: "project-management-certification",
     },
     {
       title: "Supply Chain Mgmt.",
       duration: "Upto 28 hrs",
       img: "/assets/img/home_7/SupplyChainManagementCertification.webp",
       href: "supply-chain-management-certification",
     },
     {
       title: "Financial Accounting",
       duration: "3 hrs to 3 months",
       img: "/assets/img/home_7/FinancialAccountingCertification.webp",
       href: "financial-accounting-certification",
     },
   ],
 };

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const categories = [
  "Online PG Programmes",
  "Online UG Programmes",
  "Diploma Courses",
  "Executive Programmes",
  "International Programmes",
  "Free Courses",
];

const Menu = () => {
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [isUniversityModalOpen, setIsUniversityModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const [isStatesModalOpen, setIsStatesModalOpen] = useState(false);
  const [isUniversitySidebarOpen, setIsUniversitySidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Online PG Programmes");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Initialize as false

  // Handle window-dependent initialization and resize
  useEffect(() => {
    // Set initial isMobile state
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setOpenMenuMobile(!openMenuMobile);
    if (isCoursesModalOpen || isStatesModalOpen || isUniversitySidebarOpen) {
      setIsCoursesModalOpen(false);
      setIsStatesModalOpen(false);
      setIsUniversitySidebarOpen(false);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

const openUniversityModal = () => {
  if (window.innerWidth > 768) {
    console.log("Toggling Top Universities Modal for Desktop");
    setIsUniversityModalOpen((prev) => !prev);
  } else {
    console.log("Toggling Top Universities Sidebar for Mobile");
    setIsUniversitySidebarOpen((prev) => !prev);
  }
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

  const openCoursesModal = () => {
    setIsCoursesModalOpen(!isCoursesModalOpen);
    if (!openMenuMobile && isMobile) {
      setOpenMenuMobile(true);
    }
  };

  const closeCoursesModal = () => {
    setIsCoursesModalOpen(false);
  };

  const openStatesModal = () => {
    setIsStatesModalOpen(true);
  };

  const closeStatesModal = () => {
    setIsStatesModalOpen(false);
  };

  return (
    <>
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
                {
                  href: "/top-university",
                  text: "Top Universities & Colleges",
                },
                { href: "/trending-course", text: "Trending Courses" },
                { href: "/study-abroad", text: "Study Abroad" },
                { href: "/exam", text: "Entrance Exams" },
                { href: "/webstories", text: "Web Stories" },
              ].map((item) => (
                <div
                  key={item.href}
                  className="TopNavbar_topNavBar__link__Y5UGY"
                >
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
                  style={{ color: "#0c2d50", cursor: "pointer" }}
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
                <div
                  onClick={openCoursesModal}
                  className="Modal_buttonXl__4JKO_"
                  aria-expanded={isCoursesModalOpen}
                >
                  Explore Courses
                </div>
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
                <div className="MainNavbar_mainNavBar__buttons__fxxQT">
                  <div onClick={openUniversityModal}>
                    <Link href="#" className="MainNavbar_link__Je6tm">
                      Top Universities
                    </Link>
                  </div>
                </div>
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
                src="/assets/img/Simplidegree_logo_3.png"
                width={150}
                height={30}
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
              <Link href="/refer-and-earn" onClick={toggleMobileMenu}>
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
                    style={{ color: "#fff" }}
                  >
                    <path d="M152.27,37.93a8,8,0,0,1,9.80-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.80A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.80c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.80c-5.12-19.16-18.50-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.40,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.20-.25.39-.50.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.40,64.60,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
                  </svg>
                  <Link href="tel:+918806099993" style={{ color: "#fff" }}>
                    8806099993
                  </Link>
                </div>
              </Link>
              <div
                onClick={openCoursesModal}
                style={{
                  color: "#fff",
                  cursor: "pointer",
                 
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: `${workSans.style.fontFamily}, sans-serif`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  width: "fit-content",
                  padding: "10px 2px 10px 10px",
                  borderRadius: "8px",
                }}
                aria-expanded={isCoursesModalOpen}
              >
                <span>
                  Explore Courses{" "}
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      // marginTop: "1px",
                      // paddingLeft: "3px",
                    }}
                  >
                    {isCoursesModalOpen ? (
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M4 10l4-4 4 4H4z" />
                      </svg>
                    ) : (
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M4 6l4 4 4-4H4z" />
                      </svg>
                    )}
                  </span>
                </span>
              </div>
              {isCoursesModalOpen && window.innerWidth <= 768 && (
                <div
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    color: "#0c2d50",
                  }}
                >
                  <div
                    className="BrowseCourse_home_browse_container__tQp9L"
                    id="brCourses"
                  >
                    <div className="BrowseCourse_home_browse_course_container__PlZ71">
                      <div className="BrowseCourse_home_browse_course_list_main_box__2D0BM">
                        {categories.map((category, index) => (
                          <div
                            key={index}
                            className={`BrowseCourse_home_course_list_single_box__d92j6 ${
                              activeCategory === category
                                ? "BrowseCourse_bgColor__zDC4o"
                                : ""
                            }`}
                            style={{
                              color:
                                activeCategory === category
                                  ? "white"
                                  : "#0c2d50",
                            }}
                            onClick={() => setActiveCategory(category)}
                          >
                            <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                              <span className="cursor-pointer">{category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="BrowseCourse_course_grid_box__h2DdU">
                        {courseData[activeCategory]?.map((course, index) => (
                          <div
                            key={index}
                            className="BrowseCourse_browse_course_card__6O_U1"
                          >
                            <Link
                              href={`/courses/${course.href}`}
                              passHref
                              onClick={() => {
                                closeCoursesModal();
                                toggleMobileMenu();
                              }}
                            >
                              <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                                <div>
                                  <img
                                    alt={course.title}
                                    loading="lazy"
                                    width={120}
                                    height={120}
                                    decoding="async"
                                    className="BrowseCourse_browse_course_card_img__UCBw8"
                                    style={{ color: "transparent" }}
                                    src={course.img}
                                  />
                                </div>
                                <div>
                                  <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                                    {course.title}
                                  </div>
                                  <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                                    Duration: {course.duration}
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <div className="BrowseCourse_browse_course_card_view__wBC_X">
                              Read More
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                onClick={openUniversityModal}
                style={{
                  color: "#fff",
                  cursor: "pointer",

                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: `${workSans.style.fontFamily}, sans-serif`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  width: "fit-content",
                  padding: "10px 2px 10px 10px",
                  borderRadius: "5px",
                  pointerEvents: "auto",
                }}
                aria-expanded={isUniversitySidebarOpen}
              >
                <span>
                  Top Universities{" "}
                  <span style={{ fontSize: "25px", marginTop: "1px" }}>
                    {isUniversitySidebarOpen ? (
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M4 10l4-4 4 4H4z" />
                      </svg>
                    ) : (
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M4 6l4 4 4-4H4z" />
                      </svg>
                    )}
                  </span>
                </span>
              </div>
              {isUniversitySidebarOpen && isMobile && (
                <div
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    padding: "2px",
                    margin: "2px 0",
                    maxHeight: "100vh",
                    overflowY: "auto",
                    boxShadow: "0 2px 0px rgba(44, 35, 35, 0.2)",
                    color: "#0c2d50",
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      marginBottom: "15px",
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                  >
                    Popular States
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(90px, 1fr))",
                      gap: "15px",
                    }}
                  >
                    {universities.map((university) => (
                      <Link
                        key={university.name}
                        href={university.href}
                        className={styles.universityModalItem}
                        onClick={toggleMobileMenu}
                        style={{
                          background: "#fff",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textDecoration: "none",
                          color: "#0c2d50",
                          padding: "10px",
                          borderRadius: "8px",
                          transition: "background-color 0.3s ease",
                        }}
                        onTouchStart={(e) =>
                          (e.currentTarget.style.backgroundColor = "#f9fafb")
                        }
                        onTouchEnd={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "transparent")
                        }
                      >
                        <Image
                          alt={`${university.name} icon`}
                          src={university.icon}
                          width={80}
                          height={60}
                          style={{ marginBottom: "1px" }}
                        />
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            textAlign: "center",
                          }}
                        >
                          {university.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <Link
                href="/freecounseling"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
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
              <Link
                href="/college-finder"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  AI Based
                </span>
              </Link>

              <Link
                href="/blog"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
                Contact Us
              </Link>
              <hr />
              <Link
                href="/trending-course"
                onClick={toggleMobileMenu}
                style={{
                  color: "#fff",
                  fontFamily: `${workSans.style.fontFamily}, sans-serif`,
                }}
              >
                Trending Courses
              </Link>
              <Link
                href="/study-abroad"
                onClick={toggleMobileMenu}
                style={{
                  color: "#fff",
                }}
              >
                Study Abroad
              </Link>
              <Link
                href="/exam"
                onClick={toggleMobileMenu}
                style={{
                  color: "#fff",
                  fontFamily: `${workSans.style.fontFamily}, sans-serif`,
                }}
              >
                Entrance Exams
              </Link>
              <Link
                href="/webstories"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
                Web Stories
              </Link>
              <Link
                href="/free-courses"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
                Free Courses
              </Link>
              <div
                className={styles.mobileLogin}
                onClick={openLoginModal}
                style={{ color: "#fff" }}
              >
                Login
              </div>

              {/* <Link
                href="/careers"
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              >
                Career
              </Link> */}

              <Link href="/refer-and-earn" onClick={toggleMobileMenu}>
                <div className={styles.referral} style={{ color: "#fff" }}>
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
              {/* <div>
                <button
                  className="enquirynow_enquirynow_btn__mRuEZ"
                  onClick={handleOpenModal}
                  style={{ transformOrigin: "bottom right" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" />
                  </svg>
                  Enquire Now
                </button>
                <EnquiryModel
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div> */}
            </div>
          </div>
        </div>

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
                width: window.innerWidth <= 768 ? "90%" : "900px",
                maxWidth: "95%",
                display: "flex",
                flexDirection: window.innerWidth <= 768 ? "column" : "row",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  flex: window.innerWidth <= 768 ? "none" : 1,
                  height: window.innerWidth <= 768 ? "200px" : "500px",
                  backgroundImage: "url('/assets/course/login.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  display: window.innerWidth <= 768 ? "block" : "block",
                }}
              ></div>
              <div
                style={{
                  flex: window.innerWidth <= 768 ? "none" : 1,
                  padding: window.innerWidth <= 768 ? "20px" : "30px",
                  backgroundColor: "#f9fafb",
                  position: "relative",
                  width: window.innerWidth <= 768 ? "100%" : "auto",
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
                    fontSize: window.innerWidth <= 768 ? "1.2rem" : "1.5rem",
                    cursor: "pointer",
                    color: "#0c2d50",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                  onMouseLeave={(e) => (e.target.style.color = "#0c2d50")}
                >
                  ✕
                </button>
                <div>
                  <img
                    src="/assets/img/Simplidegree logo 3.png"
                    alt="Logo"
                    style={{
                      width: window.innerWidth <= 768 ? "150px" : "200px",
                      margin: window.innerWidth <= 768 ? "20px auto" : "20px 0",
                      display: "block",
                    }}
                  />
                </div>
                <h2
                  style={{
                    color: "#0c2d50",
                    marginBottom: "20px",
                    fontSize: window.innerWidth <= 768 ? "1.5rem" : "1.8rem",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Login
                </h2>
                <form>
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#0c2d50",
                        fontWeight: "500",
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
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
                        padding: window.innerWidth <= 768 ? "10px" : "12px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
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
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
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
                        padding: window.innerWidth <= 768 ? "10px" : "12px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
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
                      padding: window.innerWidth <= 768 ? "10px" : "12px",
                      background: "linear-gradient(90deg, #0c2d50, #1a4a7a)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: window.innerWidth <= 768 ? "1rem" : "1.1rem",
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
                    fontSize: window.innerWidth <= 768 ? "0.85rem" : "0.9rem",
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
                    fontSize: window.innerWidth <= 768 ? "0.8rem" : "0.85rem",
                  }}
                >
                  Your personal information is secure with us
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Courses Modal (Desktop Only) */}
        {isCoursesModalOpen && window.innerWidth > 768 && (
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
              backdropFilter: "blur(5px)",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "12px",
                width: window.innerWidth <= 768 ? "100%" : "1700px",
                maxWidth: "100%",
                padding: window.innerWidth <= 768 ? "20px" : "30px",
                position: "relative",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                margin: "20px 0",
              }}
            >
              <button
                onClick={closeCoursesModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: window.innerWidth <= 768 ? "1.2rem" : "1.5rem",
                  cursor: "pointer",
                  color: "#fff",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                ✕
              </button>
              <div
                className="BrowseCourse_home_browse_container__tQp9L"
                id="brCourses"
              >
                <div className="BrowseCourse_home_browse_heading_container__EJAFM">
                  <div className="BrowseCourse_home_browse_heading_img_container__gqEkj">
                    <h2
                      className="BrowseCourse_home_browse_heading__10RSs"
                      style={{ color: "#fff" }}
                    >
                      EXPLORE OUR COURSES & BE AWESOME
                    </h2>
                  </div>
                </div>
                <div className="BrowseCourse_home_browse_course_container__PlZ71">
                  <div className="BrowseCourse_home_browse_course_list_main_box__2D0BM">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className={`BrowseCourse_home_course_list_single_box__d92j6 ${
                          activeCategory === category
                            ? "BrowseCourse_bgColor__zDC4o"
                            : ""
                        }`}
                        style={{
                          color:
                            activeCategory === category ? "white" : "#0c2d50",
                        }}
                        onClick={() => setActiveCategory(category)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" && setActiveCategory(category)
                        }
                      >
                        <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                          <span className="cursor-pointer">{category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="BrowseCourse_course_grid_box__h2DdU">
                    {courseData[activeCategory]?.map((course, index) => (
                      <div
                        key={index}
                        className="BrowseCourse_browse_course_card__6O_U1"
                      >
                        <Link
                          href={`/courses/${course.href}`}
                          passHref
                          onClick={closeCoursesModal}
                        >
                          <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                            <div>
                              <img
                                alt={course.title}
                                loading="lazy"
                                width={200}
                                height={180}
                                decoding="async"
                                className="BrowseCourse_browse_course_card_img__UCBw8"
                                style={{ color: "transparent" }}
                                src={course.img}
                              />
                            </div>
                            <div>
                              <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                                {course.title}
                              </div>
                              <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                                Duration: {course.duration}
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="BrowseCourse_browse_course_card_view__wBC_X">
                          Read More
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* University Modal (Desktop Only) */}
        {isUniversityModalOpen && window.innerWidth > 768 && (
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
              backdropFilter: "blur(5px)",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "12px",
                width: window.innerWidth <= 768 ? "90%" : "1700px",
                maxWidth: "95%",
                padding: window.innerWidth <= 768 ? "20px" : "30px",
                position: "relative",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                margin: "20px 0",
              }}
            >
              <button
                onClick={closeUniversityModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: window.innerWidth <= 768 ? "1.2rem" : "1.5rem",
                  cursor: "pointer",
                  color: "#fff",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
              >
                ✕
              </button>
              <h2
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: window.innerWidth <= 768 ? "1.5rem" : "1.8rem",
                  fontWeight: "600",
                }}
              >
                Popular States
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth <= 768
                      ? "repeat(auto-fit, minmax(220px, 1fr))"
                      : "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "20px",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {universities.map((university) => (
                  <Link
                    key={university.name}
                    href={university.href}
                    className={styles.universityModalItem}
                    onClick={closeUniversityModal}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#0c2d50",
                      padding: "10px",
                      borderRadius: "8px",
                      transition: "background-color 0.3s ease",
                      background: "#fff",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#fff")
                    }
                  >
                    <Image
                      alt={`${university.name} icon`}
                      src={university.icon}
                      width={60}
                      height={50}
                      style={{ marginBottom: "10px" }}
                    />
                    <span
                      style={{
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      {university.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* States Modal (Desktop) */}
        {isStatesModalOpen && window.innerWidth > 768 && (
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
              backdropFilter: "blur(5px)",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "12px",
                width: window.innerWidth <= 768 ? "100%" : "900px",
                maxWidth: "95%",
                padding: window.innerWidth <= 768 ? "20px" : "30px",
                position: "relative",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                margin: "20px 0",
              }}
            >
              <button
                onClick={closeStatesModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: window.innerWidth <= 768 ? "1.2rem" : "1.5rem",
                  cursor: "pointer",
                  color: "#0c2d50",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                onMouseLeave={(e) => (e.target.style.color = "#0c2d50")}
              >
                ✕
              </button>
              <h2
                style={{
                  color: "#0c2d50",
                  marginBottom: "20px",
                  fontSize: window.innerWidth <= 768 ? "1.5rem" : "1.8rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Popular States
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth <= 768
                      ? "repeat(auto-fit, minmax(120px, 1fr))"
                      : "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "20px",
                  padding: "10px",
                }}
              >
                {universities.map((state) => (
                  <Link
                    key={state.name}
                    href={state.href}
                    className={styles.universityModalItem}
                    onClick={closeStatesModal}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#0c2d50",
                      padding: "10px",
                      borderRadius: "8px",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fafb")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <Image
                      alt={`${state.name} icon`}
                      src={state.icon}
                      width={60}
                      height={50}
                      style={{ marginBottom: "10px" }}
                    />
                    <span
                      style={{
                        fontSize: window.innerWidth <= 768 ? "0.9rem" : "1rem",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      {state.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* States Modal (Mobile) */}
        {isStatesModalOpen && window.innerWidth <= 768 && (
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
              backdropFilter: "blur(5px)",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                width: "90%",
                maxWidth: "95%",
                padding: "20px",
                position: "relative",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <button
                onClick={closeStatesModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#0c2d50",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1a4a7a")}
                onMouseLeave={(e) => (e.target.style.color = "#0c2d50")}
              >
                ✕
              </button>
              <h2
                style={{
                  color: "#0c2d50",
                  marginBottom: "20px",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Popular States
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: "15px",
                  padding: "10px",
                }}
              >
                {universities.map((state) => (
                  <Link
                    key={state.name}
                    href={state.href}
                    className={styles.universityModalItem}
                    onClick={() => {
                      closeStatesModal();
                      toggleMobileMenu();
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#0c2d50",
                      padding: "10px",
                      borderRadius: "8px",
                      transition: "background-color 0.3s ease",
                    }}
                    onTouchStart={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9fafb")
                    }
                    onTouchEnd={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <Image
                      alt={`${state.name} icon`}
                      src={state.icon}
                      width={50}
                      height={40}
                      style={{ marginBottom: "8px" }}
                    />
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      {state.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Link
        className="float"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=918806099993&text=I%27m%20looking%20for"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          style={{ color: "white" }}
          className="my_float"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </Link>
      <div>
        <button className="contact-btn1" onClick={handleOpenModal}>
          <div className="contact-bg">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" />
            </svg>
            Enquire Now
          </div>
        </button>

        <EnquiryModel showModal={showModal} setShowModal={setShowModal} />
      </div>
      {/* <div>
        <button
          className="enquirynow_enquirynow_btn__mRuEZ contact-btn1"
          onClick={handleOpenModal}
          style={{ transformOrigin: "bottom right" }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" />
          </svg>
          Enquire Now
        </button>
        <EnquiryModel showModal={showModal} setShowModal={setShowModal} />
      </div> */}
    </>
  );
};

export default Menu;
