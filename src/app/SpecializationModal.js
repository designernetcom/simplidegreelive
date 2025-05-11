function SpecializationModal({
  isSpecializationModalOpen,
  selectedCourseName,
  selectedCourseSpecializations,
  handleCloseSpecializationModal,
}) {
  if (!isSpecializationModalOpen) return null;

  return (
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
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "20px",
          width: "80%",
          maxWidth: "1500px",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
          border: "none",
        }}
      >
        <button
          onClick={handleCloseSpecializationModal}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
          aria-label="Close specialization modal"
        >
          <span className="btn-close" />
        </button>
        <h2
          style={{
            fontSize: "24px",
            fontFamily:
              "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
            fontWeight: "700",
            color: "#151419",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {selectedCourseName} Specializations
        </h2>

        {/* Course Fee Details Section */}
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "15px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                color: "#000",
                fontSize: "16px",
                marginBottom: "5px",
              }}
            >
              Full Course Fee (Four Semesters)
            </p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                {selectedCourseSpecializations.length > 0 ? (
                  selectedCourseSpecializations.map((spec, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                      }}
                    >
                      <td style={{ padding: "12px", fontSize: "14px" }}>
                        {spec.name}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          color: "#ff5c35",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        ₹ {spec.fees.toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      style={{ textAlign: "center", padding: "20px" }}
                    >
                      No specializations available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <span style={{ color: "#000", fontSize: "14px" }}>
              Inclusive of all taxes
            </span>
          </div>
          {/* Close Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleCloseSpecializationModal}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontFamily:
                  "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8, sans-serif",
                fontWeight: "600",
              }}
              aria-label="Close specialization modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecializationModal;
