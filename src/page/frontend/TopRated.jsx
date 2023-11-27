import MovieCard from "../../components/Movie/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";

const movies = [
  {
    number: 1,
    title: "The Shawshank...",
    drama: "Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1--5cr-u711fXVPCWNhnOKS9khoRkKFAT=w2939-h1531-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 2,
    title: "The Godfather",
    drama: "Crime • Drama",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1DmKMdSQJHcVmflT-SpVp0O3a73A6iwED=w2000-h1538-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 3,
    title: "The Dark Knight",
    drama: "Action • Crime",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1Q9tk61ZaOCSwa10Llt9FUXSOrGas-Na5=w724-h558-iv1",
    start: "9.0",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 4,
    title: "The Shawshank...",
    drama: "Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1qUmmr4g4h9JyPJbYv2sYeZ6DsjYs4lBX=w2000-h1538-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 5,
    title: "The Godfather",
    drama: "Crime • Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2000-h1538-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 6,
    title: "The Dark Knight",
    drama: "Action • Crime",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1QLSw7ilmSnd-yEYFNaQSKtsPVkw4qjxN=w2000-h1538-iv1",
    start: "9.0",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 7,
    title: "The Godfather",
    drama: "Crime • Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2000-h1538-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    number: 8,
    title: "The Dark Knight",
    drama: "Action • Crime",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1QLSw7ilmSnd-yEYFNaQSKtsPVkw4qjxN=w2000-h1538-iv1",
    start: "9.0",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
    play: "	https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
];
const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const movieApiUrl = `http://streamapi.com:3000/list-model`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the Bearer token from localStorage
        const bearerToken = localStorage.getItem("accessToken");

        const response = await axios.get(movieApiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json", // Adjust content type if needed
          },
        });

        setMovieData(response.data.data);
        console.log(movieData);
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
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="m-4">
                <a
                  href="/video"
                  className=" py-1 flex items-center space-x-4 rounded-md  group"
                >
                  <MovieCard
                    number={movie.number}
                    title={movie.title}
                    drama={movie.drama}
                    imageUrl={movie.imageUrl}
                    start={movie.start}
                    imgstart={movie.imgstart}
                    imgtype={movie.imgtype}
                    play={movie.play}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
