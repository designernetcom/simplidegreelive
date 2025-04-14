"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "../globals.css";
import "../styles/8b2861424f796947.css";
import "../styles/cc66cf431efece60.css";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/bcdb44b6ad772c90.css";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/7620326e339f446b.css";
import Menu from "../../../components/Header/Menu/Menu";
import styles from "./Filter.module.css";
import Footer from "../../../components/Footer/Footer";

const ComparisonModal = dynamic(() => import("../ComparisonModal"), {
  ssr: false,
});
const truncateName = (name) => {
  return name.length > 30 ? `${name.substring(0, 20)}...` : name;
};
export default function Page() {
  const [compareList, setCompareList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudyModes, setSelectedStudyModes] = useState([]);
  const [courseFeeRange, setCourseFeeRange] = useState(1000000);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [displayCount, setDisplayCount] = useState(9);
  const [fixedHeader, setFixedHeader] = useState(false);

  // University data (assuming full list is included)
  const rawUniversities = [
    {
      id: 1,
      name: "NMIMS CDOE",
      fee: 110000,
      image: "/assets/img/colleges/nmims.webp",
      logo: "/assets/img/colleges/nmns-logo.webp",
      accreditations: ["NAAC Grade A+", "UGC"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Maharashtra",
    },
    {
      id: 2,
      name: "Amity University Online",
      fee: 99000,
      image: "/assets/img/colleges/amity.jpg",
      logo: "/assets/img/colleges/amity-logo.webp",
      accreditations: ["NAAC", "UGC", "AICTE", "AIU", "ACU"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttar Pradesh",
      url: "/college/amity-university-online",
    },
    {
      id: 3,
      name: "Dr. D.Y. Patil Vidyapeeth",
      fee: 94000,
      image: "/assets/img/colleges/dy-patil-vidyapeeth.webp",
      logo: "/assets/img/colleges/icon-dy-patil-vidyapeeth.webp",
      accreditations: ["NAAC A++", "UGC", "WES", "AICTE", "AIU", "ASSOCHAM"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "BBA",
      state: "Maharashtra",
    },
    {
      id: 4,
      name: "Online Manipal Jaipur",
      fee: 87000,
      image: "/assets/img/colleges/manipal-online.webp",
      logo: "/assets/img/colleges/icon-manipal.webp",
      accreditations: ["NAAC A+", "UGC Entitled", "WES", "ACU", "AICTE"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Karnataka",
    },
    {
      id: 5,
      name: "Lovely Professional University ODL (LPU)",
      fee: 90000,
      image: "/assets/img/colleges/lpu-online.webp",
      logo: "/assets/img/colleges/lpu-online-logo.webp",
      accreditations: ["UGC-DEB", "NAAC A++", "AICTE", "WES"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Punjab",
    },
    {
      id: 6,
      name: "Symbiosis Centre for Distance Learning",
      fee: 150000,
      image: "/assets/img/colleges/scdl.webp",
      logo: "/assets/img/colleges/symbosis.webp",
      accreditations: ["AICTE", "UGC", "NAAC A++"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Maharashtra",
    },
    // {
    //   id: 7,
    //   name: "Jain University Online",
    //   fee: 90000,
    //   image: "/assets/img/colleges/jain-online.webp",
    //   logo: "/assets/img/colleges/icon-jain.webp",
    //   accreditations: ["NAAC A++", "NBA", "UGC", "AICTE", "AIU"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Karnataka",
    // },

    {
      id: 8,
      name: "Chandigarh University Online",
      fee: 100000,
      image: "/assets/img/colleges/chandigarh-online.webp",
      logo: "/assets/img/colleges/icon-chandigarh.webp",
      accreditations: ["UGC", "NAAC A+", "AIU", "ACU", "IAU", "NCHMCT"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Punjab",
    },
    {
      id: 9,
      name: "Indian Institute of Management, Ahmedabad (IIM Ahmedabad)",
      fee: 180000,
      image: "/assets/img/colleges/iim-ahmedabad.webp",
      logo: "/assets/img/colleges/icon-iim-ahmedabad.webp",
      accreditations: ["EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Gujarat",
    },
    {
      id: 10,
      name: "University of Petroleum and Energy Studies Centre for Continued Education (UPES)",
      fee: 78769,
      image: "/assets/img/colleges/upes-cce.webp",
      logo: "/assets/img/colleges/icon-upes.webp",
      accreditations: ["UGC-DEB", "NAAC A"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttarakhand",
    },
    {
      id: 11,
      name: "O.P. Jindal Global University",
      fee: 175000,
      image: "/assets/img/colleges/op-jindal.webp",
      logo: "/assets/img/colleges/icon-op-jindal.webp",
      accreditations: ["UGC", "NAAC A"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Haryana",
    },
    {
      id: 12,
      name: "Chitkara University Centre for Continuing Education",
      fee: 232000,
      image: "/assets/img/colleges/chitkara-cce.webp",
      logo: "/assets/img/colleges/icon-chitkara.webp",
      accreditations: ["UGC Entitled", "NAAC A+", "AICTE"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Punjab",
    },
    // {
    //   id: 13,
    //   name: "Online Uttaranchal University (Online UU)",
    //   fee: 54000,
    //   image: "/assets/img/colleges/uttaranchal-online.webp",
    //   logo: "/assets/img/colleges/icon-uttaranchal.webp",
    //   accreditations: ["NAAC A+", "UGC", "AICTE", "AIU", "WES"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Uttarakhand",
    // },
    // {
    //   id: 14,
    //   name: "Center for Online Learning, D.Y. Patil Deemed To Be University, Navi Mumbai",
    //   fee: 55000,
    //   image: "/assets/img/colleges/dy-patil-online.webp",
    //   logo: "/assets/img/colleges/icon-dy-patil.webp",
    //   accreditations: ["UGC-DEB", "AICTE", "NAAC"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Maharashtra",
    // },
    // {
    //   id: 15,
    //   name: "IMT CDL Ghaziabad",
    //   fee: 80000,
    //   image: "/assets/img/colleges/imt-cdl.webp",
    //   logo: "/assets/img/colleges/icon-imt.webp",
    //   accreditations: ["AICTE"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "MBA",
    //   state: "Uttar Pradesh",
    // },

    // {
    //   id: 16,
    //   name: "Dr. D.Y. Patil Vidyapeeth",
    //   fee: 28000,
    //   image: "/assets/img/colleges/dy-patil-vidyapeeth.webp",
    //   logo: "/assets/img/colleges/icon-dy-patil-vidyapeeth.webp",
    //   accreditations: ["NAAC A++", "UGC", "WES", "AICTE", "AIU", "ASSOCHAM"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "BBA",
    //   state: "Maharashtra",
    // },
    {
      id: 17,
      name: "GLA University Online",
      fee: 47000,
      image: "/assets/img/colleges/gla-online.webp",
      logo: "/assets/img/colleges/icon-gla.webp",
      accreditations: ["NAAC A+", "UGC Entitled and Recognized", "IACBE"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttar Pradesh",
    },
    // {
    //   id: 18,
    //   name: "LPU Online",
    //   fee: 80000,
    //   image: "/assets/img/colleges/lpu-online.webp",
    //   logo: "/assets/img/colleges/icon-lpu-online.webp",
    //   accreditations: ["UGC-DEB", "AICTE", "NAAC A++", "WES"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Punjab",
    // },
    {
      id: 19,
      name: "Shoolini University of Biotechnology and Management Sciences",
      fee: 50000,
      image: "/assets/img/colleges/shoolini-online.webp",
      logo: "/assets/img/colleges/icon-shoolini.webp",
      accreditations: ["NAAC B++", "UGC Entitled", "ISO Certified 9001:2015"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Himachal Pradesh",
    },
    {
      id: 20,
      name: "School of Distance Education, Andhra University",
      fee: 0,
      image: "/assets/img/colleges/andhra-sde.webp",
      logo: "/assets/img/colleges/icon-andhra.webp",
      accreditations: ["NAAC A++", "UGC - DEB"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Andhra Pradesh",
    },
    {
      id: 21,
      name: "Delhi Degree College",
      fee: 9000,
      image: "/assets/img/colleges/delhi-degree.webp",
      logo: "/assets/img/colleges/icon-delhi-degree.webp",
      accreditations: ["NAAC", "UGC", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Delhi",
    },
    {
      id: 22,
      name: "Indian Institute of Finance",
      fee: 60000,
      image: "/assets/img/colleges/iif.webp",
      logo: "/assets/img/colleges/icon-iif.webp",
      accreditations: ["CII", "PHDCCI", "ASSOCHAM", "DMA"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Delhi",
    },
    {
      id: 23,
      name: "JECRC University",
      fee: 42000,
      image: "/assets/img/colleges/jecrc.webp",
      logo: "/assets/img/colleges/icon-jecrc.webp",
      accreditations: ["UGC-DEB", "NAAC Accredited"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Rajasthan",
    },
    {
      id: 24,
      name: "Indian Institute of Materials Management",
      fee: 87900,
      image: "/assets/img/colleges/iimm.webp",
      logo: "/assets/img/colleges/icon-iimm.webp",
      accreditations: ["AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Maharashtra",
    },
    {
      id: 25,
      name: "Acharya Nagarjuna University",
      fee: 0,
      image: "/assets/img/colleges/anu.webp",
      logo: "/assets/img/colleges/icon-anu.webp",
      accreditations: ["AIU", "UGC - DEB", "NAAC A", "ACU"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Andhra Pradesh",
    },
    {
      id: 26,
      name: "Indian School of Business Management and Administration",
      fee: 5900,
      image: "/assets/img/colleges/isbm.webp",
      logo: "/assets/img/colleges/icon-isbm.webp",
      accreditations: ["Nimbus Certifications (ASCB)"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Maharashtra",
    },
    {
      id: 20,
      name: "National Institute of Agricultural Extension Management",
      fee: 8000,
      image: "/assets/img/colleges/niam.webp",
      logo: "/assets/img/colleges/icon-niam.webp",
      accreditations: ["AICTE", "NBA", "Association of Indian Universities"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Telangana",
    },
    {
      id: 21,
      name: "Mumbai College of Hotel Management and Catering Technology",
      fee: 85000,
      image: "/assets/img/colleges/mchmct.webp",
      logo: "/assets/img/colleges/icon-mchmct.webp",
      accreditations: ["UGC"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "BBA",
      state: "Maharashtra",
    },
    {
      id: 22,
      name: "Xaviers Institute of Business Management Studies, Hyderabad",
      fee: 7900,
      image: "/assets/img/colleges/xibms.webp",
      logo: "/assets/img/colleges/icon-xibms.webp",
      accreditations: [
        "ISTE",
        "NHRD",
        "Distance Learning Council of India",
        "ISO",
      ],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Telangana",
    },
    {
      id: 23,
      name: "Sambalpur University",
      fee: 14000,
      image: "/assets/img/colleges/sambalpur.webp",
      logo: "/assets/img/colleges/icon-sambalpur.webp",
      accreditations: ["UGC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Odisha",
    },
    {
      id: 24,
      name: "NIBM Global",
      fee: 34000,
      image: "/assets/img/colleges/nibm-global.webp",
      logo: "/assets/img/colleges/icon-nibm.webp",
      accreditations: [],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Kerala",
    },
    {
      id: 25,
      name: "Parul University",
      fee: 60000,
      image: "/assets/img/colleges/parul.webp",
      logo: "/assets/img/colleges/icon-parul.webp",
      accreditations: ["NAAC A++", "UGC", "AIU", "AICTE", "NABH"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Gujarat",
    },
    {
      id: 26,
      name: "Savitribai Phule Pune University",
      fee: 0,
      image: "/assets/img/colleges/sppu.webp",
      logo: "/assets/img/colleges/icon-sppu.webp",
      accreditations: ["AIU", "UGC - DEB", "NAAC A+", "ACU"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Maharashtra",
    },
    {
      id: 27,
      name: "Venkateshwara Open University",
      fee: 103225,
      image: "/assets/img/colleges/vou.webp",
      logo: "/assets/img/colleges/icon-vou.webp",
      accreditations: ["UGC", "WHED"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Arunachal Pradesh",
    },
    {
      id: 28,
      name: "MIT School Of Distance Education",
      fee: 58000,
      image: "/assets/img/colleges/mit-sde.webp",
      logo: "/assets/img/colleges/icon-mit-sde.webp",
      accreditations: ["UGC-DEB", "AICTE", "MCCIA", "ICDE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Maharashtra",
    },
    {
      id: 29,
      name: "Nalanda Open University",
      fee: 2691,
      image: "/assets/img/colleges/nalanda.webp",
      logo: "/assets/img/colleges/icon-nalanda.webp",
      accreditations: ["UGC-DEB", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Bihar",
    },
    {
      id: 30,
      name: "Utkal University",
      fee: 16800,
      image: "/assets/img/colleges/utkal.webp",
      logo: "/assets/img/colleges/icon-utkal.webp",
      accreditations: ["UGC-DEB", "NAAC A+"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Odisha",
    },
    // {
    //   id: 31,
    //   name: "Institute of Distance Education, University of Madras",
    //   fee: 8355,
    //   image: "/assets/img/colleges/madras-ide.webp",
    //   logo: "/assets/img/colleges/icon-madras.webp",
    //   accreditations: ["UGC-DEB", "AICTE", "NAAC A++", "NCTE"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Tamil Nadu",
    // },
    {
      id: 32,
      name: "University of Calicut",
      fee: 4875,
      image: "/assets/img/colleges/calicut.webp",
      logo: "/assets/img/colleges/icon-calicut.webp",
      accreditations: ["NAAC A+", "UGC - DEB"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Kerala",
    },
    {
      id: 33,
      name: "Welingkar Education",
      fee: 11880,
      image: "/assets/img/colleges/welingkar.webp",
      logo: "/assets/img/colleges/icon-welingkar.webp",
      accreditations: ["NBA", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Maharashtra",
    },
    {
      id: 34,
      name: "Dibrugarh University",
      fee: 0,
      image: "/assets/img/colleges/dibrugarh.webp",
      logo: "/assets/img/colleges/icon-dibrugarh.webp",
      accreditations: ["AIU", "UGC-DEB", "NAAC A", "ACU"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Assam",
    },
    {
      id: 35,
      name: "Academy of Continuing Education, Shiv Nadar University",
      fee: 141600,
      image: "/assets/img/colleges/shiv-nadar.webp",
      logo: "/assets/img/colleges/icon-shiv-nadar.webp",
      accreditations: ["NAAC A", "UGC-DEB", "AICTE"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttar Pradesh",
    },
    {
      id: 36,
      name: "Tamil Nadu Open University",
      fee: 2350,
      image: "/assets/img/colleges/tnou.webp",
      logo: "/assets/img/colleges/icon-tnou.webp",
      accreditations: ["NAAC A++", "UGC-DEB", "NCTE", "RCI", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Tamil Nadu",
    },
    {
      id: 37,
      name: "Vardhman Mahaveer Open University",
      fee: 3155,
      image: "/assets/img/colleges/vmou.webp",
      logo: "/assets/img/colleges/icon-vmou.webp",
      accreditations: ["UGC-DEB", "NAAC A", "AIU"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Rajasthan",
    },
    // {
    //   id: 38,
    //   name: "Centre for Distance & Online Education, Shivaji University",
    //   fee: 11840,
    //   image: "/assets/img/colleges/shivaji-cdoe.webp",
    //   logo: "/assets/img/colleges/icon-shivaji.webp",
    //   accreditations: ["UGC-DEB", "NAAC A++", "AICTE"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Maharashtra",
    // },
    {
      id: 39,
      name: "Symbiosis Centre for Distance Learning",
      fee: 10000,
      image: "/assets/img/colleges/scdl.webp",
      logo: "/assets/img/colleges/icon-scdl.webp",
      accreditations: ["AICTE", "UGC", "NAAC A++"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "MBA",
      state: "Maharashtra",
    },
    // {
    //   id: 40,
    //   name: "School of Distance Education, Jiwaji University, Madhya Pradesh",
    //   fee: 5000,
    //   image: "/assets/img/colleges/jiwaji-sde.webp",
    //   logo: "/assets/img/colleges/icon-jiwaji.webp",
    //   accreditations: ["NAAC A++ Grade University", "UGC-DEB"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Madhya Pradesh",
    // },
    // {
    //   id: 41,
    //   name: "NMIMS Centre for Distance and Online Education",
    //   fee: 99000,
    //   image: "/assets/img/colleges/nmims-cdoe.webp",
    //   logo: "/assets/img/colleges/icon-nmims.webp",
    //   accreditations: ["NAAC Grade A+", "UGC"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Maharashtra",
    // },
    {
      id: 42,
      name: "Odisha State Open University",
      fee: 2325,
      image: "/assets/img/colleges/osou.webp",
      logo: "/assets/img/colleges/icon-osou.webp",
      accreditations: ["UGC-DEB", "AICTE", "NCTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Odisha",
    },
    {
      id: 43,
      name: "Rani Durgavati University",
      fee: 2150,
      image: "/assets/img/colleges/rdu.webp",
      logo: "/assets/img/colleges/icon-rdu.webp",
      accreditations: ["UGC", "NAAC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Madhya Pradesh",
    },
    {
      id: 44,
      name: "Magadh University",
      fee: 11000,
      image: "/assets/img/colleges/magadh.webp",
      logo: "/assets/img/colleges/icon-magadh.webp",
      accreditations: ["UGC-DEB"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Bihar",
    },
    {
      id: 45,
      name: "Netaji Subhas University",
      fee: 7080,
      image: "/assets/img/colleges/netaji-subhas.webp",
      logo: "/assets/img/colleges/icon-netaji.webp",
      accreditations: ["NAAC Grade 'A'", "UGC-DEB", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Jharkhand",
    },
    {
      id: 46,
      name: "North Bengal University, Distance Education",
      fee: 25600,
      image: "/assets/img/colleges/nbu-de.webp",
      logo: "/assets/img/colleges/icon-nbu.webp",
      accreditations: ["NAAC Grade B++", "UGC-DEB"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "West Bengal",
    },
    {
      id: 47,
      name: "Kalyani University",
      fee: 12300,
      image: "/assets/img/colleges/kalyani.webp",
      logo: "/assets/img/colleges/icon-kalyani.webp",
      accreditations: ["UGC-DEB", "AICTE", "NAAC Grade 'A'"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "West Bengal",
    },
    {
      id: 48,
      name: "Rabindra Bharati University",
      fee: 14200,
      image: "/assets/img/colleges/rbu.webp",
      logo: "/assets/img/colleges/icon-rbu.webp",
      accreditations: ["UGC-DEB", "NAAC Grade 'A'"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "West Bengal",
    },
    {
      id: 49,
      name: "Sri Venkateswara University, Tirupati",
      fee: 5000,
      image: "/assets/img/colleges/svu-tirupati.webp",
      logo: "/assets/img/colleges/icon-svu.webp",
      accreditations: ["NAAC Grade 'A+'", "UGC-DEB"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Andhra Pradesh",
    },
    {
      id: 50,
      name: "Smt. Nathibai Damodar Thackersey Women's University, Maharashtra",
      fee: 17790,
      image: "/assets/img/colleges/sndt.webp",
      logo: "/assets/img/colleges/icon-sndt.webp",
      accreditations: ["NAAC Grade A", "UGC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Maharashtra",
    },
    {
      id: 51,
      name: "Vellore Institute of Technology",
      fee: 140000,
      image: "/assets/img/colleges/vit.webp",
      logo: "/assets/img/colleges/icon-vit.webp",
      accreditations: ["UGC", "AICTE", "NAAC"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Tamil Nadu",
    },
    {
      id: 52,
      name: "Assam Don Bosco University",
      fee: 0,
      image: "/assets/img/colleges/assam-don-bosco.webp",
      logo: "/assets/img/colleges/icon-don-bosco.webp",
      accreditations: [
        "A+ NAAC",
        "AICTE",
        "UGC-DEB (Awaiting Renewal Approval)",
      ],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Assam",
    },
    {
      id: 53,
      name: "NDIM Institute",
      fee: 1150000,
      image: "/assets/img/colleges/ndim.webp",
      logo: "/assets/img/colleges/icon-ndim.webp",
      accreditations: ["AICTE", "NBA", "AIU"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Delhi",
    },
    {
      id: 54,
      name: "Institute of Open and Distance Education, Rabindranath Tagore University, Raisen",
      fee: 14500,
      image: "/assets/img/colleges/rtu-iode.webp",
      logo: "/assets/img/colleges/icon-rtu.webp",
      accreditations: ["UGC-DEB", "AICTE", "NAAC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Madhya Pradesh",
    },
    {
      id: 55,
      name: "Sharda University Online",
      fee: 70000,
      image: "/assets/img/colleges/sharda-online.webp",
      logo: "/assets/img/colleges/icon-sharda.webp",
      accreditations: ["NAAC A+", "UGC"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttar Pradesh",
    },
    {
      id: 56,
      name: "Centre for Distance And Online Education, University of Burdwan",
      fee: 8700,
      image: "/assets/img/colleges/burdwan-cdoe.webp",
      logo: "/assets/img/colleges/icon-burdwan.webp",
      accreditations: ["NAAC", "AICTE", "UGC-DEB", "NCTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "West Bengal",
    },
    {
      id: 57,
      name: "Patna University",
      fee: 6000,
      image: "/assets/img/colleges/patna.webp",
      logo: "/assets/img/colleges/icon-patna.webp",
      accreditations: ["NAAC B+", "UGC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Bihar",
    },
    {
      id: 58,
      name: "School of Distance Education, Kannur University",
      fee: 3020,
      image: "/assets/img/colleges/kannur-sde.webp",
      logo: "/assets/img/colleges/icon-kannur.webp",
      accreditations: ["UGC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Kerala",
    },
    {
      id: 59,
      name: "Manonmaniam Sundaranar University - Distance and Online Education",
      fee: 5225,
      image: "/assets/img/colleges/msu-doe.webp",
      logo: "/assets/img/colleges/icon-msu.webp",
      accreditations: ["NAAC A", "UGC-DEB", "AIU", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Tamil Nadu",
    },
    {
      id: 60,
      name: "Institute of Distance Education, Rajiv Gandhi University, Arunachal Pradesh",
      fee: 0,
      image: "/assets/img/colleges/rgu-ide.webp",
      logo: "/assets/img/colleges/icon-rgu.webp",
      accreditations: ["Distance Education Council (DEC)"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Arunachal Pradesh",
    },
    {
      id: 61,
      name: "Koneru Lakshmaiah Education Foundation University",
      fee: 69500,
      image: "/assets/img/colleges/klu.webp",
      logo: "/assets/img/colleges/icon-klu.webp",
      accreditations: ["UGC", "AICTE", "NAAC Grade A++"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Andhra Pradesh",
    },
    {
      id: 62,
      name: "Barkatullah University - Distance Education",
      fee: 7795,
      image: "/assets/img/colleges/barkatullah-de.webp",
      logo: "/assets/img/colleges/icon-barkatullah.webp",
      accreditations: ["NAAC B", "UGC"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Madhya Pradesh",
    },
    {
      id: 63,
      name: "U.P. Rajarshi Tandan Open University",
      fee: 4085,
      image: "/assets/img/colleges/uprtou.webp",
      logo: "/assets/img/colleges/icon-uprtou.webp",
      accreditations: ["NAAC B+", "UGC-DEB", "AICTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Uttar Pradesh",
    },
    // {
    //   id: 64,
    //   name: "DDE, Bangalore University",
    //   fee: 35600,
    //   image: "/assets/img/colleges/bangalore-dde.webp",
    //   logo: "/assets/img/colleges/icon-bangalore.webp",
    //   accreditations: ["NAAC A ++ Grade"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Karnataka",
    // },
    {
      id: 65,
      name: "Dr. Babasaheb Ambedkar Open University",
      fee: 2200,
      image: "/assets/img/colleges/baou.webp",
      logo: "/assets/img/colleges/icon-baou.webp",
      accreditations: ["NAAC A++", "UGC", "AIU", "NCTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Gujarat",
    },
    {
      id: 66,
      name: "Pt. Sundarlal Sharma (Open) University Chhattisgarh",
      fee: 4300,
      image: "/assets/img/colleges/pssou.webp",
      logo: "/assets/img/colleges/icon-pssou.webp",
      accreditations: ["NAAC Grade A+", "UGC", "NCTE"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Chhattisgarh",
    },
    {
      id: 67,
      name: "Online Amrita Vishwa Vidyapeetham University",
      fee: 105000,
      image: "/assets/img/colleges/amrita-online.webp",
      logo: "/assets/img/colleges/icon-amrita.webp",
      accreditations: ["NAAC A++", "UGC Entitled"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Tamil Nadu",
    },
    {
      id: 68,
      name: "SRM University Online",
      fee: 31000,
      image: "/assets/img/colleges/srm-online.webp",
      logo: "/assets/img/colleges/icon-srm.webp",
      accreditations: ["NAAC A++", "UGC-DEB", "AICTE"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "BBA",
      state: "Tamil Nadu",
    },
    {
      id: 69,
      name: "Indian Institute of Management, Kashipur (IIM Kashipur)",
      fee: 86250,
      image: "/assets/img/colleges/iim-kashipur.webp",
      logo: "/assets/img/colleges/icon-iim-kashipur.webp",
      accreditations: ["AACSB", "EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Uttarakhand",
    },
    {
      id: 70,
      name: "Golden Gate University",
      fee: 1965848,
      image: "/assets/img/colleges/golden-gate.webp",
      logo: "/assets/img/colleges/icon-golden-gate.webp",
      accreditations: [
        "AACSB",
        "WASC",
        "AIU",
        "Association of American Law Schools",
        "The State Bar of California",
        "American Bar Association",
      ],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
    },
    {
      id: 71,
      name: "IU (International University of Applied Sciences)",
      fee: 353340,
      image: "/assets/img/colleges/iu.webp",
      logo: "/assets/img/colleges/icon-iu.webp",
      accreditations: ["FIBAA", "AACSB", "AIU", "eqar"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
    },
    {
      id: 72,
      name: "Wharton Online, Wharton University of Pennsylvania",
      fee: 6575,
      image: "/assets/img/colleges/wharton-online.webp",
      logo: "/assets/img/colleges/icon-wharton.webp",
      accreditations: ["IACET", "AACSB"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
    },
    {
      id: 73,
      name: "Liverpool John Moores University",
      fee: 450000,
      image: "/assets/img/colleges/ljmu.webp",
      logo: "/assets/img/colleges/icon-ljmu.webp",
      accreditations: ["WES", "AACSB"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MSc",
      state: "International",
    },
    {
      id: 74,
      name: "Panjab University Centre for Distance and Online Education (CDOE)",
      fee: 8253,
      image: "/assets/img/colleges/panjab-cdoe.webp",
      logo: "/assets/img/colleges/icon-panjab.webp",
      accreditations: ["NAAC A++", "UGC Entitled"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Punjab",
    },
    {
      id: 75,
      name: "Madurai Kamaraj University Directorate of Distance Education",
      fee: 4600,
      image: "/assets/img/colleges/mku-dde.webp",
      logo: "/assets/img/colleges/icon-mku.webp",
      accreditations: ["NAAC A++", "UGC Entitled"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Tamil Nadu",
    },
    {
      id: 76,
      name: "Alagappa University Centre for Distance and Online Education",
      fee: 2675,
      image: "/assets/img/colleges/alagappa-cdoe.webp",
      logo: "/assets/img/colleges/icon-alagappa.webp",
      accreditations: ["NAAC A+", "UGC Entitled"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Tamil Nadu",
    },
    {
      id: 77,
      name: "Directorate of Distance Education Swami Vivekanand Subharti University",
      fee: 14000,
      image: "/assets/img/colleges/subharti-dde.webp",
      logo: "/assets/img/colleges/icon-subharti.webp",
      accreditations: ["NAAC A", "UGC Entitled"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Uttar Pradesh",
    },
    {
      id: 78,
      name: "Indian Institute of Management Indore (IIM Indore)",
      fee: 168150,
      image: "/assets/img/colleges/iim-indore.webp",
      logo: "/assets/img/colleges/icon-iim-indore.webp",
      accreditations: ["AIU", "EQUIS", "AACSB", "AMBA"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Madhya Pradesh",
    },
    {
      id: 79,
      name: "Indian Institute of Management Bangalore (IIM Bangalore)",
      fee: 351000,
      image: "/assets/img/colleges/iim-bangalore.webp",
      logo: "/assets/img/colleges/icon-iim-bangalore.webp",
      accreditations: ["EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Karnataka",
    },
    {
      id: 80,
      name: "Indian Institute of Management Rohtak (IIM Rohtak)",
      fee: 69000,
      image: "/assets/img/colleges/iim-rohtak.webp",
      logo: "/assets/img/colleges/icon-iim-rohtak.webp",
      accreditations: ["AMBA"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Haryana",
    },
    {
      id: 81,
      name: "Indian Institute of Management Tiruchirappalli (IIM Tiruchirappalli)",
      fee: 246400,
      image: "/assets/img/colleges/iim-tiruchirappalli.webp",
      logo: "/assets/img/colleges/icon-iim-tiruchirappalli.webp",
      accreditations: ["AMBA", "AACSB", "MHRD (now MoE)"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Tamil Nadu",
    },
    {
      id: 82,
      name: "Indian Institute of Management Kozhikode (IIM Kozhikode)",
      fee: 350000,
      image: "/assets/img/colleges/iim-kozhikode.webp",
      logo: "/assets/img/colleges/icon-iim-kozhikode.webp",
      accreditations: ["EQUIS", "AMBA", "AACSB", "QS Asia Rankings"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Kerala",
    },
    // {
    //   id: 83,
    //   name: "Indian Institute of Management, Ahmedabad (IIM Ahmedabad)",
    //   fee: 180000,
    //   image: "/assets/img/colleges/iim-ahmedabad.webp",
    //   logo: "/assets/img/colleges/icon-iim-ahmedabad.webp",
    //   accreditations: ["EQUIS"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Gujarat",
    // },
    {
      id: 84,
      name: "Deakin University",
      fee: 1425372,
      image: "/assets/img/colleges/deakin.webp",
      logo: "/assets/img/colleges/icon-deakin.webp",
      accreditations: ["TEQSA", "AACSB", "EQUIS"],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "International",
    },
    {
      id: 85,
      name: "Indian Institute of Management Raipur (IIM Raipur)",
      fee: 250020,
      image: "/assets/img/colleges/iim-raipur.webp",
      logo: "/assets/img/colleges/icon-iim-raipur.webp",
      accreditations: [
        "Institute of National Importance Ministry of Education",
      ],
      rank: "Not specified",
      studyMode: "Online Programmes",
      degree: "MBA",
      state: "Chhattisgarh",
    },
    {
      id: 86,
      name: "School of Distance Education, Online Learning Programmes, Bharathiar University",
      fee: 44880,
      image: "/assets/img/colleges/bharathiar-sde.webp",
      logo: "/assets/img/colleges/icon-bharathiar.webp",
      accreditations: ["UGC", "NAAC A++"],
      rank: "Not specified",
      studyMode: "Distance Programmes",
      degree: "BBA",
      state: "Tamil Nadu",
    },
    // {
    //   id: 87,
    //   name: "Directorate of Distance Education, Suresh Gyan Vihar University (SGVU)",
    //   fee: 28000,
    //   image: "/assets/img/colleges/sgvu-dde.webp",
    //   logo: "/assets/img/colleges/icon-sgvu.webp",
    //   accreditations: ["NAAC A", "AICTE", "AIU"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Rajasthan",
    // },
    // {
    //   id: 88,
    //   name: "Osmania University",
    //   fee: 6000,
    //   image: "/assets/img/colleges/osmania.webp",
    //   logo: "/assets/img/colleges/icon-osmania.webp",
    //   accreditations: ["UGC", "NAAC A+"],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Telangana",
    // },
    // {
    //   id: 89,
    //   name: "University of Petroleum and Energy Studies Centre for Continued Education (UPES)",
    //   fee: 78769,
    //   image: "/assets/img/colleges/upes-cce.webp",
    //   logo: "/assets/img/colleges/icon-upes.webp",
    //   accreditations: ["UGC-DEB", "NAAC A"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Uttarakhand",
    // },

    // {
    //   id: 92,
    //   name: "Centre for Distance and Online Education, Maharshi Dayanand University (MDU)",
    //   fee: 0,
    //   image: "/assets/img/colleges/mdu-cdoe.webp",
    //   logo: "/assets/img/colleges/mdu-cdoe.webp",
    //   accreditations: [],
    //   rank: "Not specified",
    //   studyMode: "Distance Programmes",
    //   degree: "BBA",
    //   state: "Haryana",
    // },
    // {
    //   id: 93,
    //   name: "Directorate of Online Education, SRM Institute of Science and Technology",
    //   fee: 6000,
    //   image: "/assets/img/colleges/srm-doe.webp",
    //   logo: "/assets/img/colleges/icon-srm-doe.webp",
    //   accreditations: ["NAAC A++", "WES", "AICTE", "UGC"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "BBA",
    //   state: "Tamil Nadu",
    // },
    // {
    //   id: 94,
    //   name: "Mudra Institute of Communications, Ahmedabad (MICA)",
    //   fee: 80000,
    //   image: "/assets/img/colleges/mica.webp",
    //   logo: "/assets/img/colleges/icon-mica.webp",
    //   accreditations: ["AICTE", "NBA", "Chartered Institute of Marketing, UK"],
    //   rank: "Not specified",
    //   studyMode: "Online Programmes",
    //   degree: "MBA",
    //   state: "Gujarat",
    // },
  ];

  const universities = rawUniversities.map((uni) => ({
    ...uni,
    url:
      uni.url ||
      `/college/${uni.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")}`,
  }));

  // Filter logic
  const filteredUniversities = universities.filter((uni) => {
    const matchesStudyMode =
      selectedStudyModes.length === 0 ||
      selectedStudyModes.includes(uni.studyMode);
    const matchesFee = uni.fee <= courseFeeRange;
    const matchesDegree =
      selectedDegrees.length === 0 || selectedDegrees.includes(uni.degree);
    const matchesState =
      selectedStates.length === 0 || selectedStates.includes(uni.state);
    const matchesSearch = uni.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return (
      matchesStudyMode &&
      matchesFee &&
      matchesDegree &&
      matchesState &&
      matchesSearch
    );
  });

  // Handlers
  const handleViewMore = () => setDisplayCount(filteredUniversities.length);

  const toggleCompare = (university) => {
    if (compareList.some((item) => item.id === university.id)) {
      setCompareList(compareList.filter((item) => item.id !== university.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, university]);
    } else {
      alert("You can compare up to 3 universities at a time.");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFilterPopup = () => setIsFilterOpen(!isFilterOpen);

  const filterOptions = (options) =>
    options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleStudyModeChange = (value) => {
    setSelectedStudyModes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleFeeChange = (e) => setCourseFeeRange(parseInt(e.target.value));

  const handleDegreeChange = (value) => {
    setSelectedDegrees((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleStateChange = (value) => {
    setSelectedStates((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Filter options
  const studyModeOptions = [
    { value: "Online Programmes", label: "Online Programmes" },
    {
      value: "Online / Distance Programmes",
      label: "Online / Distance Programmes",
    },
    { value: "Distance Programmes", label: "Distance Programmes" },
    { value: "Executive Programmes", label: "Executive Programmes" },
  ];

  const degreeOptions = [
    { value: "MBA", label: "MBA" },
    { value: "PGDM", label: "PGDM" },
    { value: "MCom", label: "M.com" },
    { value: "PhD", label: "PhD" },
    { value: "Diploma", label: "Diploma" },
    { value: "MSc", label: "M.Sc" },
    { value: "MA", label: "M.A." },
    { value: "MCA", label: "M.C.A." },
    { value: "BSc", label: "B.Sc" },
    { value: "BBA", label: "BBA" },
    { value: "BCA", label: "BCA" },
    { value: "BA", label: "BA" },
    { value: "BCom", label: "B.com" },
    { value: "MLIS", label: "MLIS" },
    { value: "BLIS", label: "BLIS" },
    { value: "PGD", label: "Postgraduate Diploma" },
    { value: "Executive mba", label: "Executive MBA" },
  ];

  const stateOptions = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Punjab", label: "Punjab" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Telangana", label: "Telangana" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Haryana", label: "Haryana" },
    { value: "International", label: "International" },
  ];

  useEffect(() => {
    const handleScroll = () => setFixedHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Menu />
      <div className="page-container">
        {/* Banner */}
        <div className="bestcollege_main__G_q2G">
          <Image
            alt="best-college-banner"
            fetchPriority="high"
            width={1920}
            height={870}
            src="/assets/img/colleges/university-of-madras.png"
            className="bestcollege_banner_image__0XOk4"
          />
          <div className="bestcollege_banner__DvNyN">
            <h1 className="bestcollege_explore_heading__IahiT">
              EXPLORE BEST COURSES FROM TOP UNIVERSITIES
            </h1>
            <h4 className="bestcollege_banner_description__OxDnN">
              Build Your Career With
            </h4>
          </div>
        </div>

        {/* Main Content */}
        <div className="study_collegWrapper__qXs_p">
          <div className="study_collegeContainer__INeVI">
            <div className="study_dataSection__nZyfU">
              <div className="study_detailsPage__aSGLr">
                {/* Filter Section */}
                <div className="topuniversity_filter__EWbBt">
                  <button
                    className="mobile-filter-button"
                    onClick={toggleFilterPopup}
                    style={{
                      display: "none",
                      marginBottom: "10px",
                      padding: "10px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Filters
                  </button>

                  <div
                    className={`${styles.filterContent} ${
                      isFilterOpen ? styles.filterContentOpen : ""
                    }`}
                  >
                    <div className={styles.filterHeader}>
                      <h6>Search By Filters</h6>
                      {isFilterOpen && (
                        <button
                          className={styles.mobileCloseButton}
                          onClick={toggleFilterPopup}
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {isFilterOpen && (
                      <input
                        type="text"
                        className={styles.mobileFilterSearch}
                        placeholder="Search universities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    )}

                    {/* Filter Container with Fixed Height */}
                    <div
                      className="topuniversity_filter_main__b2Dto"
                      style={{ minHeight: "400px" }} // Prevents shrinking
                    >
                      {/* Study Mode */}
                      <div className="topuniversity_study_mode__MxEoA">
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Study Mode
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {(isFilterOpen
                            ? filterOptions(studyModeOptions)
                            : studyModeOptions
                          ).map((option) => (
                            <div key={option.value}>
                              <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedStudyModes.includes(
                                  option.value
                                )}
                                onChange={() =>
                                  handleStudyModeChange(option.value)
                                }
                              />
                              <label
                                htmlFor={option.value}
                                className="topuniversity_label_name__Ron3s"
                              >
                                {option.label}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Course Fee */}
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Course Fee (Up to ₹{courseFeeRange.toLocaleString()})
                        </div>
                        <div className="topuniversity_input_range__0gw4x">
                          <input
                            type="range"
                            min="0"
                            max="2000000"
                            name="fees"
                            value={courseFeeRange}
                            onChange={handleFeeChange}
                          />
                        </div>
                        <div className="topuniversity_ranges__b6dJv">
                          <p>0</p>
                          <p>20L</p>
                        </div>
                      </div>

                      {/* Degree */}
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          Degree (Online / Distance)
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {(isFilterOpen
                            ? filterOptions(degreeOptions)
                            : degreeOptions
                          ).map((option) => (
                            <div key={option.value}>
                              <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedDegrees.includes(option.value)}
                                onChange={() =>
                                  handleDegreeChange(option.value)
                                }
                              />
                              <label
                                htmlFor={option.value}
                                className="topuniversity_label_name__Ron3s"
                              >
                                {option.label}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* State */}
                      <div
                        className="topuniversity_study_mode__MxEoA"
                        style={{ marginTop: "20px" }}
                      >
                        <div className="topuniversity_study_mode_select__eKz3p">
                          State
                        </div>
                        <div className="topuniversity_select_btn__Ew4vM">
                          {(isFilterOpen
                            ? filterOptions(stateOptions)
                            : stateOptions
                          ).map((option) => (
                            <div key={option.value}>
                              <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedStates.includes(option.value)}
                                onChange={() => handleStateChange(option.value)}
                              />
                              <label
                                htmlFor={option.value}
                                className="topuniversity_label_name__Ron3s"
                              >
                                {option.label}
                              </label>
                              <br />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* University Cards */}
                <div className="study_detailsContainer__xkYZm">
                  <div
                    className="study_maxWidth__jJbIL"
                    id="Leading International Colleges"
                  >
                    <div className="abroad_main_container_cards__uzKDE">
                      {filteredUniversities.length > 0 ? (
                        filteredUniversities
                          .slice(0, displayCount)
                          .map((uni) => (
                            <Link href={uni.url} key={uni.id} passHref>
                              <div className="abroad_college_link__0oyJa product-card">
                                <div className="abroad_cards__81FQw">
                                  <div>
                                    <div className="abroad_card_img_container__s1_2Z">
                                      <Image
                                        alt={`${uni.name} image`}
                                        width={200}
                                        height={200}
                                        src={uni.image}
                                        className="abroad_card_image__tQiug"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="abroad_college_icon_div__zWBXf">
                                      <div className="abroad_college_logo__QwFnF">
                                        <Image
                                          alt={`${uni.name} logo`}
                                          width={35}
                                          height={35}
                                          src={uni.logo}
                                          loading="lazy"
                                        />
                                      </div>
                                      <div className="abroad_tooltip__Q2tD1">
                                        <span className="abroad_institute_name__K52yL">
                                          {truncateName(uni.name)}
                                        </span>
                                        <span className="abroad_tooltip_text__FsRAP">
                                          {uni.name}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="abroad_fees_div__U28lM">
                                      <div className="abroad_per_year_fees__YXauv">
                                        <p className="abroad_card_fees__HgBs0">
                                          Starting Fee: ₹
                                          {uni.fee.toLocaleString()}*
                                        </p>
                                        <div className="abroad_card_course__7MIhM">
                                          {uni.accreditations.map(
                                            (acc, index) => (
                                              <span key={index}>
                                                {acc}
                                                {index <
                                                  uni.accreditations.length -
                                                    1 && ", "}
                                              </span>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      className="abroad_add_to_compare_btn__p27Wp"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toggleCompare(uni);
                                      }}
                                    >
                                      {compareList.some(
                                        (item) => item.id === uni.id
                                      )
                                        ? "Remove from Compare"
                                        : "Add to Compare"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))
                      ) : (
                        <p
                          style={{
                            textAlign: "center",
                            padding: "20px",
                            color: "#666",
                          }}
                        >
                          No matching results found.
                        </p>
                      )}
                    </div>
                    {filteredUniversities.length > displayCount && (
                      <button
                        onClick={handleViewMore}
                        className="view-more-btn"
                        style={{
                          display: "block",
                          margin: "20px auto",
                          padding: "10px 20px",
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        View More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Compare Section */}
            {compareList.length > 0 && (
              <div
                className={styles.fixedCompareSection}
                style={{
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  transform: "none",
                  zIndex: 1000,
                  backgroundColor: "#0c2d50",
                  padding: "10px",
                  borderRadius: "0",
                  boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
                  maxWidth: "100vw",
                  color: "#fff",
                }}
              >
                <div className={styles.comparePreviewList}>
                  {compareList.map((uni) => (
                    <div key={uni.id} className={styles.comparePreviewItem}>
                      <Image
                        alt={`${uni.name} image`}
                        width={50}
                        height={50}
                        src={uni.image}
                        className={styles.comparePreviewImage}
                      />
                      <div className={styles.comparePreviewDetails}>
                        <span className={styles.comparePreviewName}>
                          {uni.name}
                        </span>
                        <span className={styles.comparePreviewRank}>
                          Rank: {uni.rank}
                        </span>
                        <span>Fee: ₹{uni.fee.toLocaleString()}</span>
                        <span>
                          Accreditations: {uni.accreditations.join(", ")}
                        </span>
                      </div>
                      <button
                        className={styles.removeButton}
                        onClick={() => toggleCompare(uni)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={openModal} className={styles.compareButton}>
                  Compare
                </button>
              </div>
            )}

            {/* Comparison Modal */}
            {isModalOpen && (
              <ComparisonModal
                compareList={compareList}
                toggleCompare={toggleCompare}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>

        {/* Placeholder for Expert Section */}
        <div className="Expert_Expert__Container__f2HSI">
          {/* Add expert section content here if needed */}
        </div>
      </div>
      <Footer />
    </>
  );
}
