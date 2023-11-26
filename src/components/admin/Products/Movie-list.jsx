import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieAdmin() {
  const [movieData, setMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);

  const fetchData = async (page, search, sort) => {
    try {
      const response = await axios.get(`https://streamapi.com:7243/ListProduct?search=${search}&${sort}=true&pageNumber=${page}`);
      setMovieData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(pageNumber, searchTerm, sortBy);
  }, [pageNumber, searchTerm, sortBy]);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy === 'none' ? null : selectedSortBy);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    fetchData(pageNumber, searchTerm, sortBy); // Call the API with the updated search term
  };
  
  return (
    <div>
      <div>
        <div className="mb-3">
          <form
            onSubmit={handleSearchSubmit}
            className="relative mb-4 flex w-full flex-wrap items-stretch"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            <button
              className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="submit"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </form>
        </div>
        <div>
        <select value={sortBy || 'none'} onChange={handleSortByChange}>
          <option value="none">None</option>
          <option value="additionDate">Sort by Addition Date</option>
          <option value="view">Sort by View</option>
          <option value="like">Sort by Like</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                    MPARatings
                    </th>
                    <th scope="col" className="px-6 py-4">
                    Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                    Duration
                    </th>
                    <th scope="col" className="px-6 py-4">
                    PosterImage
                    </th>
                    <th scope="col" className="px-6 py-4">
                      View
                    </th>
                    <th scope="col" className="px-6 py-4">
                    AdditionDate
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-4">
                    Like
                    </th>
                    <th scope="col" className="px-6 py-4">
                    Genre
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movieData.map((movie, index) => (
                    <tr
                      key={movie.id}
                      className="border-b dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex">
                          <div>
                            <img
                              src={movie.posterImage}
                              alt="poster"
                              className="w-16 h-16 object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <p className="ml-3">{movie.title}</p>
                            <p>{movie.duration}m</p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {movie.genre.map((g) => (
                          <span key={g.id}>{g.name}, </span>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {movie.additionDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {movie.view}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {movie.like}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {movie.rating.rating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button onClick={handlePrevPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}> {pageNumber}</span>
        <button onClick={handleNextPage}>Next </button>
      </div>
    </div>
  );
}
