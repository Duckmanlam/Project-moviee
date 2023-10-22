
const MovieLists = ({ title, drama, imageUrl, start, imgstart }) => {
  return (
    <div className="ml-8">
      <img src={imageUrl} alt={title} className="w-56 h-44 flex dark:text-white " />
      <div className=" mb-3 mt-3 font-bold text-16 dark:text-white ">{title}</div>
      <div className="flex">
        <img src={imgstart} alt={title} className="w-5 h-5 mr-2" />
        <p className="dark:text-white">{start}</p>
        <p className="mb-3 ml-2 text-gray-500 text-base dark:text-white ">{drama}</p>
      </div>
    </div>
  );
};

export default MovieLists;
