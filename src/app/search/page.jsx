
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Course data
  const courseData = {
    "Online PG Programmes": [
      {
        title: "Online MBA",

        href: "courses/online-mba",
      },
      {
        title: "Online MCA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMCA.webp",
        href: "courses/online-mca",
      },
      {
        title: "Online MCom",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineBCom.webp",
        href: "courses/online-mcom",
      },
      {
        title: "Online MSc",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMSc.webp",
        href: "courses/online-msc",
      },
      {
        title: "Online MA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMA.webp",
        href: "courses/online-ma",
      },
      {
        title: "M.Com with ACCA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMCom.webp",
        href: "courses/online-acca-mcom",
      },
      {
        title: "Distance MBA",
        duration: "2 Years",
        img: "/assets/img/courses/DistanceMBA.webp",
        href: "courses/online-mba",
      },
      {
        title: "Distance MCA",
        duration: "2 Years",
        img: "/assets/img/courses/DistanceMCA.webp",
        href: "courses/distance-mca",
      },
      {
        title: "Distance MCom",
        duration: "2 Years",
        img: "/assets/img/courses/DistanceMCom.webp",
        href: "courses/distance-mcom",
      },
      {
        title: "Distance MLIS",
        duration: "1 Year",
        img: "/assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp",
        href: "courses/master-of-library-and-information-science",
      },
    ],
    "Online UG Programmes": [
      {
        title: "Online BBA",
        duration: "2 Years",
        img: "/assets/img/home_7/OnlineBBA.webp",
        href: "courses/online-bca",
      },
      {
        title: "Online BCA",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBCA.webp",
        href: "courses/online-bba",
      },
      {
        title: "Online BCom",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBCom.webp",
        href: "courses/online-bcom",
      },
      {
        title: "Distance BA",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBBA.webp",
        href: "courses/distance-ba",
      },
      {
        title: "Online BA",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBA.webp",
        href: "courses/online-ba",
      },
      {
        title: "Distance BCA",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBCA.webp",
        href: "courses/distance-bca",
      },
      {
        title: "Distance BBA",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBBA.webp",
        href: "courses/distance-bba",
      },
      {
        title: "Distance BCom",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBCom.webp",
        href: "courses/distance-bcom",
      },
      {
        title: "Distance BSc",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBSc.webp",
        href: "courses/distance-bsc",
      },
      {
        title: "Distance BLIS",
        duration: "1 Year",
        img: "/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp",
        href: "courses/distance-bachelor-of-library-and-information-science",
      },
    ],
    "Diploma Courses": [
      {
        title: "PGD Finance & Acc",
        duration: "1-2 years",
        img: "/assets/img/home_7/PG_Diploma_in_Finance_&_Accounting.webp",
        href: "courses/pg-diploma-finance-accounting",
      },
      {
        title: "PGD Data Science",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/PG_Diploma_in_Data_Science.webp",
        href: "courses/pg-diploma-data-science",
      },
      {
        title: "Digital Marketing",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/DigitalMarketingCertification.webp",
        href: "courses/professional-diploma-digital-marketing",
      },
      {
        title: "PGD Retail Mgmt.",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/PG_Diploma_in_Retail_Management.webp",
        href: "courses/pg-diploma-retail-management",
      },
      {
        title: "PGD Marketing",
        duration: "1 Year",
        img: "/assets/img/home_7/PG_Diploma_in_Marketing_Management.webp",
        href: "courses/pg-diploma-marketing-management",
      },
      {
        title: "PGD HR Mgmt.",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/PG_Diploma_In_Human_Resource_Management.webp",
        href: "courses/diploma-hr-management",
      },
      {
        title: "Banking & Finance",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp",
        href: "courses/banking-finance-management-diploma",
      },
      {
        title: "International Trade",
        duration: "12 Months",
        img: "/assets/img/home_7/Diploma_in_International_Trade_Management.webp",
        href: "courses/international-trade-management-diploma",
      },
      {
        title: "Cyber Law",
        duration: "1 Year",
        img: "/assets/img/home_7/Diploma_in_Cyber_Law.webp",
        href: "courses/diploma-in-cyber-law",
      },
      {
        title: "PGD IT",
        duration: "1 Year",
        img: "/assets/img/home_7/PGDiplomainIT.webp",
        href: "courses/pg-diploma-in-it",
      },
    ],
    "Executive Programmes": [
      {
        title: "Master of Business Administration",
        duration: "Upto 3 Years",
        img: "/assets/img/home_7/ExecutiveMBA.webp",
        href: "courses/executive-mba",
      },
      {
        title: "EPGD Business Analytics",
        duration: "15-16 months",
        img: "/assets/img/home_7/ExecutivePGDiplomainBusinessAnalytics.webp",
        href: "courses/executive-pg-diploma-in-business-analytics",
      },
      {
        title: "Operations and Supply Chain Mgmt.",
        duration: "6 to 12 months",
        img: "/assets/img/home_7/ExecutiveProgrammeinOperationsandSupplyChainManagement.webp",
        href: "courses/executive-programme-in-operations-and-supply-chain-management",
      },
      {
        title: "EDP Strategic Management",
        duration: "6 - 12 months",
        img: "/assets/img/home_7/ExecutiveDevelopmentProgrammeinStrategicManagement.webp",
        href: "courses/executive-development-programme-in-strategic-management",
      },
      {
        title: "Chief Financial Officer Programme",
        duration: "6 to 12 months",
        img: "/assets/img/courses/OnlineMA.webp",
        href: "courses/chief-financial-officer-programme",
      },
      {
        title: "Leadership and Management",
        duration: "4 to 12 months",
        img: "/assets/img/courses/OnlineMCom.webp",
        href: "courses/executive-programme-in-leadership-and-management",
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
        href: "courses/executive-development-programme-in-strategic-human-resource-management",
      },
      {
        title: "EP in Project Management",
        duration: "6 to 12 months",
        img: "/assets/img/courses/DistanceMCom.webp",
        href: "courses/executive-programme-in-project-management",
      },
      {
        title: "Healthcare Service Management",
        duration: "6 to 12 months",
        img: "/assets/img/courses/ExecutiveProgrammeinHealthcareServiceManagement.webp",
        href: "courses/executive-programme-in-healthcare-service-management",
      },
    ],
    "International Programmes": [
      {
        title: "MBA - Golden Gate University",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAGoldenGateUniversity.webp",
        href: "courses/mba-from-golden-gate-university",
      },
      {
        title: "MBA - Liverpool Business School",
        duration: "2 Years",
        img: "/assets/img/home_7/LiverpoolBusinessSchool.webp",
        href: "courses/mba-by-liverpool-business-school",
      },
      {
        title: "MBA - Edgewood",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAEdgewood.webp",
        href: "courses/mba-from-edgewood-college",
      },
      {
        title: "MBA (Global) - Deakin",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAGlobalDeakin.webp",
        href: "courses/mba-global-from-deakin-business-school",
      },
      {
        title: "MBA - UTICA",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAUTICA.webp",
        href: "courses/mba-from-utica-university",
      },
      {
        title: "MBA (90 ECTS) - IU",
        duration: "2 Years",
        img: "/assets/img/home_7/MBA90ECTSIU.webp",
        href: "courses/mba-90-ects-by-iu-university",
      },
      {
        title: "MBA - Clarkson",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAClarkson.webp",
        href: "courses/mba-from-clarkson-university",
      },
      {
        title: "MBA - ISM",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAISM.webp",
        href: "courses/mba-from-ism-international-school-of-management-germany",
      },
      {
        title: "MBA - Sunderland",
        duration: "2 Years",
        img: "/assets/img/home_7/MBASunderland.webp",
        href: "courses/mba-from-university-of-sunderland-uk",
      },
      {
        title: "MSBA - Golden Gate",
        duration: "2 Years",
        img: "/assets/img/home_7/MSBAGoldenGate.webp",
        href: "courses/ms-in-business-analytics-by-golden-gate-university-usa",
      },
    ],
    "Free Courses": [
      {
        title: "Data Analytics",
        duration: "Upto 12 weeks",
        img: "/assets/img/home_7/DataAnalyticsCertification.webp",
        href: "courses/data-analytics-certification",
      },
      {
        title: "Digital Marketing",
        duration: "Upto 6 months",
        img: "/assets/img/home_7/DigitalMarketingCertification.webp",
        href: "courses/digital-marketing-certification",
      },
      {
        title: "Cyber Security",
        duration: "Upto 3 months",
        img: "/assets/img/home_7/CyberSecurityCertification.webp",
        href: "courses/cyber-security-certification",
      },
      {
        title: "MS Excel",
        duration: "Upto 7 days",
        img: "/assets/img/home_7/CertificationInMsExcel.webp",
        href: "courses/certification-in-ms-excel",
      },
      {
        title: "AI and ML",
        duration: "Upto 12 hrs",
        img: "/assets/img/home_7/CertificationInAIandML.webp",
        href: "courses/certification-in-ai-and-ml",
      },
      {
        title: "Marketing",
        duration: "Upto months",
        img: "/assets/img/home_7/DigitalMarketingCertification.webp",
        href: "courses/certification-in-marketing",
      },
      {
        title: "Leadership Skills",
        duration: "Upto 4 weeks",
        img: "/assets/img/home_7/CertificationInLeadershipSkills.webp",
        href: "courses/certification-in-leadership-skills",
      },
      {
        title: "Project Management",
        duration: "Upto 22 hrs",
        img: "/assets/img/home_7/ProjectManagementCertification.webp",
        href: "courses/project-management-certification",
      },
      {
        title: "Supply Chain Mgmt.",
        duration: "Upto 28 hrs",
        img: "/assets/img/home_7/SupplyChainManagementCertification.webp",
        href: "courses/supply-chain-management-certification",
      },
      {
        title: "Financial Accounting",
        duration: "3 hrs to 3 months",
        img: "/assets/img/home_7/FinancialAccountingCertification.webp",
        href: "courses/financial-accounting-certification",
      },
    ],
    Universities: [
      {
        title: "NMIMS CDOE",

        href: "college/nmims-cdoe",
      },
      {
        title: "Amity University Online",
        href: "college/amity-university-online",
      },
      {
        title: "Dr. D.Y. Patil Vidyapeeth",
        href: "college/dr-dy-patil-vidyapeeth",
      },
      {
        title: "Online Manipal Jaipur",
        href: "college/online-manipal-jaipur",
      },
      {
        title: "Lovely Professional University ODL (LPU)",
        href: "college/lovely-professional-university-odl-lpu",
      },
      {
        title: "Symbiosis Centre for Distance Learning",
        href: "college/symbiosis-centre-for-distance-learning",
      },
      {
        title: "Chandigarh University Online",
        href: "college/chandigarh-university-online",
      },
      {
        title: "Indian Institute of Management, Ahmedabad (IIM Ahmedabad)",
        href: "college/indian-institute-of-management-ahmedabad-iim-ahmedabad",
      },
      {
        title:
          "University of Petroleum and Energy Studies Centre for Continued Education (UPES)",
        href: "college/university-of-petroleum-and-energy-studies-centre-for-continued-education-upes",
      },
      {
        title: "O.P. Jindal Global University",
        href: "college/op-jindal-global-university",
      },
      {
        title: "Chitkara University Centre for Continuing Education",
        href: "college/chitkara-university-centre-for-continuing-education",
      },
      {
        title: "GLA University Online",
        href: "college/gla-university-online",
      },
      {
        title: "Shoolini University of Biotechnology and Management Sciences",
        href: "college/shoolini-university-of-biotechnology-and-management-sciences",
      },
      {
        title: "School of Distance Education, Andhra University",
        href: "college/school-of-distance-education-andhra-university",
      },
      {
        title: "Delhi Degree College",
        href: "college/delhi-degree-college",
      },
      {
        title: "Indian Institute of Finance",
        href: "college/indian-institute-of-finance",
      },
    ],
  };

  // Flatten courseData for search
  const allCourses = Object.entries(courseData).flatMap(([category, courses]) =>
    courses.map((course) => ({
      ...course,
      category,
    }))
  );

  // Filter data based on search query
  const filteredData = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e6f3ff, #f3f4f6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <div
        className="Hero_newheroContainer__lAPRu"
        style={{
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
            width: "100%",
          }}
        >
          <button
            onClick={() => router.back()}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1e40af",
              fontSize: "16px",
              fontWeight: "500",
              padding: "8px 12px",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1e3a8a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1e40af")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <h4
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1f2937",
              textAlign: "center",
              flex: 1,
            }}
          >
            Search Colleges & Courses
          </h4>
          <div style={{ width: "20px" }} /> {/* Spacer */}
        </div>

        {/* Search Input */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for colleges and courses..."
            style={{
              width: "100%",
              padding: "14px 14px 14px 40px",
              fontSize: "16px",
              color: "#374151",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              outline: "none",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#3b82f6";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.3)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#d1d5db";
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              width: "20px",
              height: "20px",
              color: "#9ca3af",
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Search Results */}
        <div
          style={{
            width: "100%",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {filteredData.length > 0 ? (
            <ul
              style={{
                display: "grid",
                gap: "16px",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              {filteredData.map((course, index) => (
                <li
                  key={index}
                  style={{
                    padding: "16px",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <a
                    href={`/${course.href}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                  
                      <div>
                        <strong
                          style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#1f2937",
                            display: "block",
                            marginBottom: "4px",
                          }}
                        >
                          {course.title}
                        </strong>
                     
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p
              style={{
                fontSize: "16px",
                color: "#6b7280",
                textAlign: "center",
                marginTop: "24px",
              }}
            >
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;