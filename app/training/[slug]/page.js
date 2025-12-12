"use client";
import LetsTalk from "../../components/LetsTalk";
import { useParams } from "next/navigation";
import { trainingData } from "@/app/data/trainingData";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import WhyChooseUs from "../../components/WhyChooseUs";
import Link from "next/link";
import FormClient from "../../components/FormClient";

export default function TrainingVideoPage() {
  const { slug } = useParams();
  const product = trainingData[slug];
  const [currentTime, setCurrentTime] = useState(0);
  const [player, setPlayer] = useState(null);
  const [completed, setCompleted] = useState([]);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: { autoplay: 0 },
  };

  const handlePlayerReady = (event) => {
    setPlayer(event.target);
  };

  const handleProgress = () => {
    if (!player || !product?.steps) return;
    const time = player.getCurrentTime();

    product.steps.forEach((step, index) => {
      if (time >= step.start && !completed.includes(index)) {
        setCompleted((prev) => [...prev, index]);
      }
    });
  };

  const handleChapterClick = (start) => {
    if (player) player.seekTo(start, true);
  };

  // Handle invalid slug
  if (!product)
    return <div className="py-20 text-center text-xl">Training not found</div>;

  return (
    <>
      {product.type === "video" ? (
        // ------------------ VIDEO PAGE ------------------
        <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* VIDEO SECTION */}
          <div>
            {product.videoType === "file" ? (
              <video
                controls
                className="w-full rounded-xl"
                onTimeUpdate={(e) => {
                  const time = e.target.currentTime;
                  setCurrentTime(time);

                  product.steps.forEach((step, index) => {
                    if (time >= step.start && !completed.includes(index)) {
                      setCompleted((prev) => [...prev, index]);
                    }
                  });
                }}
              >
                <source src={product.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <YouTube
                videoId={product.videoId}
                opts={{
                  ...opts,
                  height:
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? "240"
                      : "500",
                }}
                onReady={handlePlayerReady}
              />
            )}

            <h1 className="text-2xl sm:text-3xl font-semibold mt-5 sm:mt-6">
              {product.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 text-gray-700">
              <span className="text-red-600 text-lg sm:text-xl">★★★★★</span>
              <span className="font-semibold text-sm sm:text-base">
                {product.rating}
              </span>
              <span className="text-sm sm:text-base">
                | {product.reviews} Reviews
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-8 sm:mt-10">
              Product Description
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-block bg-[#DF1931] text-white px-6 py-3 rounded-xl text-sm hover:bg-[#c31329] transition"
              >
                Contact Customer Service
              </Link>
              <Link href="/products">
                <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-xl text-sm hover:border-gray-600 hover:text-gray-900 transition">
                  Visit Product Page
                </button>
              </Link>
            </div>
          </div>

          {/* CHAPTERS */}
          <div className="p-6 sm:p-8 bg-[#F8F8F8] rounded-2xl sm:rounded-3xl shadow-sm h-fit">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              {product.title}
            </h3>

            <ul className="space-y-4 sm:space-y-5">
              {product.steps.map((step, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center pb-2 cursor-pointer"
                  onClick={() => handleChapterClick(step.start)}
                >
                  <span className="flex items-center gap-3 text-gray-800">
                    <input
                      type="checkbox"
                      checked={completed.includes(index)}
                      readOnly
                      className="accent-red-600 w-4 h-4"
                    />
                    <span className="text-sm sm:text-base">
                      {index + 1}. {step.title}
                    </span>
                  </span>

                  <span className="text-gray-600 text-xs sm:text-sm">
                    {step.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        // ------------------ PDF PAGE ------------------
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-semibold mb-6">{product.title}</h1>
          <p className="text-gray-600 mb-10">
            This product does not have a video tutorial. You can view or
            download the product brochure below:
          </p>

          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DF1931] text-white px-10 py-4 rounded-xl inline-block"
          >
            Open PDF
          </a>
        </section>
      )}

      <LetsTalk />
      <WhyChooseUs />
    </>
  );
}
