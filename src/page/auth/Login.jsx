import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../API/ClientAxios';

const Auth = () => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosClient.post('/auth/login', {
        email: auth.email,
        password: auth.password,
      });
      if (response.access_token) {
        localStorage.setItem('accessToken', response.access_token);
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full w-full bg-bgImage bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <div
            className="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >
            Cinemax
          </div>
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
                  type={auth.showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  value={auth.password}
                  onChange={handleChange}
                  onKeyPress={handleEnterPress}
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
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition" onClick={handleSubmit} disabled={loading} // Disable the button when loading
            >
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              First time using me?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
