// components/CollegeCards.jsx
import Image from "next/image";
import styles from "./CollegeCards.module.css";
import { useEffect } from "react";

const colleges = [
  {
    name: "AMITY UNIVERSITY",
    href: "/colleges/amity-university-online",
    imgSrc: "/assets/img/universities/amity.webp",
    alt: "AMITY UNIVERSITY",
  },
  {
    name: "DY PATIL UNIVERSITY",
    href: "/colleges/dy-patil-university-pune-online",
    imgSrc: "/assets/img/universities/dypatil.webp",
    alt: "DY PATIL UNIVERSITY",
  },
  {
    name: "IIM AHMEDABAD",
    href: "/colleges/iim-ahmedabad",
    imgSrc: "/assets/img/universities/iima.webp",
    alt: "IIM AHMEDABAD",
  },
  {
    name: "ICFAI CDOE",
    href: "/colleges/icfai-cdoe",
    imgSrc: "/assets/img/universities/ICFAi.webp",
    alt: "ICFAI CDOE",
  },
  {
    name: "JAIN UNIVERSITY",
    href: "/colleges/jain-university-online",
    imgSrc: "/assets/img/universities/jain.webp",
    alt: "JAIN UNIVERSITY",
  },
  {
    name: "ONLINE MANIPAL",
    href: "/colleges/online-manipal-jaipur",
    imgSrc: "/assets/img/universities/manipal.webp",
    alt: "ONLINE MANIPAL",
  },
  {
    name: "UPES UNIVERSITY",
    href: "/colleges/upes-university-online",
    imgSrc: "/assets/img/universities/upes.webp",
    alt: "UPES UNIVERSITY",
  },
  {
    name: "O.P JINDAL UNI.",
    href: "/colleges/op-jindal-global-university",
    imgSrc: "/assets/img/universities/op-jindal.webp",
    alt: "O.P JINDAL UNI.",
  },
  {
    name: "CHITKARA UNI.",
    href: "/colleges/chitkara-university-online",
    imgSrc: "/assets/img/universities/chitkara-logo.webp",
    alt: "CHITKARA UNI.",
  },
  {
    name: "LPU ONLINE",
    href: "/colleges/lpu-distance-education",
    imgSrc: "/assets/img/universities/lpu.webp",
    alt: "LPU ONLINE",
  },
  {
    name: "IMT CDL",
    href: "/colleges/imt-cdl-ghaziabad",
    imgSrc: "/assets/img/universities/amity.webp",
    alt: "IMT CDL",
  },
  {
    name: "IIM RAIPUR",
    href: "/colleges/iim-raipur",
    imgSrc: "/assets/img/universities/iim-raipur.webp",
    alt: "IIM RAIPUR",
  },
  {
    name: "ONLINE UU",
    href: "/colleges/online-uttaranchal-university",
    imgSrc: "/assets/img/universities/amity.webp",
    alt: "ONLINE UU",
  },
];

export default function CollegeCards() {
  useEffect(() => {
    // Add navigation buttons for mobile view
    if (window.innerWidth <= 768) {
      const slider = document.getElementById("collegeSlider");
      const prevButton = document.createElement("button");
      const nextButton = document.createElement("button");
      prevButton.innerText = "◄";
      nextButton.innerText = "►";
      prevButton.className = styles.navButton;
      nextButton.className = styles.navButton;
      prevButton.style.left = "10px";
      nextButton.style.right = "10px";

      slider.parentElement.style.position = "relative";
      slider.parentElement.appendChild(prevButton);
      slider.parentElement.appendChild(nextButton);

      prevButton.addEventListener("click", () => {
        slider.scrollBy({ left: -150, behavior: "smooth" });
      });

      nextButton.addEventListener("click", () => {
        slider.scrollBy({ left: 150, behavior: "smooth" });
      });

      // Cleanup on unmount
      return () => {
        prevButton.remove();
        nextButton.remove();
      };
    }
  }, []);

  return (
    <div className={styles.collegeCardContainer}>
      <div className={styles.collegeGridContainer} id="collegeSlider">
        {colleges.map((college, index) => (
          <a key={index} className={styles.collegeIndiCard} href={college.href}>
            <Image
              src={college.imgSrc}
              alt={college.alt}
              width={145}
              height={45}
              className={styles.collegeIndiCardImg}
              priority={index < 2} // Eager loading for first two images
            />
            <p className={styles.collegeIndiCardName}>{college.name}</p>
          </a>
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <a className={styles.viewAll} href="/colleges">
          View All Colleges
        </a>
      </div>
    </div>
  );
}
