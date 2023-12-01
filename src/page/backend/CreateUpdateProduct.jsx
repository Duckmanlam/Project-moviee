/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axiosClient from "../../API/ClientAxios";

function CreateUpdateProduct() {
  const { id } = useParams();
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [movie, setMovie] = useState("");
  const [data, setData] = useState({
    title: "",
    releaseYear: "",
    duration: 0,
    mpaRatings: "",
    content: "",
    country: "",
    genre: { name: '' },
    language: { title: '' },
  });

  const handleMovieChange = (e) => {
    setMovie(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGenreChange = (e) => {
    setData({ ...data, genre: { name: e.target.value } });
  };

  const handleLanguage = (e) => {
    setData({ ...data, language: { title: e.target.value } });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const {
      title,
      releaseYear,
      duration,
      mpaRatings,
      content,
      country,
      genre,
      language,
    } = data;

    const formData = new FormData();
    formData.append(`posterImage`, files);
    formData.append(`movieUrl`, movie);
    formData.append("title", title);
    formData.append("releaseYear", releaseYear);
    formData.append("duration", duration);
    formData.append("mpaRatings", mpaRatings);
    formData.append("content", content);
    formData.append("country", country);
    formData.append(`genre[0][name]`, genre.name);
    formData.append(`language[0][title]`, language.title);

    const bearerToken = localStorage.getItem("accessToken");
    console.log(formData);

    try {
      const response = await axios.post(
        "http://streamapi.com:3000/list-model/addMovie",
        formData,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(response.data);
      navigate('/product');
    } catch (error) {
      console.error("Error during create:", error.response.data);
    }
  };

  // Get id movie 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`detail-movie?id=${id}`);
        console.log(response)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  //update id
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axiosClient.put(`list-model/updateMovie/${id}`);
        setData(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-full">
      <h1 className="text-24 mb-6 text-center font-bold">
        Create Product
      </h1>
      <div className="flex gap-4 justify-center items-center">
        {/* left */}
        <div className="rounded-lg bg-violet-400 p-4 w-5/6">
          <form onSubmit={handleUpload} className="w-full mx-auto grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="poster" className="block text-sm font-medium text-white/70">Poster:</label>
              <input
                id="poster"
                type="file"
                multiple
                onChange={handleImageChange}
                className="mt-1 p-2 border rounded-md w-full border-dashed border-white/50 text-sm"
              />
            </div>

            <div>
              <label htmlFor="movie" className="block text-sm font-medium text-white/70">Movie:</label>
              <input
                id="movie"
                type="file"
                onChange={handleMovieChange}
                className="mt-1 p-2 border rounded-md w-full border-dashed border-white/50 text-sm"
              />
            </div>

            {['title', 'releaseYear', 'duration', 'mpaRatings', 'content', 'country'].map(field => (
              <div key={field} className="col-span-1">
                <label htmlFor={field} className="block text-sm font-medium text-white/70 capitalize">{field}:</label>
                <input
                  id={ field}
                  type={field === 'releaseYear' ? 'date' : 'text'}
                  name={field}
                  value={data?.[field]}
                  onChange={handleData}
                  className="mt-1 p-2 border rounded-md w-full text-black"
                />
              </div>
            ))}

            <div className="col-span-1">
              <label htmlFor="genre" className="block text-sm font-medium text-white/70">Genre:</label>
              <input
                id="genre"
                type="text"
                value={data.genre.name}
                onChange={handleGenreChange}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="language" className="block text-sm font-medium text-white/70">Language:</label>
              <input
                id="language"
                type="text"
                value={data.language.name}
                onChange={handleLanguage}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>

            <button
              type="submit"
              className="col-span-2 bg-violet-800 text-white p-2 rounded-md hover:bg-violet-600 transition duration-300 w-full"
            >
              Submit
            </button>
          </form>
        </div>
        {/* right */}
        <div className="1/2">
        </div>
      </div>
    </div>
  );
}

export default CreateUpdateProduct;
