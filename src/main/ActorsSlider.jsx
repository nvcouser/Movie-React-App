import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ActorsSlider() {
  return (
    <div className="container m-auto">
      <div className="ml-3 mt-96 flex items-center text-2xl text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="bi bi-bookmark"
          viewBox="0 0 16 16"
          className="mr-2"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
        <h1>Most Popular Celebrities</h1>
      </div>
      <Swiper
        className="mt-8 mb-10"
        slidesPerView={6}
        spaceBetween={16}
        autoplay={{ delay: 1000 }}
        loop
        //   modules={[Autoplay]}
        breakpoints={{
          50: {
            slidesPerView: 4,
          },
          748: {
            slidesPerView: 5,
          },
          800: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <a href="">
            <img
              className="rounded-full"
              src="./../src/assets/actors/Tom Cruise looks smitten with Mummy co-stars.jpg"
              alt=""
            />
            <ul className="text-center mt-2">
              <li>Tom Cruise</li>
              <li>1962</li>
            </ul>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="rounded-full"
              src="./../src/assets/actors/Leonardo Di Capro 2019.jpg"
              alt=""
            />
            <ul className="text-center mt-2">
              <li>Leonardo DiCaprio</li>
              <li>1974</li>
            </ul>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="rounded-full"
              src="./../src/assets/actors/Liam Neeson Age and Height 2023.jpg"
              alt=""
            />
            <ul className="text-center mt-2">
              <li>Liam Neeson</li>
              <li>1952</li>
            </ul>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="rounded-full"
              src="./../src/assets/actors/SJjry9ui.jpg"
              alt=""
            />
            <ul className="text-center mt-2">
              <li>Robert Downey Jr</li>
              <li>1965</li>
            </ul>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="rounded-full"
              src="./../src/assets/actors/Kristen Stewart_ Hair Style File.jpg"
              alt=""
            />
            <ul className="text-center mt-2">
              <li>Kristen Stewart</li>
              <li>1990</li>
            </ul>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              className="rounded-full"
              src="./../src/assets/actors/Tom Hardy hottest leading man_.jpg"
              alt=""
            />
            <ul className="text-center mt-2">
              <li>Tom Hardy</li>
              <li>1977</li>
            </ul>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
