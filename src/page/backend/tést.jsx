import  { useState } from "react";
import axios from "axios";

export const Res = () => {
  const [file, setfile] = useState("");
  const [name, setname] = useState("");
  const [productId, setproductId] = useState("");
  const [productName, setproductName] = useState("");
  const [productFile, setproductFile] = useState("");



  const handalfile = (event) => {
    const file = event.target.files[0];
    setfile(URL.createObjectURL(file));
  };

  const handleRes = async () => {
    let item = {
      file,
      name,
      productId,
      productName,
      productFile,
    };
    await axios
      .post("https://streamapi.com:5041/UploadFile", item)
      .then((res) => console.log(res));
  };

  return (
    <div>
        <div className="w-64 h-80 border-solid border rounded-xl border-black flex items-center justify-center overflow-hidden relative">
              {!file && (
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
                    onChange={handalfile}
                    id="image-upload"
                    accept="image/*"
                    className="hidden"
                  />
                </>
              )}
              {setfile && <img src={setfile} alt="Selected" />}
            </div>
        <div className="mb-4">
          <input
            type="name"
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            onChange={(e) => setproductId(e.target.value)}
            placeholder="ConfirmPassword"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            onChange={(e) => setproductName(e.target.value)}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            onChange={(e) => setproductFile(e.target.value)}
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleRes}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
         Post
        </button>
    </div>
  );
};
