import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [auth, setAuth] = useState({
        email: "",
        password: "",
        rememberMe: false, // Thêm trạng thái ghi nhớ đăng nhập
        showPassword: false, // Thêm trạng thái ẩn hiện mật khẩu

      });
      const navigate = useNavigate();
    
      function handleChange(evt) {
        const { name, value, type, checked } = evt.target;
        const val = type === "checkbox" ? checked : value; // Xử lý trường hợp checkbox
        setAuth({
          ...auth,
          [name]: val,
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (auth.email === "admin" && auth.password === "admin") {
          localStorage.setItem("auth", true);
          if (auth.rememberMe) {
            localStorage.setItem("email", auth.email); // Lưu email nếu được ghi nhớ
          } else {
            localStorage.removeItem("email"); // Xóa email nếu không được ghi nhớ
          }
          navigate("/");
        } else {
          localStorage.setItem("auth", false);
        }
      };
    

  return (
    <div className="relative h-full w-full bg-bgImage bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap text-white"
        >
          Cinemax
        </Link>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
              
            <input
                className="w-full px-3 py-3 rounded-md bg-[#333333] text-white"
                id="email"
                name="email"
                type="text"
                placeholder="Email hoặc số điện thoại"
                value={auth.email}
                onChange={handleChange}
                
              />
             <div className="relative">
          <input
            className="w-full px-3 py-3 rounded-md bg-[#333333] text-white"
            id="password"
            name="password"
            type={auth.showPassword ? "text" : "password"} // Ẩn/hiện mật khẩu tùy thuộc vào trạng thái showPassword
            placeholder="Mật khẩu"
            value={auth.password}
            onChange={handleChange}
          />
          <span
            className="absolute top-3 right-3 cursor-pointer text-[#5F5C51]"
            onClick={() => setAuth({ ...auth, showPassword: !auth.showPassword })}
          >
            {auth.showPassword ? "Hide" : "Show"}
          </span>
        </div>
            
            </div>
            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition" onClick={handleSubmit}
            >
              Login
            </button>
            <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={auth.rememberMe}
                  onChange={handleChange}
                  className='mr-2 leading-tight'
                />
                <span className="text-white">Remember</span>
                <span className="text-white  hover:underline cursor-pointer ml-auto"> Need help ?</span>
              </div>
            <p className="text-neutral-500 mt-12">
              First time using me?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Create an account
              </span>
              <p className='text-12  mt-3'>

            Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. <span className="text-blue-500">Tìm hiểu thêm.</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
