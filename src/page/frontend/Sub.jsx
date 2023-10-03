export default function Sub() {
    return (
      <div className="text-20 text-center my-5">CineMax
      <hr className="w-full h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 text-center mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <button
              type="button"
              className="text-black bg-alert hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Access Premium
            </button>
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl font-sans text-gray-900 dark:text-white">
                It easy to get started
              </h2>
              <p className="mb-5 font-normal text-16 text-Grayscale70 dark:text-Grayscale70">
                Choose the best plan to enjoy the best movies and series
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/*-- Pricing Card 1 --*/}
              <div className="flex flex-col p-6 mx-6 max-w-screen-2xl text-center text-gray-900 bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-1 text-xl font-normal">Free Trial</h3>
                <div className="flex justify-center items-baseline">
                  <span className="mr-2 text-4xl font-normal">$0</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
  
                {/*<!-- List -->*/}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                       
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Streaming in high quality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      
                      ></path>
                    </svg>
                    <span>With the best audio quality</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-300 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      ></path>
                    </svg>
                    <span>Stream on multiple devices</span>
                  </li>
                  <li className="flex items-center space-x-3  text-gray-300">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-300 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      ></path>
                    </svg>
                    <span>Ad-free viewing experience</span>
                  </li>
                  <li className="flex items-center space-x-3  text-gray-300">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-300 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      ></path>
                    </svg>
                    <span>Download to watch later</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="py-2.5 mb-2 rounded-3xl text-sm font-medium text-Label focus:outline-none bg-white border border-Label hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Get Started
                </button>
              </div>
              {/*<!-- Pricing Card 2-->*/}
              <div className="flex flex-col p-6 mx-6 max-w-screen-2xl text-center text-white bg-Label rounded-3xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-1 text-xl font-normal">Monthly Subscription</h3>
  
                <div className="flex justify-center items-baseline">
                  <span className="mr-2 text-4xl font-normal">$4.99</span>
                  <span
                    className="text-Grayscale60 dark:text-gray-400"
                    
                  >
                    /month
                  </span>
                </div>
                <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                {/*<!-- List -->*/}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-white dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      ></path>
                    </svg>
                    <span>Streaming in high quality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-white dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      ></path>
                    </svg>
                    <span>With the best audio quality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-white dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Stream on multiple devices</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-white dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Ad-free viewing experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-white dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Download to watch later</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="py-2.5 mb-2 rounded-3xl text-sm font-medium text-white focus:outline-none bg-Label border border-white hover:bg-purple-300 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Get Started
                </button>
              </div>
              {/*<!-- Pricing Card 3-->*/}
              <div className=" flex flex-col p-6 mx-6 max-w-screen-2xl text-center text-gray-900 bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-2 text-xl font-normal">Yearly Subscription</h3>
  
                <div className="flex justify-center items-baseline">
                  <span className="mr-2 text-4xl font-normal">$49.99</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                {/*<!-- List -->*/}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Streaming in high quality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>With the best audio quality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Stream on multiple devices</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Ad-free viewing experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                       
                      ></path>
                    </svg>
                    <span>Download to watch later</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="py-2.5 mb-2 rounded-3xl text-sm font-medium text-Label focus:outline-none bg-white border border-Label hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  