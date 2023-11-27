import { useState, useEffect } from "react";
import axios from "axios";

const MovieAdmin = () => {
  const [movieData, setMovieData] = useState([]);
  const movieApiUrl = `http://streamapi.com:3000/list-model`;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the Bearer token from localStorage
        const bearerToken = localStorage.getItem("accessToken");

        const response = await axios.get(movieApiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json", // Adjust content type if needed
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

  const handleEditClick = (id) => {
    // Redirect or navigate to the edit page with the movie ID
    console.log(`Edit clicked for movie with ID: ${id}`);
    // Example using react-router-dom for navigation
    // Replace with your preferred navigation method
    history.push(`/edit-movie/${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
      // Call the API to delete the movie
      const bearerToken = localStorage.getItem("accessToken");
      await axios.delete(
        `http://streamapi.com:3000/list-model/deleteListMovie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        },
      );

      // Update the movieData state after successful deletion
      setMovieData((prevData) =>
        prevData.filter((movie) => movie.id !== id),
      );

      console.log(`Delete successful for movie with ID: ${id}`);
    } catch (error) {
      // Log the error details
      console.error("Error deleting movie:", error);

      // Check if the error has a response
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  // Get current items
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
                  <button
                    onClick={() => handleEditClick(movie.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
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
