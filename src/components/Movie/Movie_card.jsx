import  { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

const MovieCard = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className={`w-225 h-120 bg-main-color mr-5 overflow-hidden cursor-pointer text-white relative ${
        isHovered ? 'w-325 h-300 absolute top-0 shadow-lg rounded-md' : ''
      }`}
      style={{
        left: isHovered ? `${index * 225 - 50 + index * 2.5}px` : '0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
        className="w-full h-full object-cover"
      />
      {isHovered && (
        <>
          <video
            src={trailer}
            autoPlay
            loop
            className="w-full h-140 absolute top-0 left-0 object-cover"
          />
          <div className="itemInfo flex flex-col p-5">
            <div className="icons flex mb-10">
              <PlayArrow className="icon border-white border-2 rounded-full p-5 mr-4 text-16" />
              <Add className="icon border-white border-2 rounded-full p-5 mr-4 text-16" />
              <ThumbUpAltOutlined className="icon border-white border-2 rounded-full p-5 mr-4 text-16" />
              <ThumbDownOutlined className="icon border-white border-2 rounded-full p-5 text-16" />
            </div>
            <div className="itemInfoTop flex items-center mb-3 text-sm font-semibold text-gray">
              <span>1 hour 14 mins</span>
              <span className="limit border-gray-500 border-1 px-2 mx-3">
                +16
              </span>
              <span>1999</span>
            </div>
            <div className="desc text-xs mb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre text-sm text-lightgray">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MovieCard;
