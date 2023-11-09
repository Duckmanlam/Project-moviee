const Card = ({ title, drama, imageUrl, start, imgstart }) => {
  return (
    <div className="hover:scale-125 duration-200 ">
      <div className="mt-2 ml-5 grid rounded-3xl bg-center max-w-7xl h-72 shadow-sm bg-slate-100  flex-col">
        <img
          src={imageUrl}
          alt={title}
          className="w-56 h-44 bg-center ml-auto mr-auto block "
        />
        <div className="group p-6 grid z-10">
          <div className="group-hover:text-yellow-700 font-bold sm:text-xl line-clamp-2 dark:text-black ">
            {title}
          </div>
          <div className="font-black flex flex-col">
            <p className="text-black text-x group-hover:text-yellow-700 dark:text-black ">{drama}</p>
          </div>
          <div className="flex">
            <img src={imgstart} alt={title} className="w-5 h-5 mr-2 mt-1" />
            <p className="dark:text-black text-xl flex gap-x-1 items-center group-hover:text-yellow-700">
              {start}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
