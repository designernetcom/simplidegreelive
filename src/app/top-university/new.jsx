"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "../globals.css";
import "../styles/8b2861424f796947.css";
import "../styles/cc66cf431efece60.css";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/bcdb44b6ad772c90.css";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/7620326e339f446b.css";
import Menu from "../../../components/Header/Menu/Menu";
import styles from "./Filter.module.css";
import Footer from "../../../components/Footer/Footer";

const ComparisonModal = dynamic(() => import("../ComparisonModal"), {
  ssr: false,
});

export default function Page() {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudyModes, setSelectedStudyModes] = useState([]);
  const [courseFeeRange, setCourseFeeRange] = useState(1000000);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);

  // University data from your HTML
  const rawUniversities = [
    {
      id: 1,
      name: "NMIMS",
      fee: 450000,
      image: "/assets/img/colleges/nmims.jpeg",
      logo: "/assets/img/colleges/icon (1).png",
      accreditations: ["WES", "AACSB"],
      rank: "NIRF Rank: 62 (Overall)",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Maharashtra",
      url: "/college/nmims",
    },
    {
      id: 2,
      name: "Amity University Online",
      fee: 6575,
      image: "/assets/img/mba-distance/amity.jpg",
      logo: "/assets/img/colleges/icon (2).png",
      accreditations: ["IACET", "AACSB"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttar Pradesh",
      url: "/college/amity-university-online",
    },
    {
      id: 3,
      name: "Center for Online Learning, D.Y. Patil Deemed To Be University, Navi Mumbai",
      fee: 353340,
      image: "/assets/img/mba-distance/dy-patil-online-mba-institute.jpg",
      logo: "/assets/img/colleges/icon (3).png",
      accreditations: ["FIBAA", "AACSB", "AIU", "eqar"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Maharashtra",
      url: "/college/dy-patil-online",
    },
    {
      id: 4,
      name: "Manipal University",
      fee: 1965848,
      image: "/assets/img/colleges/manipal.jpg",
      logo: "/assets/img/colleges/icon (4).png",
      accreditations: [
        "AACSB",
        "WASC",
        "AIU",
        "Association of American Law Schools",
        "The State Bar of California",
        "American Bar Association",
      ],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Karnataka",
      url: "/college/manipal-university",
    },
    {
      id: 5,
      name: "Lovely Professional University",
      fee: 1251564,
      image: "/assets/img/colleges/lpu-online.png",
      logo: "/assets/img/university-main/lpu.jpg",
      accreditations: ["TEQSA", "AACSB", "EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "BBA",
      state: "Punjab",
      url: "/college/lovely-professional-university",
    },
    {
      id: 6,
      name: "Symbiosis International University",
      fee: 1304272,
      image: "/assets/img/colleges/symbiosi_img.jpg",
      logo: "/assets/img/university-main/symbosis.jpeg",
      accreditations: ["Higher Learning Commission (HLC) Accredited"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Maharashtra",
      url: "/college/symbiosis-international-university",
    },
    {
      id: 7,
      name: "Liverpool John Moores University",
      fee: 450000,
      image: "/assets/img/colleges/card.png",
      logo: "/assets/img/colleges/icon (1).png",
      accreditations: ["WES", "AACSB"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
      url: "/college/liverpool-john-moores-university",
    },
    {
      id: 8,
      name: "Wharton Online, Wharton University of Pennsylvania",
      fee: 6575,
      image: "/assets/img/colleges/card (1).png",
      logo: "/assets/img/colleges/icon (2).png",
      accreditations: ["IACET", "AACSB"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
      url: "/college/wharton-online",
    },
    {
      id: 9,
      name: "IU (International University of Applied Sciences)",
      fee: 353340,
      image: "/assets/img/colleges/card (2).png",
      logo: "/assets/img/colleges/icon (3).png",
      accreditations: ["FIBAA", "AACSB", "AIU", "eqar"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
      url: "/college/iu-international",
    },
    {
      id: 10,
      name: "Golden Gate University",
      fee: 1965848,
      image: "/assets/img/colleges/card (3).png",
      logo: "/assets/img/colleges/icon (4).png",
      accreditations: [
        "AACSB",
        "WASC",
        "AIU",
        "Association of American Law Schools",
        "The State Bar of California",
        "American Bar Association",
      ],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
      url: "/college/golden-gate-university",
    },
    {
      id: 11,
      name: "Deakin University",
      fee: 1251564,
      image: "/assets/img/colleges/banner (10).png",
      logo: "/assets/img/colleges/icon (5).png",
      accreditations: ["TEQSA", "AACSB", "EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
      url: "/college/deakin-university",
    },
    {
      id: 12,
      name: "Colorado State University",
      fee: 1304272,
      image: "/assets/img/colleges/card (4).png",
      logo: "/assets/img/colleges/icon (6).png",
      accreditations: ["Higher Learning Commission (HLC) Accredited"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
      url: "/college/colorado-state-university",
    },
  ];

  // Filter logic
  const filteredUniversities = rawUniversities.filter((uni) => {
    const matchesStudyMode =
      selectedStudyModes.length === 0 ||
      selectedStudyModes.includes(uni.studyMode);
    const matchesFee = uni.fee <= courseFeeRange;
    const matchesDegree =
      selectedDegrees.length === 0 || selectedDegrees.includes(uni.degree);
    const matchesState =
      selectedStates.length === 0 || selectedStates.includes(uni.state);
    return matchesStudyMode && matchesFee && matchesDegree && matchesState;
  });

  // Comparison functionality
  const toggleCompare = (university) => {
    if (compareList.some((item) => item.id === university.id)) {
      setCompareList(compareList.filter((item) => item.id !== university.id));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, university]);
    } else {
      alert("You can compare up to 4 universities at a time.");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filter handlers
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
    "Online Programmes",
    "Online / Distance Programmes",
    "Distance Programmes",
    "Executive Programmes",
  ];

  const degreeOptions = [
    "MBA",
    "PGDM",
    "MCom",
    "PhD",
    "Diploma",
    "MSc",
    "MA",
    "MCA",
    "BSc",
    "BBA",
    "BCA",
    "BA",
    "BCom",
    "MLIS",
    "BLIS",
    "PGD",
    "Executive mba",
  ];

  const stateOptions = [
    "New Delhi",
    "Punjab",
    "Gujarat",
    "Telangana",
    "Karnataka",
    "Maharashtra",
    "Rajasthan",
    "Uttarakhand",
    "Uttar Pradesh",
    "Tamil Nadu",
    "Haryana",
    "International",
  ];

  return (
    <>
      <Menu />
      <div>
        <div className="filterfreecourse_filter_btn_box__9XmI1">
          <button className="filterfreecourse_filter_btn__pWd64">Filter</button>
        </div>
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
        <div className="study_collegWrapper__qXs_p">
          <div className="study_collegeContainer__INeVI">
            <div className="study_dataSection__nZyfU">
              <div className="study_detailsPage__aSGLr">
                <div className="topuniversity_filter__EWbBt">
                  <div>
                    <h6>Search By Filters</h6>
                    <div className="topuniversity_filter_main__b2Dto">
                      <div className="topuniversity_study_mode__MxEoA">
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Study Mode
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {studyModeOptions.map((mode) => (
                            <div key={mode}>
                              <input
                                type="checkbox"
                                value={mode}
                                checked={selectedStudyModes.includes(mode)}
                                onChange={() => handleStudyModeChange(mode)}
                              />
                              <label className="topuniversity_label_name__Ron3s">
                                {mode}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Course Fee
                        </div>
                        <div className="topuniversity_input_range__0gw4x">
                          <p
                            style={{
                              marginTop: "30px",
                              fontSize: "14px",
                              height: "20px",
                            }}
                          >
                            ₹{courseFeeRange.toLocaleString()}
                          </p>
                          <input
                            type="range"
                            min="0"
                            max="1000000"
                            value={courseFeeRange}
                            onChange={handleFeeChange}
                          />
                        </div>
                        <div className="topuniversity_ranges__b6dJv">
                          <p>0</p>
                          <p>10L</p>
                        </div>
                      </div>
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Degree (online / distance)
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {degreeOptions.map((degree) => (
                            <div key={degree}>
                              <input
                                type="checkbox"
                                value={degree}
                                checked={selectedDegrees.includes(degree)}
                                onChange={() => handleDegreeChange(degree)}
                              />
                              <label className="topuniversity_label_name__Ron3s">
                                {degree}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          State
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {stateOptions.map((state) => (
                            <div key={state}>
                              <input
                                type="checkbox"
                                value={state}
                                checked={selectedStates.includes(state)}
                                onChange={() => handleStateChange(state)}
                              />
                              <label className="topuniversity_label_name__Ron3s">
                                {state}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="study_detailsContainer__xkYZm">
                  <div
                    className="study_maxWidth__jJbIL"
                    id="Leading International Colleges"
                  >
                    <div className="abroad_main_container_cards__uzKDE">
                      {filteredUniversities.map((uni) => (
                        <Link href={uni.url} key={uni.id} passHref>
                          <div className="abroad_college_link__0oyJa product-card">
                            <div className="abroad_cards__81FQw">
                              <div>
                                <div className="abroad_card_img_container__s1_2Z">
                                  <Image
                                    alt={`${uni.name} image`}
                                    width={200}
                                    height={200}
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
                                      {uni.name}
                                    </span>
                                    <span className="abroad_tooltip_text__FsRAP">
                                      {uni.name}
                                    </span>
                                  </div>
                                </div>
                                <div className="abroad_fees_div__U28lM">
                                  <div className="abroad_per_year_fees__YXauv">
                                    <p className="abroad_card_fees__HgBs0">
                                      Starting Fee: ₹{uni.fee.toLocaleString()}*
                                    </p>
                                    <div className="abroad_card_course__7MIhM">
                                      {uni.accreditations.map((acc, index) => (
                                        <span key={index}>
                                          {acc}
                                          {index <
                                            uni.accreditations.length - 1 &&
                                            ", "}
                                        </span>
                                      ))}
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
                      ))}
                    </div>
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
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1000,
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                  maxWidth: "90vw",
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
                <button
                  onClick={openModal}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  Compare Selected Universities ({compareList.length})
                </button>
              </div>
            )}

            {isModalOpen && (
              <ComparisonModal
                compareList={compareList}
                toggleCompare={toggleCompare}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
