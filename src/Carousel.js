import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },  // For mobile devices (up to 320px)
          640: { slidesPerView: 2 },  // For tablets (up to 640px)
          768: { slidesPerView: 3 },  // For desktops (768px and above)
        }}
      >
        <SwiperSlide>
          <img src="Images/First.jpg" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/Second.jpg" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/First.jpg" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/First.jpg" alt="Image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/First.jpg" alt="Image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/First.jpg" alt="Image 6" />
        </SwiperSlide>
      </Swiper>

      {/* Pagination dots */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
