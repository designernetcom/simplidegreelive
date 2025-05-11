
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="collegeDetails_maxWidth__6vBVL" id="Courses">
      <div className="courses_wrapper__5pXR3">
        <div>
          <div
            className="Expert_Expert__Container__f2HSI"
            style={{ background: "#f4eceb" }}
          >
            <div className="Expert_Expert__CardsContainer__DDdzT">
              <h2
                style={{
                  fontSize: "24px",
                  margin: "20px 0",
                  fontFamily:
                    "__Work_Sans_8a48d8, __Work_Sans_Fallback_8a48d8",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
                Courses
              </h2>
              <p className="courses_course_college_name__Reg2z">
                Explore online learning courses in NMIMS Centre for Distance and
                Online Education
              </p>
              <div className="Expert_Expert__allCardsContainer__kKnmL">
                <Slider {...sliderSettings}>
                  {[
                    {
                      name: "Online MBA",
                      feeRange: 222000,
                    },
                    {
                      name: "Online BBA",
                      feeRange: 150000,
                    },
                    {
                      name: "Online BCOM",
                      feeRange: 108000,
                    },
                    {
                      name: "Online DIPLOMA",
                      feeRange: 110000,
                    },
                  ].map((course, index) => (
                    <div key={index}>
                      <div className="Expert_Expert__cardContainer__2y7vz">
                        <div className="Expert_Expert__cardData__ocQ6N">
                          <div className="Expert_Expert__flexContainer__iCU0T">
                            <div className="Expert_Expert__imageContainer__zoZB6">
                              <img
                                alt={`Course Image - ${course.name}`}
                                loading="lazy"
                                width={600}
                                height={573}
                                decoding="async"
                                className="Expert_Expert__image__8wv_Z"
                                src="/assets/img/universities/MBA.png"
                              />
                            </div>
                            <p>{course.name}</p>
                            <p>
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#ee3620",
                                }}
                              >
                                24 Month
                              </span>{" "}
                              {course.feeRange}
                            </p>
                            <button
                              className="courses_viewSpsl__lrjH5"
                              onClick={() => setIsCourseModalOpen(true)}
                              aria-label={`Enquire about ${course.name}`}
                            >
                              Enquire Now
                            </button>
                          </div>
                        </div>
                        <button
                          className="Expert_Expert__cardButton__cRBRJ"
                          onClick={() => handleViewSpecialization(course.name)}
                          aria-label={`View specializations for ${course.name}`}
                        >
                          View Specialization
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
