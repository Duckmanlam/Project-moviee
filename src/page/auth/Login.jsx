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
      <div className="h-screen flex">
        <div className="w-1/2 bg-Primary from-blue-80">
          <div></div>
        </div>
        <div className="relative flex-1 ml-auto mr-auto justify-center items-center bg-white">
          <form
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-4 text-center"
            onSubmit={handleSubmit}
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cinemax
            </span>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="mb-4 text-left">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="admin"
                value={auth.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 text-left">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="admin"
                value={auth.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded text-white font-semibold mb-2"
            >
              Login
            </button>
            <div className="text-sm ml-2 hover:text-blue-500 cursor-pointer text-right">
              Forgot Password ?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
