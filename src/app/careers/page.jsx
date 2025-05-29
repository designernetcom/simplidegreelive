import React from "react";
import Image from "next/image";
import "../globals.css";
import "../styles/07b7d9be18c7582a.css";
import "../styles/3a6b4218bb14b3ef.css";
import SecondMenu from "../../../components/Header/Menu/SecondMenu";
import Footer from "../../../components/Footer/Footer";
import CareerTabs from "../../../components/CareerTabs";
import "../styles/5107c2122129e0bb.css";
import "../styles/style.css";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/bootstrap.min.css";
import "../styles/33f1be5fd79e728d.css";
import "../styles/cc66cf431efece60.css";
import "../styles/bcdb44b6ad772c90.css";
import "../styles/ecbb68b163419596.css";
import "../styles/e74b165e0d429359.css";
import "../styles/8c8030bf7e3ee32c.css";

async function fetchData() {
  try {
    const res = await fetch("https://netcomindia.xyz/api/careerpage", {
      next: { revalidate: 0 }, // Fetch fresh data on every request
    });
    if (!res.ok) throw new Error("Failed to fetch careers data");
    return res.json();
  } catch (error) {
    console.error("Error fetching careers data:", error);
    return null; // Return null or a default value in case of error
  }
}

export default async function Page() {
  const data = await fetchData(); // Fetch data in the server component

  return (
    <>
      <SecondMenu />
      <div>
        <div>
          <div
            style={{
              width: "100%",
              height: "550px", // Added unit
              padding: "231px 0 300px",
              backgroundImage:
                "linear-gradient(180deg, #000 2.48%, rgba(0, 0, 0, 0.7) 30.91%, rgba(0, 0, 0, 0.2) 50.99%), url(/assets/simpli-images/SM434677.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          >
            <div className="CareerHeroSection_Career_page_Hero__headingContainer__Zuaf6">
              <h1 className="CareerHeroSection_Career_page_Hero__heading__mxV_U"></h1>
              <p className="CareerHeroSection_Career_page_Hero__subheading__T6okQ"></p>
            </div>
          </div>
          <div className="CareerTabSection_Career_tab__container__4q1GB">
            <div className="CareerTabSection_Career_tab__row__AaZi_">
              <div className="CareerTabSection_Career_tab__column__auR1D">
                <h2 className="CareerTabSection_Career_tab__heading__NUMsW">
                  JOIN <span>Simpli degree</span>
                </h2>
                <h3 className="CareerTabSection_Career_tab__subheading__GIRHE">
                  {data?.title || "Current Openings"}{" "}
                  {/* Fallback if data is null */}
                </h3>
              </div>
            </div>
            <CareerTabs />
          </div>
          <div className="CareerWhySection_CareerWhySection__bg__c41DZ">
            <h2 className="CareerWhySection_CareerWhySection__mainheading__VqrH5">
              WHY JOIN US
            </h2>
            <div className="CareerWhySection_CareerWhySection__row__3vg2u">
              <div className="CareerWhySection_CareerWhySection__columnone__Oj36M">
                <div className="CareerWhySection_CareerWhySection__cards__nGuMw">
                  <div className="CareerWhySection_CareerWhySection__card__PK7IF">
                    <div className="CareerWhySection_CareerWhySection__cardnumber__Xb__z">
                      01
                    </div>
                    <h2 className="CareerWhySection_CareerWhySection__cardheading__uNDYR">
                      Diversity and Inclusion
                    </h2>
                    <p className="CareerWhySection_CareerWhySection__cardpara__i_HFt">
                      Equal involvement and support for every employee
                    </p>
                  </div>
                  <div className="CareerWhySection_CareerWhySection__card__PK7IF">
                    <div className="CareerWhySection_CareerWhySection__cardnumber__Xb__z">
                      02
                    </div>
                    <h2 className="CareerWhySection_CareerWhySection__cardheading__uNDYR">
                      Conducive Environment
                    </h2>
                    <p className="CareerWhySection_CareerWhySection__cardpara__i_HFt">
                      Mentoring and training sessions for all to learn and grow
                    </p>
                  </div>
                  <div className="CareerWhySection_CareerWhySection__card__PK7IF">
                    <div className="CareerWhySection_CareerWhySection__cardnumber__Xb__z">
                      03
                    </div>
                    <h2 className="CareerWhySection_CareerWhySection__cardheading__uNDYR">
                      Work-Life Balance Matters
                    </h2>
                    <p className="CareerWhySection_CareerWhySection__cardpara__i_HFt">
                      Flexible environment that encourages boundaries
                    </p>
                  </div>
                </div>
              </div>
              <div className="CareerWhySection_CareerWhySection__columntwo__X3L_R">
                <div className="CareerWhySection_CareerWhySection__cards__nGuMw">
                  <div className="CareerWhySection_CareerWhySection__card__PK7IF">
                    <div className="CareerWhySection_CareerWhySection__cardnumber__Xb__z">
                      04
                    </div>
                    <h2 className="CareerWhySection_CareerWhySection__cardheading__uNDYR">
                      Employee Welfare
                    </h2>
                    <p className="CareerWhySection_CareerWhySection__cardpara__i_HFt">
                      Workplace safety, paid time off and rejuvenating
                      activities
                    </p>
                  </div>
                  <div className="CareerWhySection_CareerWhySection__card__PK7IF">
                    <div className="CareerWhySection_CareerWhySection__cardnumber__Xb__z">
                      05
                    </div>
                    <h2 className="CareerWhySection_CareerWhySection__cardheading__uNDYR">
                      Healthy & Progressive Culture
                    </h2>
                    <p className="CareerWhySection_CareerWhySection__cardpara__i_HFt">
                      Making work fun to improve productivity and encourage
                      growth
                    </p>
                  </div>
                  <div className="CareerWhySection_CareerWhySection__card__PK7IF">
                    <div className="CareerWhySection_CareerWhySection__cardnumber__Xb__z">
                      06
                    </div>
                    <h2 className="CareerWhySection_CareerWhySection__cardheading__uNDYR">
                      Opportunity Driven
                    </h2>
                    <p className="CareerWhySection_CareerWhySection__cardpara__i_HFt">
                      Performance reviews to enhance skills for career
                      development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CareerEmpSection_CareerEmp__container__lxXg6">
            <div className="CareerEmpSection_CareerEmp__row__4Z2gW">
              <div className="CareerEmpSection_CareerEmp__column__w_zJw">
                <h2 className="CareerEmpSection_CareerEmp__heading__gL77n">
                  HOW DO EMPLOYEES FEEL?
                </h2>
                <p className="CareerEmpSection_CareerEmp__para__6WcIA">
                  <strong>
                    “ We believe it’s the people who make an organisation, they
                    are the most valuable asset of the company. It’s their
                    knowledge, ability and skills that take an organisation
                    towards progression. ”
                  </strong>
                </p>
                <div className="CareerEmpSection_CareerEmp_bulletarea__JftmE">
                  <div className="CareerEmpSection_CareerEmp__bullet__5zHb0">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="CareerEmpSection_CareerEmp__ciricon__oFH49"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                    </svg>
                    <p className="CareerEmpSection_CareerEmp__bulletpara__qLynj">
                      “ This being my first job, I was fortunate to find a
                      company where I got several growth opportunities and was
                      appreciated for my hard efforts. ”
                    </p>
                  </div>
                  <div className="CareerEmpSection_CareerEmp__bullet__5zHb0">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="CareerEmpSection_CareerEmp__ciricon__oFH49"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                    </svg>
                    <p className="CareerEmpSection_CareerEmp__bulletpara__qLynj">
                      “For me, work-life balance and a healthy work environment
                      were a priority. And here, the management is very
                      particular about employee welfare.”
                    </p>
                  </div>
                  <div className="CareerEmpSection_CareerEmp__bullet__5zHb0">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="CareerEmpSection_CareerEmp__ciricon__oFH49"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                    </svg>
                    <p className="CareerEmpSection_CareerEmp__bulletpara__qLynj">
                      “Employees feel valued when their work and sincerity are
                      rewarded. This is what kept me going for a long time in
                      LR.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="CareerEmpSection_details_form_heading__o99Zz">
                LEAVE YOUR <span>DETAILS HERE</span>
              </h2>
              <div className="CareerEmpSection_CareerEmp__row__4Z2gW">
                <div className="CareerEmpSection_CareerEmp__column__w_zJw">
                  <div className="CareerEmpSection_CareerEmp__leftimage__kOn8_">
                    <img
                      alt="About Intro Image"
                      loading="lazy"
                      width={765}
                      height={775}
                      decoding="async"
                      data-nimg={1}
                      className="CareerEmpSection_About_form_leftimage__d2WwE"
                      style={{ color: "transparent" }}
                      src="/assets/simpli-images/formleftimg.webp"
                    />
                  </div>
                </div>
                <div className="CareerEmpSection_CareerEmp__column__w_zJw">
                  <div className="CareerFormSection_customContainer__3lq_T">
                    <form>
                      <div className="CareerFormSection_inputContainer__9A4mo">
                        <div className="CareerFormSection_floatingLabelGroup___brYd">
                          <input
                            type="text"
                            className="CareerFormSection_formControl____7o4"
                            autoComplete="off"
                            required
                            name="fullName"
                          />
                          <label
                            className="CareerFormSection_floatingLabel__NEE6r"
                            htmlFor="fullName"
                          >
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="CareerFormSection_inputContainer__9A4mo">
                        <div className="CareerFormSection_floatingLabelGroup___brYd">
                          <input
                            type="email"
                            className="CareerFormSection_formControl____7o4"
                            autoComplete="off"
                            required
                            name="email"
                          />
                          <label
                            className="CareerFormSection_floatingLabel__NEE6r"
                            htmlFor="email"
                          >
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="CareerFormSection_inputContainer__9A4mo">
                        <div className="CareerFormSection_floatingLabelGroup___brYd">
                          <input
                            type="tel"
                            className="CareerFormSection_formControl____7o4"
                            autoComplete="off"
                            required
                            name="phone"
                          />
                          <label
                            className="CareerFormSection_floatingLabel__NEE6r"
                            htmlFor="phone"
                          >
                            Mobile Number
                          </label>
                        </div>
                      </div>
                      <div className="CareerFormSection_inputContainer__9A4mo">
                        <div className="CareerFormSection_floatingLabelGroup___brYd">
                          <input
                            type="number"
                            className="CareerFormSection_formControl____7o4"
                            autoComplete="off"
                            required
                            name="experience"
                          />
                          <label
                            className="CareerFormSection_floatingLabel__NEE6r"
                            htmlFor="experience"
                          >
                            Year of Experience
                          </label>
                        </div>
                      </div>
                      <div className="CareerFormSection_inputContainer__9A4mo">
                        <div className="CareerFormSection_floatingLabelGroup___brYd">
                          <label
                            htmlFor="resume"
                            className="CareerFormSection_resume_choose_input__YQUA_"
                          >
                            Upload Your Resume
                          </label>
                          <input
                            type="file"
                            accept="application/pdf"
                            className="CareerFormSection_formControl____7o4"
                            autoComplete="off"
                            required
                            style={{ marginTop: 3 }}
                            name="resume"
                          />
                        </div>
                      </div>
                      <div className="CareerFormSection_inputContainer__9A4mo">
                        <div className="CareerFormSection_floatingLabelGroup___brYd">
                          <select
                            style={{ color: "#ccc" }}
                            className="CareerFormSection_formControl____7o4"
                            name="profile"
                          >
                            <option value="">Select Profile</option>
                            <option value="Business Development Executive (Fresher and Experience)">
                              Business Development Executive (Fresher and
                              Experience)
                            </option>
                            <option value="Talent Acquisition Manager">
                              Talent Acquisition Manager
                            </option>
                            <option value="Associate HR Manager">
                              Associate HR Manager
                            </option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <button className="CareerFormSection_contact_submit_button__anmIv">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
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
