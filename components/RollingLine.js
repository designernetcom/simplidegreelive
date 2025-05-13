"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
// import "animate.css";

const RollingLine = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then((WOW) => {
        new WOW.WOW().init();
      });
    }
  }, []);

  const features = [
    {
      //   icon: "/assets/img/home_2/cs_rate_feature_icon_1.svg",
      title: "82 % seats are filled",
      //   description:
      //     "Explore a vast range of subjects and enhance your knowledge.",
    },
    {
      //   icon: "/assets/img/home_2/cs_rate_feature_icon_2.svg",
      title: "Last date admission 17 may",
      //   description: "Learn from industry leaders and experienced professionals.",
    },
    {
      title: "82 % seats are filled",
    },
    {
      title: "Last date admission 17 may",
    },
    {
      title: "82 % seats are filled",
    },
    {
      title: "Last date admission 17 may",
    },
    {
      title: "82 % seats are filled",
    },
    {
      title: "Last date admission 17 may",
    },
    {
      title: "82 % seats are filled",
    },
    {
      title: "Last date admission 17 may",
    },
    {
      title: "82 % seats are filled",
    },

    {
      title: "Last date of admission: 17 may",
    },
  ];

  return (
    <section
      className="td_accent_bg td_rate_section wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
      style={{ borderRadius: "20px", background: "#2f7ebf" }}
    >
      <div className="td_rate_heading td_fs_20 td_semibold td_white_color">
    
        <div className="td_rating_wrap">
          <div className="td_rating" data-rating="5">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={regularStar}
                className="fa-regular"
              />
            ))}
            <div className="td_rating_percentage">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={solidStar}
                  className="fa-solid fa-fw"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="td_rate_feature_list_wrap">
        <div className="td_moving_box_wrap">
          <div className="td_moving_box_in">
            {[...Array(2)].map((_, boxIndex) => (
              <div key={boxIndex} className="td_moving_box">
                <ul className="td_rate_feature_list td_mp_0">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <div
                        className="td_rate_feature_icon td_center td_white_bg"
                        style={{
                          color: "#fff",
                        }}
                      >
                        {/* <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={50}
                          height={50}
                        /> */}
                      </div>
                      <div className="td_rate_feature_right">
                        <h3
                          className="td_fs_24 td_semibold td_white_color td_mb_4"
                          style={{
                            color: "#fff",
                          }}
                        >
                          {feature.title}
                        </h3>
                        {/* <p
                          className="mb-0 td_white_color"
                          style={{
                            color: "#fff",
                          }}
                        >
                          {feature.description}
                        </p> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollingLine;
