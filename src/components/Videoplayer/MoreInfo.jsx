import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../API/ClientAxios";

export default function VideoPlayer() {
  const [video, setVideo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/videoplay?id=${id}`);
        if (response.success) {
          setVideo(response.result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="relative">
      {Object.keys(video).length > 0 && (
        <video width="320" height="240" controls>
          <source src={video?.movieLink} type="video/mp4" />
        </video>
      )}
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        {Object.keys(video).length > 0 && (
          <>
            <p className="text-white text-32 h-full font-bold drop-shadow-xl">
              {video.title}
            </p>
            <p className="text-Grayscale60 text-[12px] mt-4 drop-shadow-xl w-3/4">
              {video.content}
            </p>
            <p className="text-Grayscale60 text-[12px] mt-4 drop-shadow-xl w-3/4">
              {video.mpaRatings}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
