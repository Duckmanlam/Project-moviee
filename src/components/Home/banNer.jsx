/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axiosClient from "../../API/ClientAxios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-feather";

export default function Banner() {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/home");
        if (response.success) {
          setBanner(response.result.getMovieHomeDTO);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * banner.length);
      setRandomIndex(newIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [banner.length]);

  return (
    <div className="relative w-full max-h-[35rem] h-full overflow-hidden rounded">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          autoplay
        >
          <SwiperSlide>
            <div
              style={{ position: "relative", width: "100%", height: "96vh" }}
            >
              <video
                className="w-full h-full"
                controls
                width="100%"
                height="100%"
                muted={false}
              >
                <source src={banner[randomIndex]?.movieUrl} type="video/mp4" />
              </video>
              <div
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: "50",
                }}
              >
                <p className="text-orange-900 text-32 font-black drop-shadow-xl">
                  {banner[randomIndex]?.title}
                </p>
                <p className="text-orange-900 text-18 mt-4 font-black drop-shadow-xl w-3/4">
                  {banner[randomIndex]?.content}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                  <Link
                    to={`/video/${banner?.id}`}
                    className="py-1 flex items-center space-x-4 rounded-md group"
                  >
                    <button className="bg-red-500 px-6 py-2 rounded-md text-white text-lg font-semibold hover:bg-red-600 transition-colors">
                      Watch Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
