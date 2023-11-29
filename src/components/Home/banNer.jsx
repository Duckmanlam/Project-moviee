import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axiosClient from "../../API/ClientAxios";
import { Link } from "react-router-dom";

export default function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/home");
        if (response.success) {
          setBanner(response.result.ratingDTOHome);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
    <div className="py-1 flex items-center space-x-4 rounded-md group">
      <div className="relative">
        {banner.length > 0 && (
          <ReactPlayer
            url={banner[randomIndex].movieUrl}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: "cover", filter: "brightness(60%)" }}
          />
        )}
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          {banner.length > 0 && (
            <>
              <p className="text-white text-32 h-full font-bold drop-shadow-xl">
                {banner[randomIndex].title}
              </p>
              <p className="text-Grayscale60 text-[12px] mt-4 drop-shadow-xl w-3/4">
                {banner[randomIndex].content}
              </p>
              <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                <Link
                  to="/video"
                  className="py-1 flex items-center space-x-4 rounded-md group"
                >
                  <button className="bg-red-500 px-6 py-2 rounded-md text-white text-lg font-semibold hover:bg-red-600 transition-colors">
                    Watch Now
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
