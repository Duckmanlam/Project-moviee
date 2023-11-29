import { useState } from "react";
import axios from "axios";

function CreateProduct() {
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
    // Assuming you have a way to update the genre state object
    setData({ ...data, genre: { name: e.target.value } });
  };

  const handleLanguage = (e) => {
    // Assuming you have a way to update the genre state object
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
    } catch (error) {
      console.error("Error during create:", error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload} className="grid grid-cols-1 gap-6">
        <label>
          Poster:
          <input type="file" multiple onChange={handleImageChange} />
        </label>

        <label>
          Movie:
          <input type="file" onChange={handleMovieChange} />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={data?.title}
            onChange={handleData}
          />
        </label>
        <label>
          Release Year:
          <input
            type="date"
            name="releaseYear"
            value={data?.releaseYear}
            onChange={handleData}
          />
        </label>
        <label>
          Duration:
          <input
            type="number"
            name="duration"
            value={data?.duration}
            onChange={handleData}
          />
        </label>
        <label>
          MPA Ratings:
          <input
            type="text"
            name="mpaRatings"
            value={data?.mpaRatings}
            onChange={handleData}
          />
        </label>
        <label>
          Content:
          <textarea name="content" value={data.content} onChange={handleData} />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={data?.country}
            onChange={handleData}
          />
        </label>
        <label>
        Genre:
        <input type="text" value={data.genre.name} onChange={handleGenreChange} />
      </label>
      <label>
        Language:
        <input type="text" value={data.language.name} onChange={handleLanguage} />
      </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
