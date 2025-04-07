"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudyModes, setSelectedStudyModes] = useState([]);
  const [courseFeeRange, setCourseFeeRange] = useState(1000000);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [displayCount, setDisplayCount] = useState(10);
  const [fixedHeader, setFixedHeader] = useState(false); // Added missing state

  const rawUniversities = [
    /* your existing university data */
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

  const filteredUniversities = universities.filter((uni) => {
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

  const handleViewMore = () => setDisplayCount(filteredUniversities.length);

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

  const toggleFilterPopup = () => setIsFilterOpen(!isFilterOpen);

  const filterOptions = (options) =>
    options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const studyModeOptions = [
    /* your existing options */
  ];
  const degreeOptions = [
    /* your existing options */
  ];
  const stateOptions = [
    /* your existing options */
  ];

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

  useEffect(() => {
    const handleScroll = () => setFixedHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Menu />
      <div>
        <div className="bestcollege_main__G_q2G">{/* Banner */}</div>
        <div className="study_collegWrapper__qXs_p">
          <div className="study_collegeContainer__INeVI">
            <div className="study_dataSection__nZyfU">
              <div className="study_detailsPage__aSGLr">
                <div className="topuniversity_filter__EWbBt">
                  {/* Filter UI */}
                </div>
                <div className="study_detailsContainer__xkYZm">
                  <div
                    className="study_maxWidth__jJbIL"
                    id="Leading International Colleges"
                  >
                    <div className="abroad_main_container_cards__uzKDE">
                      {filteredUniversities
                        .slice(0, displayCount)
                        .map((uni) => (
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
                                    {/* Fee and accreditations */}
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
                    {displayCount < filteredUniversities.length && (
                      <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button
                          onClick={handleViewMore}
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "#0c2d50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "14px",
                            margin: "3px",
                          }}
                        >
                          View More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Horizontal Compare Section */}
          {compareList.length > 0 && (
            <div className={styles.compareSection}>
              <h3>Selected Universities to Compare</h3>
              <div className={styles.compareList}>
                {compareList.map((uni) => (
                  <div key={uni.id} className={styles.compareItem}>
                    <Image
                      alt={`${uni.name} image`}
                      width={100}
                      height={100}
                      src={uni.image}
                      className={styles.compareImage}
                    />
                    <div className={styles.compareDetails}>
                      <Image
                        alt={`${uni.name} logo`}
                        width={30}
                        height={30}
                        src={uni.logo}
                        className={styles.compareLogo}
                      />
                      <span className={styles.compareName}>{uni.name}</span>
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
            </div>
          )}

          {/* Fixed Compare Button */}
          {compareList.length > 0 && (
            <div
              style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
              }}
            >
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
        <div className="Expert_Expert__Container__f2HSI">
          {/* Expert section */}
        </div>
      </div>
      <Footer />
    </>
  );
}
