
const CardMovie = () => {
  return (
    <div className="hero-container">
      <div className="flex justify-center">
        <div className="w-64 h-64 relative m-8">
          <div className="w-56 absolute top-0 left-4 z-10">
            <img
              src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
              alt="Blade Runner"
              className="w-full shadow-lg"
            />
          </div>
          <div className="w-64 h-64 bg-white flex flex-col items-center rounded-lg absolute top-4 shadow-lg opacity-0">
            <div className="absolute bottom-0 w-full text-center">
              <h4 className="text-sm text-gray-900 uppercase font-bold mb-1">
                Blade Runner 2049
              </h4>
              <p className="text-xs text-gray-600 mb-4">
                More human than human is our motto.
              </p>
              <p className="text-green-500 text-lg font-bold mb-2">$28.00</p>
              <p className="text-gray-600 text-xs line-through mb-2">$44.99</p>
              <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase rounded-b-lg">
                Buy now
              </button>
            </div>
          </div>
        </div>

        <div className="w-64 h-64 relative m-8">
          <div className="w-56 absolute top-0 left-4 z-10">
            <img
              src="https://i.ibb.co/Zd51z5c/justice-league.jpg"
              alt="Justice League"
              className="w-full shadow-lg"
            />
          </div>
          <div className="w-64 h-64 bg-white flex flex-col items-center rounded-lg absolute top-4 shadow-lg opacity-0">
            <div className="absolute bottom-0 w-full text-center">
              <h4 className="text-sm text-gray-900 uppercase font-bold mb-1">
                Justice League
              </h4>
              <p className="text-xs text-gray-600 mb-4">
                You can save the world alone.
              </p>
              <p className="text-green-500 text-lg font-bold mb-2">$20.75</p>
              <p className="text-gray-600 text-xs line-through mb-2">$40.99</p>
              <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase rounded-b-lg">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
