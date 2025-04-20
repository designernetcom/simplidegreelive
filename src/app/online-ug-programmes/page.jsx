import Menu from "../../../components/Header/Menu/Menu";
import Footer from "../../../components/Footer/Footer";
import React from "react";
import Link from "next/link";
import "../styles/style.css";

export default function page() {
  return (
    <>
      <Menu />
      <div className="BrowseCourse_home_browse_container__tQp9L" id="brCourses">
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
              <div className="BrowseCourse_home_course_list_single_box__d92j6">
                <div className="BrowseCourse_browse_slide_individual_box__PeTNq">
                  <span>
                    {" "}
                    <Link href="/online-pg-programmes">
                      Online PG Programmes
                    </Link>
                  </span>
                </div>
              </div>
              <div
                className="BrowseCourse_home_course_list_single_box__d92j6 BrowseCourse_bgColor__zDC4o"
                style={{ color: "white" }}
              >
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
                <Link href="/courses/online-bba" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Online BBA"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/OnlineBBA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Online BBA
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
                <Link href="/courses/online-bca" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Online BCA"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/OnlineBCA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Online BCA
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/online-bcom" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Online BCom"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/OnlineBCom.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Online BCom
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/distance-ba" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Distance BA"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DistanceBBA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Distance BA
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/online-ba" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Online BA"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/OnlineBA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Online BA
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/distance-bca" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Distance BCA"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DistanceBCA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Distance BCA
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/distance-bba" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Distance BBA"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DistanceBBA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Distance BBA
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/distance-bcom" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Distance BCom"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DistanceBCom.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Distance BCom
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/distance-bsc" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Distance BSc"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DistanceBSc.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Distance BSc
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 Years
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
                  href="/courses/distance-bachelor-of-library-and-information-science"
                  passHref
                >
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Distance BLIS"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Distance BLIS
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

      <Footer />
    </>
  );
}
