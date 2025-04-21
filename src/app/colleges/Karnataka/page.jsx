"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "../../globals.css";
import "../../styles/8b2861424f796947.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/7620326e339f446b.css";
import "../../styles/47e473.css";
import Menu from "../../../../components/Header/Menu/Menu";
import styles from "./Filter.module.css";
import Footer from "../../../../components/Footer/Footer";

const ComparisonModal = dynamic(() => import("../../ComparisonModal"), {
  ssr: false,
});
const truncateName = (name) => {
  return name.length > 30 ? `${name.substring(0, 20)}...` : name;
};
export default function Page() {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudyModes, setSelectedStudyModes] = useState([]);
  const [courseFeeRange, setCourseFeeRange] = useState(1000000);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [displayCount, setDisplayCount] = useState(9);
  const [fixedHeader, setFixedHeader] = useState(false);

  // University data (assuming full list is included)
  const rawUniversities = [
    {
      id: 4,
      name: "Online Manipal Jaipur",
      fee: 87000,
      image: "/assets/img/colleges/manipal-online.webp",
      logo: "/assets/img/colleges/icon-manipal.webp",
      accreditations: ["NAAC A+", "UGC Entitled", "WES", "ACU", "AICTE"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Karnataka",
    },
    {
      id: 79,
      name: "Indian Institute of Management Bangalore (IIM Bangalore)",
      fee: 351000,
      image: "/assets/img/colleges/iim-bangalore.webp",
      logo: "/assets/img/colleges/icon-iim-bangalore.webp",
      accreditations: ["EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Karnataka",
    },
  ];

  const universities = rawUniversities.map((uni) => ({
    ...uni,
    url:
      uni.url ||
      `/college/${uni.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")}`,
  }));

  // Filter logic
  const filteredUniversities = universities.filter((uni) => {
    const matchesStudyMode =
      selectedStudyModes.length === 0 ||
      selectedStudyModes.includes(uni.studyMode);
    const matchesFee = uni.fee <= courseFeeRange;
    const matchesDegree =
      selectedDegrees.length === 0 || selectedDegrees.includes(uni.degree);
    const matchesState =
      selectedStates.length === 0 || selectedStates.includes(uni.state);
    const matchesSearch = uni.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return (
      matchesStudyMode &&
      matchesFee &&
      matchesDegree &&
      matchesState &&
      matchesSearch
    );
  });

  // Handlers
  const handleViewMore = () => setDisplayCount(filteredUniversities.length);

  const toggleCompare = (university) => {
    if (compareList.some((item) => item.id === university.id)) {
      setCompareList(compareList.filter((item) => item.id !== university.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, university]);
    } else {
      alert("You can compare up to 3 universities at a time.");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFilterPopup = () => setIsFilterOpen(!isFilterOpen);

  const filterOptions = (options) =>
    options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleStudyModeChange = (value) => {
    setSelectedStudyModes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleFeeChange = (e) => setCourseFeeRange(parseInt(e.target.value));

  const handleDegreeChange = (value) => {
    setSelectedDegrees((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleStateChange = (value) => {
    setSelectedStates((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Filter options
  const studyModeOptions = [
    { value: "Online Programmes", label: "Online Programmes" },
    {
      value: "Online / Distance Programmes",
      label: "Online / Distance Programmes",
    },
    { value: "Distance Programmes", label: "Distance Programmes" },
    { value: "Executive Programmes", label: "Executive Programmes" },
  ];

  const degreeOptions = [
    { value: "MBA", label: "MBA" },
    { value: "PGDM", label: "PGDM" },
    { value: "MCom", label: "M.com" },
    { value: "PhD", label: "PhD" },
    { value: "Diploma", label: "Diploma" },
    { value: "MSc", label: "M.Sc" },
    { value: "MA", label: "M.A." },
    { value: "MCA", label: "M.C.A." },
    { value: "BSc", label: "B.Sc" },
    { value: "BBA", label: "BBA" },
    { value: "BCA", label: "BCA" },
    { value: "BA", label: "BA" },
    { value: "BCom", label: "B.com" },
    { value: "MLIS", label: "MLIS" },
    { value: "BLIS", label: "BLIS" },
    { value: "PGD", label: "Postgraduate Diploma" },
    { value: "Executive mba", label: "Executive MBA" },
  ];

  const stateOptions = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Punjab", label: "Punjab" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Telangana", label: "Telangana" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Haryana", label: "Haryana" },
    { value: "International", label: "International" },
  ];

  useEffect(() => {
    const handleScroll = () => setFixedHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Menu />
      <div className="page-container">
        {/* Banner */}
        <div className="bestcollege_main__G_q2G">
          <Image
            alt="best-college-banner"
            fetchPriority="high"
            width={1920}
            height={870}
            src="/assets/img/colleges/university-of-madras.png"
            className="bestcollege_banner_image__0XOk4"
          />
          <div className="bestcollege_banner__DvNyN">
            <h1 className="bestcollege_explore_heading__IahiT">
              EXPLORE BEST COURSES FROM TOP UNIVERSITIES
            </h1>
            <h4 className="bestcollege_banner_description__OxDnN">
              Build Your Career With
            </h4>
          </div>
        </div>

        {/* Main Content */}
        <div className="study_collegWrapper__qXs_p">
          <div className="study_collegeContainer__INeVI">
            <div className="study_dataSection__nZyfU">
              <div className="study_detailsPage__aSGLr">
                {/* Filter Section */}
                <div className="topuniversity_filter__EWbBt">
                  <button
                    className="mobile-filter-button"
                    onClick={toggleFilterPopup}
                    style={{
                      display: "none",
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Filters
                  </button>

                  <div
                    className={`${styles.filterContent} ${
                      isFilterOpen ? styles.filterContentOpen : ""
                    }`}
                  >
                    <div className={styles.filterHeader}>
                      <h6>Search By Filters</h6>
                      {isFilterOpen && (
                        <button
                          className={styles.mobileCloseButton}
                          onClick={toggleFilterPopup}
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {isFilterOpen && (
                      <input
                        type="text"
                        className={styles.mobileFilterSearch}
                        placeholder="Search universities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    )}

                    {/* Filter Container with Fixed Height */}
                    <div
                      className="topuniversity_filter_main__b2Dto"
                      style={{ minHeight: "400px" }} // Prevents shrinking
                    >
                      {/* Study Mode */}
                      <div className="topuniversity_study_mode__MxEoA">
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Study Mode
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {(isFilterOpen
                            ? filterOptions(studyModeOptions)
                            : studyModeOptions
                          ).map((option) => (
                            <div key={option.value}>
                              <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedStudyModes.includes(
                                  option.value
                                )}
                                onChange={() =>
                                  handleStudyModeChange(option.value)
                                }
                              />
                              <label
                                htmlFor={option.value}
                                className="topuniversity_label_name__Ron3s"
                              >
                                {option.label}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Course Fee */}
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Course Fee (Up to ₹{courseFeeRange.toLocaleString()})
                        </div>
                        <div className="topuniversity_input_range__0gw4x">
                          <input
                            type="range"
                            min="0"
                            max="2000000"
                            name="fees"
                            value={courseFeeRange}
                            onChange={handleFeeChange}
                          />
                        </div>
                        <div className="topuniversity_ranges__b6dJv">
                          <p>0</p>
                          <p>20L</p>
                        </div>
                      </div>

                      {/* Degree */}
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Degree (Online / Distance)
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {(isFilterOpen
                            ? filterOptions(degreeOptions)
                            : degreeOptions
                          ).map((option) => (
                            <div key={option.value}>
                              <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedDegrees.includes(option.value)}
                                onChange={() =>
                                  handleDegreeChange(option.value)
                                }
                              />
                              <label
                                htmlFor={option.value}
                                className="topuniversity_label_name__Ron3s"
                              >
                                {option.label}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* State */}
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          State
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {(isFilterOpen
                            ? filterOptions(stateOptions)
                            : stateOptions
                          ).map((option) => (
                            <div key={option.value}>
                              <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedStates.includes(option.value)}
                                onChange={() => handleStateChange(option.value)}
                              />
                              <label
                                htmlFor={option.value}
                                className="topuniversity_label_name__Ron3s"
                              >
                                {option.label}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* University Cards */}
                <div className="">
                  <div
                    className="study_maxWidth__jJbIL"
                    id="Leading International Colleges"
                  >
                    <div className="abroad_main_container_cards__uzKDE">
                      {filteredUniversities.length > 0 ? (
                        filteredUniversities
                          .slice(0, displayCount)
                          .map((uni) => (
                            <Link href={uni.url} key={uni.id} passHref>
                              <div className="abroad_college_link__0oyJa product-card">
                                <div className="abroad_cards__81FQw">
                                  <div>
                                    <div className="abroad_card_img_container__s1_2Z">
                                      <Image
                                        alt={`${uni.name} image`}
                                        width={500}
                                        height={500}
                                        src={uni.image}
                                        className="abroad_card_image__tQiug"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="abroad_college_icon_div__zWBXf">
                                      <div className="abroad_college_logo__QwFnF">
                                        <Image
                                          alt={`${uni.name} logo`}
                                          width={35}
                                          height={35}
                                          src={uni.logo}
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="abroad_tooltip__Q2tD1">
                                        <span className="abroad_institute_name__K52yL">
                                          {truncateName(uni.name)}
                                        </span>
                                        <span className="abroad_tooltip_text__FsRAP">
                                          {uni.name}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="abroad_fees_div__U28lM">
                                      <div className="abroad_per_year_fees__YXauv">
                                        <p className="abroad_card_fees__HgBs0">
                                          Starting Fee: ₹
                                          {uni.fee.toLocaleString()}*
                                        </p>
                                        <div className="abroad_card_course__7MIhM">
                                          {uni.accreditations.map(
                                            (acc, index) => (
                                              <span key={index}>
                                                {acc}
                                                {index <
                                                  uni.accreditations.length -
                                                    1 && ", "}
                                              </span>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      className="abroad_add_to_compare_btn__p27Wp"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toggleCompare(uni);
                                      }}
                                    >
                                      {compareList.some(
                                        (item) => item.id === uni.id
                                      )
                                        ? "Remove from Compare"
                                        : "Add to Compare"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))
                      ) : (
                        <p
                          style={{
                            textAlign: "center",
                            padding: "20px",
                            color: "#666",
                          }}
                        >
                          No matching results found.
                        </p>
                      )}
                    </div>
                    {filteredUniversities.length > displayCount && (
                      <button
                        onClick={handleViewMore}
                        className="view-more-btn"
                        style={{
                          display: "block",
                          margin: "20px auto",
                          padding: "10px 20px",
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        View More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Compare Section */}
            {compareList.length > 0 && (
              <div
                className={styles.fixedCompareSection}
                style={{
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  transform: "none",
                  zIndex: 1000,
                  backgroundColor: "#0c2d50",
                  padding: "10px",
                  borderRadius: "0",
                  boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
                  maxWidth: "100vw",
                  color: "#fff",
                }}
              >
                <div className={styles.comparePreviewList}>
                  {compareList.map((uni) => (
                    <div key={uni.id} className={styles.comparePreviewItem}>
                      <Image
                        alt={`${uni.name} image`}
                        width={50}
                        height={50}
                        src={uni.image}
                        className={styles.comparePreviewImage}
                      />
                      <div className={styles.comparePreviewDetails}>
                        <span className={styles.comparePreviewName}>
                          {uni.name}
                        </span>
                        <span className={styles.comparePreviewRank}>
                          Rank: {uni.rank}
                        </span>
                        <span>Fee: ₹{uni.fee.toLocaleString()}</span>
                        <span>
                          Accreditations: {uni.accreditations.join(", ")}
                        </span>
                      </div>
                      <button
                        className={styles.removeButton}
                        onClick={() => toggleCompare(uni)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={openModal} className={styles.compareButton}>
                  Compare
                </button>
              </div>
            )}

            {/* Comparison Modal */}
            {isModalOpen && (
              <ComparisonModal
                compareList={compareList}
                toggleCompare={toggleCompare}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>

        {/* Placeholder for Expert Section */}
        <div className="Expert_Expert__Container__f2HSI">
          {/* Add expert section content here if needed */}
        </div>
      </div>
      <Footer />
    </>
  );
}
