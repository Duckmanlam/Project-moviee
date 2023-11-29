import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "tailwindcss/tailwind.css";
import axiosClient from "../../API/ClientAxios";

export default function TopMovies() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/home");
        if (response.success) {
          setHistory(response.result.watchingHistoryHome);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-20-700 dark:text-Grayscale10">Watching History</h1>
      {history && history.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {history.map((history) => (
            <SwiperSlide key={history.id} className="relative overflow-hidden">
              <div key={history.id} className="mt-6">
                <div className="hover:scale-110 duration-100 ml-4">
                  <Link to="/video" className="rounded-md group object-center ">
                    <img
                      src={history.posterImage}
                      alt="img"
                      className="mb-3 w-48 h-24 bg-center block object-cover rounded-xl border"
                    />
                    <div>
                      <p className="group-hover:text-yellow-700 sm:text-18 line-clamp-2 dark:text-yellow-700 ">
                        {history.title}
                      </p>
                      <p className="group-hover:text-orange-300 dark:text-yellow-700">
                        Genres:{" "}
                        {history.genre.map((genre) => genre.name).join(", ")}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}
