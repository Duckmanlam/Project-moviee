export default function Success() {
  return (
    <div className="text-20 text-center my-5">
      CineMax
      <hr className="w-full h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="mx-auto mt-40 max-w-screen-md text-center mb-8 lg:mb-12 flex flex-col items-center">
        <img
          className="mb-8 flex flex-col items-center"
          src="https://lh3.google.com/u/0/d/1pYRNPrmZopViXe6yC_SWxU9HpumoKLwB=w1850-h1478-iv1"
          alt="success"
        ></img>
        <h2 className="mb-4 text-4xl font-sans text-gray-900 dark:text-white">
          Your payment has completed!{" "}
        </h2>
        <p className="mb-5 font-normal text-16 text-Grayscale70 dark:text-Grayscale70">
          Ullamcorper imperdiet urna id non sed est sem. Rhoncus amet, enim
          purus gravida donec aliquet.{" "}
        </p>
        <a
          href="/"
          className="py-1 flex items-center space-x-4 rounded-md group"
        >
          <button
            type="button"
            className="py-4 px-10 mb-2 rounded-3xl text-sm text-center font-medium text-Label focus:outline-none bg-white border border-Label hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Start Watching{" "}
          </button>
        </a>
      </div>
    </div>
  );
}
