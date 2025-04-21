"use client";

import Menu from "../../../components/Header/Menu/Menu";
import Footer from "../../../components/Footer/Footer";
import { useState } from "react";
import Link from "next/link";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/83d9da8bb5d66f96.css";
import "../styles/7620326e339f446b.css";

export default function page() {
  const courseData = {
    "Online PG Programmes": [
      {
        title: "Online MBA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMBA.png",
      },
      {
        title: "Online MCA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMCA.webp",
      },
      {
        title: "Online MCom",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineBCom.webp",
      },
      {
        title: "Online MSc",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMSc.webp",
      },
      {
        title: "Online MA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMA.webp",
      },
      {
        title: "M.Com with ACCA",
        duration: "2 Years",
        img: "/assets/img/courses/OnlineMCom.webp",
      },
      {
        title: "Distance MBA",
        duration: "2 Years",
        img: "/assets/img/courses/DistanceMBA.webp",
      },
      {
        title: "Distance MCA",
        duration: "2 Years",
        img: "/assets/img/courses/DistanceMCA.webp",
      },
      {
        title: "Distance MCom",
        duration: "2 Years",
        img: "/assets/img/courses/DistanceMCom.webp",
      },
      {
        title: "Distance MLIS",
        duration: "1 Year",
        img: "/assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp",
      },
    ],
    "Online UG Programmes": [
      {
        title: "Online BBA",
        duration: "2 Years",
        img: "/assets/img/home_7/OnlineBBA.webp",
      },
      {
        title: "Online BCA",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBCA.webp",
      },
      {
        title: "Online BCom",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBCom.webp",
      },
      {
        title: "Distance BA",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBBA.webp",
      },
      {
        title: "Online BA",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBA.webp",
      },
      {
        title: "Distance BCA",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBCA.webp",
      },
      {
        title: "Distance BBA",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBBA.webp",
      },
      {
        title: "Distance BCom",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBCom.webp",
      },
      {
        title: "Distance BSc",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBSc.webp",
      },
      {
        title: "Distance BLIS",
        duration: "1 Year",
        img: "/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp",
      },
    ],
    "Diploma Courses": [
      {
        title: "PGD Finance & Acc.",
        duration: "1-2 years",
        img: "/assets/img/home_7/PG_Diploma_in_Finance_&_Accounting.webp",
      },
      {
        title: "PGD Data Science",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/PG_Diploma_in_Data_Science.webp",
      },
      {
        title: "Digital Marketing",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/DigitalMarketingCertification.webp",
      },
      {
        title: "PGD Retail Mgmt.",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/PG_Diploma_in_Retail_Management.webp",
      },
      {
        title: "PGD Marketing",
        duration: "1 Year",
        img: "/assets/img/home_7/PG_Diploma_in_Marketing_Management.webp",
      },
      {
        title: "PGD HR Mgmt.",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/PG_Diploma_In_Human_Resource_Management.webp",
      },
      {
        title: "Banking & Finance",
        duration: "1 to 2 years",
        img: "/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp",
      },
      {
        title: "International Trade",
        duration: "12 Months",
        img: "/assets/img/home_7/Diploma_in_International_Trade_Management.webp",
      },
      {
        title: "Cyber Law",
        duration: "1 Year",
        img: "/assets/img/home_7/Diploma_in_Cyber_Law.webp",
      },
      {
        title: "PGD IT",
        duration: "1 Year",
        img: "/assets/img/home_7/PGDiplomainIT.webp",
      },
    ],
    "Executive Programmes": [
      {
        title: "Master of Business Administration",
        duration: "Upto 3 Years",
        img: "/assets/img/home_7/ExecutiveMBA.webp",
      },
      {
        title: "EPGD Business Analytics",
        duration: "15-16 months",
        img: "/assets/img/home_7/ExecutivePGDiplomainBusinessAnalytics.webp",
      },
      {
        title: "Operations and Supply Chain Mgmt.",
        duration: "6 to 12 months",
        img: "/assets/img/home_7/ExecutiveProgrammeinOperationsandSupplyChainManagement.webp",
      },
      {
        title: "EDP Strategic Management",
        duration: "6 - 12 months",
        img: "/assets/img/home_7/ExecutiveDevelopmentProgrammeinStrategicManagement.webp",
      },
      {
        title: "Chief Financial Officer Programme",
        duration: "6 to 12 months",
        img: "/assets/img/courses/OnlineMA.webp",
      },
      {
        title: "Leadership and Management",
        duration: "4 to 12 months",
        img: "/assets/img/courses/OnlineMCom.webp",
      },
      {
        title: "EP in General Management",
        duration: "6 to 12 months",
        img: "/assets/img/courses/DistanceMBA.webp",
      },
      {
        title: "EDP Strategic HR Management",
        duration: "6 to 12 months",
        img: "/assets/img/courses/DistanceMCA.webp",
      },
      {
        title: "EP in Project Management",
        duration: "6 to 12 months",
        img: "/assets/img/courses/DistanceMCom.webp",
      },
      {
        title: "Healthcare Service Management",
        duration: "6 to 12 months",
        img: "/assets/img/courses/ExecutiveProgrammeinHealthcareServiceManagement.webp",
      },
    ],
    "International Programmes": [
      {
        title: "MBA - Golden Gate University",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAGoldenGateUniversity.webp",
      },
      {
        title: "MBA - Liverpool Business School",
        duration: "2 Years",
        img: "/assets/img/home_7/LiverpoolBusinessSchool.webp",
      },
      {
        title: "MBA - Edgewood",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAEdgewood.webp",
      },
      {
        title: "MBA (Global) - Deakin",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAGlobalDeakin.webp",
      },
      {
        title: "MBA - UTICA",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAUTICA.webp",
      },
      {
        title: "MBA (90 ECTS) - IU",
        duration: "2 Years",
        img: "/assets/img/home_7/MBA90ECTSIU.webp",
      },
      {
        title: "MBA - Clarkson",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAClarkson.webp",
      },
      {
        title: "MBA - ISM",
        duration: "2 Years",
        img: "/assets/img/home_7/MBAISM.webp",
      },
      {
        title: "MBA - Sunderland",
        duration: "2 Years",
        img: "/assets/img/home_7/MBASunderland.webp",
      },
      {
        title: "MSBA - Golden Gate",
        duration: "2 Years",
        img: "/assets/img/home_7/MSBAGoldenGate.webp",
      },
    ],
    "Free Courses": [
      {
        title: "Data Analytics",
        duration: "Upto 12 weeks",
        img: "/assets/img/home_7/DataAnalyticsCertification.webp",
      },
      {
        title: "Digital Marketing",
        duration: "Upto 6 months",
        img: "/assets/img/home_7/DigitalMarketingCertification.webp",
      },
      {
        title: "Cyber Security",
        duration: "Upto 3 months",
        img: "/assets/img/home_7/CyberSecurityCertification.webp",
      },
      {
        title: "MS Excel",
        duration: "Upto 7 days",
        img: "/assets/img/home_7/CertificationInMsExcel.webp",
      },
      {
        title: "AI and ML",
        duration: "Upto 12 hrs",
        img: "/assets/img/home_7/CertificationInAIandML.webp",
      },
      {
        title: "Marketing",
        duration: "Upto months",
        img: "/assets/img/home_7/DigitalMarketingCertification.webp",
      },
      {
        title: "Leadership Skills",
        duration: "Upto 4 weeks",
        img: "/assets/img/home_7/CertificationInLeadershipSkills.webp",
      },
      {
        title: "Project Management",
        duration: "Upto 22 hrs",
        img: "/assets/img/home_7/ProjectManagementCertification.webp",
      },
      {
        title: "Supply Chain Mgmt.",
        duration: "Upto 28 hrs",
        img: "/assets/img/home_7/SupplyChainManagementCertification.webp",
      },
      {
        title: "Financial Accounting",
        duration: "3 hrs to 3 months",
        img: "/assets/img/home_7/FinancialAccountingCertification.webp",
      },
    ],
  };

  const categories = [
    "Online PG Programmes",
    "Online UG Programmes",
    "Diploma Courses",
    "Executive Programmes",
    "International Programmes",
    "Free Courses",
  ];
    const openCoursesModal = () => {
      setIsCoursesModalOpen(!isCoursesModalOpen);
      if (!openMenuMobile && window.innerWidth <= 768) {
        setOpenMenuMobile(true);
      }
    };
  
    const closeCoursesModal = () => {
      setIsCoursesModalOpen(false);
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [activeCategory, setActiveCategory] = useState("Online PG Programmes");
  return (
    <>
      <Menu />
      <div>
        <div
          className="BrowseCourse_home_browse_container__tQp9L"
          id="brCourses"
        >
          <div className="BrowseCourse_home_browse_heading_container__EJAFM">
            <div className="BrowseCourse_home_browse_heading_img_container__gqEkj">
              <div>
                <h2 className="BrowseCourse_home_browse_heading__10RSs">
                  EXPLORE OUR COURSES &amp; BE AWESOME
                </h2>
              </div>
              {/* <div>
              <p class="BrowseCourse_home_browse_sub_heading__IbpwW">
                Select the category and compare the university
              </p>
            </div> */}
            </div>
          </div>
          <div />
        </div>

        <div
          className="BrowseCourse_home_browse_course_container__PlZ71"
          style={{ padding: "30px" }}
        >
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
                  color: activeCategory === category ? "white" : "#0c2d50",
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
                  href={`/courses/${course.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
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

      <Footer />
    </>
  );
}
