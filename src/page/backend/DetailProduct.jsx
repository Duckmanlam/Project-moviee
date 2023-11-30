import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../API/ClientAxios";

export default function DetailProduct() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`http://streamapi.com:3000/detail-movie?id=${id}`);
        setDetail(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {detail.map(detail).length > 0 ? (
        <div className="group text-18">
          <div className="flex">
            <img
              src={detail.posterImage}
              alt="img"
              className="mb-5 w-full h-40 bg-center ml-auto mr-auto block object-cover rounded-xl border"
            />
            <p className="group-hover:text-yellow-700 text-32 line-clamp-2 dark:text-black">
              {detail.title}
            </p>
          </div>
          <p>MpaRating: {detail.mpaRatings}</p>
          <p className="">
            Genres: {detail.genre.map((genre) => genre.name).join(", ")}
          </p>
          <p className="">
            Language:{" "}
            {detail.language.map((language) => language.title).join(", ")}
          </p>
          <p className="">{detail.content}</p>
          <p className="">{detail.additionDate}</p>
          <p className="">{detail.like}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
