import { useEffect, useState } from "react";
import herobox from "../../../assets/image/herobox.png";
import axios from "axios";

export default function MovieAdmin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [additionDateSort, setAdditionDateSort] = useState(false);
  const [viewSort, setViewSort] = useState(false);
  const [likeSort, setLikeSort] = useState(false);
  const [ratingSort, setRatingSort] = useState(false);

  // Function to fetch data based on filters
  const fetchData = () => {
    const apiUrl = `https://streamapi.com:7243/ListProduct?search=${searchTerm}&additionDate=${additionDateSort}&sortbyView=${viewSort}&sortByLike=${likeSort}&sortByRating=${ratingSort}`;
  
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  // Add event listeners for checkbox changes
  useEffect(() => {
    fetchData(); // Fetch data initially
  }, []); // Run only once on component mount

  useEffect(() => {
    fetchData(); // Fetch data whenever any filter option changes
  }, [searchTerm, additionDateSort, viewSort, likeSort, ratingSort]);

  return (
    <div className="w-full mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
           <>
          <p>Hi Dash anh Duc dep trai qua</p>
          Welcome back 🎉
          <img src={herobox} alt="Logo" />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
              </div>
            </div>
            <div className="p-4">
              <label className="block font-medium text-gray-700">Sort Options:</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={additionDateSort}
                    onChange={() => setAdditionDateSort(!additionDateSort)}
                  />
                  <span className="ml-2">Sort by Addition Date</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={viewSort}
                    onChange={() => setViewSort(!viewSort)}
                  />
                  <span className="ml-2">Sort by View</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={likeSort}
                    onChange={() => setLikeSort(!likeSort)}
                  />
                  <span className="ml-2">Sort by Like</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={ratingSort}
                    onChange={() => setRatingSort(!ratingSort)}
                  />
                  <span className="ml-2">Sort by Rating</span>
                </label>
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Like
                  </th>
                  <th scope="col" className="px-6 py-3">
                    View
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-${item.id}`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`checkbox-${item.id}`}
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      <div className="flex">
                        <div>
                          <img className="w-16" src={item.posterImage} alt="" />
                        </div>
                        <div className="ml-8">
                          <p>{item.title}</p>
                          <p className="mt-1">{item.duration}m</p>
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {item.genre.map((genre) => genre.name).join(", ")}
                    </td>
                    <td className="px-6 py-4">{item.additionDate}</td>
                    <td className="px-6 py-4">{item.view}</td>
                    <td className="px-6 py-4">{item.like}</td>
                    <td className="px-6 py-4">{item.view}</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
        </>
      )}
    </div>
  );
}
