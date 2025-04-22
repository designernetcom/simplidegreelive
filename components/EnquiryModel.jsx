"use client";
import { useState } from "react";
import "./explore.module.css"

const EnquiryModel = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowModal(false); // Close modal on submit
  };

  const handleClose = () => {
    setShowModal(false); // Close modal on close button click
  };

  if (!showModal) return null;

  return (
    <div
      className="modal fade show d-block"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
      style={{ backgroundColor: "" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
            <div className="td_form_card_in position-relative">
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                style={{
                  right: "-10px",
                  height: "5em",
                  width: "3em",
                  top: "-20px",
                }}
              ></button>

              <h6 style={{ color: "#000" }}>Struggling with Career Growth?</h6>
              <h6 style={{ color: "#000" }}>Get Free Career Consultation</h6>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                />

                <input
                  type="email" // Use type="email" for better validation
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                />

                <input
                  type="tel" // Use type="tel" for phone numbers
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                />

                <select
                  className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a program*</option>
                  <option value="online_mba">Online MBA</option>
                  <option value="executive_mba">Executive MBA</option>
                  <option value="online_mca">Online MCA</option>
                  <option value="online_msc">Online MSC</option>
                  <option value="online_mcom">Online MCOM</option>
                  <option value="online_ma">Online MA</option>
                  <option value="online_pgdm">Online PGDM</option>
                  <option value="distance_med">Distance MEd</option>
                  <option value="pg_diploma">PG Diploma</option>
                  <option value="online_bba">Online BBA</option>
                  <option value="online_bca">Online BCA</option>
                  <option value="online_bsc">Online BSC</option>
                  <option value="online_bcom">Online BCom</option>
                  <option value="online_ba">Online BA</option>
                  <option value="distance_bed">Distance BEd</option>
                  <option value="it_certifications">IT Certifications</option>
                  <option value="help_me_decide">Help Me Decide</option>
                </select>

                <select
                  className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">States/Province*</option>
                  <option value="andhra_pradesh">Andhra Pradesh</option>
                  <option value="arunachal_pradesh">Arunachal Pradesh</option>
                  <option value="assam">Assam</option>
                  <option value="bihar">Bihar</option>
                  <option value="chhattisgarh">Chhattisgarh</option>
                  <option value="goa">Goa</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="haryana">Haryana</option>
                  <option value="himachal_pradesh">Himachal Pradesh</option>
                  <option value="jharkhand">Jharkhand</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="kerala">Kerala</option>
                  <option value="madhya_pradesh">Madhya Pradesh</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="manipur">Manipur</option>
                  <option value="meghalaya">Meghalaya</option>
                  <option value="mizoram">Mizoram</option>
                  <option value="nagaland">Nagaland</option>
                  <option value="odisha">Odisha</option>
                  <option value="punjab">Punjab</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="sikkim">Sikkim</option>
                  <option value="tamil_nadu">Tamil Nadu</option>
                  <option value="telangana">Telangana</option>
                  <option value="tripura">Tripura</option>
                  <option value="uttar_pradesh">Uttar Pradesh</option>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="west_bengal">West Bengal</option>
                  <option value="andaman_and_nicobar_islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="chandigarh">Chandigarh</option>
                  <option value="dadra_and_nagar_haveli_and_daman_and_diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="lakshadweep">Lakshadweep</option>
                  <option value="delhi">Delhi</option>
                  <option value="puducherry">Puducherry</option>
                </select>

                <div className="td_form_card_bottom td_mb_15 mt-3">
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_10 td_medium w-100"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Submit</span>
                    </span>
                  </button>
                </div>
              </form>

              <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0 mt-3">
                Your personal information is secure with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModel;
