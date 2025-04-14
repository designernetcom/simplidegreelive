import { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    name: "Anaya Misra",
    role: "WNS Technologies Pvt Ltd.",
    content:
      "I’ve taken many online courses, but nothing compares to Simpli Degree. The real-world case studies and simulations made learning fun and relevant. I’m now more confident in my skills than ever before!",
    image: "/assets/course/feed12.jpg",
  },
  {
    name: "Pratik Sharma",
    role: "HDFC Bank",
    content:
      "I’ve taken many online courses, but nothing compares to Simpli Degree. The real-world case studies and simulations made learning fun and relevant. I’m now more confident in my skills than ever before!",
    image: "/assets/img/feedback.png",
  },
  {
    name: "Namita Pawar",
    role: "Accenture India",
    content:
      "I’ve taken many online courses, but nothing compares to Simpli Degree. The real-world case studies and simulations made learning fun and relevant. I’m now more confident in my skills than ever before!",
    image: "/assets/course/fedd1.jpg",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCardsDesktop = 2; // Number of cards visible at a time on desktop

  // Handle navigation for desktop
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, testimonials.length - visibleCardsDesktop)
    );
  };

  // Calculate progress bar width for desktop
  const progressWidth =
    ((currentIndex + visibleCardsDesktop) / testimonials.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.label}>Trusted Feedback</h3>
          <h2 className={styles.title}>Check What Students Think Of Us</h2>
          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              aria-label="Previous testimonial"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
              </svg>
            </button>
            <button
              className={styles.navButton}
              aria-label="Next testimonial"
              onClick={handleNext}
              disabled={
                currentIndex >= testimonials.length - visibleCardsDesktop
              }
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </button>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          </div>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${
                index >= currentIndex &&
                index < currentIndex + visibleCardsDesktop
                  ? styles.visible
                  : ""
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCardsDesktop)
                }%)`,
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.avatar}
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.role}>({testimonial.role})</p>
                  <div className={styles.quote} />
                  <p className={styles.content}>{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
