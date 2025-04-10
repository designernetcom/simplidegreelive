"use client";
import Link from "next/link";
import Image from "next/image";

const universities = [
  { name: "NMIMS University", img: "nmis.jpg", link: "/college/nmims-cdoe" },
  {
    name: "AMITY University",
    img: "amity.jpg",
    link: "/college/amity-university-online",
  },
  {
    name: "DY PATIL UNIVERSITY",
    img: "dy-patil.jpg",
    link: "/college/dr-dy-patil-vidyapeeth",
  },
  {
    name: "ONLINE MANIPAL",
    img: "manipal.jpg",
    link: "/college/online-manipal-jaipur",
  },
  { name: "LPU ONLINE", img: "lpu.jpg", link: "lpu-online.html" },
  {
    name: "JAIN UNIVERSITY",
    img: "jgi-jain.jpg",
    link: "/college/lovely-professional-university-odl-lpu",
  },
  {
    name: "CHANDIGARH UNI.",
    img: "chandigarh.jpg",
    link: "/college/symbiosis-centre-for-distance-learning",
  },
  {
    name: "IIM AHMEDABAD",
    img: "iima.jpg",
    link: "/college/indian-institute-of-management-ahmedabad-iim-ahmedabad",
  },
  // { name: "ICFAI CDOE", img: "icfai.jpg", link: "icfai-university.html" },
  {
    name: "UPES UNIVERSITY",
    img: "upes.jpg",
    link: "/college/university-of-petroleum-and-energy-studies-centre-for-continued-education-upes",
  },
  {
    name: "O.P JINDAL UNI.",
    img: "op-jindal.jpg",
    link: "/college/jain-university-online",
  },
  {
    name: "CHITKARA UNI.",
    img: "chitkara.jpg",
    link: "/college/chitkara-university-centre-for-continuing-education",
  },
  {
    name: "IIM RAIPUR ",
    img: "iim-raipur.jpg",
    link: "/college/indian-institute-of-management-raipur-iim-raipur",
  },
];

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
            <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
              <i></i> Browse Categories <i></i>
            </p>
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
                      height={100}
                    />
                    <h6>{university.name}</h6>
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
              <span>View All</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="td_height_25"></div>
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-box {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ExploreUniversities;
