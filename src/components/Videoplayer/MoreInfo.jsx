/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const VideoPlayer = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const bearerToken = localStorage.getItem("accessToken");

  const handleShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      props.video?.movieLink,
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  const handleLike = async () => {
    try {
      const response = await axios.get(
        `http://streamapi.com:3000/videoplay/like?like=${!isLiked}&videoId=65646aef2884711f5ded092a`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setIsLiked(!isLiked);
      console.log(response.data);
    } catch (error) {
      console.error("Error during like:", error.response?.data);
    }
  };
  const handleRate = async () => {
    try {
      const response = await axios.post(
        `http://streamapi.com:3000/videoplay/rating?videoId=65647427e9fe42819b278cc0&rate=${rating}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error during rating:", error.response?.data);
    }
  };

  return (
    <div className="relative">
      {props.video ? (
        <>
          <video className="w-auto h-96" controls>
            <source src={props.video?.movieLink} type="video/mp4" />
          </video>
          <div className="flex mt-5 mb-3">
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="border p-2 rounded"
            />
            <button
              onClick={handleRate}
              className="bg-red-500 hover:bg-red-400 ml-2 text-white font-bold py-0 px-4 rounded"
            >
              Rate
            </button>
            <button
              onClick={handleShare}
              className="ml-auto bg-orange-400 hover:bg-orange-300 text-white font-bold py-0 px-5 rounded mr-2"
            >
              Share
            </button>
            <button
              onClick={handleLike}
              className={`${
                isLiked ? "bg-blue-500" : "bg-gray-300"
              } hover:bg-blue-400 text-white font-bold py-0 px-5 rounded`}
            >
              {isLiked ? "Liked" : "Like"}
            </button>
          </div>
          <p className="text-black text-32 h-full font-bold drop-shadow-xl dark:text-white">
            {props.video.title}
          </p>
        </>
      ) : (
        <div>Lỗi video</div>
      )}

      <div className="6">
        <p className="text-black text-16 mt-4 drop-shadow-xl dark:text-white">
          {props.video.mpaRatings}
        </p>
        <p className="text-black text-16 mt-4 w-full drop-shadow-xl dark:text-white">
          {props.video.content}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
