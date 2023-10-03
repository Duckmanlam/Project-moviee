import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function CreateProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    setSelectedImage2(URL.createObjectURL(file));
  };

  const handleImageChange3 = (event) => {
    const file = event.target.files[0];
    setSelectedImage3(URL.createObjectURL(file));
  };

  const handleImageChange4 = (event) => {
    const file = event.target.files[0];
    setSelectedImage4(URL.createObjectURL(file));
  };

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedVideo(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "video/*",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', selectedDate);
    formData.append('content', selectedImage2);
    formData.append('image', selectedImage);
    formData.append('video', selectedVideo);
    formData.append('video', selectedImage3);
    formData.append('video', selectedImage4);

    axios.post('https://streamapi.com:7243/ListProduct/AddMovie', formData)
      .then((response) => {
        console.log(response.data);
        // Xử lý khi gửi thành công
      })
      .catch((error) => {
        console.error(error);
        // Xử lý khi gửi thất bại
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <p className="text-32 font-semibold">Create Movie</p>
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
      <p className="text-20 mt-6 mb-3">Title</p>
      <input
        aria-describedby="helper-text-explanation"
        className="bg-white border w-full border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
      />
      <p className="text-20 mb-3 mt-6">Content</p>
      <textarea
        rows="4"
        className="block h-60 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black"
      ></textarea>
      <div>
        <p className="text-20 mt-6 mb-3">Release year</p>

        <div className="flex items-center w-64">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5 "
          />
        </div>
      </div>
      <div>
        <p className="text-20 mt-6 mb-3">Genre</p>
        <select className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5  ">
          <option value="US">Science fiction, Horror</option>
          <option value="CA">Crime</option>
          <option value="FR">Romance</option>
          <option value="DE">Action</option>
        </select>
      </div>
      <p className="text-20 mb-3 mt-6">Language</p>
      <select className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5  ">
        <option selected>Choose a language</option>
        <option value="US">English</option>
        <option value="VN">Việt Nam</option>
      </select>
      <p className="text-20 mb-3 mt-6">Country</p>
      <select className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5  ">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Việt Nam</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <p className="text-20 mb-3 mt-6">MPA Ratings</p>
      <select className="bg-white w-56 border border-black text-gray-900 text-sm rounded-lg block p-2.5  ">
        <option value="US">PG - 12</option>
        <option value="CA">PG - 13</option>
      </select>
      <div className="">
        <div>
          <p className="text-20 mt-6 mb-6">Actor</p>
          <div className="flex">
            <div className="flex">
              <div className="w-12 h-12 border-solid border rounded-3xl border-black flex items-center justify-center overflow-hidden relative">
                {!selectedImage2 && (
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
                      accept="image/*"
                      onChange={handleImageChange2}
                      className="hidden"
                    />
                  </>
                )}
                {selectedImage2 && <img src={selectedImage2} alt="Selected" />}
              </div>
              <div className="ml-10">
                <input
            
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="bg-white border w-48 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name actor"
                />
                <input
              
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="mt-6 bg-white w-48 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name film"
                />
              </div>
              <div className="ml-10 w-12 h-12 border-solid border rounded-3xl border-black flex items-center justify-center overflow-hidden relative">
                {!selectedImage3 && (
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
                      accept="image/*"
                      onChange={handleImageChange3}
                      className="hidden"
                    />
                  </>
                )}
                {selectedImage3 && <img src={selectedImage3} alt="Selected" />}
              </div>
              <div className="ml-10">
                <input
                 
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="bg-white border w-48 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name actor"
                />
                <input
                  
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="mt-6 bg-white w-48 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name film"
                />
              </div>
              <div className=" ml-10 w-12 h-12 border-solid border rounded-3xl border-black flex items-center justify-center overflow-hidden relative">
                {!selectedImage4 && (
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
                      accept="image/*"
                      onChange={handleImageChange4}
                      className="hidden"
                    />
                  </>
                )}
                {selectedImage4 && <img src={selectedImage4} alt="Selected" />}
              </div>
              <div className="ml-10">
                <input
                
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="bg-white border w-48 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name actor"
                />
                <input
          
                  id="helper-text"
                  aria-describedby="helper-text-explanation"
                  className="mt-6 bg-white w-48 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name film"
                />
              </div>
            </div>
            <div>
            <button className="ml-20 mt-10 text-white text-14 bg-violet-700 font-medium rounded-lg text-sm py-3 px-8 mr-2 mb-2" type="submit" >Create</button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
