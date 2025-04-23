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
        href: "online-bca",
      },
      {
        title: "Online BCA",
        duration: "3 Years",
        img: "/assets/img/home_7/OnlineBCA.webp",
        href: "online-bba",
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
          <div
            className="BrowseCourse_home_browse_heading_container__EJAFM"
            style={{ paddingTop: "40px" }}
          >
            <div className="BrowseCourse_home_browse_heading_img_container__gqEkj">
              <div>
                <h2
                  className="BrowseCourse_home_browse_heading__10RSs"
                  style={{ color: "#000;" }}
                >
                  EXPLORE OUR COURSES &amp; BE AWESOME
                </h2>
                <div>
                  <p class="BrowseCourse_home_browse_sub_heading__IbpwW">
                    Select the category and compare the university
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="BrowseCourse_home_browse_course_container__PlZ71"
            style={{}}
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
        <div className="Expert_Expert__Container__f2HSI">
          <div className="Expert_Expert__CardsContainer__DDdzT">
            <h2 className="Expert_Expert__text_1__YxPGj">
              CRAFT YOUR BETTER FUTURE WITH OUR EXPERTS
            </h2>
            <p className="Expert_Expert__text_2__6WHgU">
              LR has a team of 250+ experts who are there to assist you and give
              you the right guidance for your successful career ahead.
            </p>
            <div className="Expert_Expert__allCardsContainer__kKnmL">
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="Expert Image - Krishna"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          className="Expert_Expert__image__8wv_Z"
                          src="/assets/img/tutor-new-3.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                                aria-label="Star Rating"
                              >
                                <defs>
                                  <linearGradient id="gradient">
                                    <stop offset="0%" stopColor="#FFC700" />
                                    <stop offset="100%" stopColor="#FF3D00" />
                                  </linearGradient>
                                </defs>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.7</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        {" "}
                        Rekha{" "}
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        3 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="expertImage"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          data-nimg={1}
                          className="Expert_Expert__image__8wv_Z"
                          style={{ color: "transparent" }}
                          src="/assets/img/tutor-new-1.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                              >
                                <linearGradient id="gradient">
                                  <stop offset="0%" stopColor="#FFC700" />
                                  <stop offset="100%" stopColor="#FF3D00" />
                                </linearGradient>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.6</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Vaishali
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        8 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="expertImage"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          data-nimg={1}
                          className="Expert_Expert__image__8wv_Z"
                          style={{ color: "transparent" }}
                          src="/assets/img/tutor-new-2.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                              >
                                <linearGradient id="gradient">
                                  <stop offset="0%" stopColor="#FFC700" />
                                  <stop offset="100%" stopColor="#FF3D00" />
                                </linearGradient>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.5</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Hemant
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        6 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="expertImage"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          data-nimg={1}
                          className="Expert_Expert__image__8wv_Z"
                          style={{ color: "transparent" }}
                          src="/assets/img/tutot-new-4.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                              >
                                <linearGradient id="gradient">
                                  <stop offset="0%" stopColor="#FFC700" />
                                  <stop offset="100%" stopColor="#FF3D00" />
                                </linearGradient>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.5</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Krishna
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        4 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
