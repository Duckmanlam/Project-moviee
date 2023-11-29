import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieTop, setMovieTop] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(false);

  const movieApiUrl = `http://streamapi.com:3000/top-rated`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bearerToken = localStorage.getItem("accessToken");
        const response = await axios.get(movieApiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        });

        console.log("API Response:", response);

        if (response.data && response.data.success && response.data.result) {
          // Assuming 'getMovieHomeDTO' and 'ratingDTOHome' are properties of the response
          setMovieData(response.data.result.getMovieHomeDTO);
          setMovieTop(response.data.result.ratingDTOHome);
        } else {
          console.error("Invalid API response:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [movieApiUrl]);

  return (
    <div className="relative">
      <div className="absolute top-0 z-20 w-full h-full rounded-lg shadow-lg">
        <p className="ml-8 mb-5 mt-1 text-24 font-bold dark:text-Grayscale70">
          Top Rated
        </p>
        <div className="object-contain">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movieTop.map((top) => (
            <SwiperSlide key={top.id} className="swiper-slide">
              <div
                className={`relative ${
                  hoveredMovieId === top.id
                    ? "hover:scale-110 duration-100"
                    : ""
                } duration-200`}
                onMouseEnter={() => {
                  setHoveredMovieId(top.id);
                }}
                onMouseLeave={() => {
                  setHoveredMovieId(null);
                }}
              >
                <div className="ml-5">
                <a
                  href="/video"
                  className="py-1 items-center space-x-4 rounded-md group"
                >
                  <img
                    src={top.posterImage}
                    alt="img"
                    className="w-60 h-40 bg-center ml-auto mr-auto block"
                  />
                  {hoveredMovieId === top.id && (
                    <div className="absolute top-0 left-0 grid rounded-xl bg-center max-w-7xl shadow-sm bg-slate-200 p-5">
                      <img
                    src={top.posterImage}
                    alt="img"
                    className="w-20 h-8 object-cover"
                  />
                  <div className="text-12">
                      <p className="font-bold text-14 dark:text-black">
                        {top.title}
                      </p>
                      <p className="">
                        Average Rating: {top.averageRating}
                      </p>
                      <p className="">
                        Genres:{" "}
                        {top.genre.map((genre) => genre.name).join(", ")}
                      </p>
                      <p>{top.mpaRatings}</p>
                      </div>
                    </div>
                  )}
                </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
      <div className="absolute top-64 z-10 w-full h-full rounded-lg shadow-lg">
        <p className="ml-8 mt-10 text-24 font-bold dark:text-Grayscale70">
          Best of Action
        </p>
        <Swiper
          spaceBetween={10}
          slidesPerView={4.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movieData.map((movie) => (
            <SwiperSlide key={movie.id} className="swiper-slide">
              <div className="m-4 relative hover:scale-110 duration-200">
                <a
                  href="/video"
                  className="py-1 items-center space-x-4 rounded-md group"
                >
                  <img
                    src={movie.posterImage}
                    alt="img"
                    className="mb-5 w-full h-40 bg-center ml-auto mr-auto block object-cover rounded-xl border"
                  />
                  <div>
                    <p className="group-hover:text-yellow-700 font-bold sm:text-xl line-clamp-2 dark:text-black">
                      {movie.title}
                    </p>
                    <p className="group-hover:text-orange-300">
                      Average Rating: {movie.averageRating}
                    </p>
                    <p className="group-hover:text-orange-300">
                      Genres:{" "}
                      {movie.genre.map((genre) => genre.name).join(", ")}
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
