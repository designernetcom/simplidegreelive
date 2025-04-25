"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Sample data for trending colleges, courses, and topics
  const trendingColleges = [
    {
      title: "Amity University",
      href: "college/amity-university-online",
      type: "college",
    },
    {
      title: "Chandigarh University",
      href: "college/chandigarh-university-online",
      type: "college",
    },
    {
      title: "Online Manipal",
      href: "college/online-manipal-jaipur",
      type: "college",
    },
    {
      title: "Delhi Degree College",
      href: "college/delhi-degree-college",
      type: "college",
    },
    {
      title: "GLA University",
      href: "college/gla-university-online",
      type: "college",
    },
    {
      title: "NMIMS CDOE",
      href: "college/nmims-cdoe",
      type: "college",
    },
    {
      title: "Amity University Online",
      href: "college/amity-university-online",
      type: "college",
    },
    {
      title: "Dr. D.Y. Patil Vidyapeeth",
      href: "college/dr-dy-patil-vidyapeeth",
      type: "college",
    },
    {
      title: "Online Manipal Jaipur",
      href: "college/online-manipal-jaipur",
      type: "college",
    },
    {
      title: "Lovely Professional University ODL (LPU)",
      href: "college/lovely-professional-university-odl-lpu",
      type: "college",
    },
    {
      title: "Symbiosis Centre for Distance Learning",
      href: "college/symbiosis-centre-for-distance-learning",
      type: "college",
    },
    {
      title: "Chandigarh University Online",
      href: "college/chandigarh-university-online",
      type: "college",
    },
    {
      title: "Indian Institute of Management, Ahmedabad (IIM Ahmedabad)",
      href: "college/indian-institute-of-management-ahmedabad-iim-ahmedabad",
      type: "college",
    },
    {
      title:
        "University of Petroleum and Energy Studies Centre for Continued Education (UPES)",
      href: "college/university-of-petroleum-and-energy-studies-centre-for-continued-education-upes",
      type: "college",
    },
    {
      title: "O.P. Jindal Global University",
      href: "college/op-jindal-global-university",
      type: "college",
    },
    {
      title: "Chitkara University Centre for Continuing Education",
      href: "college/chitkara-university-centre-for-continuing-education",
      type: "college",
    },
    {
      title: "GLA University Online",
      href: "college/gla-university-online",
      type: "college",
    },
    {
      title: "Shoolini University of Biotechnology and Management Sciences",
      href: "college/shoolini-university-of-biotechnology-and-management-sciences",
      type: "college",
    },
    {
      title: "School of Distance Education, Andhra University",
      href: "college/school-of-distance-education-andhra-university",
      type: "college",
    },
    {
      title: "Delhi Degree College",
      href: "college/delhi-degree-college",
      type: "college",
    },
    {
      title: "Indian Institute of Finance",
      href: "college/indian-institute-of-finance",
      type: "college",
    },
    {
      title: "JECRC University",
      href: "college/jecrc-university",
      type: "college",
    },
    {
      title: "Indian Institute of Materials Management",
      href: "college/indian-institute-of-materials-management",
      type: "college",
    },
    {
      title: "Acharya Nagarjuna University",
      href: "college/acharya-nagarjuna-university",
      type: "college",
    },
    {
      title: "Indian School of Business Management and Administration",
      href: "college/indian-school-of-business-management-and-administration",
      type: "college",
    },
    {
      title: "National Institute of Agricultural Extension Management",
      href: "college/national-institute-of-agricultural-extension-management",
      type: "college",
    },
    {
      title: "Mumbai College of Hotel Management and Catering Technology",
      href: "college/mumbai-college-of-hotel-management-and-catering-technology",
      type: "college",
    },
    {
      title: "Xaviers Institute of Business Management Studies, Hyderabad",
      href: "college/xaviers-institute-of-business-management-studies-hyderabad",
      type: "college",
    },
    {
      title: "Sambalpur University",
      href: "college/sambalpur-university",
      type: "college",
    },
    {
      title: "NIBM Global",
      href: "college/nibm-global",
      type: "college",
    },
    {
      title: "Parul University",
      href: "college/parul-university",
      type: "college",
    },
    {
      title: "Savitribai Phule Pune University",
      href: "college/savitribai-phule-pune-university",
      type: "college",
    },
    {
      title: "Venkateshwara Open University",
      href: "college/venkateshwara-open-university",
      type: "college",
    },
    {
      title: "MIT School Of Distance Education",
      href: "college/mit-school-of-distance-education",
      type: "college",
    },
    {
      title: "Nalanda Open University",
      href: "college/nalanda-open-university",
      type: "college",
    },
    {
      title: "Utkal University",
      href: "college/utkal-university",
      type: "college",
    },
    {
      title: "University of Calicut",
      href: "college/university-of-calicut",
      type: "college",
    },
    {
      title: "Welingkar Education",
      href: "college/welingkar-education",
      type: "college",
    },
    {
      title: "Dibrugarh University",
      href: "college/dibrugarh-university",
      type: "college",
    },
    {
      title: "Academy of Continuing Education, Shiv Nadar University",
      href: "college/academy-of-continuing-education-shiv-nadar-university",
      type: "college",
    },
    {
      title: "Tamil Nadu Open University",
      href: "college/tamil-nadu-open-university",
      type: "college",
    },
    {
      title: "Vardhman Mahaveer Open University",
      href: "college/vardhman-mahaveer-open-university",
      type: "college",
    },
    {
      title: "Symbiosis Centre for Distance Learning",
      href: "college/symbiosis-centre-for-distance-learning",
      type: "college",
    },
    {
      title: "Odisha State Open University",
      href: "college/odisha-state-open-university",
      type: "college",
    },
    {
      title: "Rani Durgavati University",
      href: "college/rani-durgavati-university",
      type: "college",
    },
    {
      title: "Magadh University",
      href: "college/magadh-university",
      type: "college",
    },
    {
      title: "Netaji Subhas University",
      href: "college/netaji-subhas-university",
      type: "college",
    },
    {
      title: "North Bengal University, Distance Education",
      href: "college/north-bengal-university-distance-education",
      type: "college",
    },
    {
      title: "Kalyani University",
      href: "college/kalyani-university",
      type: "college",
    },
    {
      title: "Rabindra Bharati University",
      href: "college/rabindra-bharati-university",
      type: "college",
    },
    {
      title: "Sri Venkateswara University, Tirupati",
      href: "college/sri-venkateswara-university-tirupati",
      type: "college",
    },
    {
      title: "Smt. Nathibai Damodar Thackersey Women's University, Maharashtra",
      href: "college/smt-nathibai-damodar-thackersey-womens-university-maharashtra",
      type: "college",
    },
    {
      title: "Vellore Institute of Technology",
      href: "college/vellore-institute-of-technology",
      type: "college",
    },
    {
      title: "Assam Don Bosco University",
      href: "college/assam-don-bosco-university",
      type: "college",
    },
    {
      title: "NDIM Institute",
      href: "college/ndim-institute",
      type: "college",
    },
    {
      title:
        "Institute of Open and Distance Education, Rabindranath Tagore University, Raisen",
      href: "college/institute-of-open-and-distance-education-rabindranath-tagore-university-raisen",
      type: "college",
    },
    {
      title: "Sharda University Online",
      href: "college/sharda-university-online",
      type: "college",
    },
    {
      title: "Centre for Distance And Online Education, University of Burdwan",
      href: "college/centre-for-distance-and-online-education-university-of-burdwan",
      type: "college",
    },
    {
      title: "Patna University",
      href: "college/patna-university",
      type: "college",
    },
    {
      title: "School of Distance Education, Kannur University",
      href: "college/school-of-distance-education-kannur-university",
      type: "college",
    },
    {
      title:
        "Manonmaniam Sundaranar University - Distance and Online Education",
      href: "college/manonmaniam-sundaranar-university-distance-and-online-education",
      type: "college",
    },
    {
      title:
        "Institute of Distance Education, Rajiv Gandhi University, Arunachal Pradesh",
      href: "college/institute-of-distance-education-rajiv-gandhi-university-arunachal-pradesh",
      type: "college",
    },
    {
      title: "Koneru Lakshmaiah Education Foundation University",
      href: "college/koneru-lakshmaiah-education-foundation-university",
      type: "college",
    },
    {
      title: "Barkatullah University - Distance Education",
      href: "college/barkatullah-university-distance-education",
      type: "college",
    },
    {
      title: "U.P. Rajarshi Tandan Open University",
      href: "college/up-rajarshi-tandan-open-university",
      type: "college",
    },
    {
      title: "Dr. Babasaheb Ambedkar Open University",
      href: "college/dr-babasaheb-ambedkar-open-university",
      type: "college",
    },
    {
      title: "Pt. Sundarlal Sharma (Open) University Chhattisgarh",
      href: "college/pt-sundarlal-sharma-open-university-chhattisgarh",
      type: "college",
    },
    {
      title: "Online Amrita Vishwa Vidyapeetham University",
      href: "college/online-amrita-vishwa-vidyapeetham-university",
      type: "college",
    },
    {
      title: "SRM University Online",
      href: "college/srm-university-online",
      type: "college",
    },
    {
      title: "Indian Institute of Management, Kashipur (IIM Kashipur)",
      href: "college/indian-institute-of-management-kashipur-iim-kashipur",
      type: "college",
    },
    {
      title: "Golden Gate University",
      href: "college/golden-gate-university",
      type: "college",
    },
    {
      title: "IU (International University of Applied Sciences)",
      href: "college/iu-international-university-of-applied-sciences",
      type: "college",
    },
    {
      title: "Wharton Online, Wharton University of Pennsylvania",
      href: "college/wharton-online-wharton-university-of-pennsylvania",
      type: "college",
    },
    {
      title: "Liverpool John Moores University",
      href: "college/liverpool-john-moores-university",
      type: "college",
    },
    {
      title:
        "Panjab University Centre for Distance and Online Education (CDOE)",
      href: "college/panjab-university-centre-for-distance-and-online-education-cdoe",
      type: "college",
    },
    {
      title: "Madurai Kamaraj University Directorate of Distance Education",
      href: "college/madurai-kamaraj-university-directorate-of-distance-education",
      type: "college",
    },
    {
      title: "Alagappa University Centre for Distance and Online Education",
      href: "college/alagappa-university-centre-for-distance-and-online-education",
      type: "college",
    },
    {
      title:
        "Directorate of Distance Education Swami Vivekanand Subharti University",
      href: "college/directorate-of-distance-education-swami-vivekanand-subharti-university",
      type: "college",
    },
    {
      title: "Indian Institute of Management Indore (IIM Indore)",
      href: "college/indian-institute-of-management-indore-iim-indore",
      type: "college",
    },
    {
      title: "Indian Institute of Management Bangalore (IIM Bangalore)",
      href: "college/indian-institute-of-management-bangalore-iim-bangalore",
      type: "college",
    },
    {
      title: "Indian Institute of Management Rohtak (IIM Rohtak)",
      href: "college/indian-institute-of-management-rohtak-iim-rohtak",
      type: "college",
    },
    {
      title:
        "Indian Institute of Management Tiruchirappalli (IIM Tiruchirappalli)",
      href: "college/indian-institute-of-management-tiruchirappalli-iim-tiruchirappalli",
      type: "college",
    },
    {
      title: "Indian Institute of Management Kozhikode (IIM Kozhikode)",
      href: "college/indian-institute-of-management-kozhikode-iim-kozhikode",
      type: "college",
    },
    {
      title: "Deakin University",
      href: "college/deakin-university",
      type: "college",
    },
    {
      title: "Indian Institute of Management Raipur (IIM Raipur)",
      href: "college/indian-institute-of-management-raipur-iim-raipur",
      type: "college",
    },
    {
      title:
        "School of Distance Education, Online Learning Programmes, Bharathiar University",
      href: "college/school-of-distance-education-online-learning-programmes-bharathiar-university",
      type: "college",
    },
  ];

  const trendingCourses = [
    {
      title: "Online MCom",
      href: "courses/online-mcom",
      type: "course",
    },
    {
      title: "Online MSc",
      href: "courses/online-msc",
      type: "course",
    },
    {
      title: "Online MA",
      href: "courses/online-ma", // Fixed href to match pattern
      type: "course",
    },
  ];

  const trendingTopics = [
    {
      title: "New Education Policy 2023: Everything You Need To Know",
      href: "topics/new-education-policy-2023",
      type: "topic",
    },
    {
      title: "SGPA to Percentage",
      href: "topics/sgpa-to-percentage",
      type: "topic",
    },
    {
      title: "9 Best Courses After BCom for a Successful Career in 2024",
      href: "topics/best-courses-after-bcom-2024",
      type: "topic",
    },
    {
      title: "Best Courses After 12th in Commerce For High Salaries",
      href: "topics/best-courses-after-12th-commerce",
      type: "topic",
    },
    {
      title: "25 Unique MBA HR Project Topics That Will Set You Apart",
      href: "topics/mba-hr-project-topics",
      type: "topic",
    },
  ];

  // Sample course data
  const courseData = {
    "Online PG Programmes": [
      {
        title: "Online MBA",
        href: "courses/online-mba",
        type: "course",
      },
      {
        title: "Online MCA",
        href: "courses/online-mca",
        type: "course",
      },
      {
        title: "Online MCom",
        href: "courses/online-mcom",
        type: "course",
      },
      {
        title: "Online MSc",
        href: "courses/online-msc",
        type: "course",
      },
      {
        title: "Online MA",
        href: "courses/online-ma",
        type: "course",
      },
      {
        title: "M.Com with ACCA",
        href: "courses/online-acca-mcom",
        type: "course",
      },
      {
        title: "Distance MBA",
        href: "courses/distance-mba", // Fixed href to be unique
        type: "course",
      },
      {
        title: "Distance MCA",
        href: "courses/distance-mca",
        type: "course",
      },
      {
        title: "Distance MCom",
        href: "courses/distance-mcom",
        type: "course",
      },
      {
        title: "Distance MLIS",
        href: "courses/master-of-library-and-information-science",
        type: "course",
      },
    ],
    "Online UG Programmes": [
      {
        title: "Online BBA",
        href: "courses/online-bba", // Fixed href to match title
        type: "course",
      },
      {
        title: "Online BCA",
        href: "courses/online-bca", // Fixed href to match title
        type: "course",
      },
      {
        title: "Online BCom",
        href: "courses/online-bcom",
        type: "course",
      },
      {
        title: "Distance BA",
        href: "courses/distance-ba",
        type: "course",
      },
      {
        title: "Online BA",
        href: "courses/online-ba",
        type: "course",
      },
      {
        title: "Distance BCA",
        href: "courses/distance-bca",
        type: "course",
      },
      {
        title: "Distance BBA",
        href: "courses/distance-bba",
        type: "course",
      },
      {
        title: "Distance BCom",
        href: "courses/distance-bcom",
        type: "course",
      },
      {
        title: "Distance BSc",
        href: "courses/distance-bsc",
        type: "course",
      },
      {
        title: "Distance BLIS",
        href: "courses/distance-bachelor-of-library-and-information-science",
        type: "course",
      },
    ],
    "Diploma Courses": [
      {
        title: "PGD Finance & Acc",
        href: "courses/pg-diploma-finance-accounting",
        type: "course",
      },
      {
        title: "PGD Data Science",
        href: "courses/pg-diploma-data-science",
        type: "course",
      },
      {
        title: "Digital Marketing",
        href: "courses/professional-diploma-digital-marketing",
        type: "course",
      },
      {
        title: "PGD Retail Mgmt.",
        href: "courses/pg-diploma-retail-management",
        type: "course",
      },
      {
        title: "PGD Marketing",
        href: "courses/pg-diploma-marketing-management",
        type: "course",
      },
      {
        title: "PGD HR Mgmt.",
        href: "courses/diploma-hr-management",
        type: "course",
      },
      {
        title: "Banking & Finance",
        href: "courses/banking-finance-management-diploma",
        type: "course",
      },
      {
        title: "International Trade",
        href: "courses/international-trade-management-diploma",
        type: "course",
      },
      {
        title: "Cyber Law",
        href: "courses/diploma-in-cyber-law",
        type: "course",
      },
      {
        title: "PGD IT",
        href: "courses/pg-diploma-in-it",
        type: "course",
      },
    ],
    "Executive Programmes": [
      {
        title: "Master of Business Administration",
        href: "courses/executive-mba",
        type: "course",
      },
      {
        title: "EPGD Business Analytics",
        href: "courses/executive-pg-diploma-in-business-analytics",
        type: "course",
      },
      {
        title: "Operations and Supply Chain Mgmt.",
        href: "courses/executive-programme-in-operations-and-supply-chain-management",
        type: "course",
      },
      {
        title: "EDP Strategic Management",
        href: "courses/executive-development-programme-in-strategic-management",
        type: "course",
      },
      {
        title: "Chief Financial Officer Programme",
        href: "courses/chief-financial-officer-programme",
        type: "course",
      },
      {
        title: "Leadership and Management",
        href: "courses/executive-programme-in-leadership-and-management",
        type: "course",
      },
      {
        title: "EP in General Management",
        href: "courses/executive-programme-in-general-management",
        type: "course",
      },
      {
        title: "EDP Strategic HR Management",
        href: "courses/executive-development-programme-in-strategic-human-resource-management",
        type: "course",
      },
      {
        title: "EP in Project Management",
        href: "courses/executive-programme-in-project-management",
        type: "course",
      },
      {
        title: "Healthcare Service Management",
        href: "courses/executive-programme-in-healthcare-service-management", // Fixed href
        type: "course",
      },
    ],
    "International Programmes": [
      {
        title: "MBA - Golden Gate University",
        href: "courses/mba-from-golden-gate-university",
        type: "course",
      },
      {
        title: "MBA - Liverpool Business School",
        href: "courses/mba-by-liverpool-business-school",
        type: "course",
      },
      {
        title: "MBA - Edgewood",
        href: "courses/mba-from-edgewood-college", // Fixed href
        type: "course",
      },
      {
        title: "MBA (Global) - Deakin",
        href: "courses/mba-global-from-deakin-business-school",
        type: "course",
      },
      {
        title: "MBA - UTICA",
        href: "courses/mba-from-utica-university",
        type: "course",
      },
      {
        title: "MBA (90 ECTS) - IU",
        href: "courses/mba-90-ects-by-iu-university",
        type: "course",
      },
      {
        title: "MBA - Clarkson",
        href: "courses/mba-from-clarkson-university",
        type: "course",
      },
      {
        title: "MBA - ISM",
        href: "courses/mba-from-ism-international-school-of-management-germany",
        type: "course",
      },
      {
        title: "MBA - Sunderland",
        href: "courses/mba-from-university-of-sunderland-uk",
        type: "course",
      },
      {
        title: "MSBA - Golden Gate",
        href: "courses/ms-in-business-analytics-by-golden-gate-university-usa",
        type: "course",
      },
    ],
    "Free Courses": [
      {
        title: "Data Analytics",
        href: "courses/data-analytics-certification",
        type: "course",
      },
      {
        title: "Digital Marketing",
        href: "courses/digital-marketing-certification",
        type: "course",
      },
      {
        title: "Cyber Security",
        href: "courses/cyber-security-certification",
        type: "course",
      },
      {
        title: "MS Excel",
        href: "courses/certification-in-ms-excel",
        type: "course",
      },
      {
        title: "AI and ML",
        href: "courses/certification-in-ai-and-ml",
        type: "course",
      },
      {
        title: "Marketing",
        href: "courses/certification-in-marketing",
        type: "course",
      },
      {
        title: "Leadership Skills",
        href: "courses/certification-in-leadership-skills",
        type: "course",
      },
      {
        title: "Project Management",
        href: "courses/project-management-certification",
        type: "course",
      },
      {
        title: "Supply Chain Mgmt.",
        href: "courses/supply-chain-management-certification",
        type: "course",
      },
      {
        title: "Financial Accounting",
        href: "courses/financial-accounting-certification",
        type: "course",
      },
    ],
  };

  // Flatten courseData for search and add type
  const allCourses = Object.entries(courseData).flatMap(([category, courses]) =>
    courses.map((course) => ({
      ...course,
      category,
    }))
  );

  // Combine all searchable data (colleges, courses, and topics)
  const allSearchableData = [
    ...trendingColleges,
    ...trendingCourses,
    ...trendingTopics,
    ...allCourses,
  ];

  // Filter data based on search query
  const filteredData = allSearchableData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        position: "relative", // Added for positioning close button
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => router.back()}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
          background: "transparent",
          color: "#000",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        <svg
          style={{ marginRight: "6px" }}
          width="39"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      
      </button>

      <div
        style={{
          width: "100%",
          maxWidth: "1260px",
          margin: "0 auto",
        }}
      >
        {/* Search Input */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "62px auto 32px",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for colleges, courses, and topics"
            style={{
              width: "100%",
              padding: "15px 19px 20px 30px",
              fontSize: "16px",
              color: "#374151",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "20px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
          />
        </div>

        {/* Three-Column Layout for Trending Sections or Search Results */}
        {searchQuery.trim() === "" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Trending Colleges */}
            <div style={{ flex: "1", minWidth: "600px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#272d3b",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  style={{ marginRight: "8px", color: "#3b82f6" }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 9h3v6h6V9h2v6h6V9h3z" />
                </svg>
                TRENDING COLLEGES
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {trendingColleges.slice(0, 5).map((college, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0",
                      borderBottom: "1px solid #352d2c",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#272d3b",
                        fontFamily: "'Work Sans', sans-serif",
                      }}
                    >
                      {college.title}
                    </span>
                    <a
                      href={`/${college.href}`}
                      style={{
                        fontSize: "14px",
                        color: "rgb(0, 45, 98)",
                        fontWeight: "650",
                        textDecoration: "none",
                      }}
                    >
                      Know More
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Courses */}
            <div style={{ flex: "1", minWidth: "600px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#272d3b",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  style={{ marginRight: "8px", color: "#3b82f6" }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 9h3v6h6V9h2v6h6V9h3z" />
                </svg>
                TRENDING COURSES
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {trendingCourses.map((course, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0",
                      borderBottom: "1px solid #352d2c",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#272d3b",
                        fontWeight: "500",
                        fontFamily: "'Work Sans', sans-serif",
                      }}
                    >
                      {course.title}
                    </span>
                    <a
                      href={`/${course.href}`}
                      style={{
                        fontSize: "14px",
                        color: "rgb(0, 45, 98)",
                        fontWeight: "650",
                        textDecoration: "none",
                      }}
                    >
                      Know More
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Topics */}
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  style={{ marginRight: "8px", color: "#3b82f6" }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 9h3v6h6V9h2v6h6V9h3z" />
                </svg>
                TRENDING TOPICS
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {trendingTopics.map((topic, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <a
                      href={`/${topic.href}`}
                      style={{
                        fontSize: "14px",
                        color: "#3b82f6",
                        textDecoration: "none",
                      }}
                    >
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : filteredData.length > 0 ? (
          <div
            style={{
              width: "100%",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                style={{ marginRight: "8px", color: "#3b82f6" }}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 9h3v6h6V9h2v6h6V9h3z" />
              </svg>
              SEARCH RESULTS
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {filteredData.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#1f2937",
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    {item.title}{" "}
                    {item.type === "course" && item.category
                      ? `(${item.category})`
                      : ""}
                  </span>
                  <a
                    href={`/${item.href}`}
                    style={{
                      fontSize: "12px",
                      color: "#3b82f6",
                      textDecoration: "none",
                    }}
                  >
                    {item.type === "topic" ? "READ MORE" : "Know More"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              maxWidth: "960px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#6b7280",
                marginTop: "24px",
                fontFamily: "'Work Sans', sans-serif",
              }}
            >
              No results found for "{searchQuery}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
