import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import ReactPlayer from "react-player";

export default function MoreInfo() {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const bearerToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          `http://streamapi.com:3000/detail-movie?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (response.data) {
          setVideo(response.data);
        } else {
          console.error("Invalid API response:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideoDetails();
  }, [id]);

  // const handleShare = () => {
  //   // Placeholder function for sharing
  //   console.log("Sharing video:", video.title);
  // };

  return (
    <div>
      <div className="">
        {/* {video?.movieLink ? (
          <video width="320" height="240" controls>
            <source src={video?.movieLink} type="video/mp4" />
          </video>
        ) : null} */}
        {/* {Object.keys(video).length > 0 && (
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
          {Object.keys(video).length > 0 && (
            <div key={video.id} className="mt-10">
              <div className="">
                <div className="group text-18">
                  <div className="flex">
                    <p className="group-hover:text-yellow-700 text-32 line-clamp-2 dark:text-black">
                      {video.title}
                    </p>
                    <button
                      className="bg-yellow-700 ml-auto px-6 py-2 rounded-md text-white"
                      onClick={handleShare}
                    >
                      Share
                    </button>
                  </div>
                  <p className="">MpaRating: {video.mpaRatings}</p>
                  <p className="">
                    Genres: {video.genre.map((genre) => genre.name).join(", ")}
                  </p>
                  <p className="">{video.content}</p>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
