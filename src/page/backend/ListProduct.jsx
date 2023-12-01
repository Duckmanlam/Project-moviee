/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axiosClient from "../../API/ClientAxios";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CreateUpdateProduct from "./CreateUpdateProduct";

export default function ListProduct() {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(null);
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(
          `list-model?searchQuery=${searchQuery}`,
        );
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  //Delete
  const handleDeleteClick = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete?");

      if (confirmDelete) {
        await axiosClient.delete(`/list-model?id=${id}`);
        setMovieData((prevData) => prevData.filter((movie) => movie.id !== id));
        setNotification("Item deleted successfully!");
        setTimeout(() => {
          setNotification(null);
        }, 2000);
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      setNotification("Error deleting item. Please try again.");
    }
  };

  //page
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = movieData.slice(indexOfFirstItem, indexOfLastItem);
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <h1 className="text-24 mb-6 font-bold text-center">Movie List</h1>
      <div className="">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          onChange={handleSearchChange}
          className="my-4 py-2 rounded-xl w-52"
        />
      </div>
      {notification && (
        <div
          style={{
            position: "fixed",
            top: 60,
            right: 0,
            background: "green",
            color: "white",
            padding: "10px",
          }}
        >
          {notification}
        </div>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs uppercase bg-lineBlock dark:bg-darkBlock ">
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
                className="odd:bg-lineBlock odd:dark:bg-darkBlock even:bg-lineBlock/50 even:dark:bg-darkBlock/50 border-b dark:border-darkBlock"
                key={movie.id}
              >
                <td className="px-6 py-4">
                  <LazyLoadImage
                    src={movie.posterImage}
                    alt=""
                    className="w-28 h-40 object-contain"
                    onError={(event) => {
                      event.target.src =
                        "https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg";
                      event.onerror = null;
                    }}
                  />
                </td>
                <td className="px-6 py-4">{movie.title}</td>
                <td className="px-6 py-4">{movie.MPARatings}</td>
                <td className="px-6 py-4">{`${movie.duration} minutes`}</td>
                <td className="px-6 py-4">{`${movie.view} `}</td>
                <td className="px-6 py-4">{`${movie.like} `}</td>
                <td className="px-6 py-4">
                <Link
                to={`/product/update/${movie.id}`}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </Link>
                  <Link />
                  <button
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
        <ul className="flex gap-2">
          {Array(Math.ceil(movieData.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                onClick={() => paginate(index + 1)}
                className={`cursor-pointer px-3 py-2 ${
                  currentPage === index + 1
                    ? "bg-Primary text-white rounded-full w-8 h-8 flex items-center justify-center"
                    : "bg-gray-300 text-black/60 rounded-full w-8 h-8 flex items-center justify-center"
                }`}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
