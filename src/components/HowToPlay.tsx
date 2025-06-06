"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

export default function DarkSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="bg-gray-900 py-8 px-4 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">How to Play</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current
        }}
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
        onSwiper={(swiper: SwiperClass) => {
          // Hack: delay init to make sure refs are attached
          setTimeout(() => {
            if (
              swiper.params.navigation &&
              prevRef.current &&
              nextRef.current
            ) {
              const nav = swiper.params.navigation as {
                prevEl: HTMLElement;
                nextEl: HTMLElement;
              };

              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        <SwiperSlide key="1">
          <div className="flex flex-col justify-center items-center gap-2 cursor-grab">
            <Image
              alt="how to play"
              height="200"
              src="https://www.nytimes.com/games-assets/images/strands/FirstGIFH2Pv3.gif"
              width="225"
            />
            <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-md space-y-4 w-full">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Find theme words to fill the board.
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Theme words stay highlighted in blue when found.</li>
                <li>
                  Tap letters to create words. Double tap the last letter to
                  submit.
                </li>
                <li>Theme words stay highlighted in blue when found.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key="2">
          <div className="flex flex-col justify-center items-center gap-2 cursor-grab">
            <Image
              alt="spanagram"
              height="150"
              src="https://www.nytimes.com/games-assets/images/strands/H2P_StaticImageV3.png"
              width="165"
            />
            <div className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-md space-y-4">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Find the “spangram.”
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>
                  The spangram describes the puzzle’s theme and touches two
                  opposite sides of the board. It may be one or more words.
                </li>
                <li>The spangram highlights in yellow when found.</li>
                <li>
                  An example spangram with corresponding theme words:{" "}
                  <span className="font-semibold">LIME</span>,
                  <span className="font-semibold"> FRUIT</span>,{" "}
                  <span className="font-semibold">BANANA</span>,
                  <span className="font-semibold"> APPLE</span>, etc.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        {/* Bottom Buttons */}
        <div
          className="bottom-0 left-0 w-full p-4 flex
         justify-center gap-4 items-center shadow-inner"
        >
          <button
            ref={prevRef}
            className={`bg-gray-700 hover:bg-gray-600
           text-white font-semibold py-2 px-4 rounded ${isBeginning ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-600"}`}
            disabled={isBeginning}
          >
            Back
          </button>
          <button
            ref={nextRef}
            className={`bg-blue-600 hover:bg-blue-500
           text-white font-semibold py-2 px-4 rounded ${isEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-600"}`}
            disabled={isEnd}
          >
            Next
          </button>
        </div>
      </Swiper>
    </div>
  );
}
