import{ useRef, useState } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import MovieCard from './Movie_card';

const MovieList = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="slider">
        <ArrowBackIosOutlined
          className={`sliderArrow left ${!isMoved ? 'hidden' : ''}`}
          onClick={() => handleClick('left')}
        />
        <div className="container" ref={listRef}>
          <div className="movieContainer">
            <MovieCard index={0} />
            <MovieCard index={1} />
            <MovieCard index={2} />
            <MovieCard index={3} />
            <MovieCard index={4} />
            <MovieCard index={5} />
            <MovieCard index={6} />
            <MovieCard index={7} />
            <MovieCard index={8} />
            <MovieCard index={9} />
          </div>
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default MovieList;
