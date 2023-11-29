import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInfoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-mainDark">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          Cinemax
        </Link>
        <div className="flex items-center md:order-2 relative">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={handleInfoClick}
            role="button"
            style={{ zIndex: "1" }} // Add z-index
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            id="user-dropdown"
            style={{ top: "calc(100% + 10px)", right: "0" }} // Add positioning
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Duck
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                chiduc789@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={handleInfoClick}
            role="button"
          ></button>
        </div>
        <div>
          
        </div>
        {/*
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto "
          id="navbar-user"
        >
          <ul className="flex ">
            <li>
              <a
                className="text-16-500 pr-9 text-customBlack dark:text-Grayscale10"
                href="#"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                className="text-16-500 pr-9  text-customBlack  dark:text-Grayscale10"
                href="#"
              >
                Series
              </a>
            </li>
            <li>
              <a
                className="text-16-500 pr-9  text-customBlack  dark:text-Grayscale10"
                href="#"
              >
                Animation
              </a>
            </li>
            <li>
              <a
                className="text-16-500 pr-9  text-customBlack  dark:text-Grayscale10"
                href="#"
              >
                Genres
              </a>
            </li>
          </ul>
        </div> */}
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto "
          id="navbar-user"
        >
        </div>
        <div>
        </div>
      </div>
    </nav>
  );
}
