import "swiper/css";
import { ItemMoview } from "../../components/common/ItemMovie";
import { useEffect, useState } from "react";
import axiosClient from '../../API/ClientAxios'
const MovieList = () => {
  const [news, setNews] = useState([]);
  const [toprated, setToprated] = useState ([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/top-rated");
        if (response.success) {
          setNews(response.result.getMovieHomeDTO);
          setToprated(response.result.ratingDTOHome)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <div className="w-1/4 ml-8 mb-6 flex gap-4 items-center">
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search movies..." type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"></input>
        <button className="bg-Primary py-2 px-4 rounded-lg text-w">Search</button>
      </div> */}

      <div className="relative flex flex-col gap-8">
        <div className="w-full h-full rounded-lg ml-8 ">
          <p className="mb-2 text-24 font-bold dark:text-Grayscale70">
            Top Rated
          </p>
          <ItemMoview data={toprated}/>
        </div>
        <div className="w-full h-full rounded-lg ml-8 ">
          <p className="mb-2 text-24 font-bold dark:text-Grayscale70">
            New Film
          </p>
          <ItemMoview data={news}/>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
