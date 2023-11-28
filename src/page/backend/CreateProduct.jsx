import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function CreateProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedVideo(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "video/*",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestData = {
      title: event.target.title.value,
      duration: event.target.duration.value,
      content: event.target.content.value,
      releaseYear: selectedDate,
      genre: event.target.genre.value,
      language: event.target.language.value,
      country: event.target.country.value,
      mpaRating: event.target.mpaRating.value,
    };
  
    // Check if 'image' is defined before accessing 'files'
    const imageInput = event.target.image;
    if (imageInput && imageInput.files.length > 0) {
      requestData.image = URL.createObjectURL(imageInput.files[0]);
    }
  
    // Check if 'video' is defined before accessing 'files'
    const videoInput = event.target.video;
    if (videoInput && videoInput.files.length > 0) {
      requestData.video = URL.createObjectURL(videoInput.files[0]);
    }
  
    // Log the requestData before making the request
    console.log("Request Data:", requestData);
  
    try {
      const response = await axios.post(
        "https://streamapi.com:3000/list-model/addMovie",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log(response.data);
      // Handle success
  
      // Optionally, you can reset the form or navigate to another page after successful submission
      // Reset form:
      event.target.reset();
      // Navigate to another page:
      // history.push("/success-page");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="text-32 font-semibold">Create Movie</p>

        {/* Poster image */}
        <div className="flex mt-16">
          <div className="flex">
            <div className="mr-28">
              <p className="text-20 mb-6">Poster image</p>
              <div className="w-64 h-80 border-solid border rounded-xl border-black flex items-center justify-center overflow-hidden relative">
                {!selectedImage && (
                  <>
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <svg
                        className="w-10 h-10 text-black hover:text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </>
                )}
                {selectedImage && <img src={selectedImage} alt="Selected" />}
              </div>
            </div>
            <div className="w-96">
              <p className="text-20 mb-6">Movie</p>
              <div
                {...getRootProps()}
                className={` w-96 h-80 border-solid border rounded-xl border-black flex items-center justify-center ${
                  isDragActive ? "bg-gray-200" : ""
                }`}
              >
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the video file here...</p> : <></>}
                {selectedVideo && (
                  <video
                    src={selectedVideo}
                    controls
                    className="h-80 w-full rounded-xl object-cover"
                  />
                )}
                <svg
                  className="w-10 h-10 text-black hover:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <p className="text-20 mt-6 mb-3">Title</p>
        <input
          name="title"
          aria-describedby="helper-text-explanation"
          className="bg-white border w-full border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
        />

        {/* Duration */}
        <p className="text-20 mt-6 mb-3">Duration</p>
        <input
          name="duration"
          aria-describedby="helper-text-explanation"
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black w-1/4"
        />

        {/* Content */}
        <p className="text-20 mb-3 mt-6">Content</p>
        <textarea
          name="content"
          rows="4"
          className="block h-60 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black"
        ></textarea>

        {/* Release year */}
        <div>
          <p className="text-20 mt-6 mb-3">Release year</p>
          <div className="flex items-center w-64">
            <DatePicker
              name="releaseYear"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5"
            />
          </div>
        </div>

        {/* Genre */}
        <div>
          <p className="text-20 mt-6 mb-3">Genre</p>
          <select
            name="genre"
            className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5"
          >
            <option value="US">Science fiction, Horror</option>
            <option value="CA">Crime</option>
            <option value="FR">Romance</option>
            <option value="DE">Action</option>
          </select>
        </div>

        {/* Language */}
        <p className="text-20 mb-3 mt-6">Language</p>
        <select
          name="language"
          className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5"
        >
          <option selected>Choose a language</option>
          <option value="US">English</option>
          <option value="VN">Việt Nam</option>
        </select>

        {/* Country */}
        <p className="text-20 mb-3 mt-6">Country</p>
        <select
          name="country"
          className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Việt Nam</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        {/* MPA Ratings */}
        <p className="text-20 mb-3 mt-6">MPA Ratings</p>
        <select
          name="mpaRating"
          className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5"
        >
          <option value="US">PG - 12</option>
          <option value="CA">PG - 13</option>
        </select>

        {/* Submit button */}
        <div>
        <Link to="/product">
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Posts</button>
      </Link>
          </div>
      </form>
    </div>
  );
}
