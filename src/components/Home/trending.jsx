import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'tailwindcss/tailwind.css';

export default function TopMovies() {
  const [history, setHistory] = useState([]);
  const movieApiUrl = 'http://streamapi.com:3000/home';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bearerToken = localStorage.getItem('accessToken');
        const response = await axios.get(movieApiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('API Response:', response);

        if (response.data && response.data.success && response.data.result) {
          setHistory(response.data.result.watchingHistoryHome);
        } else {
          console.error('Invalid API response:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieApiUrl]);

  return (
    <div>
      <h1 className="text-20-700 dark:text-Grayscale10">Watching History</h1>
      {history && history.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {history.map((history) => (
            <SwiperSlide key={history.id} className="relative overflow-hidden">
              <div key={history.id} className="mt-6">
            <div className="hover:scale-110 duration-200">
              <Link
                to="/video"
                className="rounded-md group object-center "
              >
                <img
                  src={history.posterImage}
                  alt="img"
                  className="mb-3 w-36 h-24 bg-center block object-cover rounded-xl border"
                />
                <div>
                  <p className="group-hover:text-yellow-700 sm:text-18 line-clamp-2 dark:text-black">
                    {history.title}
                  </p>
                  <p className="group-hover:text-orange-300">
                    Genres: {history.genre.map((genre) => genre.name).join(', ')}
                  </p>
                </div>
              </Link>
            </div>
          </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}
