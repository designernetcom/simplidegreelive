"use client";
import React, { useState, useEffect } from "react";
import Menu from "../../../components/Header/Menu/Menu";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import styles from "../styles/stories.module.css"; // CSS module for styling

// Consolidated CSS imports (removed duplicates)
import "../styles/8d1dc0c8629d92eb.css";
import "../styles/3a6b4218bb14b3ef.css";
import "../styles/8b2861424f796947.css";
import "../styles/375626709252238a.css";
import "../styles/bcdb44b6ad772c90.css";
import "../styles/4c28958f221f701e.css";
import "../styles/f45c5181bd682dc8.css";

// Stories array (re-added from your earlier WebStories component)
const stories = [
  {
    id: 1,
    title: "IIM Raipur: The College of Dreams!",
    date: "2024-12-18",
    image: "/images/iim-raipur.jpg",
    overlayColor: "bg-blue-900 bg-opacity-50",
  },
  {
    id: 2,
    title: "IMT CDL: Your Path to Success!",
    date: "2024-12-11",
    image: "/images/imt-cdl.jpg",
  },
  {
    id: 3,
    title: "O.P. Jindal University: Your Future Starts Here!",
    date: "2024-12-05",
    image: "/images/op-jindal.jpg",
  },
  {
    id: 4,
    title: "Chitkara Online: Learning Made Simple, Fun, and Flexible",
    date: "2024-12-02",
    image: "/images/chitkara.jpg",
  },
];

// Story sets for each card
const storySets = [
  [
    {
      id: 1,
      title: "Card 1 - Story 1",
      image: "/assets/course/1.png",
      duration: 5000,
    },
    {
      id: 2,
      title: "Card 1 - Story 2",
      image: "/assets/course/21.png",
      duration: 5000,
    },
    {
      id: 3,
      title: "Card 1 - Story 3",
      image: "/assets/course/24.png",
      duration: 5000,
    },
    {
      id: 4,
      title: "Card 1 - Story 4",
      image: "/assets/course/21.png",
      duration: 5000,
    },
  ],
];
const youtubeVideos = [
  {
    id: "AA6sCEMRp48",
    title: "Get your MBA Degree with Simpli Degree.",
  },
  {
    id: "WLPIo6lIcds",
    title: "Simpli Degree: Your Bright Future Starts Here.",
  },
];
// Card data for the cards
const cards = [
  {
    id: 1,
    title: "IIM Raipur: The College of Dreams!",
    previewImage: "/assets/course/card.webp",
    date: "2024-12-18", // Added date to fix undefined error
  },
];

// Array of YouTube video IDs
const youtubeVideoIds = ["mM9WYPevSMY", "on45HL_8oBM"];

export default function Page() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  // Open the full-screen story view for the clicked card
  const handleStoryClick = (cardIndex) => {
    setSelectedCardIndex(cardIndex);
    setSelectedStoryIndex(0); // Start with the first story of the selected card
  };

  // Close the full-screen story view
  const handleCloseStory = () => {
    setSelectedCardIndex(null);
    setSelectedStoryIndex(null);
  };

  // Auto-progress to the next story
  useEffect(() => {
    if (selectedCardIndex === null || selectedStoryIndex === null) return;

    const currentStories = storySets[selectedCardIndex];
    const currentStory = currentStories[selectedStoryIndex];
    const timer = setTimeout(() => {
      const nextIndex = selectedStoryIndex + 1;
      if (nextIndex < currentStories.length) {
        setSelectedStoryIndex(nextIndex);
      } else {
        handleCloseStory(); // Close when all stories for the card are viewed
      }
    }, currentStory.duration);

    return () => clearTimeout(timer); // Cleanup timer
  }, [selectedCardIndex, selectedStoryIndex]);

  return (
    <>
      <Menu />
      <div>
        {/* Web Stories Banner */}
        <div>
          <div className="AllWebStory_webStoryCarousal__mlw9X">
            <img
              alt="img"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              sizes="100vw"
              src="/assets/course/1.png"
            />
            <div className="AllWebStory_gradientOverlayStyle__Piuzp" />
            <div className="AllWebStory_webStoryHeadingContainer__nTvta">
              <h1 className="AllWebStory_webStoryHeading__7LHOz">
                All Web Stories
              </h1>
              <p className="AllWebStory_webStorySubHeading__dqpv7">
                Explore insights, tips, and articles written by experts in a
                range of professional domains.
              </p>
            </div>
          </div>
          <p style={{ textAlign: "center", margin: "40px 0px" }}></p>
        </div>
        <div className="container mx-auto p-6">
          {/* YouTube Videos Section with Titles */}
          <div className="row justify-content-center">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="col-12 col-md-6 mb-4">
                <div className="w-100">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                      title={video.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="rounded-xl shadow-lg"
                      aria-label={`YouTube video: ${video.title}`}
                    ></iframe>
                  </div>
                  <h6 className="mt-2 text-lg font-semibold text-gray-900 text-center">
                    {video.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* 
        <div className="study_detailsContainer__xkYZm">
          <div className="study_maxWidth__jJbIL" id="Introduction">
            <div className={styles.container}>
           

              <div
                className="study_maxWidth__jJbIL"
                id="Leading International Colleges"
              >
                <div className="container">
                  <div className="row justify-content-center">
                    {cards.map((card, index) => (
                      <div key={card.id} className="col-6 mb-4">
                        <a
                          className="abroad_college_link__0oyJa d-block"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleStoryClick(index);
                          }}
                          aria-label={`View details for ${card.title}`}
                        >
                          <div className="abroad_cards__81FQw">
                            <div className="abroad_card_img_container__s1_2Z">
                              <img
                                alt={`${card.title} image`}
                                loading="lazy"
                                width={300}
                                height={300}
                                decoding="async"
                                className="abroad_card_image__tQiug"
                                style={{ color: "transparent" }}
                                src={card.previewImage}
                              />
                            </div>
                            <div>
                              <button
                                className="abroad_add_to_compare_btn__p27Wp w-100"
                                aria-label={`Add ${card.title} to compare`}
                              >
                                <p className="abroad_card_fees__HgBs0 mb-0">
                                  Date: {card.date || "N/A"}
                                </p>
                                {card.title}
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Full-Screen Continuous Story View */}
        {/* {selectedCardIndex !== null && selectedStoryIndex !== null && (
          <div className={styles.fullScreenStory}>
            <div className={styles.storyContent}>
             
              <div className={styles.progressBars}>
                {storySets[selectedCardIndex].map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.progressBar} ${
                      index === selectedStoryIndex ? styles.active : ""
                    }`}
                    style={{
                      animationDuration: `${storySets[selectedCardIndex][index].duration}ms`,
                    }}
                  />
                ))}
              </div>

            
              <img
                src={storySets[selectedCardIndex][selectedStoryIndex].image}
                alt={storySets[selectedCardIndex][selectedStoryIndex].title}
              />

          
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
                  if (
                    selectedStoryIndex <
                    storySets[selectedCardIndex].length - 1
                  ) {
                    setSelectedStoryIndex(selectedStoryIndex + 1);
                  } else {
                    handleCloseStory();
                  }
                }}
              >
                {">"}
              </button>

            
              <button className={styles.closeButton} onClick={handleCloseStory}>
                Close
              </button>
            </div>
          </div>
        )} */}
      </div>
      <Footer />
    </>
  );
}
