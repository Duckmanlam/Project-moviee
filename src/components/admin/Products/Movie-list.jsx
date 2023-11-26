import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieAdmin = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/list-model');
        setMovieData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movieData.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{`MPA Ratings: ${movie.MPARatings}`}</p>
            <p>{`Duration: ${movie.duration} minutes`}</p>
            <img src={movie.posterImage} alt={movie.title} style={{ width: '100px', height: '150px' }} />
            <p>{`Views: ${movie.view}`}</p>
            <p>{`Addition Date: ${new Date(movie.additionDate).toLocaleString()}`}</p>
            <p>{`Rating: ${movie.rating.rating}`}</p>
            <p>{`Likes: ${movie.like}`}</p>
            <p>{`Genres: ${movie.genre.map((g) => g.name).join(', ')}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieAdmin;
