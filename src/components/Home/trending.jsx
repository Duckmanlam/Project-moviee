import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "tailwindcss/tailwind.css";

const jsonData = {
  images: [
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  ],
};

const Trending = () => {
  return (
    <div>
      <p className="text-24-700 dark:text-Grayscale10">Top trending now</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {jsonData.images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide relative overflow-hidden"
          >
            <div className="h-full w-full relative rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover object-center w-full h-full transition-all duration-300 transform scale-100 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute right-12 inset-y-0  flex items-center justify-center">
                  <a
                    href="#"
                    className="w-12 h-12 bg-purple-500 rounded-full ring-4 ring-white grid place-items-center hover:bg-purple-400 transition"
                  >
                    <span className="sr-only">Watch the video</span>
                    <svg
                      className="ml-1 w-4"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
