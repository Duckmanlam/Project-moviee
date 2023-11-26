import axios from "axios";
import React from "react";

function DetailProduct () {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get(
        "https://streamapi.com:7243/DetailMovie/64fb0541a42c0c55a1ee8b58"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="ml-10 h-full overflow-y-scroll">
      {Object.keys(data).length > 0 ? (
        <>
          <div className="flex">
            <div className="text-40 mt-5 font-semibold capitalize">{data.title}</div>
            <div className="mt-16 ml-auto mr-16">
              ...
            </div>
          </div>
          <div className=" flex text-black font-medium text-16 mt-5 -mr-36">
            <p className="mr-52">Jun. 11, 2023</p>
            <p className="mr-52 ml-28">Duration: {data.duration} m</p>
            <p className="mr-52">Addition Date: {data.additionDate}</p>
          </div>
          <div className="flex mt-5">
            <img
              className="mr-20 w-80 h-96 rounded-2xl"
              src="http://streamapi.com/images/638297944819637094.png"
              alt="poster"
            ></img>
            <p className="mx-10 mr-56 mt-16 text-Grayscale60">{data.content}</p>
          </div>
          <iframe
            className="rounded-2xl mt-16"
            width="1095"
            height="456"
            src="http://streamapi.com/movies/638297944819668307.mp4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="mb-7">
            <div className="mt-16 mb-3 font-semibold">Genres </div>
            <ul className="flex">
              {data.genre.map((genre) => (
                <li className="mr-3 text-Grayscale60" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 mb-7">
            <p className="font-semibold mb-3">Language</p>
            <p className="text-Grayscale60">Vietamese, English</p>
          </div>
          <div className="mt-5 mb-7">
            <p className="font-semibold mb-3">Country</p>
            <p className="text-Grayscale60">{data.country}</p>
          </div>
          <div className="mt-5 mb-7">
            <p className="font-semibold mb-3">Language</p>
            <p className="text-Grayscale60">American</p>
          </div>
          <div className="flex">
            <div className="mb-5 flex">
              <p className="font-semibold mr-7">Like</p>
              <p className="text-Grayscale60 mr-20">20</p>
            </div>
            <div className="mb-5 flex">
              <p className="font-semibold mr-7">Rating</p>
              <p className="text-Grayscale60 mr-20">{data.rating} (45 votes)</p>
            </div>
            <div className=" mb-5 flex">
              <p className="font-semibold mr-7">View</p>
              <p className="text-Grayscale60 mr-20">{data.view}</p>
            </div>
            <div className=" mb-5 flex">
              <p className="font-semibold mr-7">MPA Ratings</p>
              <p className="text-Grayscale60 mr-20">{data.mpaRatings}</p>
            </div>
          </div>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default DetailProduct;