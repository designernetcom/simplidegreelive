"use client";
import Link from "next/link";
import Image from "next/image";
import "./explore.module.css"

const universities = [
  { name: "NMIMS UNIVERSITY", img: "nmis.jpg", link: "/college/nmims-cdoe" },
  {
    name: "AMITY UNIVERSITY",
    img: "amity.webp",
    link: "/college/amity-university-online",
  },
  {
    name: "DY PATIL UNIVERSITY",
    img: "dypatil.webp",
    link: "/college/dr-dy-patil-vidyapeeth",
  },
  {
    name: "MANIPAL UNIVERSITY",
    img: "manipal.webp",
    link: "/college/online-manipal-jaipur",
  },
  {
    name: "LPU UNIVERSITY",
    img: "lpu.webp",
    link: "/college/lovely-professional-university-odl-lpu",
  },
  {
    name: "JAIN UNIVERSITY",
    img: "jain.webp",
    link: "/college/jain-university-online",
  },
  {
    name: "CHANDIGARH UNI.",
    img: "cu.webp",
    link: "/college/symbiosis-centre-for-distance-learning",
  },
  {
    name: "IIM AHMEDABAD",
    img: "iima.webp",
    link: "/college/indian-institute-of-management-ahmedabad-iim-ahmedabad",
  },
  {
    name: "UPES UNIVERSITY",
    img: "ICFAi.webp",
    link: "/college/university-of-petroleum-and-energy-studies-centre-for-continued-education-upes",
  },
  {
    name: "O.P JINDAL UNI.",
    img: "op-jindal.jpg",
    link: "/college/op-jindal-global-university",
  },
  {
    name: "CHITKARA UNIVERSITY",
    img: "chitkara-logo.webp",
    link: "/college/chitkara-university-centre-for-continuing-education",
  },
  {
    name: "IIM RAIPUR UNI.",
    img: "iim-raipur.webp",
    link: "/college/indian-institute-of-management-raipur-iim-raipur",
  },
];

// Function to standardize university name length
const formatUniversityName = (name, maxLength = 56) => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength - 3) + "..."; // Truncate with ellipsis
  }
  return name.padEnd(maxLength, " "); // Pad with spaces
};

const ExploreUniversities = () => {
  return (
    <section className="unisec">
      <div className="td_height_25"></div>
      <div className="container">
        <div
          className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <div className="td_section_heading_left">
            {/* <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              <i></i> Browse Categories <i></i>
            </p> */}
            <h2 className="td_section_title td_fs_48 mb-0">
              Explore Universities
            </h2>
          </div>
          <div className="td_section_heading_right">
            <p className="td_section_subtitle td_fs_18 td_mb_16 td_heading_color td_opacity_9">
              Discover top universities offering diverse programs to help you
              achieve your career goals.
            </p>
          </div>
        </div>
        <div className="td_height_30 td_height_lg_30"></div>
        <div className="td_gap_y_24 grid-box">
          {universities.map((university, index) => (
            <div
              key={index}
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className="td_iconbox td_style_2 text-center td_hobble">
                <div className="td_iconbox_in td_hover_layer_4">
                  <div className="td_iconbox_icon td_mb_16">
                    <Image
                      src={`/assets/img/universities/${university.img}`}
                      alt={university.name}
                      width={150}
                      height={60}
                    />
                    <p
                      
                      style={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontStyle: "normal",
                        fontSize:"13px",
                        fontWeight:"600",
                      }}
                    >
                      {formatUniversityName(university.name)}
                    </p>
                  </div>
                </div>
                <a href={university.link} className="td_iconbox_link"></a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/top-university"
            className="td_btn td_style_1 td_radius_10 td_medium"
          >
            <span className="td_btn_in td_white_color td_accent_bg">
              View All
            </span>
          </Link>
        </div>
      </div>
      <div className="td_height_25"></div>
      <style jsx>{`
        // .grid-box {
        //   display: grid;
        //   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        //   gap: 24px;
        // }
        @media (max-width: 768px) {
          .grid-box {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 480px) {
          .grid-box {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 320px) {
          .grid-box {
            grid-template-columns: 1fr;
          }
        }
        .td_iconbox h6 {
          font-family: monospace; /* Ensures equal character width */
          white-space: pre; /* Preserves spaces for padding */
          font-size: 14px; /* Consistent font size for smaller screens */
        }
        .td_iconbox_icon img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default ExploreUniversities;
