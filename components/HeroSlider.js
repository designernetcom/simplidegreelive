"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.module.css";


const HeroSlider = () => {
  const slides = [
    {
      text1: "Grab It Now: Early Bird Offer!",
      text2: "₹ 7000/- Off On Admissions*",
      hashtagImg: "/assets/img/batch.webp",
      mainImg: "/assets/img/simpli_d_banner.png",
      hashtagWidth: 663,
      hashtagHeight: 238,
      mainWidth: 953,
      mainHeight: 998,
    },
    {
      text1: "10 Years of Excellence",
      text2: "Vishwas Ka Dus Saal Ka Safar!",
      hashtagImg: "/assets/img/poster1.webp",
      mainImg: "/assets/img/b1.png",
      hashtagWidth: 653,
      hashtagHeight: 215,
      mainWidth: 986,
      mainHeight: 763,
      link: "/colleges",
    },
    {
      text1: "Study Hard, Shine Bright",
      text2: "Kal Ko Banaye Behtar Aaj Se!",
      hashtagImg: "/assets/img/poster.webp",
      mainImg: "/assets/img/b4.png",
      hashtagWidth: 559,
      hashtagHeight: 215,
      mainWidth: 687,
      mainHeight: 696,
    },
  ];

  return (
    <div
      className="Hero_relative__x641X {`remove-padding-mobile slider-container ${styles.sliderContainer}`}"
     
    >
      <div className="Hero_newheroContainer__lAPRu">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="Hero_card__ynLLv">
              <div className="Hero_heroMain__dP9sl">
                <div>
                  <div className="Hero_searchContent__wSOwy">
                    <div className="Hero_searchContentBox__mTqoR">
                      <div>
                        <div className="counter_countercontainer__CiYqi">
                          <div className="counter_counter__W_2Wz">
                            <div className="counter_digit__L6cff">6</div>
                            <div className="counter_digit__L6cff">0</div>
                            <div className="counter_digit__L6cff">0</div>
                            <div className="counter_digit__L6cff">0</div>
                            <div className="counter_digit__L6cff">0</div>
                      
                            <div
                              className="counter_livetextbanner__Vykhp"
                              style={{
                                position: "absolute",
                                top: "-12px",
                                right: "-30px",
                                backgroundColor: "red",
                                color: "#fff",
                                fontSize:"10px",
                                fontWeight: 700,
                                padding: "2px 9px",
                                borderRadius: "5px",
                                zIndex: 10,
                              }}
                            >
                              · LIVE
                            </div>
                          </div>
                          <div className="counter_counterlabel__r7_fx">
                            STUDENTS COUNSELLED
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="SearchBar_searchWrapper__zmgjs">
                          <div className="SearchBar_searchBar__lYNNN">
                            <div className="SearchBar_Hero_input__VYpfM">
                              Search for colleges and courses
                            </div>
                            <div className="SearchBar_Hero_iconContainer__psyvf">
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="SearchBar_Hero_icon__Wmwe2"
                                height="1em"
                                width="1em"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Hero_textContainer__zTKJs">
                      <div className="Hero_Hero_text_1__tiOzY">
                        <strong>{slide.text1.split(":")[0]}:</strong>
                        {slide.text1.split(":")[1]}
                      </div>
                      <div className="Hero_Hero_text_2__pG74x">
                        {slide.text2}
                      </div>
                      <div className="Hero_hashtag__ky4R9">
                        <Image
                          src={slide.hashtagImg}
                          alt="hashtag"
                          width={slide.hashtagWidth}
                          height={slide.hashtagHeight}
                          quality={75}
                          loading="lazy"
                        />
                      </div>
                      <div className="Hero_made__edb3d">
                        <div>MADE IN INDIA WITH</div>
                        <div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            color="red"
                            style={{ color: "red" }}
                            height="1em"
                            width="1em"
                          >
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Hero_imgCont__lhqFP">
                  {slide.link ? (
                    <a href={slide.link}>
                      <Image
                        src={slide.mainImg}
                        alt={`slide${index + 1}`}
                        width={slide.mainWidth}
                        height={slide.mainHeight}
                        quality={75}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </a>
                  ) : (
                    <Image
                      src={slide.mainImg}
                      alt={`slide${index + 1}`}
                      width={slide.mainWidth}
                      height={slide.mainHeight}
                      quality={75}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
