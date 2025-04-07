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
          maxWidth: "800px",
          maxHeight: "80vh",
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
        <h2>Compare Universities</h2>
        <div className="comparison-table">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Criteria
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
                  Accreditations
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
  );
}
