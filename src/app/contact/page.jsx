"use client";

import React, { useState } from "react";

import "./contact.module.css";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/83d9da8bb5d66f96.css";
import SecondMenu from "../../../components/Header/Menu/SecondMenu";
import Footer from "../../../components/Footer/Footer";
import "../styles/5107c2122129e0bb.css";
import "../styles/style.css";
import "../styles/bootstrap.min.css";
import "../styles/33f1be5fd79e728d.css";
import "../styles/cc66cf431efece60.css";
import "../styles/bcdb44b6ad772c90.css";
import "../styles/ecbb68b163419596.css";
import "../styles/e74b165e0d429359.css";
import "../styles/8c8030bf7e3ee32c.css";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess("");

    try {
      const response = await fetch("https://netcomindia.xyz/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.error || { general: "Something went wrong" });
        setLoading(false);
        return;
      }

      setSuccess(result.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setErrors({ general: "Network error, please try again later" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SecondMenu />
      <div>
        <div>
          <div
            className="ContactUsHero_Contact_page_Hero__container__CMEMs"
            style={{
              backgroundImage: "url('/assets/course/cntact.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "80vh",
              width: "100%",
              paddingTop: "190px",
            }}
          ></div>
          <div>
            <div className="ContactPageForm_ContactArea__container__jqBDa">
              <div className="ContactPageForm_ContactArea__leftsidebar__NSdul">
                <div>
                  <div>
                    <img
                      alt="Learning Routes Logo"
                      loading="lazy"
                      width={130}
                      height={55}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="/assets/img/Simplidegree logo 3.png"
                    />
                  </div>
                  <p className="ContactPageForm_contact_left_sort_desc__wM6LH">
                    Need help with something? Want a demo? Get in touch with our
                    friendly team and we will get back to you within 2 hours.
                  </p>
                </div>
                <div className="ContactPageForm_ContactArea_LogoInfoLinks_iconsContainer__tz20y">
                  <a href="https://www.instagram.com/learningroutes_official/">
                    <div className="ContactPageForm_ContactArea__icon_insta__vgkpf">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                        <circle cx="16.806" cy="7.207" r="1.078" />
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/kennis-learning-routes/">
                    <div className="ContactPageForm_ContactArea__icon_linkedin__Ooxnj">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4.983" cy="5.009" r="2.188" />
                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/learningroutesLR">
                    <div className="ContactPageForm_ContactArea__icon_facebook__YRsHo">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                      </svg>
                    </div>
                  </a>
                  <a href="https://twitter.com/_learningroutes">
                    <div className="ContactPageForm_ContactArea__icon_twitter__rpeEB">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" />
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@LearningRoutesOfficial">
                    <div className="ContactPageForm_ContactArea__icon_utube__Sx5Fv">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="ContactPageForm_ContactArea__contactform__m7fcP">
                <div>
                  <h2 className="ContactPageForm_contactArea__contactform_heading__UxKDv">
                    GET IN
                    <span className="ContactPageForm_contact_heading_touch__mHOo_">
                      TOUCH
                    </span>
                  </h2>
                </div>
                <div>
                  <p className="ContactPageForm_heading_timings__xhTqV">
                    24*7 Support We are ever ready to answer your questions and
                    solve your problems.
                  </p>
                </div>
                <div>
                  {success && (
                    <p
                      className="ContactPageForm_heading_timings__xhTqV"
                      style={{ color: "green" }}
                    >
                      {success}
                    </p>
                  )}
                  {errors.general && (
                    <p
                      className="ContactPageForm_heading_timings__xhTqV"
                      style={{ color: "red" }}
                    >
                      {errors.general}
                    </p>
                  )}
                  <div className="ContactForm_customContainer__eJkSW">
                    <form onSubmit={handleSubmit}>
                      <div className="ContactForm_inputContainer__RYPd6">
                        <div className="ContactForm_floatingLabelGroup__dFm3T">
                          <input
                            type="text"
                            id="firstName"
                            className="ContactForm_formControl__pQmc8"
                            autoComplete="off"
                            autoFocus
                            required
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          <label
                            className="ContactForm_floatingLabel__3U7u_"
                            htmlFor="firstName"
                          >
                            First Name
                          </label>
                          {errors.first_name && (
                            <p
                              className="ContactForm_heading_timings__xhTqV"
                              style={{ color: "red" }}
                            >
                              {errors.first_name}
                            </p>
                          )}
                        </div>
                        <div className="ContactForm_floatingLabelGroup__dFm3T">
                          <input
                            type="text"
                            id="lastName"
                            className="ContactForm_formControl__pQmc8"
                            autoComplete="off"
                            required
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          <label
                            className="ContactForm_floatingLabel__3U7u_"
                            htmlFor="lastName"
                          >
                            Last Name
                          </label>
                          {errors.last_name && (
                            <p
                              className="ContactForm_heading_timings__xhTqV"
                              style={{ color: "red" }}
                            >
                              {errors.last_name}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="ContactForm_inputContainer__RYPd6">
                        <div className="ContactForm_floatingLabelGroup__dFm3T">
                          <input
                            type="text"
                            id="email"
                            className="ContactForm_formControl__pQmc8"
                            autoComplete="off"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label
                            className="ContactForm_floatingLabel__3U7u_"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          {errors.email && (
                            <p
                              className="ContactForm_heading_timings__xhTqV"
                              style={{ color: "red" }}
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="ContactForm_inputContainer__RYPd6">
                        <div className="ContactForm_floatingLabelGroup__dFm3T">
                          <input
                            type="number"
                            id="phone"
                            className="ContactForm_formControl__pQmc8"
                            autoComplete="off"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <label
                            className="ContactForm_floatingLabel__3U7u_"
                            htmlFor="phone"
                          >
                            Phone
                          </label>
                          {errors.phone && (
                            <p
                              className="ContactForm_heading_timings__xhTqV"
                              style={{ color: "red" }}
                            >
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="ContactForm_inputContainer__RYPd6">
                        <div className="ContactForm_floatingLabelGroup__dFm3T">
                          <textarea
                            id="message"
                            className="ContactForm_textareaStyle__3qWau"
                            name="message"
                            autoComplete="off"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                          <label
                            className="ContactForm_floatingLabel__3U7u_"
                            htmlFor="message"
                          >
                            Type your Message
                          </label>
                          {errors.message && (
                            <p
                              className="ContactForm_heading_timings__xhTqV"
                              style={{ color: "red" }}
                            >
                              {errors.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <button
                          className="ContactForm_contact_submit_button__BXr3g"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit Details"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
