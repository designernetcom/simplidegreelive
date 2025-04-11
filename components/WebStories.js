"use client";

import Image from "next/image";

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

export default function WebStories() {
  const youtubeVideoId = "dQw4w9WgXcQ";
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Web Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {story.overlayColor && (
                  <div
                    className={`absolute inset-0 ${story.overlayColor}`}
                  ></div>
                )}
              </div>
              <div className="absolute bottom-0 w-full bg-white p-4">
                <p className="text-sm text-gray-600 font-semibold">
                  {story.date}
                </p>
                <h2 className="text-lg font-bold leading-tight text-gray-900">
                  {story.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Web Stories</h1>

        {/* YouTube Video Section */}
        <div className="mb-8">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {story.overlayColor && (
                  <div
                    className={`absolute inset-0 ${story.overlayColor}`}
                  ></div>
                )}
              </div>
              <div className="absolute bottom-0 w-full bg-white p-4">
                <p className="text-sm text-gray-600 font-semibold">
                  {story.date}
                </p>
                <h2 className="text-lg font-bold leading-tight text-gray-900">
                  {story.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
