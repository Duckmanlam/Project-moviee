import { useState } from 'react';

const MovieCard = ({ number, title, drama, imageUrl, start, imgstart, imgtype }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` ${
        isHovered ? 'hover:scale-300' : ''
      }  duration-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className=" grid rounded-3xl bg-center max-w-7xl shadow-sm bg-slate-100">
           <img src={imageUrl} alt={title} className="w-40 h-44 bg-center ml-auto mr-auto block" />
          <div className="ml-5">
            <div className=" mb-3 font-bold text-16 dark:text-white ">{title}</div>
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
      ) : (
        <div className='flex'>
          <p className="text-8xl mt-7 font-semibold dark:text-white ">{number}</p>
          <img src={imageUrl} alt={title} className="w-24 h-36" />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
