import React from "react";
import styles from "./FilterPopup.module.css"; // Assuming you're using CSS modules

const FilterPopup = ({
  isFilterOpen,
  toggleFilterPopup,
  searchTerm,
  setSearchTerm,
  studyModeOptions,
  selectedStudyModes,
  handleStudyModeChange,
  courseFeeRange,
  handleFeeChange,
  degreeOptions,
  selectedDegrees,
  handleDegreeChange,
  stateOptions,
  selectedStates,
  handleStateChange,
  filterOptions,
}) => {
  return (
    <div className="topuniversity_filter__EWbBt">
      {/* Mobile Filter Button - Visible only on mobile */}
      <button
        className="mobile-filter-button"
        onClick={toggleFilterPopup}
        style={{
          display: isFilterOpen ? "none" : "block", // Show only when popup is closed
          marginBottom: "10px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          width: "100%", // Full width on mobile
        }}
      >
        Filters
      </button>

      {/* Filter Popup Content */}
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

        {/* Filter Container */}
        {isFilterOpen && (
          <div
            className="topuniversity_filter_main__b2Dto"
            style={{
              minHeight: "auto", // Adjust height dynamically on mobile
              maxHeight: "80vh", // Limit height to avoid overflow
              overflowY: "auto", // Scrollable on mobile
              padding: "10px",
            }}
          >
            {/* Study Mode */}
            <div className="topuniversity_study_mode__MxEoA">
              <div className="topuniversity_study_mode_select__eKz3p">
                Study Mode
              </div>
              <div className="topuniversity_select_btn__Ew4vM">
                {filterOptions(studyModeOptions).map((option) => (
                  <div key={option.value}>
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={selectedStudyModes.includes(option.value)}
                      onChange={() => handleStudyModeChange(option.value)}
                    />
                    <label
                      htmlFor={option.value}
                      className="topuniversity_label_name__Ron3s"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Fee */}
            <div
              className="topuniversity_study_mode__MxEoA"
              style={{ marginTop: "15px" }}
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
                  style={{ width: "100%" }} // Full width on mobile
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
              style={{ marginTop: "15px" }}
            >
              <div className="topuniversity_study_mode_select__eKz3p">
                Degree (Online / Distance)
              </div>
              <div className="topuniversity_select_btn__Ew4vM">
                {filterOptions(degreeOptions).map((option) => (
                  <div key={option.value}>
                    <input
                      type="checkbox"
                      id={option.value}
                      value={option.value}
                      checked={selectedDegrees.includes(option.value)}
                      onChange={() => handleDegreeChange(option.value)}
                    />
                    <label
                      htmlFor={option.value}
                      className="topuniversity_label_name__Ron3s"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* State */}
            <div
              className="topuniversity_study_mode__MxEoA"
              style={{ marginTop: "15px" }}
            >
              <div className="topuniversity_study_mode_select__eKz3p">
                State
              </div>
              <div className="topuniversity_select_btn__Ew4vM">
                {filterOptions(stateOptions).map((option) => (
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPopup;
