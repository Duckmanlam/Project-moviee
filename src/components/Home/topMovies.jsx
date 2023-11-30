import { useState, useEffect } from 'react';
import axiosClient from '../../API/ClientAxios';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton'

export default function TopMovies() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axiosClient.get(`http://streamapi.com:3000/home`);
        if (response.success) {
          setMovieData(response.result.ratingDTOHome);
        } else {
          console.error('Invalid API response:', response);
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div >
      <h1 className="text-20-700">Top Movies</h1>
      {movieData.length == 0 && !loading ? 'No movies available.' : null}
      {!loading && movieData.length ? (
        movieData.map((movie) => (
          <div key={movie.id} className="mt-4">
            <div className="">
              <Link
                to={`/video/${movie.id}`}
                className="group flex gap-4"
              >
                <LazyLoadImage
                  src={movie.posterImage}
                  alt="img"
                  className="group-hover:scale-110 object-center transition-transform duration-500 rounded-xl w-32 h-auto"
                />
                <div>
                  <p className="group-hover:text-Primary sm:text-18 line-clamp-2 transition-colors duration-500">
                    {movie.title}
                  </p>
                  <p className="group-hover:text-Primary transition-colors duration-500">
                    Average Rating: {movie.averageRating}
                  </p>
                  <p className="group-hover:text-Primary transition-colors duration-500">
                    Genres: {movie.genre.map((genre) => genre.name).join(', ')}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className='flex flex-col gap-4'>
          {
            [1, 2, 3, 4,].map((item, index) => {
              return (
                <div key={index} className='flex gap-4'>
                  <div className='w-32 h-44' >
                    <Skeleton count={1} className='rounded-xl h-full overflow-hidden' />
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                    <div className='w-full h-6'>
                      <Skeleton count={1} className='rounded-xl h-full overflow-hidden' />
                    </div>
                    <div className='w-1/2 h-4'>
                      <Skeleton count={1} className='rounded-xl h-full overflow-hidden' />
                    </div>
                    <div className='w-1/2 h-4'>
                      <Skeleton count={1} className='rounded-xl h-full overflow-hidden' />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div >
      )}
      <Link to="/toprated">
        <div className="justify-center flex mt-5 bg-transparent hover:text-Primary font-semibold border py-2 px-4 hover:underline w-full rounded-full">
          Xem thêm
        </div>
      </Link>
    </div >
  );
}
