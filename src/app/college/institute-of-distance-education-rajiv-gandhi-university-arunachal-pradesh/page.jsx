"use client";

import React, { useState, useEffect } from "react";
import Menu from "../../../../components/Header/Menu/Menu";
import Footer from "../../../../components/Footer/Footer";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";
import EnquiryModel from "../../../../components/EnquiryModel";
export default function page() {
  const [showModal, setShowModal] = useState(false); // Manage modal visibility

  const handleOpenModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      setFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Menu />
      <div>
        <div className="headCarousal_collegeCarousal__4a5Bq">
          <img
            src="https://store.learningroutes.in/images/colleges/Institute-of-Distance-and-Open-Learning-Mumbai-University/hero-image/banner.webp"
            fetchPriority="high"
            className="headCarousal_clg_banner__CXazi"
            alt="hero-image"
            width={240}
            height={240}
          />
          <div className="headCarousal_gradientOverlayStyle__DEkSg" />
          <div className="headCarousal_collegeHeadingContainer__E4uDz">
            <h1 className="headCarousal_collegeHeading__KBbuL">
              Institute of Distance and Open Learning, Mumbai University
            </h1>
            <p className="headCarousal_location__7rFlL">
              Mumbai{/* */},{/* */}Maharashtra
            </p>
            <p className="headCarousal_ranking__1yTOY">
              NIRF Rank: 61 (University Ranking)
            </p>
            <div className="headCarousal_accreditation__HUqxZ">
              <img
                src="https://store.learningroutes.in/images/colleges/Institute-of-Distance-and-Open-Learning-Mumbai-University/accreditations/NAAC A++.webp"
                alt="accreditation"
                className="headCarousal_accImg__NoM8M"
                width={20}
                height={20}
              />
            </div>
            <div className="headCarousal_proceedCompareContainer__rekWb">
              <a href="colleges.html">
                <button className="headCarousal_collegeCompare__znhHH">
                  Add To Compare
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="college_collegWrapper__vaQh1">
          <div className="college_collegeContainer__nqZS1">
            <div className="college_dataSection__0M4eV">
              <div className="collegeDetails_detailsPage__0qlWI">
                <div className="collegeDetails_scroller__kwBjm">
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-About"
                    href="#About"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_selectedBox___Y1P_ collegeDetails_textWhite__q6ndV">
                      About
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-High"
                    href="#High"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Highlights
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Courses"
                    href="#Courses"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Courses
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Course Eligibility"
                    href="#Course Eligibility"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Course Eligibility
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Enquire Now"
                    href="#Enquire Now"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <div>Enquire Now</div>
                        <div className="college_blink__yxq74" />
                      </div>
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Certification"
                    href="#Certification"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Certifications
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Admission"
                    href="#Admission"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Admission Procedure
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Placement"
                    href="#Placement"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Placement
                    </div>
                  </a>
                  <a
                    className="collegeDetails_scrollerElement__iuUFa"
                    id="link-Review"
                    href="#Review"
                  >
                    <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                      Review
                    </div>
                  </a>
                </div>
                <div className="collegeDetails_detailsContainer__6A8oL">
                  <div className="collegeDetails_maxWidth__6vBVL" id="About">
                    <div className="about_collegeDetails__67FzM">
                      <h2 className="about_collegeDetailsHeading__AA_dr">
                        Institute of Distance and Open Learning, Mumbai
                        University
                      </h2>
                      <p className="about_collegeDetailsDescription__7Swyd">
                        The Institute of Distance and Open Learning (IDOL),
                        established in 1971, is a distinguished arm of Mumbai
                        University, India, dedicated to providing flexible and
                        accessible education. It caters to individuals seeking
                        academic advancement without compromising on other
                        committments. They offer various undergraduate,
                        postgraduate, and diploma programmes across diverse
                        disciplines, including commerce, computer science,
                        humanities, and social sciences. IDOL prides itself for
                        its inclusive approach, welcoming students from various
                        backgrounds and professions. Through the online platform
                        and study centers, it enables individuals to pursue
                        their aspirations while juggling work, family, or
                        geographic constraints. The institute utilizes a
                        student-centric approach, providing self-paced learning
                        materials, virtual classrooms, and online support
                        systems.
                      </p>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="High">
                    <div className="Highlights_container__yqw8t">
                      <h2 className="Highlights_heading__QnGK2">Highlights</h2>
                      <div className="Highlights_grid__zFaon">
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div>Provides accessibility &amp; flexibility</div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div>Wide range of programmes</div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div>Online support for convenient learning</div>
                        </div>
                        <div className="Highlights_pointContainer__5_snP">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 16 16"
                            className="Highlights_pointIcon__m_iYg"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 3l5 5-5 5-5-5 5-5z" />
                          </svg>
                          <div>
                            Access to library and various learning resources
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
                    <div className="courses_wrapper__5pXR3">
                      <div className="courses_container__c_BRe">
                        <h2 className="courses_heading__nCyjm">Courses</h2>
                        <p className="courses_course_college_name__Reg2z">
                          Explore online learning courses in
                          {/* */}Institute of Distance Education, Rajiv Gandhi
                          University, Arunachal Pradesh
                        </p>
                        <table className="courses_course_table__llAtE">
                          <thead style={{ background: "var(--dark-blue)" }}>
                            <tr className="courses_course_head__M4Cun">
                              <th>Courses</th>
                              <th style={{ textAlign: "center" }}>Fee Range</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Distance BA</td>
                              <td style={{ textAlign: "center" }}>₹ null</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={handleOpenModal}
                                >
                                  Enquire Now
                                </button>

                                {/* Render Modal */}
                                <EnquiryModel
                                  showModal={showModal}
                                  setShowModal={setShowModal}
                                />
                                <button className="courses_viewSpsl__lrjH5">
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Distance BBA</td>
                              <td style={{ textAlign: "center" }}>₹ null</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={handleOpenModal}
                                >
                                  Enquire Now
                                </button>

                                {/* Render Modal */}
                                <EnquiryModel
                                  showModal={showModal}
                                  setShowModal={setShowModal}
                                />
                                <button className="courses_viewSpsl__lrjH5">
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                            <tr className="courses_tbody__ZPCxV">
                              <td>Distance MA</td>
                              <td style={{ textAlign: "center" }}>₹ null</td>
                              <td
                                style={{ textAlign: "center" }}
                                className="group_btn"
                              >
                                <button
                                  className="courses_enqnow__8Vb3P"
                                  onClick={handleOpenModal}
                                >
                                  Enquire Now
                                </button>

                                {/* Render Modal */}
                                <EnquiryModel
                                  showModal={showModal}
                                  setShowModal={setShowModal}
                                />
                                <button className="courses_viewSpsl__lrjH5">
                                  View Specialization
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Course Eligibility"
                  >
                    <h2 className="courseEligibility_eligible_heading__5Qd_3">
                      Courses Eligibility
                    </h2>
                    <div className="courseEligibility_wrapper__WDP1x">
                      <table className="courseEligibility_eligible_table__ZvMdh">
                        <thead>
                          <tr className="courseEligibility_eligible_head__GsY_a">
                            <th>Courses</th>
                            <th>Eligibility</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance MCom</td>
                            <td>
                              A candidate must be a graduate- B.Com /
                              BMS/BBI/BAF Degree &amp; (BMM only for Management
                              specialisation)
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance MA</td>
                            <td>
                              Any bachelor’s degree in any subject from a
                              statutory university.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance MCA</td>
                            <td>
                              Passed B.Sc. I.T, BCA, B. Sc. Comp.Sc. or bachelor
                              degree in Computer Science engineering or
                              equivalent degree and obtained at least 50% marks
                              in aggregate 3/4 years (atleast 45% in case of
                              candidates of backward class categories,
                              Economically Weaker Section (EWS) and Persons with
                              Disability belonging to Maharashtra State only)or
                              Passed B.Sc./B. Com/B.A. with Mathematics 10+2
                              level or at graduate level (with additional bridge
                              courses as per the norms of the university/AICTE)
                              and obtained at least 50% marks aggregate (at
                              least 45% in case of candidates of Backward Class
                              Categories, Economically Weaker Section (EWS) and
                              Persons with Disability belonging to Maharashtra
                              State only) These students have to appear for the
                              bridge course examination during the first year.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance BCom</td>
                            <td>
                              Candidate should have passed XII (H.S.C.) from
                              Maharashtra State Board or equivalent exam, CBSE
                              or other state board (As per the ordinance O.2152)
                              or 3 years diploma from MSBTE or other boards
                              recognised as equivalent (As per equivalence on
                              24/8/2010) or 10+2 ITI course. (As per the
                              circular of Higher &amp; Technical Education
                              Department).
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance MSc</td>
                            <td>
                              Candidate should have passed BSc in specific field
                              from recognised University
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance BA</td>
                            <td>
                              A candidate must have passed XII (H.S.C.) from
                              Maharashtra State Board or equivalent exam, CBSE
                              or other state board or has 3 years diploma from
                              MSBTE or other boards recognised as equivalent (As
                              per equivalence on 24/8/2010) or 10+2 years ITI
                              course.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance BSc</td>
                            <td>
                              A candidate must have passed HSC with Mathematics
                              &amp; Statistics or equivalent. or Candidate with
                              post HSC-Diploma in Information
                              Technology/Computer Technology/ Computer
                              Engineering / Computer Science and allied branches
                              will be eligible for direct admission to the
                              second year of B.Sc. (IT). However, the diploma
                              should be recognised by the Board of Technical
                              Education or any other recognised government body.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance Master Of Management (MMS)</td>
                            <td>
                              Graduate in any faculty of a recognised University
                              by UGC with at least 50% marks in aggregate 3/4
                              years or equivalent (at least 45% in case of
                              candidates of backward class categories,
                              Economically Weaker Section and persons with
                              disability belonging to Maharashtra State only) or
                              its equivalent.
                            </td>
                          </tr>
                          <tr className="courseEligibility_eligible_tbody__q_tOM">
                            <td>Distance PG Diploma</td>
                            <td>
                              A Candidate for being eligible for admission (a)
                              Must hold a university degree in any faculty and
                              (b) Defence service personnel may be admitted to
                              the course even if they are not degree holders.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Enquire Now"
                  >
                    <div className="collegenquiry_collegeform__wTRAT">
                      <h2 className="collegenquiry_form_heading__GszFG">
                        Get Free Career Consultation
                      </h2>
                      <div className="collegenquiry_form_div__RSaaQ">
                        <form className="collegenquiry_form__uF7mS">
                          <input
                            type="text"
                            placeholder="Name*"
                            name="name"
                            defaultValue
                          />
                          <input
                            type="email"
                            placeholder="Email*"
                            name="email"
                            defaultValue
                          />
                          <input
                            type="number"
                            placeholder="Phone*"
                            name="phone"
                            defaultValue
                          />
                          <select name="program">
                            <option value selected>
                              Choose a Program*
                            </option>
                            <option value="Online MBA">Online MBA</option>
                            <option value="Executive MBA">Executive MBA</option>
                            <option value="Online MCA">Online MCA</option>
                            <option value="Online MSC">Online MSC</option>
                            <option value="Online MCOM">Online MCOM</option>
                            <option value="Online MA">Online MA</option>
                            <option value="Online PGDM">Online PGDM</option>
                            <option value="Distance MEd">Distance MEd</option>
                            <option value="PG Diploma">PG Diploma</option>
                            <option value="Online BBA">Online BBA</option>
                            <option value="Online BCA">Online BCA</option>
                            <option value="Online BSC">Online BSC</option>
                            <option value="Online BCom">Online BCom</option>
                            <option value="Online BA">Online BA</option>
                            <option value="Distance BEd">Distance BEd</option>
                            <option value="IT Certifications">
                              IT Certifications
                            </option>
                            <option value="Help Me Decide">
                              Help Me Decide
                            </option>
                          </select>
                          <select name="state">
                            <option value selected>
                              State/Province
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                          <button
                            type="submit"
                            className="collegenquiry_submit_btn__cjBuo"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Certification"
                  >
                    <div className="Certificates_wrapper__hjNB4">
                      <div className="Certificates_container__X9Jsj">
                        <div className="Certificates_detail_img_container__jHvTy">
                          <div>
                            <h2 className="Certificates_heading__Jr9Js">
                              Sample Certificate
                            </h2>
                            <div className="Certificates_subHeading__CKwq6">
                              Earn a degree that is recognized around the globe
                            </div>
                            <div>
                              <div className="Certificates_pointBox__xwwq4">
                                <img
                                  alt="check-image"
                                  loading="lazy"
                                  width={20}
                                  height={20}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /assets/simpli-images/check.webp 2x
                          "
                                  src="/assets/simpli-images/check.webp"
                                />
                                <div className="Certificates_point__XYWLq">
                                  Recognized and accredited degree
                                </div>
                              </div>
                              <div className="Certificates_pointBox__xwwq4">
                                <img
                                  alt="check-image"
                                  loading="lazy"
                                  width={20}
                                  height={20}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /assets/simpli-images/check.webp 2x
                          "
                                  src="/assets/simpli-images/check.webp"
                                />
                                <div className="Certificates_point__XYWLq">
                                  NAAC A+ recognised
                                </div>
                              </div>
                              <div className="Certificates_pointBox__xwwq4">
                                <img
                                  alt="check-image"
                                  loading="lazy"
                                  width={20}
                                  height={20}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /assets/simpli-images/check.webp 2x
                          "
                                  src="/assets/simpli-images/check.webp"
                                />
                                <div className="Certificates_point__XYWLq">
                                  Degree accepted in both private and public
                                  sector
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            {/* <img
                              alt="certificate_url"
                              loading="lazy"
                              width={300}
                              height={200}
                              decoding="async"
                              data-nimg={1}
                              className="Certificates_img__GOe9v"
                              style={{ color: "transparent" }}
                              srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FInstitute-of-Distance-and-Open-Learning-Mumbai-University%2Fcertification%2Fno-img.webp&w=384&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FInstitute-of-Distance-and-Open-Learning-Mumbai-University%2Fcertification%2Fno-img.webp&w=640&q=75 2x
                      "
                              src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FInstitute-of-Distance-and-Open-Learning-Mumbai-University%2Fcertification%2Fno-img.webp&w=640&q=75"
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Admission"
                  >
                    <div className="Admissions_container__lpKQv">
                      <h2 className="Admissions_heading__paqsP">
                        Admission Process
                      </h2>
                      <p className="Admissions_description__sKdUj">
                        The admissions process takes place in online mode. Fresh
                        admission starts from the month of January of every
                        year. There are direct admissions, no entrance exam is
                        conducted for the admission process.The addmission
                        procedure
                        {/* */}2025{/* */}
                        for the online course at
                        {/* */}Institute of Distance and Open Learning, Mumbai
                        University{/* */}
                        is as follow:
                      </p>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP
                          {/* */}1
                        </div>
                        <div className="Admissions_stepText___L_GT">
                          Fill out the online application form
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP
                          {/* */}2
                        </div>
                        <div className="Admissions_stepText___L_GT">
                          Upload required documents
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP
                          {/* */}3
                        </div>
                        <div className="Admissions_stepText___L_GT">
                          Pay the application fee
                        </div>
                      </div>
                      <div className="Admissions_step__4mDzm">
                        <div className="Admissions_stepCount__f9yhl">
                          STEP
                          {/* */}4
                        </div>
                        <div className="Admissions_stepText___L_GT">
                          Admission Confirmed
                        </div>
                      </div>
                      <div className="Admissions_stepHide__nIt_6" />
                    </div>
                  </div>
                  <div
                    className="collegeDetails_maxWidth__6vBVL"
                    id="Placement"
                  >
                    <div className="placement_container__iALXL">
                      <div>
                        <h2 className="placement_heading__iEHZj">
                          Online Placement Partners
                        </h2>
                        <h3 className="placement_subHeading__1vY2G">
                          Our students have an opportunity of
                        </h3>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <img
                            alt="img"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /assets/simpli-images/check.webp 2x
                    "
                            src="/assets/simpli-images/check.webp"
                          />
                          <p>
                            Learn employability skills through assessments and
                            tests
                          </p>
                        </div>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <img
                            alt="img"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /assets/simpli-images/check.webp 2x
                    "
                            src="/assets/simpli-images/check.webp"
                          />
                          <p>Top recruiters from leading Companies</p>
                        </div>
                        <div className="placementSubpoint_subHeadingPoints__uE7MR">
                          <img
                            alt="img"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /assets/simpli-images/check.webp 2x
                    "
                            src="/assets/simpli-images/check.webp"
                          />
                          <p>Job that suitably fits the student profile</p>
                        </div>
                      </div>
                      <div className="placement_placementBanner__ACCRS">
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ NaN LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Average Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">
                            ₹ NaN LPA
                          </p>
                          <p className="placementBanner_description__O3FqH">
                            Highest Salary
                          </p>
                        </div>
                        <div className="placementBanner_container__upl7e">
                          <p className="placementBanner_heading__yGlah">3x</p>
                          <p className="placementBanner_description__O3FqH">
                            Interview Opportunities
                          </p>
                        </div>
                      </div>
                      <div className="partners_container___c9cx" />
                    </div>
                  </div>
                  <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                    <div
                      className="CollegeReview_college_page_details_review_container__KbbIU"
                      id="contact"
                    >
                      <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                        Institute of Distance and Open Learning, Mumbai
                        University{/* */}
                        Review
                      </h2>
                      <div>
                        <form>
                          <div className="CollegeReview_college_page_details_review_form_container__rP5km">
                            <div className="CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd">
                              <p className="CollegeReview_college_page_details_review_form_rating_count__oLqL0">
                                0 out of 5
                              </p>
                              <div>
                                <span className="star">
                                  <img
                                    alt="rating"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    decoding="async"
                                    data-nimg={1}
                                    className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                    style={{ color: "transparent" }}
                                    srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                    src="/assets/simpli-images/Star-Two.webp"
                                  />
                                </span>
                                <span className="star">
                                  <img
                                    alt="rating"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    decoding="async"
                                    data-nimg={1}
                                    className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                    style={{ color: "transparent" }}
                                    srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                    src="/assets/simpli-images/Star-Two.webp"
                                  />
                                </span>
                                <span className="star">
                                  <img
                                    alt="rating"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    decoding="async"
                                    data-nimg={1}
                                    className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                    style={{ color: "transparent" }}
                                    srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                    src="/assets/simpli-images/Star-Two.webp"
                                  />
                                </span>
                                <span className="star">
                                  <img
                                    alt="rating"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    decoding="async"
                                    data-nimg={1}
                                    className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                    style={{ color: "transparent" }}
                                    srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                    src="/assets/simpli-images/Star-Two.webp"
                                  />
                                </span>
                                <span className="star">
                                  <img
                                    alt="rating"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    decoding="async"
                                    data-nimg={1}
                                    className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                    style={{ color: "transparent" }}
                                    srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                    src="/assets/simpli-images/Star-Two.webp"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="CollegeReview_rating_form_container__q_Xvp">
                              <input
                                className="CollegeReview_reviewer_name__Fdlnr"
                                type="text"
                                placeholder="Enter your name"
                                required
                                name="reviewerName"
                                defaultValue
                              />
                              <textarea
                                placeholder="Write your reviews"
                                className="CollegeReview_college_page_details_review_form_input__niDf2"
                                name="comment"
                                required
                                defaultValue={""}
                              />
                              <button className="CollegeReview_college_page_details_review_form_btn__xh_Sn">
                                Send message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="CollegeReview_college_page_details_verified_review_container__m7rGG">
                        <div>
                          <div className="CollegeReview_college_page_details_review_container_box__t9yW9">
                            <div className="CollegeReview_college_page_details_verified_review_name_rating_container__xI4ll">
                              <div className="CollegeReview_college_page_details_verified_reviewer_sort_name__o8ghJ">
                                G
                              </div>
                              <div>
                                <div className="CollegeReview_college_page_details_verified_reviewer_name__EtV8N">
                                  Gretta Vikrant Karning
                                </div>
                                <div className="CollegeReview_college_page_details_verified_review_img_container__YJFHn">
                                  <div>
                                    <img
                                      alt="Colored Star"
                                      loading="lazy"
                                      width={100}
                                      height={100}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_rating_img__IUdrQ"
                                      style={{ color: "transparent" }}
                                      srcSet="
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              "
                                      src="image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75"
                                    />
                                    <img
                                      alt="Colored Star"
                                      loading="lazy"
                                      width={100}
                                      height={100}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_rating_img__IUdrQ"
                                      style={{ color: "transparent" }}
                                      srcSet="
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              "
                                      src="image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75"
                                    />
                                    <img
                                      alt="Colored Star"
                                      loading="lazy"
                                      width={100}
                                      height={100}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_rating_img__IUdrQ"
                                      style={{ color: "transparent" }}
                                      srcSet="
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              "
                                      src="image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75"
                                    />
                                    <img
                                      alt="Colored Star"
                                      loading="lazy"
                                      width={100}
                                      height={100}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_rating_img__IUdrQ"
                                      style={{ color: "transparent" }}
                                      srcSet="
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              "
                                      src="image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75"
                                    />
                                    <img
                                      alt="Colored Star"
                                      loading="lazy"
                                      width={100}
                                      height={100}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_rating_img__IUdrQ"
                                      style={{ color: "transparent" }}
                                      srcSet="
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=128&q=75 1x,
                                image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75 2x
                              "
                                      src="image?url=%2F_next%2Fstatic%2Fmedia%2FStarOne.ab23013b.png&w=256&q=75"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="CollegeReview_college_page_details_reviewer_location_date__LoHUc">
                              Reviewed on
                              {/* */}2024-08-04
                            </div>
                            <div className="CollegeReview_college_page_details_verified_review_comment__ec5gu">
                              Want to pursue B-ed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
