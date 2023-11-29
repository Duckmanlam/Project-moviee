/* eslint-disable react-hooks/rules-of-hooks */
import TopMovies from "../../components/Home/topMovies";
import MoreInfo from "../../components/Videoplayer/MoreInfo";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../../API/ClientAxios";

export default function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const navigate = useNavigate();

  if (!id) return navigate("/");

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
    <div className="ml-8 grid grid-cols-3 gap-4 mt-4 ">
      <div className="col-span-2  ">
        <div className="mt-4">
          <MoreInfo id={id} video={video} /> 
        </div>
      </div>
      <div className="col-span-1 ml-8 ">
        <TopMovies />
      </div>
    </div>
  );
}
