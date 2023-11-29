import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieAdmin = () => {
  const [movieData, setMovieData] = useState([]);
  const movieApiUrl = `http://streamapi.com:3000/list-model`;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

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

        setMovieData(response.data.data);
        console.log(movieData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [movieApiUrl]);

  //Edit
  const handleEditClick = (id) => {
    console.log(`Edit clicked for movie with ID: ${id}`);
    history.push(`http://streamapi.com:3000/list-model/addMovie${id}`);
  }; 

  //Delete
  const handleDeleteClick = async (id) => {
    try {
      const bearerToken = localStorage.getItem("accessToken");
      const confirmDelete = window.confirm("Bạn có chắn muốn xoá không?");

      if (confirmDelete) {
        await axios.delete(`http://streamapi.com:3000/list-model?id=${id}`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        });
        console.log(`Delete successful for movie with ID: ${id}`);

        const updatedData = await axios.get(`http://streamapi.com:3000/list-model`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        });
        setMovieData(updatedData.data.data);
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
 
  //page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movieData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <h1 className="text-32 mb-6 flex flex-col items-center font-bold ">
        Movie List
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                MPA Ratings
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
              <th scope="col" className="px-6 py-3">
                Like
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((movie) => (
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                key={movie.id}
              >
                <td className="px-6 py-4">
                  <img
                    src={movie.posterImage}
                    alt=""
                    className="w-36 h-48 object-contain"
                  />
                </td>
                <td className="px-6 py-4">{movie.title}</td>
                <td className="px-6 py-4">{movie.MPARatings}</td>
                <td className="px-6 py-4">{`${movie.duration} minutes`}</td>
                <td className="px-6 py-4">{`${movie.view} minutes`}</td>
                <td className="px-6 py-4">{`${movie.like} minutes`}</td>
                <td className="px-6 py-4">
                  <Link to ="/create"/>
                  <button
                    onClick={() => handleEditClick(movie.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <Link/>
                  <button
                    onClick={() => handleDeleteClick(movie.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          {Array(Math.ceil(movieData.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                onClick={() => paginate(index + 1)}
                className={`cursor-pointer px-3 py-2 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieAdmin;
