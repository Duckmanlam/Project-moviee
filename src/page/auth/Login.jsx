import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.email === "admin" && auth.password === "admin") {
      localStorage.setItem("auth", true);
      navigate("/");
    } else {
      localStorage.setItem("auth", false);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/2 h-screen bg-Primary relative">test</div>
        <div className="w-1/2 text-center bg-black">
          <div className="mx-36 mt-8 m-auto">
            <p className="text-20-700  text-Grayscale10"> Cinemax</p>
            <div className="mt-12">
              <p className="text-32-700 text-Grayscale10 ">
                {" "}
                Hey there,<br></br>welcome back
              </p>
              <div className="px-6 sm:px-0  pt-10 m-auto">
                <button
                  type="button"
                  className="text-white w-full bg-LineDark font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 rounded-3xl "
                >
                  <img
                    src=""
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    alt="Google Icon"
                  />
                  Login with Google
                </button>
              </div>

              <div className="flex items-center justify-center mt-6">
                <div className="border-t border-Grayscale60 flex-grow"></div>
                <p className="text-Grayscale70 text-14-500 mx-2">
                  Or login with
                </p>
                <div className="border-t border-Grayscale60 flex-grow"></div>
              </div>

              <div className="text-left mt-6">
                <label
                  
                  className="text-14-500 block  text-gray-600 "
                >
                  Full Name
                </label>
                <input
                className="mt-2 w-full h-12  text-14-500 px-4 py-2  bg-DarkSmooth  outline-none rounded-3xl border-Grayscale60 text-Grayscale70"
                id="email"
                name="email"
                type="text"
                placeholder="admin"
                value={auth.email}
                onChange={handleChange}
              />
              </div>
              <div className="text-left mt-5 ">
                <label
                  className="text-14-500 block  text-gray-600 "
                >
                  Password
                </label>
                <input
                className="mt-2 w-full h-12  text-14-500 px-4 py-2  bg-DarkSmooth  outline-none rounded-3xl border-Grayscale60 text-Grayscale70"
                id="password"
                name="password"
                type="password"
                placeholder="admin"
                value={auth.password}
                onChange={handleChange}
              />
              </div>
              <div>
                {/* forgot password */}
                <p className="text-14-400 text-Primary text-right mt-2">
                  Forgot Password
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-Primary text-white font-bold w-full rounded-3xl py-3  " onClick={handleSubmit}>
                  Login
                </button>
              </div>
              <div>
                <p className="text-14-400 text-Grayscale60 mt-6">
                  Dont have an account?{" "}
                  <span className="text-14-700 text-Primary">Register</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
