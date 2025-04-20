import React from "react";
import "./trending.module.css";
import Link from "next/link";
import Image from "next/image";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/style.css";
import Menu from "../../../components/Header/Menu/Menu";
import Footer from "../../../components/Footer/Footer";

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
                <Link
                  href="/courses/online-mba"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Online MBA"
                        src="/assets/img/courses/OnlineMBA.png" // Ensure this file is in the `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/online-mca"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Online MCA"
                        src="/assets/img/courses/OnlineMCA.webp" // Ensure this file is inside the `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/online-mcom"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Online MCom"
                        src="/assets/img/courses/OnlineBCom.webp" // Ensure this file is in the `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/online-msc"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Online MSc"
                        src="/assets/img/courses/OnlineMSc.webp" // Ensure this file is in the `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/online-ma"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Online MA"
                        src="/assets/img/courses/OnlineMA.webp" // Ensure this file is inside `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/online-acca-mcom"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="M.Com with ACCA"
                        src="/assets/img/courses/OnlineMCom.webp" // Ensure this file is in the `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/distance-mba"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Distance MBA"
                        src="/assets/img/courses/DistanceMBA.webp" // Ensure this file is inside `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses/distance-mca"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Distance MCA"
                        src="/assets/img/courses/DistanceMCA.webp" // Ensure this file is inside `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                <Link
                  href="/courses//distance-mcom"
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Distance MCom"
                        src="/assets/img/courses/DistanceMCom.webp" // Ensure this file is inside `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
                  style={{ textDecoration: "none" }}
                >
                  <div className="BrowseCourse_browse_course_card_top_container__4dzBP">
                    <div>
                      <Image
                        alt="Distance MLIS"
                        src="/assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp" // Ensure this file is inside `public` folder
                        width={200}
                        height={180}
                        loading="lazy"
                        decoding="async"
                        className="BrowseCourse_browse_course_card_img__UCBw8"
                        style={{ color: "transparent" }}
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
      <Footer />
    </>
  );
}
