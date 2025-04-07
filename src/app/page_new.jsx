"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import "./styles/8b2861424f796947.css";
import "./styles/cc66cf431efece60.css";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import "./styles/bcdb44b6ad772c90.css";
import "./styles/3a6b4218bb14b3ef.css";
import "./styles/7620326e339f446b.css";
import Menu from "../../components/Header/Menu/Menu";

// Dynamically import the modal with SSR disabled
const ComparisonModal = dynamic(() => import("./ComparisonModal"), {
  ssr: false,
});

export default function Page() {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const universities = [
    {
      id: 1,
      name: "NMIMS",
      fee: 450000,
      image: "/assets/img/colleges/nmims.jpeg",
      logo: "/assets/img/colleges/icon (1).png",
      accreditations: ["WES", "AACSB"],
      rank: "NIRF Rank: 62 (Overall)",
    },
    {
      id: 2,
      name: "Amity University Online",
      fee: 6575,
      image: "/assets/img/mba-distance/amity.jpg",
      logo: "/assets/img/colleges/icon (2).png",
      accreditations: ["IACET", "AACSB"],
      rank: "Not specified",
    },
    {
      id: 3,
      name: "Center for Online Learning, D.Y. Patil Deemed To Be University, Navi Mumbai",
      fee: 353340,
      image: "/assets/img/mba-distance/dy-patil-online-mba-institute.jpg",
      logo: "/assets/img/colleges/icon (3).png",
      accreditations: ["FIBAA", "AACSB", "AIU", "eqar"],
      rank: "Not specified",
    },
    {
      id: 4,
      name: "Manipal University",
      fee: 1965848,
      image: "/assets/img/colleges/manipal.jpg",
      logo: "/assets/img/colleges/icon (4).png",
      accreditations: [
        "AACSB",
        "WASC",
        "AIU",
        "Association of American Law Schools",
        "The State Bar of California",
        "American Bar Association",
      ],
      rank: "Not specified",
    },
    {
      id: 5,
      name: "Lovely Professional University",
      fee: 1251564,
      image: "/assets/img/colleges/lpu-online.png",
      logo: "/assets/img/university-main/lpu.jpg",
      accreditations: ["TEQSA", "AACSB", "EQUIS"],
      rank: "Not specified",
    },
    {
      id: 6,
      name: "Symbiosis International University",
      fee: 1304272,
      image: "/assets/img/colleges/symbiosi_img.jpg",
      logo: "/assets/img/university-main/symbosis.jpeg",
      accreditations: ["Higher Learning Commission (HLC) Accredited"],
      rank: "Not specified",
    },
    {
      id: 7,
      name: "Liverpool John Moores University",
      fee: 450000,
      image: "/assets/img/colleges/card.png",
      logo: "/assets/img/colleges/icon (1).png",
      accreditations: ["WES", "AACSB"],
      rank: "Not specified",
    },
    // ... (rest of your university data)
  ];

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

  return (
    <>
      <Menu />
      <div>
        <div className="filterfreecourse_filter_btn_box__9XmI1">
          <button className="filterfreecourse_filter_btn__pWd64">Filter</button>
        </div>
        <div className="bestcollege_main__G_q2G">
          <img
            alt="best-college-banner"
            fetchPriority="high"
            width={1920}
            height={870}
            decoding="async"
            data-nimg={1}
            className="bestcollege_banner_image__0XOk4"
            style={{ color: "transparent" }}
            src="assets/img/colleges/university-of-madras.png"
          />
          <div className="bestcollege_banner__DvNyN">
            <h1 className="bestcollege_explore_heading__IahiT">
              EXPLORE BEST COURSES FROM TOP UNIVERSITIES
            </h1>
            <h4 className="bestcollege_banner_description__OxDnN">
              Build Your Career With
            </h4>
          </div>
        </div>
        <div className="study_collegWrapper__qXs_p">
          <div className="study_collegeContainer__INeVI">
            <div className="study_dataSection__nZyfU">
              <div className="study_detailsPage__aSGLr">
                <div className="topuniversity_filter__EWbBt">
                  <div>
                    <h6>Search By Filters</h6>
                    <div className="topuniversity_filter_main__b2Dto">
                      <div className="topuniversity_study_mode__MxEoA">
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Study Mode
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          <input type="checkbox" id="Online Programmes" />
                          <label
                            htmlFor="Online Programmes"
                            className="topuniversity_label_name__Ron3s"
                          >
                            Online Programmes
                          </label>
                          <br />
                          <input
                            type="checkbox"
                            id="Online / Distance Programmes"
                          />
                          <label
                            htmlFor="Online / Distance Programmes"
                            className="topuniversity_label_name__Ron3s"
                          >
                            Online / Distance Programmes
                          </label>
                          <br />
                          <input type="checkbox" id="Distance Programmes" />
                          <label
                            htmlFor="Distance Programmes"
                            className="topuniversity_label_name__Ron3s"
                          >
                            Distance Programmes
                          </label>
                          <br />
                          <input type="checkbox" id="Executive Programmes" />
                          <label
                            htmlFor="Executive Programmes"
                            className="topuniversity_label_name__Ron3s"
                          >
                            Executive Programmes
                          </label>
                          <br />
                        </div>
                      </div>
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: 20 }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Course Fee
                        </div>
                        <div className="topuniversity_input_range__0gw4x">
                          <p
                            style={{ marginTop: 30, fontSize: 14, height: 20 }}
                          />
                          <input
                            type="range"
                            min={0}
                            max={1000000}
                            name="fees"
                            defaultValue={500000}
                          />
                        </div>
                        <div className="topuniversity_ranges__b6dJv">
                          <p>0</p>
                          <p>10L</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="study_detailsContainer__xkYZm">
                  <div
                    className="study_maxWidth__jJbIL"
                    id="Leading International Colleges"
                  >
                    <div className="abroad_main_container_cards__uzKDE">
                      {universities.map((uni) => (
                        <div
                          key={uni.id}
                          className="abroad_college_link__0oyJa product-card"
                        >
                          <div className="abroad_cards__81FQw">
                            <div>
                              <div className="abroad_card_img_container__s1_2Z">
                                <Image
                                  alt="card-image"
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
                                    alt="college-icon"
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
                                <div className="abroad_per_year_fees__YXauv">
                                  <p className="abroad_card_fees__HgBs0">
                                    Starting Fee: ₹{uni.fee.toLocaleString()}*
                                  </p>
                                  <div className="abroad_card_course__7MIhM">
                                    {uni.accreditations.map((acc, index) => (
                                      <span key={index}>
                                        {acc}
                                        {index < uni.accreditations.length - 1
                                          ? ", "
                                          : ""}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                className="abroad_add_to_compare_btn__p27Wp"
                                onClick={() => toggleCompare(uni)}
                              >
                                {compareList.some((item) => item.id === uni.id)
                                  ? "Remove from Compare"
                                  : "Add to Compare"}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Compare Button at Bottom */}
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
          <div className="Expert_Expert__CardsContainer__DDdzT">
            <h2 className="Expert_Expert__text_1__YxPGj">
              CRAFT YOUR BETTER FUTURE WITH OUR EXPERTS
            </h2>
            <p className="Expert_Expert__text_2__6WHgU">
              LR has a team of 250+ experts who are there to assist you and give
              you the right guidance for your successful career ahead.
            </p>
            <div className="Expert_Expert__allCardsContainer__kKnmL">
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="Expert Image - Krishna"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          className="Expert_Expert__image__8wv_Z"
                          src="assets/img/home_2/male-tutor-removebg-preview.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                                aria-label="Star Rating"
                              >
                                <defs>
                                  <linearGradient id="gradient">
                                    <stop offset="0%" stopColor="#FFC700" />
                                    <stop offset="100%" stopColor="#FF3D00" />
                                  </linearGradient>
                                </defs>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.5</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Krishna
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor for MBA
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        3 Years Experience
                      </p>
                    </div>
                  </div>
                  <a href="online-video-meet.html">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </a>
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="expertImage"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          data-nimg={1}
                          className="Expert_Expert__image__8wv_Z"
                          style={{ color: "transparent" }}
                          src="assets/img/home_2/girl-2-tutor-removebg-preview.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                              >
                                <linearGradient id="gradient">
                                  <stop offset="0%" stopColor="#FFC700" />
                                  <stop offset="100%" stopColor="#FF3D00" />
                                </linearGradient>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.7</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Rekha Sharma
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor for MCA
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        8 Years Experience
                      </p>
                    </div>
                  </div>
                  <a href="online-video-meet.html">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </a>
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="expertImage"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          data-nimg={1}
                          className="Expert_Expert__image__8wv_Z"
                          style={{ color: "transparent" }}
                          src="assets/img/home_2/girl-tutor-removebg-preview.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                              >
                                <linearGradient id="gradient">
                                  <stop offset="0%" stopColor="#FFC700" />
                                  <stop offset="100%" stopColor="#FF3D00" />
                                </linearGradient>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.5</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Vaishali
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor for MBA
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        6 Years Experience
                      </p>
                    </div>
                  </div>
                  <a href="online-video-meet.html">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </a>
                </div>
              </div>
              <div style={{ height: "100%" }}>
                <div className="Expert_Expert__cardContainer__2y7vz">
                  <div className="Expert_Expert__cardData__ocQ6N">
                    <div className="Expert_Expert__flexContainer__iCU0T">
                      <div className="Expert_Expert__imageContainer__zoZB6">
                        <img
                          alt="expertImage"
                          loading="lazy"
                          width={600}
                          height={373}
                          decoding="async"
                          data-nimg={1}
                          className="Expert_Expert__image__8wv_Z"
                          style={{ color: "transparent" }}
                          src="assets/img/home_2/tutorss.png"
                        />
                        <div className="Expert_Expert__ratingContainer__UIlw9">
                          <div>
                            <div className="Expert_icon_container__lDnua">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="url(#gradient)"
                              >
                                <linearGradient id="gradient">
                                  <stop offset="0%" stopColor="#FFC700" />
                                  <stop offset="100%" stopColor="#FF3D00" />
                                </linearGradient>
                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                              </svg>
                            </div>
                          </div>
                          <p className="Expert_ExpertRatingValue__2LPF2">4.5</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Hemant
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor for Master of Arts
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        4 Years Experience
                      </p>
                    </div>
                  </div>
                  <a href="online-video-meet.html">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="study_collegWrapper__qXs_p">
        <div className="study_collegeContainer__INeVI">
          <div className="study_dataSection__nZyfU">
            <div className="study_detailsPage__aSGLr">
              <div className="topuniversity_filter__EWbBt">
                <div>
                  <h6>Search By Filters</h6>
                  <div className="topuniversity_filter_main__b2Dto">
                    <div className="topuniversity_study_mode__MxEoA">
                      <div className="topuniversity_study_mode_select__eKz3p">
                        Study Mode
                      </div>
                      <div className="topuniversity_select_btn__Ew4vM">
                        <input type="checkbox" id="Online Programmes" />
                        <label
                          htmlFor="Online Programmes"
                          className="topuniversity_label_name__Ron3s"
                        >
                          Online Programmes
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="Online / Distance Programmes"
                        />
                        <label
                          htmlFor="Online / Distance Programmes"
                          className="topuniversity_label_name__Ron3s"
                        >
                          Online / Distance Programmes
                        </label>
                        <br />
                        <input type="checkbox" id="Distance Programmes" />
                        <label
                          htmlFor="Distance Programmes"
                          className="topuniversity_label_name__Ron3s"
                        >
                          Distance Programmes
                        </label>
                        <br />
                        <input type="checkbox" id="Executive Programmes" />
                        <label
                          htmlFor="Executive Programmes"
                          className="topuniversity_label_name__Ron3s"
                        >
                          Executive Programmes
                        </label>
                        <br />
                      </div>
                    </div>
                    <div
                      className="topuniversity_study_mode__MxEoA"
                      style={{ marginTop: 20 }}
                    >
                      <div className="topuniversity_study_mode_select__eKz3p">
                        Course Fee
                      </div>
                      <div className="topuniversity_input_range__0gw4x">
                        <p
                          style={{ marginTop: 30, fontSize: 14, height: 20 }}
                        />
                        <input
                          type="range"
                          min={0}
                          max={1000000}
                          name="fees"
                          defaultValue={500000}
                        />
                      </div>
                      <div className="topuniversity_ranges__b6dJv">
                        <p>0</p>
                        <p>10L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="study_detailsContainer__xkYZm">
                <div
                  className="study_maxWidth__jJbIL"
                  id="Leading International Colleges"
                >
                  <div className="abroad_main_container_cards__uzKDE">
                    {universities.map((uni) => (
                      <div
                        key={uni.id}
                        className="abroad_college_link__0oyJa product-card"
                      >
                        <div className="abroad_cards__81FQw">
                          <div>
                            <div className="abroad_card_img_container__s1_2Z">
                              <Image
                                alt="card-image"
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
                                  alt="college-icon"
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
                              <div className="abroad_per_year_fees__YXauv">
                                <p className="abroad_card_fees__HgBs0">
                                  Starting Fee: ₹{uni.fee.toLocaleString()}*
                                </p>
                                <div className="abroad_card_course__7MIhM">
                                  {uni.accreditations.map((acc, index) => (
                                    <span key={index}>
                                      {acc}
                                      {index < uni.accreditations.length - 1
                                        ? ", "
                                        : ""}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              className="abroad_add_to_compare_btn__p27Wp"
                              onClick={() => toggleCompare(uni)}
                            >
                              {compareList.some((item) => item.id === uni.id)
                                ? "Remove from Compare"
                                : "Add to Compare"}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Compare Button at Bottom */}
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
    </>
  );
}
