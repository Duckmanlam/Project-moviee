const MovieCard = ({ number, title, drama, imageUrl, start, imgstart, imgtype }) => {
  return (
    <div className="ml-8 flex">
      <p className="text-6xl mt-10 font-semibold mr-4 dark:text-white ">{number}</p>
      <img src={imageUrl} alt={title} className="w-24 h-36" />
      <div className="ml-5">
        <button className=" mb-3 bg-white hover:bg-gray-100 text-slate-400 font-semibold py-2 px-4 border rounded-xl border-gray-300 shadow">
          PG - 13
        </button>
        <div className=" mb-3 font-bold text-16 dark:text-white  ">{title}</div>
        <div className="flex">
        <img src={imgtype} alt={title} className="w-5 h-5 mr-2" /> 
        <p className="mb-3 text-gray-500 text-base dark:text-white ">{drama}</p>
        </div>
        <div className="flex">
          <img src={imgstart} alt={title} className="w-5 h-5 mr-2" />
          <p className="dark:text-white">{start}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
