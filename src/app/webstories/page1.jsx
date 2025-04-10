"use client";
import React, { useState, useEffect } from "react";
import Menu from "../../../components/Header/Menu/Menu"; // Adjust path as needed
import Footer from "../../../components/Footer/Footer"; // Adjust path as needed
import styles from "../styles/stories.module.css"; // CSS module for styling

// Sample story data for the full-screen view (4 stories)
const stories = [
  { id: 1, title: "Story 1", image: "/assets/course/1.png", duration: 5000 },
  { id: 2, title: "Story 2", image: "/assets/course/21.png", duration: 5000 },
  { id: 3, title: "Story 3", image: "/assets/course/24.png", duration: 5000 },
  { id: 4, title: "Story 4", image: "/assets/course/21.png", duration: 5000 },
];

export default function StoriesPage() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  // Open the full-screen story view starting at the first story
  const handleStoryClick = () => {
    setSelectedStoryIndex(0); // Start with the first story
  };

  // Close the full-screen story view
  const handleCloseStory = () => {
    setSelectedStoryIndex(null);
  };

  // Auto-progress to the next story
  useEffect(() => {
    if (selectedStoryIndex === null) return;

    const currentStory = stories[selectedStoryIndex];
    const timer = setTimeout(() => {
      const nextIndex = selectedStoryIndex + 1;
      if (nextIndex < stories.length) {
        setSelectedStoryIndex(nextIndex);
      } else {
        handleCloseStory(); // Close when all 4 stories are viewed
      }
    }, currentStory.duration);

    return () => clearTimeout(timer); // Cleanup timer
  }, [selectedStoryIndex]);

  return (
    <>
      <Menu />
      <div className={styles.container}>
        {/* Floating WhatsApp Button */}
        <a
          className={styles.float}
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918806099993&text=I%27m%20looking%20for"
          rel="noopener noreferrer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            className={styles.myFloat}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>

        {/* Stories Card Section - Single Card */}
        <div className={styles.storiesCarousel}>
          <h1 className={styles.heading}>All Stories</h1>
          <p className={styles.subHeading}>
            Tap on the card to view stories, just like WhatsApp!
          </p>
          <div className={styles.storyList}>
            <div className={styles.storyItem} onClick={handleStoryClick}>
              <img src="/images/story-preview.webp" alt="View Stories" />
              <p>View Stories</p>
            </div>
          </div>
        </div>

        {/* Full-Screen Continuous Story View */}
        {selectedStoryIndex !== null && (
          <div className={styles.fullScreenStory}>
            <div className={styles.storyContent}>
              {/* Progress Bars */}
              <div className={styles.progressBars}>
                {stories.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.progressBar} ${
                      index === selectedStoryIndex ? styles.active : ""
                    }`}
                    style={{
                      animationDuration: `${stories[index].duration}ms`,
                    }}
                  />
                ))}
              </div>

              {/* Story Image and Title */}
              <img
                src={stories[selectedStoryIndex].image}
                alt={stories[selectedStoryIndex].title}
              />
              <h2>{stories[selectedStoryIndex].title}</h2>

              {/* Navigation Buttons */}
              <button
                className={styles.navButton}
                style={{ left: "10px" }}
                onClick={() => {
                  if (selectedStoryIndex > 0) {
                    setSelectedStoryIndex(selectedStoryIndex - 1);
                  }
                }}
              >
                {"<"}
              </button>
              <button
                className={styles.navButton}
                style={{ right: "10px" }}
                onClick={() => {
                  if (selectedStoryIndex < stories.length - 1) {
                    setSelectedStoryIndex(selectedStoryIndex + 1);
                  } else {
                    handleCloseStory();
                  }
                }}
              >
                {">"}
              </button>

              {/* Close Button */}
              <button className={styles.closeButton} onClick={handleCloseStory}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
