import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function MoreInfo() {
  const [detail, setDetail] = useState({});
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
          setDetail(response.data.result);
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
        {Object.keys(detail).length > 0 && (
          <ReactPlayer
            url={detail.movieLink}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: "cover", filter: "brightness(60%)" }}
          />
        )}
        <div>
          {detail && Object.keys(detail).length > 0 ? (
            <div key={detail.id} className="mt-10">
              <div className="">
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
                  <p className="">
                    MpaRating: {detail.mpaRatings}
                  </p>
                  <p className="">
                    Genres: {detail.genre.map((genre) => genre.name).join(', ')}
                  </p>
                  <p className="">
                  Language: {detail.language.map((language) => language.title).join(', ')}
                  </p>
                  <p className="">{detail.content}</p>
                  <p className="">{detail.additionDate}</p>
                  <p className="">{detail.like}</p>
                
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
