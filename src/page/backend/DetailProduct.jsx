import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function MoreInfo() {
  const [video, setVideo] = useState({});
  const movieApiUrl = "http://streamapi.com:3000/detail-movie?id=656170e3c44dbd18639e0624";

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
          setVideo(response.data.result);
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
    <div>
      <div className="">
        {Object.keys(video).length > 0 && (
          <ReactPlayer
            url={video.movieLink}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: "cover", filter: "brightness(60%)" }}
          />
        )}
        <div>
          {video && Object.keys(video).length > 0 ? (
            <div key={video.id} className="mt-10">
              <div className="">
                <div className="group text-18">
                  <div className="flex">
                  <p className="group-hover:text-yellow-700 text-32 line-clamp-2 dark:text-black">
                    {video.title}
                  </p>
                  </div>
                  <p className="">
                    MpaRating: {video.mpaRatings}
                  </p>
                  <p className="">
                    Genres: {video.genre.map((genre) => genre.name).join(', ')}
                  </p>
                  <p className="">{video.content}</p>
                  
                </div>
              </div>
            </div>
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
