import Link from "next/link";
import Image from "next/image";


export default function BrowseCourses() {
  const courses = [
    {
      href: "/courses/online-mba",
      title: "Online MBA",
      img: "/assets/img/courses/OnlineMBA.png",
      duration: "2 Years",
    },
    {
      href: "/courses/online-mca",
      title: "Online MCA",
      img: "/assets/img/courses/OnlineMCA.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/online-mcom",
      title: "Online MCom",
      img: "/assets/img/courses/OnlineBCom.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/online-msc",
      title: "Online MSc",
      img: "/assets/img/courses/OnlineMSc.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/online-ma",
      title: "Online MA",
      img: "/assets/img/courses/OnlineMA.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/online-acca-mcom",
      title: "M.Com with ACCA",
      img: "/assets/img/courses/OnlineMCom.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/distance-mba",
      title: "Distance MBA",
      img: "/assets/img/courses/DistanceMBA.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/distance-mca",
      title: "Distance MCA",
      img: "/assets/img/courses/DistanceMCA.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/distance-mcom",
      title: "Distance MCom",
      img: "/assets/img/courses/DistanceMCom.webp",
      duration: "2 Years",
    },
    {
      href: "/courses/master-of-library-and-information-science",
      title: "Distance MLIS",
      img: "/assets/img/courses/PG_Diploma_In_Human_Resource_Management.webp",
      duration: "1 Year",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            EXPLORE OUR COURSES & BE AWESOME
          </h2>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { href: "/online-pg-programmes", label: "Online PG Programmes" },
            { href: "/online-ug-programmes", label: "Online UG Programmes" },
            { href: "/diploma-Courses", label: "Diploma Courses" },
            { href: "/executive-programmes", label: "Executive Programmes" },
            {
              href: "/international-programmes",
              label: "International Programmes",
              className: "text-blue-500 font-semibold hover:underline",
            },
            {
              href: "/free-courses",
              label: "Free Courses",
              className: "text-blue-500 font-semibold hover:underline",
            },
          ].map((link, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                index === 0 ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              <Link href={link.href}>
                <span className={link.className || ""}>{link.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={course.href}>
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 h-48">
                  <Image
                    src={course.img}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Duration: {course.duration}
                  </p>
                </div>
              </div>
            </Link>
            <div className="p-4">
              <Link href={course.href}>
                <span className="text-blue-500 hover:underline">Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
