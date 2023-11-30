import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from './common/Logo'

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsTop(scrolled === 0);
  };

  const handleInfoClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300  z-40 ${isTop ? 'bg-transparent' : 'bg-[#131313]'
      }`}>
      <div className=" flex items-center justify-between mx-auto p-4 container">
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

        <div className="flex items-center gap-8">
          {/* Search */}
          <div className="flex items-center gap-4">
            <input placeholder="Search movies..." type="email" id="email" className=" form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"></input>
            <button className="bg-Primary py-2 px-4 rounded-lg text-w">Search</button>
          </div>

          {/* avatar */}
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
              className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0 ${isDropdownOpen ? "block" : "hidden"
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
                  <div
                    onClick={() => handleLogoout()}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
          <div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto "
            id="navbar-user"
          >
          </div>
          <div>
          </div>
        </div>
      </div>
    </header>
  );
}
