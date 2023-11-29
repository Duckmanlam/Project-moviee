import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosClient from "../../API/ClientAxios";

export default function TopMovies() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/home");
        if (response.success) {
          setMovieData(response.result.ratingDTOHome);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-20-700 dark:text-Grayscale10">Top Movies</h1>
      {movieData && movieData.length > 0 ? (
        movieData.map((movie) => (
          <div key={movie.id} className="mt-4">
            <div className="hover:scale-110 duration-200 ml-6">
              <Link to="/video" className="rounded-md group object-center ">
                <img
                  src={movie.posterImage}
                  alt="img"
                  className="mb-3 w-36 h-24 bg-center block object-cover rounded-xl border"
                />
                <div>
                  <p className="group-hover:text-yellow-700 sm:text-18 line-clamp-2  dark:text-yellow-500">
                    {movie.title}
                  </p>
                  <p className="group-hover:text-orange-300 dark:text-yellow-500 ">
                    Average Rating: {movie.averageRating}
                  </p>
                  <p className="group-hover:text-orange-300 dark:text-yellow-500  ">
                    Genres: {movie.genre.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No movies available.</p>
      )}
      <Link to="/toprated">
        <div className="justify-center flex mt-5 bg-transparent text-Primary font-semibold hover:text-yellow-900 py-2 px-4 hover:underline w-full rounded-full">
          Xem thêm
        </div>
      </Link>
    </div>
  );
}
