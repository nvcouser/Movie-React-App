import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ActorsSlider() {
  return (
    <Swiper
      className="mt-28 mb-10 container"
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
  );
}
