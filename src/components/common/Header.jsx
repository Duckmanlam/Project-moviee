/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from './Logo';
import { BiSun, BiMoon } from "react-icons/bi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiTwotoneStar } from "react-icons/ai";
import axiosClient from "../../API/ClientAxios";


export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
<<<<<<< HEAD
  const [dataSearch, setDataSearch] = useState(searchData.splice(0, 4));
  const [searchQuery, setSearchQuery] = useState("tests");
=======
  const [searchQuery, setSearchQuery] = useState("");
>>>>>>> 5b139545016d0130ace88f93b7ea96db6abe2894

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setIsDropdownOpen(!!event.target.value);
  };  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`list-model?searchQuery=${searchQuery}`);
        setSearch(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);
  
  const location = useLocation();
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsTop(scrolled === 0);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInfoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // search
  useEffect(() => {
    setLoading(true)
  }, [search]);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-40 ${isTop ? 'bg-transparent' : 'dark:bg-darkBlock bg-lineBlock'
      }`}>
      <div className="flex items-center justify-between mx-auto p-4 container">
        {/* logo */}
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap text-white"
        >
          <Logo />
        </Link>

        {/* Menu */}
        <div className="flex gap-6 items-center">
          <Link
            className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
            to='/'
          >
            Home
          </Link>
          <Link
            className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/toprated' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
            to='/toprated'
          >
            Top Rated
          </Link>
          <Link
            className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/product' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
            to='/product'
          >
            Dashboard
          </Link>
          <Link
            className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/pay' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
            to='/pay'
          >
            Payment
          </Link>
        </div>

        <div className="flex items-center  bg-white rounded-lg h-10 relative">
          <div className="w-full">
            <input onChange={handleSearchChange} type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
              placeholder="search" />
          </div>
          <div>
            <button type="submit" className="flex items-center bg-Primary justify-center w-12 h-10 text-white rounded-r-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
<<<<<<< HEAD
          {dataSearch.length?  <div className="absolute top-full mt-2 h-auto rounded-lg overflow-hidden grid grid-cols-1 divide-y divide-dashed divide-black/10 dark:divide-white/10 w-full bg-lineBlock dark:bg-darkBlock">
            {dataSearch.map(item => {
              return <Link key={item.id} to={`/video/${item}`} className="p-2 flex gap-4">
                
=======
          {searchQuery.length ? <div className="absolute top-full mt-2 h-auto rounded-lg overflow-hidden grid grid-cols-1 divide-y divide-dashed divide-black/10 dark:divide-white/10 w-full bg-lineBlock dark:bg-darkBlock">
            {search.map(item => {
              return <Link key={item.id} to={`/video/${item.id}`} className="p-2 flex gap-4">
>>>>>>> 5b139545016d0130ace88f93b7ea96db6abe2894
                <LazyLoadImage
                  loading='lazy'
                  className='w-20 h-32 rounded object-cover'
                  alt={item?.title}
                  src={item?.posterImage}
                />
                <div className="py-4 text-sm flex flex-col gap-1">
                  <p className="line-clamp-2">{item?.title}</p>
                </div>
              </Link>
            })}
          </div> : null}

        </div>
        {/* Dropdown */}
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
            style={{ zIndex: "1" }}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://drive.google.com/drive/folders/1eZnA-3ma7B2MvRvCxLgEt6XT2EKd7LZ8"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-50 my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:shadow-none bg-lineBlock dark:bg-darkBlock dark:divide-gray-600 absolute right-0 ${isDropdownOpen ? "block" : "hidden"
              }`}
            ref={dropdownRef}
            style={{ top: "calc(100% + 10px)", right: "0" }}
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
                <div className="px-4 py-2 flex items-center justify-between space-x-4 rounded-md group">
                  {!isDarkMode ? <BiSun /> : <BiMoon />}
                  <button
                    className={`relative inline-flex items-center cursor-pointer ${isDarkMode ? " text-gray-300" : " text-gray-900"
                      }`}
                    onClick={toggleDarkMode}
                  >
                    <div
                      className={`w-11 h-6 rounded-full ${isDarkMode ? "bg-Primary" : "bg-gray-200"
                        }`}
                    >
                      <div
                        className={`after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${isDarkMode
                          ? "after:border-white after:translate-x-full"
                          : ""
                          }`}
                      ></div>
                    </div>
                  </button>
                </div>
              </li>
              <li>
                <div
                  onClick={() => handleLogout()}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </div>
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
      </div>
    </header >
  );
}
