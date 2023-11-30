import "swiper/css";
// import { useState } from "react";
import { ItemMoview } from "../../components/common/ItemMovie";
// import { useEffect } from "react";
// import axiosClient from '../../API/ClientAxios'
const MovieList = () => {
  // const [movieData, setMovieData] = useState([]);
  // const [movieTop, setMovieTop] = useState([]);
  // const [hoveredMovieId, setHoveredMovieId] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosClient.get('/top-rated');

  //       if (response.success) {
  //         setMovieData(response.result.getMovieHomeDTO);
  //         setMovieTop(response.result.ratingDTOHome);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
          <ItemMoview/>
        </div>
        <div className="w-full h-full rounded-lg ml-8 ">
          <p className="mb-2 text-24 font-bold dark:text-Grayscale70">
            Best of Action
          </p>
          <ItemMoview/>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
