"use client"; // Add this if using Next.js App Router and this is a client component

import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import styles from "./Slider.module.css";

const sliderData = [
  {
    title: "Your Future, Your Way – Apni Raah Khud Banayein!",
    subtitle:
      "Learn from the best, upgrade your skills, and unlock limitless opportunities with flexible online programs.",
    image: "/assets/img/b2.png",
  },
  {
    title: "Study Hard, Shine Bright – Kal Ko Banaye Behtar Aaj Se!",
    subtitle: "Grab It Now: Early Bird offer! ₹7000/- off On Admission",
    image: "/assets/img/b1.png",
  },
  {
    title: "10 Years of Excellence – Vishwas Ka Dus Saal Ka Safar!",
    subtitle:
      "A decade of trust, quality, and commitment in shaping bright futures. Join us and be a part of our legacy!",
    image: "/assets/img/b4.png",
  },
  {
    title:
      "All Colleges, One Destination – Har College Ka Admission Yahan Milega!",
    subtitle:
      "Your dedication and effort will shape a better future. Every step you take towards learning brings you closer to success.",
    image: "/assets/img/simpli d banner 7.png",
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
        setStudentCount((prevCount) => Math.min(prevCount + 1, 99999)); // Cap at 99999
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
    trackMouse: true, // Enable for desktop too
    preventDefaultTouchmoveEvent: true,
  });

  const formattedCount = studentCount.toString().padStart(5, "0");
  const countArray = formattedCount.split("");

  return (
    <div
      className={`remove-padding-mobile slider-container ${styles.sliderContainer}`}
      style={{ paddingTop: "120px" }}
      {...swipeHandlers}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={true}
        indicators={true} // Changed to true for better UX
        interval={6000} // Auto-slide every 6 seconds
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
              <div className="container">
                <div className="td_hero_img wow fadeIn text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    layout="responsive"
                    priority={idx === 0} // Preload first image
                  />
                </div>
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
                </div>
                <div className={styles.formContainer}>
                  <div className="banform">
                    <input
                      type="text"
                      className="td_form_field td_mb_15 td_medium"
                      placeholder="Search for Colleges & Courses"
                      aria-label="Search for Colleges & Courses"
                    />
                    <button
                      className="td_circle_btn td_center td_search_tobble_btn"
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
                    <span className="live-button">Live</span>
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
              </div>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
