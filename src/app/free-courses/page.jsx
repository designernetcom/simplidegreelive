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
              <div
                className="BrowseCourse_home_course_list_single_box__d92j6 BrowseCourse_bgColor__zDC4o"
                style={{ color: "white" }}
              >
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
                <Link href="/courses/data-analytics-certification" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="img"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/DataAnalyticsCertification.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Data Analytics
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 12 weeks
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/digital-marketing-certification" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Digital Marketing Certification"
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
                        Duration: Upto 6 months
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/cyber-security-certification" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Cyber Security Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/CyberSecurityCertification.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Cyber Security
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 3 months
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/certification-in-ms-excel" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="MS Excel Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/CertificationInMsExcel.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        MS Excel
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 7 days
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/certification-in-ai-and-ml" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="AI and ML Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/CertificationInAIandML.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        AI and ML
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 12 hrs
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/digital-marketing-certification" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Digital Marketing Certification"
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
                        Marketing
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto months
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
                  href="/courses/certification-in-leadership-skills"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Leadership Skills Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/CertificationInLeadershipSkills.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Leadership Skills
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 4 weeks
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="BrowseCourse_browse_course_card_view__wBC_X">
                  Read More
                </div>
              </div>
              <div className="BrowseCourse_browse_course_card__6O_U1">
                <Link href="/courses/project-management-certification" passHref>
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Project Management Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/ProjectManagementCertification.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Project Management
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 22 hrs
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
                  href="/courses/supply-chain-management-certification"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Supply Chain Management Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/SupplyChainManagementCertification.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Supply Chain Mgmt.
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: Upto 28 hrs
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
                  href="/courses/financial-accounting-certification"
                  passHref
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <img
                        alt="Financial Accounting Certification"
                        loading="lazy"
                        width={200}
                        height={180}
                        decoding="async"
                        data-nimg={1}
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
                        src="/assets/img/home_7/FinancialAccountingCertification.webp"
                      />
                    </div>
                    <div>
                      <div className="BrowseCourse_browse_course_card_heading__7Cx3L">
                        Financial Accounting
                      </div>
                      <div className="BrowseCourse_browse_course_card_duration__mSOzf">
                        Duration: 3 hrs to 3 months
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
