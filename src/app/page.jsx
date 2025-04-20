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
import "./styles/e881ba373a433cf6.css";
import "./styles/afc7461932b964d5.css";
import "./styles/cc9687947ca46cf2.css";
import "./styles/42402eb91a3d915c.css"
import Link from "next/link";
import Menu from "../../components/Header/Menu/Menu";
import Slider from "../../components/Slider";
import CollegeCards from "../../components/CollegeCards";
import TestimonialSlider from "../../components/TestimonialSlider";

import HeroSlider from "../../components/HeroSlider";
import BrowseCourses from "../../components/BrowseCourses";
import Footer from "../../components/Footer/Footer";
import TrustpilotRating from "../../components/TrustpilotRating";
import ExploreUniversities from "../../components/ExploreUniversities";

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

      <HeroSlider />
      <TrustpilotRating />

      <div className="AllCollegeCards_college_card_container__Ts4Zo {styles.collegeCardContainer}">
        <div className="AllCollegeCards_college_grid_container__PA9Ro {styles.collegeGridContainer}">
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/amity-university-online"
          >
            <img
              alt="AMITY UNIVERSITY"
              fetchpriority="high"
              loading="eager"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/amity.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              AMITY UNIVERSITY
            </p>
          </a>

          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/dy-patil-university-pune-online"
          >
            <img
              alt="DY PATIL UNIVERSITY"
              fetchpriority="high"
              loading="eager"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/dypatil.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              DY PATIL UNIVERSITY
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/iim-ahmedabad"
          >
            <img
              alt="IIM AHMEDABAD"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/iima.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              IIM AHMEDABAD
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/icfai-cdoe"
          >
            <img
              alt="ICFAI CDOE"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/ICFAi.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              ICFAI CDOE
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/jain-university-online"
          >
            <img
              alt="JAIN UNIVERSITY"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/jain.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              JAIN UNIVERSITY
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/online-manipal-jaipur"
          >
            <img
              alt="ONLINE MANIPAL"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/manipal.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              ONLINE MANIPAL
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/upes-university-online"
          >
            <img
              alt="UPES UNIVERSITY"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/upes.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              UPES UNIVERSITY
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/op-jindal-global-university"
          >
            <img
              alt="O.P JINDAL UNI."
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/op-jindal.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              O.P JINDAL UNI.
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/chitkara-university-online"
          >
            <img
              alt="CHITKARA UNI."
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/chitkara-logo.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              CHITKARA UNI.
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/lpu-distance-education"
          >
            <img
              alt="LPU ONLINE"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/lpu.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              LPU ONLINE
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/imt-cdl-ghaziabad"
          >
            <img
              alt="IMT CDL"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/amity.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              IMT CDL
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/iim-raipur"
          >
            <img
              alt="IIM RAIPUR"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/iim-raipur.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              IIM RAIPUR
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/online-uttaranchal-university"
          >
            <img
              alt="ONLINE UU"
              loading="lazy"
              width={145}
              height={45}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/amity.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              ONLINE UU
            </p>
          </a>
          <a
            className="AllCollegeCards_college_indi_card__d9m_r"
            href="/colleges/chandigarh-university-online"
          >
            <img
              alt="CHANDIGARH UNI."
              fetchpriority="high"
              loading="eager"
              width={145}
              height={25}
              decoding="async"
              data-nimg={1}
              className="AllCollegeCards_college_indi_card_img__8_YF2"
              style={{ color: "transparent" }}
              src="/assets/img/universities/cu.webp"
            />
            <p className="AllCollegeCards_college_indi_card_name__25zbO">
              CHANDIGARH UNI.
            </p>
          </a>
        </div>
        <div className="AllCollegeCards_viewallcontainer__yIVAn">
          <a className="AllCollegeCards_viewAll__AEokp" href="/colleges">
            View All Colleges
          </a>
        </div>
      </div>

      <div>
        <div
          className="BrowseCourse_home_browse_container__tQp9L"
          id="brCourses"
        >
          <div className="BrowseCourse_home_browse_heading_container__EJAFM">
            <div className="BrowseCourse_home_browse_heading_img_container__gqEkj">
              <div>
                <div>
                  <h2 className="BrowseCourse_home_browse_heading__10RSs">
                    EXPLORE OUR COURSES &amp; BE AWESOME
                  </h2>
                </div>
                {/* <div>
              <p class="BrowseCourse_home_browse_sub_heading__IbpwW">
                Select the category and compare the university
              </p>
            </div> */}
              </div>
            </div>
            <div />
          </div>
          <div>
            <div className="BrowseCourse_home_browse_course_container__PlZ71">
              <div className="BrowseCourse_home_browse_course_list_main_box__2D0BM">
                <div
                  className="BrowseCourse_home_course_list_single_box__d92j6 BrowseCourse_bgColor__zDC4o"
                  style={{ color: "white" }}
                >
                  <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                    <span>
                      {" "}
                      <Link href="/online-pg-programmes">
                        Online PG Programmes
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="BrowseCourse_home_course_list_single_box__d92j6">
                  <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                    <span>
                      <Link href="/online-ug-programmes">
                        Online UG Programmes
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="BrowseCourse_home_course_list_single_box__d92j6">
                  <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                    <span>
                      <Link href="/diploma-Courses">Diploma Courses</Link>
                    </span>
                  </div>
                </div>
                <div className="BrowseCourse_home_course_list_single_box__d92j6">
                  <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                    <span>
                      <Link href="/executive-programmes">
                        Executive Programmes
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="BrowseCourse_home_course_list_single_box__d92j6">
                  <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                    <span>
                      <Link
                        href="/international-programmes"
                        className="text-blue-500 font-semibold hover:underline"
                      >
                        International Programmes
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="BrowseCourse_home_course_list_single_box__d92j6">
                  <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                    <span>
                      {" "}
                      <Link
                        href="/free-courses"
                        className="text-blue-500 font-semibold hover:underline"
                      >
                        Free Courses
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="BrowseCourse_course_grid_box__h2DdU">
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/online-mba" passHref>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="Online MBA"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/OnlineMBA.png"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Online MBA
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/online-mca" passHref>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="Online MCA"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/OnlineMCA.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Online MCA
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/online-mcom" passHref>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="Online MCom"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/OnlineBCom.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Online MCom
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/online-msc" passHref>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="Online MSc"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/OnlineMSc.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Online MSc
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/online-ma" passHref>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="Online MA"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/OnlineMA.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Online MA
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/online-acca-mcom" passHref>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="M.Com with ACCA"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/OnlineMCom.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          M.Com with ACCA
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/distance-mba" passHref>
                    <div
                      className="BrowseCourse_browse_course_card_top_container__4dzBP"
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <img
                          alt="Distance MBA"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/DistanceMBA.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Distance MBA
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/distance-mca" passHref>
                    <div
                      className="BrowseCourse_browse_course_card_top_container__4dzBP"
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <img
                          alt="Distance MCA"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/DistanceMCA.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Distance MCA
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link href="/courses/distance-mcom" passHref>
                    <div
                      className="BrowseCourse_browse_course_card_top_container__4dzBP"
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <img
                          alt="Distance MCom"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/DistanceMCom.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Distance MCom
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 2 Years
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
                <div className="BrowseCourse_browse_course_card__6O_U1">
                  <Link
                    href="/courses/master-of-library-and-information-science"
                    passHref
                  >
                    <div
                      className="BrowseCourse_browse_course_card_top_container__4dzBP"
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <img
                          alt="Distance MLIS"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          data-nimg={1}
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          Distance MLIS
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 1 Year
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="BrowseCourse_browse_course_card_view__wBC_X">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="td_gray_bg_4 home-courses">
          <div className="td_height_10" />
          <div className="container">
            <div className="td_tabs td_style_1">
              <div
                className="td_section_heading td_style_1 td_type_2 td_with_tab_menu wow fadeInUp justify-content-center"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div>
                  <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color text-center">
                    <i />
                    Latest courses
                    <i />
                  </p>
                  <h2 className="td_section_title td_fs_48 mb-0">
                    EXPLORE BEST COURSES FROM TOP UNIVERSITIES
                  </h2>
                </div>
              </div>
              <div className="td_height_50 td_height_lg_50" />
              <div className="td_tab_body">
                <div className="td_tab active" id="td_tab_1">
                  <div className="row td_gap_y_30 td_row_gap_30">
                    <div className="col-lg-4 col-md-6">
                      <div className="td_card td_style_5 td_type_1">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <span className="td_card_thumb_in">
                            <img
                              src="/assets/img/universities/college-images-and-logo-05.jpg"
                              alt="NMIMS"
                              style={{
                                border: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </span>
                        </a>
                        <div className="td_card_content">
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                              <li>
                                <img
                                  src="/assets/img/icons/book.svg"
                                  alt="Book Icon"
                                  style={{
                                    border: "0",
                                    maxWidth: "100%",
                                    height: "auto",
                                  }}
                                />
                                <span className="td_opacity_7">
                                  4 Semesters
                                </span>
                              </li>
                            </ul>
                          </a>
                          <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                            <Link href="/college/nmims-cdoe">
                              2 years Online MBA – NMIMS Online
                            </Link>
                          </h2>
                          <br />
                          <p>
                            2,20,000/- For 2 Years <br />
                            Approved / Recognized By: UGC / DEB
                          </p>
                          <div className="td_card_btns_wrap">
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="spnm"
                            >
                              <span>
                                <span>Enroll Now</span>
                              </span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <span className="btnw">
                                <span>Download Brochure</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="td_card td_style_5 td_type_1">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <span className="td_card_thumb_in">
                            <img
                              src="/assets/img/mba-distance/amity.jpg"
                              alt="Amity University"
                              style={{
                                border: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </span>
                        </a>
                        <div className="td_card_content">
                          <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                            <li>
                              <img
                                src="/assets/img/icons/book.svg"
                                alt="Book Icon"
                              />
                              <span className="td_opacity_7">4 Semesters</span>
                            </li>
                          </ul>
                          <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                            <Link href="/college/amity-university-online">
                              2 years Online MBA – Amity University Online
                            </Link>
                          </h2>
                          <p>
                            Rs.1,99,000/- For 2 Years <br />
                            Approved / Recognized By: UGC
                          </p>
                          <div className="td_card_btns_wrap">
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="spnm"
                            >
                              <span>
                                <span>Enroll Now</span>
                              </span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <span className="btnw">
                                <span>Download Brochure</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="td_card td_style_5 td_type_1">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <span className="td_card_thumb_in">
                            <img
                              src="/assets/img/universities/dpu-200x400-1.jpg"
                              alt="DPU"
                              style={{
                                border: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </span>
                        </a>
                        <div className="td_card_content">
                          <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                            <li>
                              <img
                                src="/assets/img/icons/book.svg"
                                alt="Book Icon"
                                style={{
                                  border: "0",
                                  maxWidth: "100%",
                                  height: "auto",
                                }}
                              />
                              <span className="td_opacity_7">4 Semesters</span>
                            </li>
                          </ul>
                          <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                            <Link href="/college/dr-dy-patil-vidyapeeth">
                              2 years Online MBA – DPU
                            </Link>
                          </h2>
                          <br />
                          <p>
                            1,89,400/- For 2 Years <br />
                            Approved / Recognized By: UGC / DEB
                          </p>
                          <div className="td_card_btns_wrap">
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="spnm"
                            >
                              <span>
                                <span>Enroll Now</span>
                              </span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <span className="btnw">
                                <span>Download Brochure</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="td_card td_style_5 td_type_1">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <span className="td_card_thumb_in">
                            <img
                              src="/assets/img/mba-distance/manipal.jpg"
                              alt="Manipal"
                              style={{
                                border: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </span>
                        </a>
                        <div className="td_card_content">
                          <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                            <li>
                              <img
                                src="/assets/img/icons/book.svg"
                                alt="Book Icon"
                                style={{
                                  border: "0",
                                  maxWidth: "100%",
                                  height: "auto",
                                }}
                              />
                              <span className="td_opacity_7">4 Semesters</span>
                            </li>
                          </ul>
                          <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                            <Link href="/college/online-manipal-jaipur">
                              2 years Online MBA – Manipal
                            </Link>
                          </h2>
                          <p>
                            1,75,000/- For 2 Years <br />
                            Approved / Recognized By: UGC
                          </p>
                          <div className="td_card_btns_wrap">
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="spnm"
                            >
                              <span>
                                <span>Enroll Now</span>
                              </span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <span className="btnw">
                                <span>Download Brochure</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="td_card td_style_5 td_type_1">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <span className="td_card_thumb_in">
                            <img
                              src="/assets/img/mba-distance/lpu.jpg"
                              alt="LPU"
                              style={{
                                border: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </span>
                        </a>
                        <div className="td_card_content">
                          <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                            <li>
                              <img
                                src="/assets/img/icons/book.svg"
                                alt="Book Icon"
                              />
                              <span className="td_opacity_7">4 Semesters</span>
                            </li>
                          </ul>
                          <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                            <Link href="/college/lovely-professional-university-odl-lpu">
                              2 years Online MBA – LPU Online
                            </Link>
                          </h2>
                          <p>
                            1,80,000/- For 2 Years <br />
                            Approved / Recognized By: UGC
                          </p>
                          <div className="td_card_btns_wrap">
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="spnm"
                            >
                              <span>
                                <span>Enroll Now</span>
                              </span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <span className="btnw">
                                <span>Download Brochure</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="td_card td_style_5 td_type_1">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <span className="td_card_thumb_in">
                            <img
                              src="/assets/img/mba-distance/symbiosis.jpg"
                              alt="Symbiosis"
                              style={{
                                border: "0",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </span>
                        </a>
                        <div className="td_card_content">
                          <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
                            <li>
                              <img
                                src="/assets/img/icons/book.svg"
                                alt="Book Icon"
                              />
                              <span className="td_opacity_7">4 Semesters</span>
                            </li>
                          </ul>
                          <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
                            <Link href="/college/symbiosis-centre-for-distance-learning">
                              2 years Online MBA – SSODL
                            </Link>
                          </h2>
                          <p>
                            3,00,000/- For 2 Years <br />
                            Approved / Recognized By: UGC/AICTE
                          </p>
                          <div className="td_card_btns_wrap">
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="spnm"
                            >
                              <span>
                                <span>Enroll Now</span>
                              </span>
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <span className="btnw">
                                <span>Download Brochure</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link
                        href="/top-university"
                        className="td_btn td_style_1 td_radius_10 td_medium"
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>View All</span>
                          <svg
                            width={19}
                            height={20}
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.1575 4.34302L3.84375 15.6567"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="td_height_50 td_height_lg_40" />
              </div>
            </div>
          </div>
        </section>
        <div className="ImageSlider_sliderContainer__mlhoZ">
          <div className="ImageSlider_sliderWrapper__nAFir">
            <div className="ImageSlider_slideGrid__NwM1v">
              <a className="ImageSlider_slide__N_u17" href="/colleges">
                <div className="ImageSlider_imageWrapper__w1Nxx">
                  <img
                    alt="Slide 1"
                    fetchPriority="high"
                    width={640}
                    height={305}
                    decoding="async"
                    data-nimg={1}
                    className="ImageSlider_slideImage__V_iD1"
                    style={{ color: "transparent" }}
                    src="assets/simpli-images/1.webp"
                  />
                </div>
              </a>
              <a className="ImageSlider_slide__N_u17" href="/online-video-meet">
                <div className="ImageSlider_imageWrapper__w1Nxx">
                  <img
                    alt="Slide 2"
                    fetchPriority="high"
                    width={640}
                    height={305}
                    decoding="async"
                    data-nimg={1}
                    className="ImageSlider_slideImage__V_iD1"
                    style={{ color: "transparent" }}
                    src="assets/simpli-images/2.webp"
                  />
                </div>
              </a>
              <a className="ImageSlider_slide__N_u17" href="/ai-college-finder">
                <div className="ImageSlider_imageWrapper__w1Nxx">
                  <img
                    alt="Slide 3"
                    fetchPriority="high"
                    width={640}
                    height={305}
                    decoding="async"
                    data-nimg={1}
                    className="ImageSlider_slideImage__V_iD1"
                    style={{ color: "transparent" }}
                    src="assets/simpli-images/3.webp"
                  />
                </div>
              </a>
            </div>
          </div>
          <button
            className="ImageSlider_navButton__AOJvJ ImageSlider_prevButton__mDjpr"
            aria-label="Previous slide"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="ImageSlider_navIcon__j99zf"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
            </svg>
          </button>
          <button
            className="ImageSlider_navButton__AOJvJ ImageSlider_nextButton__qtGxb"
            aria-label="Next slide"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="ImageSlider_navIcon__j99zf"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
            </svg>
          </button>
        </div>
        <div className="UsefulTools_usefultools_container__0usj7">
          <p className="UsefulTools_usefultools_subheading__P4IkQ">
            Making Your Life Easy
          </p>
          <h2 className="UsefulTools_usefultools_heading__T1fgC">
            USEFUL TOOLS
          </h2>
          <div className="UsefulTools_toolGrid__sVhb_">
            <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 384 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M109.25 173.25c24.99-24.99 24.99-65.52 0-90.51-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 25 25 65.52 25 90.51 0zm256 165.49c-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 24.99 24.99 65.52 24.99 90.51 0 25-24.99 25-65.51 0-90.51zm-1.94-231.43l-22.62-22.62c-12.5-12.5-32.76-12.5-45.25 0L20.69 359.44c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.25 0l274.75-274.75c12.5-12.49 12.5-32.75 0-45.25z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  SGPA to Percentage Calculator
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a>
            <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  CGPA to Percentage Calculator
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a>
            <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  GMAT Percentile Calculator
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a>
            <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 640 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  Exam Eligibility Calculator
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a>
            <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  Neet Rank Predictor
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a>
            <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  SGPA To CGPA Converter
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a>
            {/* <a href className="UsefulTools_toolLink__ztevN">
              <div className="UsefulTools_toolCard__fe_ci">
                <div className="UsefulTools_iconWrapper__hAyFp">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="UsefulTools_icon__wppRA"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path>
                  </svg>
                </div>
                <h3 className="UsefulTools_toolName___I8lN">
                  GPA - Anna University
                </h3>
                <div className="UsefulTools_buttonWrapper__hoyza">
                  <span className="UsefulTools_buttonText__LGVjG">
                    Use Calculator →
                  </span>
                </div>
              </div>
            </a> */}
          </div>
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
                          src="/assets/img/tutor-new-3.png"
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
                          <p className="Expert_ExpertRatingValue__2LPF2">4.7</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        {" "}
                        Rekha{" "}
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        3 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
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
                          src="/assets/img/tutor-new-1.png"
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
                          <p className="Expert_ExpertRatingValue__2LPF2">4.6</p>
                        </div>
                      </div>
                      <p className="Expert_Expert__card_text_1__NI_Zc">
                        Vaishali
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        8 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
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
                          src="/assets/img/tutor-new-2.png"
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
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        6 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
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
                          src="/assets/img/tutot-new-4.png"
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
                        Krishna
                      </p>
                      <p className="Expert_Expert__card_text_2__jOGNC">
                        Sr. Mentor
                      </p>
                      <p className="Expert_Expert__card_text_3__7CvA2">
                        4 Years Experience
                      </p>
                    </div>
                  </div>
                  <Link href="/freecounseling">
                    <button className="Expert_Expert__cardButton__cRBRJ">
                      Consult Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhyUs_container__jG_LS">
          <div className="WhyUs_heroSection__fE4YP">
            <div className="WhyUs_leftSection__dvECi">
              <div className="WhyUs_experienceCard__mZ824">
                <div className="WhyUs_experienceContent__bU0un">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 256 256"
                    className="WhyUs_timeIcon__ie8GL"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z" />
                  </svg>
                  <div>
                    <p>60,000+</p>
                    <span>Enrolled Students</span>
                  </div>
                </div>
              </div>
              <div className="WhyUs_imageWrapper__UfsSb">
                <img
                  alt="Student studying"
                  fetchPriority="high"
                  width={450}
                  height={620}
                  decoding="async"
                  data-nimg={1}
                  className="WhyUs_image__pqSOt"
                  style={{ color: "transparent" }}
                  src="assets/simpli-images/220-SM625328.jpg"
                />
              </div>
            </div>
            <div className="WhyUs_rightSection__MwuY5">
              <div className="WhyUs_imageWrapper__UfsSb">
                <img
                  alt="Teacher helping student"
                  loading="lazy"
                  width={450}
                  height={320}
                  decoding="async"
                  data-nimg={1}
                  className="WhyUs_image__pqSOt"
                  style={{ color: "transparent" }}
                  src="assets/simpli-images/complete-hosting-solution.webp"
                />
              </div>
              <div className="WhyUs_reviewCard__hFj11">
                <div className="WhyUs_avatarGroup__hCobu">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="WhyUs_timeIcon__ie8GL"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="WhyUs_reviewHeader__1G6H9">
                    <span>100+</span>
                  </div>
                  <p>Expert Counsellors</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="WhyUs_aboutSection__oJ_R3">
              <p className="WhyUs_aboutHeader__kzyyu">
                Why We're The Front Runners
              </p>
              <h2 className="WhyUs_mainTitle__Y5jRZ">BEYOND COMPARISON</h2>
              <p className="WhyUs_description__y2f5_">
                Having over 10 years of experience in the EdTech industry, our
                seasoned professionals have helped over 60,800 individuals to
                realise their dreams. We help professionals find the right
                course based upon their interests and passions.
              </p>
            </div>
            <div>
              <div className="FeatureCards_grid__eohS1">
                <div className="FeatureCards_card__nomhR FeatureCards_blue__Zui4W">
                  <div className="FeatureCards_iconContainer__nJWtY">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="FeatureCards_icon__xRWQo"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                    </svg>
                  </div>
                  <h3 className="FeatureCards_title__2rUbs">
                    Build Your Career
                  </h3>
                  <p className="FeatureCards_description__WKAA2">
                    Advance your career with flexible online courses.
                  </p>
                </div>
                <div className="FeatureCards_card__nomhR FeatureCards_yellow__UlRWd">
                  <div className="FeatureCards_iconContainer__nJWtY">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 576 512"
                      className="FeatureCards_icon__xRWQo"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" />
                    </svg>
                  </div>
                  <h3 className="FeatureCards_title__2rUbs">
                    Grow Your Skills
                  </h3>
                  <p className="FeatureCards_description__WKAA2">
                    Develop expertise anytime, anywhere.
                  </p>
                </div>
                <div className="FeatureCards_card__nomhR FeatureCards_yellow__UlRWd">
                  <div className="FeatureCards_iconContainer__nJWtY">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 640 512"
                      className="FeatureCards_icon__xRWQo"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
                    </svg>
                  </div>
                  <h3 className="FeatureCards_title__2rUbs">
                    Personalized Guidance
                  </h3>
                  <p className="FeatureCards_description__WKAA2">
                    Get customised advice for your goals.
                  </p>
                </div>
                <div className="FeatureCards_card__nomhR FeatureCards_blue__Zui4W">
                  <div className="FeatureCards_iconContainer__nJWtY">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 640 512"
                      className="FeatureCards_icon__xRWQo"
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
                    </svg>
                  </div>
                  <h3 className="FeatureCards_title__2rUbs">Stay Updated</h3>
                  <p className="FeatureCards_description__WKAA2">
                    Keep up with the latest industry trends.
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="WhyUs_exploreButton__CFVYV"
              href="/freecounseling" // Adjusted for Next.js routing
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true" // Hides SVG from screen readers since it’s decorative
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Connect with Experts</span>{" "}
              {/* Wrapped in span for clarity */}
            </Link>
          </div>
        </div>
        {/* <div className="TestimonialSlider_container__Je36b">
          <div className="TestimonialSlider_wrapper__IvjzI">
            <div className="TestimonialSlider_header__znYD7">
              <h3 className="TestimonialSlider_label__z2WhH">
                Trusted Feedback
              </h3>
              <h2 className="TestimonialSlider_title__I_aMr">
                Check What Students Think Of Us
              </h2>
              <div className="TestimonialSlider_navigation__cQfS8">
                <button
                  className="TestimonialSlider_navButton__Cflns"
                  aria-label="Previous testimonial"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
                  </svg>
                </button>
                <div className="TestimonialSlider_progressBar__pQdwb">
                  <div
                    className="TestimonialSlider_progressFill__TJBB8"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
            <div className="TestimonialSlider_testimonialGrid__jr3sh">
              <div className="TestimonialSlider_testimonialCard__rAlFM TestimonialSlider_visible__zceg4">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/assets/img/png-clipart-student-student-thumbnail.png"
                      alt="Anaya Misra"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Anaya Misra
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (WNS Technologies Pvt Ltd.)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      I’ve taken many online courses, but nothing compares to
                      Simpli Degree. The real-world case studies and simulations
                      made learning fun and relevant. I’m now more confident in
                      my skills than ever before!
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM TestimonialSlider_visible__zceg4">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/assets/img/feedback.png"
                      alt="Pratik Sharma"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Pratik Sharma
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">(HDFC Bank)</p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      I’ve taken many online courses, but nothing compares to
                      Simpli Degree. The real-world case studies and simulations
                      made learning fun and relevant. I’m now more confident in
                      my skills than ever before!
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/HomePage/Namita.webp"
                      alt="Namita Khandelwal"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Namita Khandelwal
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (Deloitte India)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      I’ve taken many online courses, but nothing compares to
                      Simpli Degree. The real-world case studies and simulations
                      made learning fun and relevant. I’m now more confident in
                      my skills than ever before!
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/HomePage/Piyush.webp"
                      alt="Piyush Sharma"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Piyush Sharma
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (Biocon Ltd.)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      Thanks Team for all the assistance and support they
                      provided in my 2-year PGDM programme. Overall it was a
                      good experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <TestimonialSlider /> */}
        <div className="TestimonialSlider_container__Je36b">
          <div className="TestimonialSlider_wrapper__IvjzI">
            <div className="TestimonialSlider_header__znYD7">
              <h3 className="TestimonialSlider_label__z2WhH">
                Trusted Feedback
              </h3>
              <h2 className="TestimonialSlider_title__I_aMr">
                Check What Students Think Of Us
              </h2>
              <div className="TestimonialSlider_navigation__cQfS8">
                <button
                  className="TestimonialSlider_navButton__Cflns"
                  aria-label="Previous testimonial"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
                  </svg>
                </button>
                <div className="TestimonialSlider_progressBar__pQdwb">
                  <div
                    className="TestimonialSlider_progressFill__TJBB8"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
            <div className="TestimonialSlider_testimonialGrid__jr3sh">
              <div className="TestimonialSlider_testimonialCard__rAlFM TestimonialSlider_visible__zceg4">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/assets/img/feedback-girl.png"
                      alt="Kartikeya Misra"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Anaya Misra
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (WNS Technologies Pvt Ltd.)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      I’ve taken many online courses, but nothing compares to
                      Simpli Degree. The real-world case studies and simulations
                      made learning fun and relevant. I’m now more confident in
                      my skills than ever before!
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM TestimonialSlider_visible__zceg4">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/assets/img/feedback.png"
                      alt="Manav Dhodare"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Pratik Sharma
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">(HDFC Bank)</p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      I’ve taken many online courses, but nothing compares to
                      Simpli Degree. The real-world case studies and simulations
                      made learning fun and relevant. I’m now more confident in
                      my skills than ever before!
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/HomePage/Namita.webp"
                      alt="Namita Khandelwal"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Namita Khandelwal
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (Deloitte India)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      It was a great learning experience for me, especially the
                      RM that had been assigned to me. My relationship manager
                      was always supportive, with a ready-to-respond attitude
                      towards every query.
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/HomePage/Piyush.webp"
                      alt="Piyush Sharma"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Piyush Sharma
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (Biocon Ltd.)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      Thanks to Learning Routes Team for all the assistance and
                      support they provided in my 2-year PGDM programme. Overall
                      it was a good experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="TestimonialSlider_testimonialCard__rAlFM">
                <div>
                  <div className="TestimonialSlider_imageContainer__qw6pl">
                    <img
                      src="/HomePage/bhavika.webp"
                      alt="Bhavika Shah"
                      className="TestimonialSlider_avatar__tkuAI"
                    />
                  </div>
                  <div>
                    <h3 className="TestimonialSlider_name__gQxRY">
                      Bhavika Shah
                    </h3>
                    <p className="TestimonialSlider_role__D4hYz">
                      (Dentsu Aegis Network)
                    </p>
                    <div className="TestimonialSlider_quote__D_DKH" />
                    <p className="TestimonialSlider_content__dEIEb">
                      My personal experience with Learning routes has been very
                      good. Very supportive and patient. Thank you for the all
                      the guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row  td_gap_y_40">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_image_box td_style_6">
                <div className="td_image_box_img_1">
                  <img
                    src="/assets/simpli-images/DeWatermark.ai_1740819150754.png"
                    alt
                    style={{
                      border: "0",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="td_image_box_img_2">
                  <div className="td_image_box_img_2_in">
                    <img
                      src="/assets/simpli-images/220-SM911676.jpg"
                      alt
                      style={{
                        border: "0",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="td_image_box_shape_1 position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img
                    src="/assets/img/home_5/about_shape_2.svg"
                    alt
                    style={{
                      border: "0",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                  About US
                </p>
                <h2 className="td_section_title td_fs_48 td_mb_20">
                  Shaping Futures, One Learner at a Time
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                  Far far away, behind the word mountains, far from the At
                  Simpli Degree, we believe education is the key to unlocking
                  endless possibilities. Our mission is to inspire, educate, and
                  empower learners worldwide through accessible, high-quality
                  courses. Together, let’s create a future where knowledge knows
                  no bounds.
                </p>
              </div>
              <div className="td_tabs td_style_1">
                <ul className="td_tab_links td_style_3 td_mp_0 td_medium td_fs_24 td_heading_color">
                  <li className="active">
                    <a href="#td_tab_1">Proven Success</a>
                  </li>
                  <li>
                    <a href="#td_tab_2">Real Impact </a>
                  </li>
                  <li>
                    <a href="#td_tab_3"> Community </a>
                  </li>
                </ul>
                <div className="td_height_30 td_height_lg_30" />
                <div className="td_tab_body">
                  <div className="td_tab active" id="td_tab_1">
                    <ul className="td_list td_style_5 td_mp_0">
                      <li>
                        <h3 className="td_fs_24 td_mb_8">
                          90% of our learners secure a job
                        </h3>
                        <p className="td_fs_18 mb-0">
                          Learners secure a job or promotion within 6 months.
                        </p>
                      </li>
                      <li>
                        <h3 className="td_fs_24 td_mb_8">
                          Over 50,000 professionals{" "}
                        </h3>
                        <p className="td_fs_18 mb-0">
                          Professionals have transformed their careers with
                          Simpli Degree.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="td_tab" id="td_tab_2">
                    <ul className="td_list td_style_5 td_mp_0">
                      <li>
                        <h3 className="td_fs_24 td_mb_8">
                          10,000+ industry-relevant projects
                        </h3>
                        <p className="td_fs_18 mb-0">
                          Our students have successfully completed it solving
                          real-world problems.
                        </p>
                      </li>
                      <li>
                        <h3 className="td_fs_24 td_mb_8">Alumni projects </h3>
                        <p className="td_fs_18 mb-0">
                          Alumni projects have been featured in renowned
                          industry forums and publications.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="td_tab" id="td_tab_3">
                    <ul className="td_list td_style_5 td_mp_0">
                      <li>
                        <h3 className="td_fs_24 td_mb_8">Over 30 countries</h3>
                        <p className="td_fs_18 mb-0">
                          Join a thriving network of learners from over 30
                          countries, collaborating and sharing insights.
                        </p>
                      </li>
                      <li>
                        <h3 className="td_fs_24 td_mb_8">
                          Alumni work with top companies{" "}
                        </h3>
                        <p className="td_fs_18 mb-0">
                          Top companies like Google, Amazon, and Deloitte,
                          showcasing the value of our programs.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="td_height_40 td_height_lg_40" />
              <a
                href="https://onlinemba.simplidegree.com/"
                className="td_btn td_style_1 td_radius_10 td_medium"
              ></a>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>

      <section>
        <div className="td_height_50 td_height_lg_40" />
        <div className="container">
          <div
            className="td_section_heading td_style_1 td_type_1 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_section_heading_left">
              <p className="td_section_subtitle_up_2 td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_heading_color td_opacity_6">
                News &amp; Articles
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
                Browse Latest Articles
              </h2>
            </div>
            <div className="td_section_heading_right">
              <a
                href="blog.html"
                className="td_btn td_style_2 td_heading_color td_medium td_mb_10"
              >
                See All Articles
                <i>
                  <svg
                    width={19}
                    height={20}
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={19}
                    height={20}
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
          <div className="td_height_30 td_height_lg_30" />
          <div className="row td_gap_y_30">
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className="td_post td_style_1 td_type_3">
                <a
                  href="https://onlinemba.simplidegree.com/"
                  className="td_post_thumb d-block"
                >
                  <img src="assets/img/home_5/post_1.jpg" alt />
                  <i className="fa-solid fa-link" />
                </a>
                <div className="td_post_info">
                  <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                    <span>
                      <img src="assets/img/icons/calendar.svg" alt />
                      Jan 1 , 2025
                    </span>
                    <span>
                      <img src="assets/img/icons/user.svg" alt />
                      Jhon Doe
                    </span>
                  </div>
                  <h2 className="td_post_title td_fs_30 td_medium td_mb_16">
                    <a href="https://onlinemba.simplidegree.com/">
                      Top Skills for 2025 Success
                    </a>
                  </h2>
                  <p className="td_post_subtitle td_fs_18 td_mb_20 td_heading_color">
                    Discover the most in-demand skills for thriving in the
                    digital economy.
                  </p>
                  <a
                    href="https://onlinemba.simplidegree.com/"
                    className="td_btn td_style_3 td_heading_color td_fs_18"
                  >
                    <span>Read More</span>
                    <i>
                      <svg
                        width={18}
                        height={12}
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 6L1 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_post td_style_1 td_type_3">
                <a
                  href="https://onlinemba.simplidegree.com/"
                  className="td_post_thumb d-block"
                >
                  <img src="assets/img/home_5/post_2.jpg" alt />
                  <i className="fa-solid fa-link" />
                </a>
                <div className="td_post_info">
                  <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                    <span>
                      <img src="assets/img/icons/calendar.svg" alt />
                      Jan 1 , 2025
                    </span>
                    <span>
                      <img src="assets/img/icons/user.svg" alt />
                      Jhon Doe
                    </span>
                  </div>
                  <h2 className="td_post_title td_fs_30 td_medium td_mb_16">
                    <a href="https://onlinemba.simplidegree.com/">
                      Choosing the Right Degree Made Easy
                    </a>
                  </h2>
                  <p className="td_post_subtitle td_fs_18 td_mb_20 td_heading_color">
                    A quick guide to finding the perfect program for your career
                    goals.
                  </p>
                  <a
                    href="https://onlinemba.simplidegree.com/"
                    className="td_btn td_style_3 td_heading_color td_fs_18"
                  >
                    <span>Read More</span>
                    <i>
                      <svg
                        width={18}
                        height={12}
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 6L1 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="td_post td_style_1 td_type_3">
                <a
                  href="https://onlinemba.simplidegree.com/"
                  className="td_post_thumb d-block"
                >
                  <img src="assets/img/home_5/post_3.jpg" alt />
                  <i className="fa-solid fa-link" />
                </a>
                <div className="td_post_info">
                  <div className="td_post_meta td_fs_14 td_medium td_mb_20">
                    <span>
                      <img src="assets/img/icons/calendar.svg" alt />
                      Jan 1 , 2025
                    </span>
                    <span>
                      <img src="assets/img/icons/user.svg" alt />
                      Jhon Doe
                    </span>
                  </div>
                  <h2 className="td_post_title td_fs_30 td_medium td_mb_16">
                    <a href="https://onlinemba.simplidegree.com/">
                      Learn Anytime, Anywhere: Here’s How
                    </a>
                  </h2>
                  <p className="td_post_subtitle td_fs_18 td_mb_20 td_heading_color">
                    The flexibility of online education lets you learn on your
                    terms.
                  </p>
                  <a
                    href="https://onlinemba.simplidegree.com/"
                    className="td_btn td_style_3 td_heading_color td_fs_18"
                  >
                    <span>Read More</span>
                    <i>
                      <svg
                        width={18}
                        height={12}
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 6L1 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 11C12 11 17 7.31756 17 5.99996C17 4.68237 12 1 12 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>

      <Footer />
    </>
  );
}
