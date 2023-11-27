import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

export default function Banner() {
  const [banner, setBanner] = useState([]);
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
          setBanner(response.data.result.getMovieHomeDTO);
        } else {
          console.error('Invalid API response:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieApiUrl]);

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * banner.length);
      setRandomIndex(newIndex);
    }, 5000); // Change the interval as needed (in milliseconds)
    return () => clearInterval(interval);
  }, [banner.length]);

  return (
    <a
      href="/video"
      className="py-1 flex items-center space-x-4 rounded-md group"
    >
      <div className="relative">
        {banner.length > 0 && (
          <ReactPlayer
            url={banner[randomIndex].movieUrl}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: 'cover', filter: 'brightness(60%)' }}
          />
        )}
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          {banner.length > 0 && (
            <>
              <p className="text-white text-32 h-full font-bold drop-shadow-xl">
                {banner[randomIndex].title}
              </p>
              <p className="text-Grayscale60 text-[12px] mt-4 drop-shadow-xl w-3/4">
                {banner[randomIndex].content}
              </p>
              <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                <a
                  href="/video"
                  className="py-1 flex items-center space-x-4 rounded-md group"
                >
                  <button className="bg-red-500 px-6 py-2 rounded-md text-white text-lg font-semibold hover:bg-red-600 transition-colors">
                    Watch Now
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
