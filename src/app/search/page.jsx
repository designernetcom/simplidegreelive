"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      href: "colleges/chandigarh-university",
      type: "college",
    },
    {
      title: "Jain University",
      href: "colleges/jain-university",
      type: "college",
    },
    {
      title: "Uttaranchal University",
      href: "colleges/uttaranchal-university",
      type: "college",
    },
    {
      title: "GLA University",
      href: "colleges/gla-university",
      type: "college",
    },
  ];

  const trendingCourses = [
    {
      title: "Online MBA",
     
      
      href: "online-mba",
      type: "course",
    },
    {
      title: "Online BCA",
     
      href: "online-bca",
      type: "course",
    },
    {
      title: "PGD Data Science",
      
      href: "pg-diploma-data-science",
      type: "course",
    },
    {
      title: "Master of Business Administration",
     
      href: "executive-mba",
      type: "course",
    },
    {
      title: "MBA - Golden Gate University",
     
      href: "mba-from-golden-gate-university",
      type: "course",
    },
    {
      title: "Data Analytics",
    
      href: "data-analytics-certification",
      type: "course",
    },
  ];

  const trendingTopics = [
    {
      title: "New Education Policy 2023: Everything You Need To Know",
      href: "#",
      type: "topic",
    },
    { title: "SGPA to Percentage", href: "#", type: "topic" },
    {
      title: "9 Best Courses After BCom for a Successful Career in 2024",
      href: "#",
      type: "topic",
    },
    {
      title: "Best Courses After 12th in Commerce For High Salaries",
      href: "#",
      type: "topic",
    },
    {
      title: "25 Unique MBA HR Project Topics That Will Set You Apart",
      href: "#",
      type: "topic",
    },
  ];

  // Sample course data
  const courseData = {
    "Online PG Programmes": [
      {
        title: "Online MBA",
     
        href: "courses/online-mba",
      },
      {
        title: "Online MCA",
     
        href: "courses/online-mca",
      },
      {
        title: "Online MCom",
     
        href: "courses/online-mcom",
      },
      {
        title: "Online MSc",
      
        href: "courses/online-msc",
      },
      {
        title: "Online MA",

        href: "online-ma",
      },
      {
        title: "M.Com with ACCA",
   
        href: "courses/online-acca-mcom",
      },
      {
        title: "Distance MBA",
     
        href: "courses/online-mba",
      },
      {
        title: "Distance MCA",
      
        href: "courses/distance-mca",
      },
      {
        title: "Distance MCom",
     
        href: "courses/distance-mcom",
      },
      {
        title: "Distance MLIS",
      
        href: "courses/master-of-library-and-information-science",
      },
    ],
    "Online UG Programmes": [
      {
        title: "Online BBA",
       
        href: "courses/online-bca",
      },
      {
        title: "Online BCA",
      
        href: "courses/online-bba",
      },
      {
        title: "Online BCom",
       
        href: "courses/online-bcom",
      },
      {
        title: "Distance BA",
       
        href: "courses/distance-ba",
      },
      {
        title: "Online BA",
 
        href: "courses/online-ba",
      },
      {
        title: "Distance BCA",
       
        href: "courses/distance-bca",
      },
      {
        title: "Distance BBA",
        
        href: "courses/distance-bba",
      },
      {
        title: "Distance BCom",
        duration: "3 Years",
        img: "/assets/img/home_7/DistanceBCom.webp",
        href: "courses/distance-bcom",
      },
      {
        title: "Distance BSc",
       
        href: "courses/distance-bsc",
      },
      {
        title: "Distance BLIS",
       
        href: "courses/distance-bachelor-of-library-and-information-science",
      },
    ],
    "Diploma Courses": [
      {
        title: "PGD Finance & Acc",
       
        href: "courses/pg-diploma-finance-accounting",
      },
      {
        title: "PGD Data Science",
       
        href: "courses/pg-diploma-data-science",
      },
      {
        title: "Digital Marketing",
       
        href: "courses/professional-diploma-digital-marketing",
      },
      {
        title: "PGD Retail Mgmt.",
        
        href: "courses/pg-diploma-retail-management",
      },
      {
        title: "PGD Marketing",
      
        href: "courses/pg-diploma-marketing-management",
      },
      {
        title: "PGD HR Mgmt.",
       
        href: "courses/diploma-hr-management",
      },
      {
        title: "Banking & Finance",
      
       
        href: "courses/banking-finance-management-diploma",
      },
      {
        title: "International Trade",
        
        href: "courses/international-trade-management-diploma",
      },
      {
        title: "Cyber Law",
       
        href: "courses/diploma-in-cyber-law",
      },
      {
        title: "PGD IT",
        
        href: "courses/pg-diploma-in-it",
      },
    ],
    "Executive Programmes": [
      {
        title: "Master of Business Administration",
        
        href: "courses/executive-mba",
      },
      {
        title: "EPGD Business Analytics",
        
        href: "courses/executive-pg-diploma-in-business-analytics",
      },
      {
        title: "Operations and Supply Chain Mgmt.",
        
        href: "courses/executive-programme-in-operations-and-supply-chain-management",
      },
      {
        title: "EDP Strategic Management",
       
        href: "courses/executive-development-programme-in-strategic-management",
      },
      {
        title: "Chief Financial Officer Programme",
       
        href: "courses/chief-financial-officer-programme",
      },
      {
        title: "Leadership and Management",
      
        href: "courses/executive-programme-in-leadership-and-management",
      },
      {
        title: "EP in General Management",
       
        href: "courses/executive-programme-in-general-management",
      },
      {
        title: "EDP Strategic HR Management",
       
        href: "courses/executive-development-programme-in-strategic-human-resource-management",
      },
      {
        title: "EP in Project Management",
       
        href: "courses/executive-programme-in-project-management",
      },
      {
        title: "Healthcare Service Management",
       
        href: "executive-programme-in-healthcare-service-management",
      },
    ],
    "International Programmes": [
      {
        title: "MBA - Golden Gate University",
       
        href: "courses/mba-from-golden-gate-university",
      },
      {
        title: "MBA - Liverpool Business School",
      
        href: "courses/mba-by-liverpool-business-school",
      },
      {
        title: "MBA - Edgewood",
       
        href: "mba-from-edgewood-college",
      },
      {
        title: "MBA (Global) - Deakin",
       
        href: "courses/mba-global-from-deakin-business-school",
      },
      {
        title: "MBA - UTICA",
       
        href: "courses/mba-from-utica-university",
      },
      {
        title: "MBA (90 ECTS) - IU",
       
        href: "courses/mba-90-ects-by-iu-university",
      },
      {
        title: "MBA - Clarkson",
       
        href: "courses/mba-from-clarkson-university",
      },
      {
        title: "MBA - ISM",
       
        href: "courses/mba-from-ism-international-school-of-management-germany",
      },
      {
        title: "MBA - Sunderland",
       
        href: "courses/mba-from-university-of-sunderland-uk",
      },
      {
        title: "MSBA - Golden Gate",
       
        href: "courses/ms-in-business-analytics-by-golden-gate-university-usa",
      },
    ],
    "Free Courses": [
      {
        title: "Data Analytics",
       
        href: "courses/data-analytics-certification",
      },
      {
        title: "Digital Marketing",
       
        href: "courses/digital-marketing-certification",
      },
      {
        title: "Cyber Security",
       
        href: "courses/cyber-security-certification",
      },
      {
        title: "MS Excel",
        
        href: "courses/certification-in-ms-excel",
      },
      {
        title: "AI and ML",
   
        href: "courses/certification-in-ai-and-ml",
      },
      {
        title: "Marketing",
       
        href: "courses/certification-in-marketing",
      },
      {
        title: "Leadership Skills",
        
        href: "courses/certification-in-leadership-skills",
      },
      {
        title: "Project Management",
        
        href: "courses/project-management-certification",
      },
      {
        title: "Supply Chain Mgmt.",
        
        href: "courses/supply-chain-management-certification",
      },
      {
        title: "Financial Accounting",
        
        href: "courses/financial-accounting-certification",
      },
    ],
  };

  // Flatten courseData for search and add type
  const allCourses = Object.entries(courseData).flatMap(([category, courses]) =>
    courses.map((course) => ({
      ...course,
      category,
      type: "course",
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
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {/* Search Input */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for colleges, courses, and topics"
            style={{
              width: "100%",
              padding: "10px 10px 10px 10px",
              fontSize: "14px",
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
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#272d3b;",
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
                {trendingColleges.map((college, index) => (
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
                    <span style={{ fontSize: "16px", color: "#272d3b;" }}>
                      {college.title}
                    </span>
                    <a
                      href={`/${college.href}`}
                      style={{
                        fontSize: "14px",
                        color: "#3b82f6",
                        textDecoration: "none",
                      }}
                    >
                      KNOW MORE
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Courses */}
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
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
                      padding: "8px 0",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <span style={{ fontSize: "14px", color: "#1f2937" }}>
                      {course.title}
                    </span>
                    <a
                      href={`/${course.href}`}
                      style={{
                        fontSize: "12px",
                        color: "#3b82f6",
                        textDecoration: "none",
                      }}
                    >
                      KNOW MORE
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
                  <span style={{ fontSize: "14px", color: "#1f2937" }}>
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
                    {item.type === "topic" ? "READ MORE" : "KNOW MORE"}
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
