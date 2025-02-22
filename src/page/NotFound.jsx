import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const isToken = Boolean(localStorage.getItem('accessToken'))
  const navigate = useNavigate();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-line text-lineText dark:bg-dark dark:text-darkText transition-colors duration-500">
      <h1 className="text-9xl font-extrabold tracking-widest anim">404</h1>
      <div className="bg-Primary px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5 animate-bounce">
        <a
          className="relative inline-block text-sm font-medium text-Primary group active:text-Primary focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-Primary group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span className="relative block px-8 py-3 border border-current text-white">
            {isToken ? (<div onClick={() => navigate('/')}>Go Home</div>) : (<div onClick={() => navigate('/login')}>Go Login</div>)}
          </span>
        </a>
      </button>
    </main>
  )
}
export default NotFound