"use client";

import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import styles from "./Slider.module.css";
import { Container, Row, Col } from "react-bootstrap";

const sliderData = [
  {
    title: "Your Future, Your Way – Apni Raah Khud Banayein!",
    subtitle:
      "Learn from the best, upgrade your skills, and unlock limitless opportunities with flexible online programs.",
    image: "/assets/img/tooper1.png",
  },
  {
    title: "Study Hard, Shine Bright – Kal Ko Banaye Behtar Aaj Se!",
    subtitle: "Grab It Now: Early Bird offer! ₹7000/- off On Admission",
    image: "/assets/img/tooper2.png",
  },
  {
    title: "10 Years of Excellence – Vishwas Ka Dus Saal Ka Safar!",
    subtitle:
      "A decade of trust, quality, and commitment in shaping bright futures. Join us and be a part of our legacy!",
    image: "/assets/img/tooper3.png",
  },
  {
    title:
      "All Colleges, One Destination – Har College Ka Admission Yahan Milega!",
    subtitle:
      "Your dedication and effort will shape a better future. Every step you take towards learning brings you closer to success.",
    image: "/assets/img/tooper4.png",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [studentCount, setStudentCount] = useState(60000);
  const intervalRef = useRef(null);
  const counterIntervalRef = useRef(null);

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }, 6000);
    };

    const startCounter = () => {
      counterIntervalRef.current = setInterval(() => {
        setStudentCount((prevCount) => Math.min(prevCount + 1, 99999));
      }, 2000);
    };

    startAutoSlide();
    startCounter();

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(counterIntervalRef.current);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % sliderData.length),
    onSwipedRight: () =>
      setIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  const formattedCount = studentCount.toString().padStart(5, "0");
  const countArray = formattedCount.split("");

  return (
    <div
      className={`remove-padding-mobile slider-container ${styles.sliderContainer}`}
      // style={{ paddingTop: "120px" }}
      {...swipeHandlers}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={true}
        indicators={true}
        interval={6000}
        wrap={true}
        className={styles.carousel}
        pause="hover"
      >
        {sliderData.map((item, idx) => (
          <Carousel.Item key={idx}>
            <section
              className="td_hero td_style_8 td_center faint-bg td_hobble bannersec"
              aria-label={`Slide ${idx + 1}: ${item.title}`}
            >
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={12} className="order-lg-2">
                    <div className="td_hero_img wow fadeIn text-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900} // Add back a reasonable default width
                        height={700} // Add back a reasonable default height (adjust ratio as needed)
                        layout="responsive"
                        priority={idx === 0}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={12} className="order-lg-1">
                    <div className="td_hero_text wow fadeInUp">
                      <h1 className="td_hero_title td_white_color td_fs_64 td_mb_24">
                        {item.title.split("–")[0]} –{" "}
                        <span className="texthindi">
                          {item.title.split("–")[1]}
                        </span>
                      </h1>
                      <p className="td_hero_subtitle td_fs_18 td_white_color td_opacity_7 td_mb_30">
                        {item.subtitle}
                      </p>
                      {idx === 1 && (
                        <>
                          <p style={{ fontSize: "25px" }}>
                            <b>Grab It Now: </b>Early Bird offer!
                          </p>
                          <p style={{ fontSize: "21px" }}>
                            ₹7000/- off On Admission
                          </p>
                        </>
                      )}
                    </div>
                    <div className={styles.formContainer}>
                      <div
                        className="banform"
                        style={{
                          width: "70%",
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "20px",
                          padding: "10px",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                      >
                        <input
                          type="text"
                          className="td_form_field td_mb_15 td_medium"
                          placeholder="Search for Colleges & Courses"
                          aria-label="Search for Colleges & Courses"
                          style={{
                            width: "100%",
                            borderRadius: "20px",
                            padding: "10px",
                            boxShadow:
                              "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }}
                        />
                        <button
                          className="td_circle_btn td_center"
                          type="button"
                          aria-label="Search"
                        >
                          <Image
                            src="/assets/img/icons/search_3.svg"
                            alt="Search Icon"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                      <div className="numboxes main-b">
                        <div
                          className="numboxes"
                          aria-label={`Students Counselled: ${studentCount}`}
                        >
                          {countArray.map((digit, digitIdx) => (
                            <div
                              key={digitIdx}
                              className="item itm"
                              style={{
                                padding: "10px 7px",
                                borderRadius: 10,
                              }}
                            >
                              {digit}
                            </div>
                          ))}
                        </div>
                        <div className="stuc">Students Counselled</div>
                        <span
                          className="live-button"
                          style={{
                            backgroundColor: "red",
                            color: "#fff",
                            fontSize: "11px",
                            fontWeight: 700,
                            paddingLeft: "19px",
                            paddingRight: "15px",
                            borderRadius: "5px",
                            zIndex: 10,
                          }}
                        >
                          Live
                        </span>
                      </div>
                      <div className="td_btns_group mt-3">
                        <a
                          href="https://onlinemba.simplidegree.com/"
                          className="td_btn td_style_1 td_radius_10 td_medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="td_btn_in td_heading_color td_white_bg">
                            Get Answered
                          </span>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
