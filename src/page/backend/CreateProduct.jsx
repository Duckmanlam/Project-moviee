import { useState } from "react";
import axios from "axios";
import Select from "react-select";

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
    genre: [],
    language: "",
  });

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  const handleMovieChange = (e) => {
    setMovie(e.target.files[0]);
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGenreChange = (selectedOptions) => {
    const genres = selectedOptions.map((option) => option.value);
    setData((prevData) => ({
      ...prevData,
      genre: genres,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`posterImage`, files[i]);
    }
    formData.append(`movieUrl`, movie);
    formData.append("jsonData", data);

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
        }
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
          <input type="file" multiple onChange={handleChange} />
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
          <Select
            isMulti
            name="genre"
            options={[
              { value: "Action", label: "Action" },
              { value: "Drama", label: "Drama" },
            ]}
            onChange={handleGenreChange}
          />
        </label>
        <label>
          Language:
          <input
            type="text"
            name="language"
            value={data?.language}
            onChange={handleData}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
