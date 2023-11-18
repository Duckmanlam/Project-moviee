import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const MovieCard = ({ number, title, drama, imageUrl, start, imgstart, imgtype, play }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` ${
        isHovered ? 'hover:scale-150 duration-200' : ''
      }  duration-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className=" grid rounded-xl bg-center max-w-7xl shadow-sm bg-slate-100">
           <img src={imageUrl} alt={title} className="w-56 h-44 bg-center ml-auto mr-auto block" />
          <div className="ml-2">
            <div className=" mt-3 font-bold text-18 dark:text-black ">{title}</div>
            <div className="flex">
              <img src={imgtype} alt={title} className="w-5 h-5 mr-2 " />
              <p className=" text-gray-500 text-12 text-base dark:text-black ">{drama}</p>
            </div>
            <div className="flex">
              <img src={imgstart} alt={title} className="w-5 h-5 mr-2 mb-3 " />
              <p className="dark:text-black text-12 mb-3">{start}</p>
              <img src={play} className="w-10 h-10 ml-auto mr-3 -mt-6" />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex'>
          <p className="text-8xl mt-7 font-semibold dark:text-Grayscale70 ">{number}</p>
          <img src={imageUrl} alt={title} className="w-24 h-36" />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
