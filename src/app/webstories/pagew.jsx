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

// Stories array
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

// Card data for the cards
const cards = [
  {
    id: 1,
    title: "IIM Raipur: The College of Dreams!",
    previewImage: "/assets/course/card.webp",
    date: "2024-12-18",
  },
];

// Array of YouTube videos with IDs and titles
const youtubeVideos = [
  {
    id: "mM9WYPevSMY",
    title: "Explore IIM Raipur: A Journey to Excellence",
  },
  {
    id: "on45HL_8oBM",
    title: "IMT CDL: Empowering Future Leaders",
  },
];

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
        {/* Enquire Now Button */}
        <div>
          <button
            className="enquirynow_enquirynow_btn__mRuEZ"
            style={{ transformOrigin: "bottom right" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" />
            </svg>
            Enquire Now
          </button>
        </div>

        {/* Web Stories Banner */}
        <div>
          <div className="AllWebStory_webStoryCarousal__mlw9X">
            <Image
              src="/assets/course/1.png"
              alt="Web Stories Banner"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover" }}
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
          <p style={{ textAlign: "center", margin: "px 0px" }}></p>
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
            <div
              className="study_maxWidth__jJbIL"
              id="Leading International Colleges"
            >
              <div className="abroad_main_container_cards__uzKDE">
                {cards.map((card, index) => (
                  <a
                    key={card.id}
                    className="abroad_college_link__0oyJa"
                    href="#"
                    onClick={() => handleStoryClick(index)}
                  >
                    <div className="abroad_cards__81FQw">
                      <div>
                        <div className="abroad_card_img_container__s1_2Z">
                          <img
                            alt={`${card.title}-image`}
                            loading="lazy"
                            width={200}
                            height={500}
                            decoding="async"
                            data-nimg={1}
                            className="abroad_card_image__tQiug"
                            style={{ color: "transparent" }}
                            src={card.previewImage}
                          />
                        </div>
                      </div>
                      <div>
                        <button className="abroad_add_to_compare_btn__p27Wp">
                          <p className="abroad_card_fees__HgBs0">
                            Date: {card.date || "N/A"}
                          </p>
                          {card.title}
                        </button>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Web Stories</h1>

            {/* YouTube Videos Section with Titles */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.map((video, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                      title={video.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                    ></iframe>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
