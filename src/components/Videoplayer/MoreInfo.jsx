import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function MoreInfo() {
  const [video, setVideo] = useState({});
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false); // Added state for liking

  const movieApiUrl = "http://streamapi.com:3000/videoplay?id=656170e3c44dbd18639e0624";

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

  const handleShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${video.movieLink}`;
    window.open(facebookUrl, "_blank");
  };

  const postRating = async () => {
    try {
      const bearerToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        `http://streamapi.com:3000/videoplay/rating?videoId=${video.id}&rate=${rating}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Rating response:", response.data);
  
      if (response.data && response.data.success && response.data.result) {
        setVideo(response.data.result);
      } else {
        console.error("Invalid rating response:", response.data);
      }
    } catch (error) {
      console.error("Error posting rating:", error);
    }
  };

  const handleLike = async () => {
    try {
      const bearerToken = localStorage.getItem("accessToken");
      const response = await axios.get(`http://streamapi.com:3000/videoplay/like?videoId=${video.id}`, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
      });
  
      console.log("Like response:", response.data);
  
      if (response.data) {
        if (response.data.result) {
          setVideo(response.data.result);
          setLiked(true);
        } else {
          console.error("Invalid like response - Missing 'result' field:", response.data);
        }
      } else {
        console.error("Invalid like response - Empty data:", response);
      }
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };
  


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
            <div key={video.id} className="mt-2">
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
                    {/* Button for liking */}
                    {!liked && (
                      <button
                        className="bg-blue-500 ml-4 px-6 py-2 rounded-md text-white"
                        onClick={handleLike}
                      >
                        Like
                      </button>
                    )}
                  </div>
                  <p className="">MpaRating: {video.mpaRatings}</p>
                  <p className="">
                    Genres: {video.genre.map((genre) => genre.name).join(", ")}
                  </p>
                  <p className="">{video.content}</p>

                  {/* Rating input and submit button */}
                  <p className="group-hover:text-amber-500 mt-5">Đánh giá mức độ từ 1 sao - 5 sao</p>
                  <div className="flex items-center mt-3">
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="mr-2 p-2 border border-gray-400"
                    />
                    <button
                      onClick={postRating}
                      className="bg-yellow-700 text-white px-6 py-2 rounded-md"
                    >
                      Submit Rating
                    </button>
                  </div>
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
