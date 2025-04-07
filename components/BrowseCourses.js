import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    name: "Online MBA",
    duration: "2 Years",
    link: "online-mba.html",
    img: "assets/img/courses/OnlineMBA.png",
  },
  {
    name: "Online MCA",
    duration: "2 Years",
    link: "online-mca.html",
    img: "assets/img/courses/OnlineMCA.webp",
  },
  {
    name: "Online MCom",
    duration: "2 Years",
    link: "online-mcom.html",
    img: "assets/img/courses/OnlineBCom.webp",
  },
  {
    name: "Online MSc",
    duration: "2 Years",
    link: "online-msc.html",
    img: "assets/img/courses/OnlineMSc.webp",
  },
  {
    name: "Online MA",
    duration: "2 Years",
    link: "online-ma.html",
    img: "assets/img/courses/OnlineMA.webp",
  },
  {
    name: "M.Com with ACCA",
    duration: "2 Years",
    link: "online-acca-mcom.html",
    img: "assets/img/courses/OnlineMCom.webp",
  },
  {
    name: "Distance MBA",
    duration: "2 Years",
    link: "distance-mba.html",
    img: "assets/img/courses/DistanceMBA.webp",
  },
  {
    name: "Distance MCA",
    duration: "2 Years",
    link: "distance-mca.html",
    img: "assets/img/courses/DistanceMCA.webp",
  },
  {
    name: "Distance MCom",
    duration: "2 Years",
    link: "distance-mcom.html",
    img: "assets/img/courses/DistanceMCom.webp",
  },
  {
    name: "Distance MLIS",
    duration: "1 Year",
    link: "master-of-library-and-information-science.html",
    img: "assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp",
  },
];

export default function BrowseCourses() {
  return (
    <div className="browse-container" id="brCourses">
      <div className="browse-heading-container">
        <h2 className="browse-heading">EXPLORE OUR COURSES & BE AWESOME</h2>
        <p className="browse-subheading">
          Select the category and compare the university
        </p>
      </div>
      <div className="browse-course-grid">
        {courses.map((course, index) => (
          <div key={index} className="browse-course-card">
            <Link href={course.link} style={{ textDecoration: "none" }}>
              <div className="browse-course-card-content">
                <Image
                  src={course.img}
                  alt={course.name}
                  width={200}
                  height={180}
                  loading="lazy"
                />
                <h3 className="browse-course-title">{course.name}</h3>
                <p className="browse-course-duration">
                  Duration: {course.duration}
                </p>
              </div>
            </Link>
            <div className="browse-course-read-more">Read More</div>
          </div>
        ))}
      </div>
    </div>
  );
}
