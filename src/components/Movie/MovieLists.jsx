const MovieLists = ({ title, drama, imageUrl, start, imgstart }) => {
  return (
    <div className="ml-8">
      <img src={imageUrl} alt={title} className="w-56 h-44 flex" />
      <div className=" mb-3 mt-5 font-bold text-16 ">{title}</div>
      <div className="flex">
        <img src={imgstart} alt={title} className="w-5 h-5 mr-2" />
        <p>{start}</p>
        <p className="mb-3 ml-2 text-gray-500 text-base">{drama}</p>
      </div>
    </div>
  );
};

export default MovieLists;
