/* eslint-disable react-hooks/rules-of-hooks */
import TopMovies from "../../components/Home/topMovies";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../../API/ClientAxios";
import axios from "axios";
import { Player } from "../../components/common/Player";
import { ItemMoview } from "../../components/common/ItemMovie";
import { AiTwotoneStar } from 'react-icons/ai';
// import { getMovieHomeDTO } from '../../data'

export default function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const navigate = useNavigate();

  if (!id) return navigate("/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(
          `http://streamapi.com:3000/videoplay?id=${id}`,
        );
        if (response.success) {
          setVideo(response.result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const bearerToken = localStorage.getItem("accessToken");

  const handleShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      video?.movieLink,
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
    <div className="ml-8 grid grid-cols-3 gap-4 mt-4 ">
      <div className="col-span-2  ">
        <div>
          <div className="relative">
            {video ? (
              <>
                <Player url={video.movieLink} height="400px"/>
                <div className="flex mt-5 mb-3">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))}
                    className="border p-2 rounded text-lineText dark:text-darkText bg-lineBlock dark:bg-darkBlock"
                  />
                  <AiTwotoneStar className='text-24 mt-2 ml-1 text-yellow-500' />
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
                  {video.title}
                </p>
              </>
            ) : (
              <div>Lỗi video</div>
            )}
            <div>
              <p className="text-black text-16 mt-4 drop-shadow-xl dark:text-white">
                {video.mpaRatings}
              </p>
              <p className="text-black text-16 mt-4 w-full drop-shadow-xl dark:text-white">
                {video.content}
              </p>
            </div>

            <div className="w-full h-full rounded-lg mt-4">
              <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
                More Video
              </p>
              <ItemMoview size={5} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 ml-8 ">
        <TopMovies />
      </div>
    </div>
  );
}
