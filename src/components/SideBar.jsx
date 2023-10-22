import { useEffect, useState } from "react";

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-Grayscale10 dark:bg-DarkSmooth h-full  ">
      <div className="mx-8 mt-8">
        <div>
          <ul className="space-y-2 tracking-wide  ">
            <p className="text-Grayscale60 text-16-500  mt-10 mb-6 ">MENU</p>
            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative  py-3 flex items-center space-x-4 rounded-lg  "
              >
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <span className="text-16-600 text-Grayscale70 dark:hover:text-Grayscale10     ">
                  Discovery
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-4 flex items-center space-x-4 rounded-md  group"
              >
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
                <span className="text-16-600 text-Grayscale70 dark:hover:text-Grayscale10  ">
                  Top Rated
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-4 flex items-center space-x-4 rounded-md  group"
              >
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="16 3 20 7 16 11" />
                  <line x1="10" y1="7" x2="20" y2="7" />{" "}
                  <polyline points="8 13 4 17 8 21" />{" "}
                  <line x1="4" y1="17" x2="13" y2="17" />
                </svg>
                <span className="text-16-600 text-Grayscale70 dark:hover:text-Grayscale10  ">
                  Coming Soon
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <p className="text-Grayscale60 text-16-500 ">LIBRARY</p>
          <ul className="space-y-2 tracking-wide mt-6">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative  py-3 flex items-center space-x-4 rounded-lg  "
              >
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <span className="text-16-600 text-Grayscale70 dark:hover:text-Grayscale10   ">
                  Recent Played
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-4 flex items-center space-x-4 rounded-md  group"
              >
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
                <span className="group-hover: text-16-600 text-Grayscale70 dark:hover:text-Grayscale10  ">
                  Download
                </span>
              </a>
            </li>
            <div className=" pt-4 flex justify-between items-center mt-4">
              <div className=" py-3 flex items-center space-x-4 rounded-md  group">
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                </svg>
                <span className="group-hover: text-16-600 text-Grayscale70 dark:hover:text-Grayscale10  ">
                  Dark Mode
                </span>

                <button
                  className={`relative inline-flex items-center cursor-pointer ${
                    isDarkMode ? " text-gray-300" : " text-gray-900"
                  }`}
                  onClick={toggleDarkMode}
                >
                  <div
                    className={`w-11 h-6 rounded-full ${
                      isDarkMode ? "bg-Primary" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                        isDarkMode
                          ? "after:border-white after:translate-x-full"
                          : ""
                      }`}
                    ></div>
                  </div>
                  <span className="ml-3 text-sm font-medium">
                    {/* {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'} */}
                  </span>
                </button>
              </div>
            </div>
            <li>
              <a
                href="#"
                className=" py-4 flex items-center space-x-4 rounded-md  group"
              >
                <svg
                  className="h-6 w-6 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="16 3 20 7 16 11" />
                  <line x1="10" y1="7" x2="20" y2="7" />{" "}
                  <polyline points="8 13 4 17 8 21" />{" "}
                  <line x1="4" y1="17" x2="13" y2="17" />
                </svg>
                <span className="group-hover: text-16-600 text-Grayscale70 dark:hover:text-Grayscale10   ">
                  Setting
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
