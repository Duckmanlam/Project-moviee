export default function EditProfile() {
  return (
    <div className="flex">
      <div className="ml-8 font-sans">
        <p className="text-24 font-bold my-6  dark:text-Grayscale70">
          Profile Settings
        </p>
        <h4 className="text-Grayscale70 font-medium text-14 mb-6">
          Personal Info
        </h4>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739ZM12 2C14.9391 2 17.294 4.35402 17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2Z"
              fill="#B43FEB"
            />
          </svg>
          <p className="font-medium text-18 mr-auto ml-2  dark:text-Grayscale70">
            Edit Profile
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path d="M8.84467 19.5303C8.5784 19.2641 8.5542 18.8474 8.77205 18.5538L8.84467 18.4697L15.314 12L8.84467 5.53033C8.5784 5.26406 8.5542 4.8474 8.77205 4.55379L8.84467 4.46967C9.11094 4.2034 9.5276 4.1792 9.82121 4.39705L9.90533 4.46967L16.9053 11.4697C17.1716 11.7359 17.1958 12.1526 16.9779 12.4462L16.9053 12.5303L9.90533 19.5303C9.61244 19.8232 9.13756 19.8232 8.84467 19.5303Z" />
          </svg>
        </div>
        <hr className=" w-72 h-px bg-gray-200 border-0 dark:bg-gray-700 my-6"></hr>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.334 2C19.723 2 22 4.378 22 7.916V16.084C22 19.622 19.723 22 16.332 22H7.664C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.664 2H16.334ZM16.334 3.5H7.664C5.135 3.5 3.5 5.233 3.5 7.916V16.084C3.5 18.767 5.135 20.5 7.664 20.5H16.332C18.864 20.5 20.5 18.767 20.5 16.084V7.916C20.5 5.233 18.864 3.5 16.334 3.5ZM8.8368 9.3984C10.0121 9.39922 11.0054 10.18 11.3283 11.2489L17.0097 11.2495C17.4237 11.2495 17.7597 11.5855 17.7597 11.9995V13.8525C17.7597 14.2665 17.4237 14.6025 17.0097 14.6025C16.5957 14.6025 16.2597 14.2665 16.2597 13.8525V12.7495L14.931 12.749L14.9315 13.8525C14.9315 14.2665 14.5955 14.6025 14.1815 14.6025C13.7675 14.6025 13.4315 14.2665 13.4315 13.8525L13.431 12.749L11.3287 12.75C11.0061 13.8201 10.0112 14.6024 8.8368 14.6024C7.4018 14.6024 6.2348 13.4344 6.2348 12.0004C6.2348 10.5654 7.4018 9.3984 8.8368 9.3984ZM8.8388 10.8984C8.2288 10.8984 7.7348 11.3924 7.7348 12.0004C7.7348 12.6084 8.2288 13.1024 8.8368 13.1024C9.4438 13.1024 9.9388 12.6084 9.9388 12.0004C9.9388 11.3934 9.4448 10.8994 8.8388 10.8984Z"
              fill="#78828A"
            />
          </svg>
          <p className="text-Grayscale70 font-medium text-18 mr-auto ml-2 ">
            Password
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
              fill="#78828A"
            />
          </svg>
        </div>

        <h4 className="text-Grayscale70 font-medium text-14 my-8">General</h4>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12.4829 2.41699C13.6159 2.41699 19.5609 4.45799 20.3479 5.24499C21.0039 5.90099 20.9939 6.43099 20.9479 8.97099C20.9299 9.98899 20.9049 11.376 20.9049 13.296C20.9049 20.178 13.0349 22.64 12.6999 22.741C12.6289 22.763 12.5559 22.773 12.4829 22.773C12.4099 22.773 12.3369 22.763 12.2659 22.741C11.9309 22.64 4.06089 20.178 4.06089 13.296C4.06089 11.379 4.03589 9.99199 4.01789 8.97399C4.00968 8.51989 4.00261 8.12997 4.00028 7.79206L4 7.41076C4.00858 6.15812 4.12614 5.73699 4.61889 5.24499C5.40389 4.45799 11.3489 2.41699 12.4829 2.41699ZM12.4829 3.91699C11.6349 3.91699 6.28489 5.80099 5.66789 6.31599C5.48589 6.49899 5.47889 6.81699 5.51789 8.94599C5.53589 9.97199 5.56089 11.366 5.56089 13.296C5.56089 18.497 11.2829 20.806 12.4819 21.231C13.6799 20.804 19.4049 18.482 19.4049 13.296C19.4049 11.364 19.4299 9.96899 19.4489 8.94299C19.4869 6.81599 19.4799 6.49799 19.2869 6.30599C18.6819 5.80099 13.3309 3.91699 12.4829 3.91699ZM16.2044 9.75649C16.4974 10.0495 16.4974 10.5245 16.2044 10.8175L12.3064 14.7165C12.1944 14.8293 12.0498 14.9024 11.8945 14.9271L11.7764 14.9365C11.5774 14.9365 11.3864 14.8575 11.2454 14.7165L9.35339 12.8225C9.06139 12.5295 9.06139 12.0535 9.35439 11.7615C9.64639 11.4685 10.1224 11.4685 10.4154 11.7615L11.7764 13.1245L15.1444 9.75649C15.4374 9.46349 15.9114 9.46349 16.2044 9.75649Z"
              fill="#78828A"
            />
          </svg>
          <p className="text-Grayscale70 font-medium text-18 mr-auto ml-2">
            Data Privacy
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
              fill="#78828A"
            />
          </svg>
        </div>

        <div className="">
          <a
            href="/login"
            className="relative  py-3 flex items-center space-x-4 rounded-lg  "
          >
            <button
              type="button"
              className="flex text-center mt-20 w-64 text-red-600 border-red-600 bg-white border font-medium rounded-3xl text-sm px-5 py-2.5 "
            >
              <img
                className="mr-2 ml-16"
                src="https://lh3.google.com/u/0/d/1Wn9VqFaYjs4KnrsOYLnLU1azdYrdav-7=w1418-h1362-iv1"
                alt=""
              ></img>
              Log Out
            </button>
          </a>
        </div>
      </div>
      {/*---------------------- */}
      <div className="ml-24 my-8">
        <img
          className="mb-6"
          src="https://lh3.google.com/u/0/d/1sLAtHJhG94XIHn98HnrDZFOAkoM_D1DB=w2940-h1682-iv1"
        ></img>
        <div className="flex">
          <label className="block mr-1 ">
            <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-Grayscale70">
              First Name
            </span>
            <input
              type="firstname"
              name="firstname"
              className=" mr-5 w-80 rounded-3xl mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  sm:text-sm focus:ring-1"
              placeholder="Ahmad"
            />
          </label>
          <label className="block mr-1">
            <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
              Last Name
            </span>
            <input
              type="lastname"
              name="lastname"
              className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-80 rounded-3xl sm:text-sm focus:ring-1"
              placeholder="Saris"
            />
          </label>
        </div>
        <label className="block mt-6">
          <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
            Email Address
          </span>
          <input
            type="email"
            name="email"
            className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl sm:text-sm focus:ring-1"
            placeholder="ahmadsaris@gmail.com"
          />
        </label>
        <label className="block mt-6">
          <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium  text-Grayscale70">
            Phone Number
          </span>
          <input
            type="phonenumber"
            name="phonenumber"
            className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-3xl sm:text-sm focus:ring-1"
            placeholder="+1 03203202"
          />
        </label>
        <a
          href="/pass"
          className=" py-4 flex items-center space-x-4 rounded-md  group"
        >
          <button
            type="button"
            className="mt-7 text-white bg-Label border font-medium rounded-3xl text-center text-sm px-5 py-2.5 "
          >
            Edit Details
          </button>
        </a>
      </div>
    </div>
  );
}
