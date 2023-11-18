import { Link } from "react-router-dom";

export default function Register() {
  

  return (
    <div className="relative h-full w-full bg-bgImage bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Link
            to="/login"
            className="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >
            Cinemax
          </Link>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Register
            </h2>
            <div className="flex flex-col gap-4">
              <input
                className="w-full px-3 py-3 rounded-md bg-[#333333] text-white"
                id="email"
                name="email"
                type="text"
                placeholder="First Name"
              />
                <input
                className="w-full px-3 py-3 rounded-md bg-[#333333] text-white"
                id="email"
                name="email"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="w-full px-3 py-3 rounded-md bg-[#333333] text-white"
                id="email"
                name="email"
                type="text"
                placeholder="Email hoặc số điện thoại"
              />
              <div className="relative">
                <input
                  className="w-full px-3 py-3 rounded-md bg-[#333333] text-white"
                  id="password"
                  name="password"
                  placeholder="Mật khẩu"
                />
                
              </div>
            </div>
            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              Create an Account!
            </button>
            <div className="flex items-center mt-3">
             
              
              <span className="text-white  hover:underline cursor-pointer ml-auto">
                {" "}
                Need help ?
              </span>
            </div>
            <p className="text-neutral-500 mt-5">
              If you have account?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Login
              </span>
              <p className="text-12  ">
                Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không
                phải là robot.{" "}
                <span className="text-blue-500">Tìm hiểu thêm.</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
