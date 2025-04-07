import React from "react";
import Image from "next/image";
import styles from "./ComparisonModal.module.css";

const ComparisonModal = ({ compareList = [], toggleCompare, closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Select University(s) to Compare</h3>
          <button className={styles.closeButton} onClick={closeModal}>
            ✕
          </button>
        </div>
        <div className={styles.universityList}>
          {compareList.length > 0 ? (
            compareList.map((uni) => (
              <div key={uni.id} className={styles.universityCard}>
                <button
                  className={styles.removeButton}
                  onClick={() => toggleCompare(uni)}
                >
                  ✕
                </button>
                <div className={styles.universityInfo}>
                  <Image
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    width={50}
                    height={50}
                    className={styles.universityLogo}
                  />
                  <h4 className={styles.universityName}>{uni.name}</h4>
                  <p className={styles.universityRank}>
                    NIRF RANK: {uni.rank === "Not specified" ? "N/A" : uni.rank}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No universities selected for comparison.</p>
          )}
        </div>
        <button
          className={styles.compareButton}
          onClick={() => alert("Comparing universities...")} // Replace with actual comparison logic
          disabled={compareList.length < 2}
        >
          Compare Now
        </button>
      </div>
    </div>
  );
};

export default ComparisonModal;
