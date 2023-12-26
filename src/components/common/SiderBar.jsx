/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"

export const SiderBar = (props) => {
  return (
    <div className="h-screen flex flex-col mt-5 left-0 w-56">
      <div className="fixed bg-lineBlock dark:bg-darkBlock shadow dark:shadow-none rounded-r-2xl w-56">
        <div className="flex items-center justify-center h-14 border-b">
          <div className="text-Primary text-lg font-bold">Dashboard</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-bold tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/product"
                className={`transition-colors duration-500 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${location.pathname === '/product' ? 'bg-gray-50 text-Primary border-l-4 border-indigo-500' : ''}`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 0111v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  List Product
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/product/create"
                className={`transition-colors duration-500 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${location.pathname === '/product/create' ? 'bg-gray-50 text-Primary border-l-4 border-indigo-500' : ''}`}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 0111v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Create Product
                </span>
              </Link>
            </li>
            {/* ... Rest of the list items ... */}
          </ul>
        </div>
      </div>
    </div>
  )
} 