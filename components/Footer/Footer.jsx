import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import * as Icon from '@phosphor-icons/react/dist/ssr'
import "./footer.module.css";





const Footer = () => {
return (
  <>
    <div className="footer_footer__Container__brMaJ">
      <div className="footer_footer__row__kgs5H">
        <div className="footer_footer__col__4F7Mb">
          <a>
            <img
              alt="logo"
              loading="lazy"
              width={600}
              height={207}
              decoding="async"
              data-nimg={1}
              className="footer_Footer__logo__xeANo"
              style={{ color: "transparent" }}
              src="/assets/img/Simplidegree_logo_white.png"
            />
          </a>
          <div className="footer_Footer_LogoInfo_text_1__kVCZk">
            SimpliDegree is an innovative online learning platform that provides
            industry-relevant certification and degree programs in collaboration
            with top universities and institutions. <br />
            <br />
            It aims to bridge the gap between academic learning and industry
            requirements by offering flexible, skill-based courses designed for
            career advancement.
            <br />
            <br />
            SimpliDegree focuses on providing learners with practical knowledge,
            real-world projects, and networking opportunities to enhance
            employability in a competitive job market.
          </div>
          <div className="footer_Footer_LogoInfo_text_2__tZBCM">
            Follow us at
          </div>
          <div className="footer_Footer_LogoInfo_iconsContainer__lsNE7">
            <a href>
              <div className="footer_Footer__icon_insta__dWcve">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  fontSize="25px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
              </div>
            </a>
            <a href>
              <div className="footer_Footer__icon_linkedin__n63hj">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  fontSize="20px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.983" cy="5.009" r="2.188" />
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </div>
            </a>
            <a href>
              <div className="footer_Footer__icon_facebook__whpkx">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  fontSize="25px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </div>
            </a>
            <a href>
              <div className="footer_Footer__icon_twitter__W3K6m">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  fontSize="18px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" />
                </svg>
              </div>
            </a>
            <a href>
              <div className="footer_Footer__icon_utube__Xa6ET">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 576 512"
                  fontSize="18px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Top Universities
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Amity University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Chandigarh University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            DY Patil University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            IMT CDL
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            ICFAI CDOE
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Jain University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Manipal Online
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            UPES University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            OP Jindal University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Chitkara University
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            LPU Online
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            IIM Ahmedabad
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            IIM Raipur
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Uttaranchal University
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Online UG Programs
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BBA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BCA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BCom
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance BBA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance BCA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance BCom
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance BSC
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance BA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance BLIS
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance B.Ed
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            B.Tech for Working Professionals
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            B.Tech after Diploma
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Top PG Courses
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MBA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MCA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MCom
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MCom with ACCA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MSc
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance MBA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance MCA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance MCom
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance MLIS
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Online Executive Courses
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Executive MBA
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            EPGD in Business Analytics
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Operations &amp; Supply Chain
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            EDP Strategic Mgmt
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            CFO Programme
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Leadership &amp; Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            EP in General Mgmt
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            EDP Strategic HR Mgmt
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            EP in Project Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Healthcare Service Mgmt
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_heading__fsEMx">
            Get Right Career Guidance
          </div>
          <a className="footer_ctaboxlinks__5WueN" href>
            <div className="footer_ctabox__61Q43">
              <div className="footer_leftsec__voM1P">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 384 512"
                  className="footer_ctaicon__gkOGW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z" />
                </svg>
                Know More About Us
              </div>
              <div />
            </div>
          </a>
          <a className="footer_ctaboxlinks__5WueN" href>
            <div className="footer_ctabox__61Q43">
              <div className="footer_leftsec__voM1P">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 576 512"
                  className="footer_ctaicon__gkOGW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z" />
                </svg>
                Glassdoor
              </div>
              <div className="footer_rightsec2__viZrB">
                4.0
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="footer_staricon__shCsW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                </svg>
              </div>
            </div>
          </a>
          <a className="footer_ctaboxlinks__5WueN" href>
            <div className="footer_ctabox__61Q43">
              <div className="footer_leftsec__voM1P">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 576 512"
                  className="footer_ctaicon__gkOGW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
                TrustPilot
              </div>
              <div className="footer_rightsec2__viZrB">
                4.5
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="footer_staricon__shCsW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                </svg>
              </div>
            </div>
          </a>
          <a className="footer_ctaboxlinks__5WueN" href>
            <div className="footer_ctabox__61Q43">
              <div className="footer_leftsec__voM1P">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="footer_ctaicon__gkOGW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z" />
                </svg>
                AmbitionBox
              </div>
              <div className="footer_rightsec2__viZrB">
                4.3
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="footer_staricon__shCsW"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Diploma Courses
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            PGD Finance &amp; Acc
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            PGD Data Science
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Digital Marketing
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            PGD Retail Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            PGD Marketing
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            PGD HR Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Banking &amp; Finance Mgmt
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            International Trade Mgmt
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Cyber Law
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            PGD IT
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Certification Programs
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Data Analytics
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Digital Marketing
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Cyber Security
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            MS Excel
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            AL &amp; ML
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Marketing
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Leadership Skills
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Project Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Supply Chain Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Financial Accounting
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Best Online Colleges
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online MBA Colleges
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Distance MBA Colleges
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Executive MBA Colleges
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BCA Colleges
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BA Colleges
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BBA Colleges
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Online BSc Colleges
          </a>
        </div>
        <div className="footer_footer__col__4F7Mb">
          <div className="footer_Footer_section_headerContainer__vQDCD">
            <text className="footer_Footer_section_heading__fsEMx">
              Online MBA Specialisations
            </text>
          </div>
          <a className="footer_Footer_section_link__pMXOf" href>
            Business Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Data Science
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Entrepreneurship
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Financial Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Healthcare Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Human Resources Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            International Business
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Marketing
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Operations Management
          </a>
          <a className="footer_Footer_section_link__pMXOf" href>
            Retail Management
          </a>
        </div>
      </div>
      <div className="footer_Footer__bottomSectionContainer__L8VoB">
        <div className="footer_Footer__bottomSection_left__Q1LwX">
          <text className="footer_Footer__bottomSection_links__DUZG7">
            Copyright 2025@ Simpli Degree | All Rights Reserved
          </text>
        </div>
        <div className="footer_Footer__bottomSection_right__CSvmu">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.netcom-india.com/"
          >
            <text className="footer_Footer__bottomSection_links__DUZG7">
              Design by Netcom Business Solutions. Pvt. Ltd.
            </text>
          </a>
        </div>
      </div>
    </div>
  </>
);

};

export default Footer;