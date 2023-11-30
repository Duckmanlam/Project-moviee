import { useState, useEffect } from 'react';
import axiosClient from '../../API/ClientAxios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'tailwindcss/tailwind.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton'

export default function History(props) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('/home');

        if (response.success) {
          setHistory(response.result.watchingHistoryHome);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (history.length > 0) {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={4.5}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            // eslint-disable-next-line react/prop-types
            slidesPerView: props.size ? props.size : 6,
          },
        }}
      >
        {history?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="group card transition-transform duration-300 overflow-hidden rounded-xl aspect-w-2 aspect-h-3 w-full h-80">
              <Link to={`/video/${movie?.id}`} className='w-full h-full relative block'>
                <LazyLoadImage
                  wrapperClassName='w-full h-full block aspect-w-2 aspect-h-3'
                  loading='lazy'
                  className='w-full h-full bg-cover block group-hover:scale-110 object-cover transition-transform duration-500 rounded-xl'
                  alt={movie?.title}
                  src={movie?.posterImage}
                />
                <div className='hidden group-hover:flex absolute bottom-0 py-3 left-0 right-0 w-full h-1/2  flex-col justify-end px-3 z-[6]'>
                  <div className='text-white block font-light text-lg group-hover:text-white transition-colors duration-300'>{movie?.title}</div>
                  <div className='flex items-end  text-light-gray text-xs'>
                    <span className='inline-block text-sm text-white/70 border border-light-gray px-1 py-[2px] rounded ml-auto line-clamp-1 truncate max-w-[8rem]'> {movie.genre.map((genre) => genre.name).join(", ")}</span>
                  </div>
                </div>
                <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white rounded-full text-Primary text-[36px] flex z-[6] scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'><BsFillPlayCircleFill /> </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    return (
      <div className='flex gap-4'>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div key={index} className='w-56 h-80'>
                <Skeleton count={1} className='rounded-xl h-full overflow-hidden' />
              </div>
            )
          })
        }
      </div>
    )
  }
}
