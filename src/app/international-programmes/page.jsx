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
              <div
                className="BrowseCourse_home_course_list_single_box__d92j6 BrowseCourse_bgColor__zDC4o"
                style={{ color: "white" }}
              >
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
                <Link href="/courses/mba-from-golden-gate-university" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA from Golden Gate University"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBAGoldenGateUniversity.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - Golden Gate University
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
                <Link href="/courses/mba-by-liverpool-business-school" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA from Liverpool Business School"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/LiverpoolBusinessSchool.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - Liverpool Business School
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
                <Link href="/courses/mba-from-edgewood-college" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA from Edgewood College"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBAEdgewood.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - Edgewood
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
                  href="/courses/mba-global-from-deakin-business-school"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA Global from Deakin Business School"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBAGlobalDeakin.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA (Global) - Deakin
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
                <Link href="/courses/mba-from-utica-university" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA from Utica University"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBAUTICA.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - UTICA
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
                <Link href="/courses/mba-90-ects-by-iu-university" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA 90 ECTS by IU University"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBA90ECTSIU.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA (90 ECTS) - IU
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
                <Link href="/courses/mba-from-clarkson-university" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA - Clarkson"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBAClarkson.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - Clarkson
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
                  href="/courses/mba-from-ism-international-school-of-management-germany"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA - ISM"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBAISM.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - ISM
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
                  href="/courses/mba-from-university-of-sunderland-uk"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MBA - Sunderland"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MBASunderland.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MBA - Sunderland
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
                  href="/courses/ms-in-business-analytics-by-golden-gate-university-usa"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MSBA - Golden Gate"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/MSBAGoldenGate.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MSBA - Golden Gate
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
