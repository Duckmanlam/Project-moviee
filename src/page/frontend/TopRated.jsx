import MovieCard from "../../components/Movie/MovieCard";
import Card from "../../components/Movie/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
];

const lists = [
  {
    title: "The Shawshank",
    drama: "| Drama",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1DmKMdSQJHcVmflT-SpVp0O3a73A6iwED=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    title: "The Godfather",
    drama: "| Crime • Drama",
    imageUrl:
      "		https://lh3.google.com/u/0/d/1e__TevmCk50DIkBQ1nwZ688ufIE76R-I=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    title: "The Shawshank",
    drama: "| Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    title: "The Shawshank",
    drama: "| Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    title: "The Shawshank",
    drama: "| Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    title: "The Shawshank",
    drama: "| Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
  {
    title: "The Shawshank",
    drama: "| Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1xWHx6BXmT03rfnu-F-Ln2KwOEiFdltxq=w2939-h1034-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    play: "https://lh3.google.com/u/0/d/1PlL3L095DasiNMeDL2znZclADRfSSFYH=w2939-h1531-iv1",
  },
];
const MovieList = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 z-20">
        <p className="ml-8 mb-5 mt-1 text-24 font-bold dark:text-Grayscale70 ">
          Top Rated
        </p>
        <div className="flex flex-wrap ">
          {movies.map((movie, index) => (
            <div key={index} className="m-4">
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
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-64 z-10 w-full h-full rounded-lg shadow-lg">
        <p className="ml-8 mt-10 text-24 font-bold dark:text-Grayscale70">
          Best of Action
        </p>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {lists.map((list, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="m-4 relative">
                <Card
                  title={list.title}
                  drama={list.drama}
                  imageUrl={list.imageUrl}
                  start={list.start}
                  imgstart={list.imgstart}
                  play={list.play}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
