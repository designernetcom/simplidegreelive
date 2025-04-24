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
import "../styles/47e473.css";
import Menu from "../../../components/Header/Menu/Menu";

import Footer from "../../../components/Footer/Footer";

const ComparisonModal = dynamic(() => import("../ComparisonModal"), {
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
              Explore Best Colleges For You
            </h1>
            <h4 className="bestcollege_banner_description__OxDnN">
              Build Your Career With Simpli Degree Pvt Ltd
            </h4>
          </div>
        </div>
        <div className="topuniversity_container__3aJeI">
          <h3 className="topuniversity_explore_heading__e5Cnd">
            EXPLORE BEST COURSES FROM TOP UNIVERSITIES
          </h3>
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "1700px",
              maxHeight: "100vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <h4>Compare Universities</h4>
            <div className="comparison-table">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Colleges
                    </th>
                    {compareList.map((uni) => (
                      <th
                        key={uni.id}
                        style={{ border: "1px solid #ddd", padding: "8px" }}
                      >
                        {uni.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Fee
                    </td>
                    {compareList.map((uni) => (
                      <td
                        key={uni.id}
                        style={{ border: "1px solid #ddd", padding: "8px" }}
                      >
                        ₹{uni.fee.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Approvals
                    </td>
                    {compareList.map((uni) => (
                      <td
                        key={uni.id}
                        style={{ border: "1px solid #ddd", padding: "8px" }}
                      >
                        {uni.accreditations.join(", ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Rank
                    </td>
                    {compareList.map((uni) => (
                      <td
                        key={uni.id}
                        style={{ border: "1px solid #ddd", padding: "8px" }}
                      >
                        {uni.rank}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      Action
                    </td>
                    {compareList.map((uni) => (
                      <td
                        key={uni.id}
                        style={{ border: "1px solid #ddd", padding: "8px" }}
                      >
                        <button
                          onClick={() => toggleCompare(uni)}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#dc3545",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
