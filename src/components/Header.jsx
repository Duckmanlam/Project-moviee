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
          <div>
            {/* <img
              className=" pr-8"
              src="https://lh3.googleusercontent.com/fife/AKsag4OhGUoQ2plg2Gq1JSiFIWal__B5S7sfYaEFbniWvEzsOeylkAQx5GyWu6GpfZZlaM1FzgHGePgeRoCp0rbiLTlryzxrPvgYD89VGiu82s2E8CSLfuvryeE2UhH0oLimvTzrpPKyFi9EBQKXoggar1inNM334ASC_3V0BECrY-Z0WrnhUwSvI25TxiV9k1En9FAm6x30DedUHEx3fcF5JXX29351XIsp3e7TjmaD3Khh4sNEYzhsqXIaVfnArQq98J4-PxwJrjJF3r2obrMags3d5EW-t3v6OPaLmUgFkFvJEAgNLQo2c_mt9yu_Od_QaaXI0K_HmaNIteL1jW3I07g2nsMgg_Jc8fJdF8MuWJcYHjNBOIwVrQ7_48AbNuDboCR0_QoX7t48Yhw66F7ppUeV7v40mXEOeovfRz2CSzgYkQBqUG7hbqbhnSfnlVTXRa3H8vYVyFXNn5tvRrt713owDbVUxQAVdLOTgC8DerRBlRmrgnbo_NY7EPrAM_eH5--po06Vqphr2Acr48tDUFDD21ZCIqqrN1Q-lzfsr2dI0eVfOsMllKs250jp2LYi0qthPhtyaMzSzAvzVGn1VVWyWERyz9CkPYuiVT--4RFMz3DphiDon2pTiYiwm48DVJ9wSylkCoPvXSwI75j2Uc_fzX_WoSTgwcTOsRZnhVZNW162ijcNY6zWGmGOVw1JMrEhkyulf3xJI0nbMiE7yUpqzzbSwE8pDuQvRR3miqRNIKQzTvrLpx2FyOMI976BU2s_lV3XhROStxUyLzKMZGKOVdSUmm2fOaKdXT3Yc8O_wLxCKd9mIdCyS9F5Myr2mcPxqMSPHkt2WTHB5TuSgnh3z_kz1h1dwLTHFHLBEj86OVm6vzx9mLigFHBnYfI2CDbnwPEgAy6VujvQ6qdtNY9w1QmIIpOpqopCaz8zSAYgy2sHILlLPpPzMNXFDkCkrpBkBCwpBV0pveQOldNan2rzLdRYuniGO7ZvFKoJiyWltvG1u9HOPHP5KI11orMgOK2rigxOxS9MZK3sfpmmmcS-NvAsYA60mD4lXZph4_rdciPN7HD0c7DrPAOHp7qVxrWi4cZLTnGqpoeUwgRe8HnOdplc9Mp6STGBYZEVV0ea05Pio1zPNFmKU-eKWdeKHBTjbS95sVAjm25uZyDGhtUH_jOrWO1DE5URxh711UGEmgDxMaSHnZoofxnjdWr7xgYcnG8-iBQTvY-Dn4YfV635SSjLNYZEJV95-Mq2NBwepQS0wpG8EysuRvnacFT_q89ttHzJqVqdyDWen9SMg_j-ZXsSH-kTCTtIIUU0nT4z-y5Jj1bnRStteohGH6ob3Pu3gtGoOay6zg6jCWGSXZk0Jtdlob1zZ7aP0t666Wvbmx7N2vLsqlkZgYImm3JY2ob8wUb3KkTDyBn7ydRVehgvh-oI865ygPVjELJz-Jag6YHC2Dm5AqRELxQGKSdX0ykrH85es17QMAQr_9lb7mdJub7N3dpCWfXxKCu6_9FubCBh1oEZPZzYeaiRGMWgd3QAv6z0OwkPQBQIRtvWgA2KOnLIIUFwC4oTMrS8QIwThsu-ZrYWzPiUvrZkz45xgtPyYfIAeTrhzbo=w1920-h962"
              alt="user photo"
            /> */}
          </div>
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
        <div></div>
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
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto "
          id="navbar-user"
        >
          {/* <img
            className="w-6"
            src="https://lh3.google.com/u/0/d/1RuWn01WnZZtNt2v8TcifNfjJrMzrlj1w=w1920-h962-iv1"
          /> */}
        </div>
        <div>
          <button className="btn-Subscribe text-16-600 m-auto">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>
    </nav>
  );
}
