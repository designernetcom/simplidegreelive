import React from "react";

export default function ComparisonModal({
  compareList,
  toggleCompare,
  closeModal,
}) {
  return (
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
        <h4>Here is the details comparison of selected Universities</h4>
        <div className="comparison-table">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
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
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Approvals
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {uni.accreditations.join(", ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Placement
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {uni.placement || "N/A"}{" "}
                    {/* Add fallback if data is missing */}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Education Mode
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Ranking
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {uni.rank}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Examination Mode
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {uni.rank}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Highest Placement
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Average Placement
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {uni.rank}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Course Offered
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id} // Add key prop here
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
                  Fee
                </td>
                {compareList.map((uni) => (
                  <td
                    key={uni.id}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      fontSize: "14px",
                      color: "#000;",
                      fontWeight: "500",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    ₹{uni.fee.toLocaleString()}
                  </td>
                ))}
              </tr>

              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "18px",
                    fontSize: "18px",
                    color: "#000;",
                    fontWeight: "500",
                    fontFamily:
                      "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  }}
                >
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

                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      X
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
