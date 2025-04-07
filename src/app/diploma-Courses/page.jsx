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
              <div
                className="BrowseCourse_home_course_list_single_box__d92j6 BrowseCourse_bgColor__zDC4o"
                style={{ color: "white" }}
              >
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
                      href="/courses/international-programmes"
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
                <Link href="/courses/pg-diploma-finance-accounting" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="PGD Finance & Accounting"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/PG_Diploma_in_Finance_&_Accounting.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        PGD Finance &amp; Acc.
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 1-2 years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/pg-diploma-data-science" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="PGD Data Science"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/PG_Diploma_in_Data_Science.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        PGD Data Science
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 1 to 2 years
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
                  href="/courses/professional-diploma-digital-marketing"
                  passHref
                >
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="Digital Marketing"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DigitalMarketingCertification.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Digital Marketing
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 1 to 2 years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/pg-diploma-retail-management" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="PG Diploma in Retail Management"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/PG_Diploma_in_Retail_Management.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        PGD Retail Mgmt.
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 1 to 2 years
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/pg-diploma-marketing-management" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="PG Diploma in Marketing Management"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/PG_Diploma_in_Marketing_Management.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        PGD Marketing
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
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/diploma-hr-management" passHref>
                  <div
                    className="BrowseCourse_browse_course_card_top_container__4dzBP"
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <img
                        alt="PG Diploma in Human Resource Management"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/PG_Diploma_In_Human_Resource_Management.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        PGD HR Mgmt.
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 1 to 2 years
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
                  href="/courses/banking-finance-management-diploma"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Banking & Finance"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/Diploma_in_Banking_and_Finance_Management.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Banking & Finance
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 1 to 2 years
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
                  href="/courses/international-trade-management-diploma"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="International Trade"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/Diploma_in_International_Trade_Management.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        International Trade
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 12 Months
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/diploma-in-cyber-law" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Cyber Law"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/Diploma_in_Cyber_Law.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Cyber Law
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
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/pg-diploma-in-it" passHref legacyBehavior>
                  <a style={{ textDecoration: "none" }}>
                    <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                      <div>
                        <img
                          alt="PG Diploma in IT"
                          loading="lazy"
                          width={200}
                          height={180}
                          decoding="async"
                          className="BrowseCourse_browse_course_card_img__UCBw8"
                          style={{ color: "transparent" }}
                          src="/assets/img/home_7/PGDiplomainIT.webp"
                        />
                      </div>
                      <div>
                        <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                          PGD IT
                        </div>
                        <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                          Duration: 1 Year
                        </div>
                      </div>
                    </div>
                  </a>
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
