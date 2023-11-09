import MovieCard from "../../components/Movie/MovieCard";
import Card from "../../components/Movie/card";

const movies = [
  {
    number: 1,
    title: "The Shawshank...",
    drama: "Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1-obYjGLFnxwWMi8ZSZCPviofCVglYkmF=w2939-h1247-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
  },
  {
    number: 2,
    title: "The Godfather",
    drama: "Crime • Drama",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1GN4oHFyyuaagjUlGXsAuUB3RyOczjduv=w2939-h1665-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
  },
  {
    number: 3,
    title: "The Dark Knight",
    drama: "Action • Crime",
    imageUrl:
      "https://lh3.google.com/u/0/d/1kDqbQ9LGujlgNceXUfwBJtyaXiNKPkFS=w2939-h932-iv1",
    start: "9.0",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
  },
  {
    number: 4,
    title: "The Shawshank...",
    drama: "Drama",
    imageUrl:
      "https://lh3.google.com/u/0/d/1-obYjGLFnxwWMi8ZSZCPviofCVglYkmF=w2939-h1247-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
  },
  {
    number: 5,
    title: "The Godfather",
    drama: "Crime • Drama",
    imageUrl:
      "	https://lh3.google.com/u/0/d/1GN4oHFyyuaagjUlGXsAuUB3RyOczjduv=w2939-h1665-iv1",
    start: "9.2",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
  },
  {
    number: 6,
    title: "The Dark Knight",
    drama: "Action • Crime",
    imageUrl:
      "https://lh3.google.com/u/0/d/1kDqbQ9LGujlgNceXUfwBJtyaXiNKPkFS=w2939-h932-iv1",
    start: "9.0",
    imgstart:
      "https://lh3.google.com/u/0/d/1_BxjM_nMxIhMT0pJByy1ErL090ReiP7u=w2939-h1216-iv1",
    imgtype:
      "https://lh3.google.com/u/0/d/1AP7SNnuiEl_oXA7cZq14wxWnUWQ3sgD3=w2939-h1034-iv1",
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
    title: "The Dark Knight",
    drama: "| Action • Crime",
    imageUrl:
      "https://lh3.google.com/u/0/d/1QLSw7ilmSnd-yEYFNaQSKtsPVkw4qjxN=w2939-h1034-iv1",
    start: "9.0",
    imgStart: "",
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
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-64 z-10">
        <p className="ml-8 mt-10 text-24 font-bold dark:text-Grayscale70 ">
          Best of Action
        </p>
        <div className="flex flex-wrap ">
          {lists.map((list, index) => (
            <div key={index} className="m-4">
              <Card
                title={list.title}
                drama={list.drama}
                imageUrl={list.imageUrl}
                start={list.start}
                imgstart={list.imgstart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
