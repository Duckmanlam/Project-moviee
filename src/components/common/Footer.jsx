import Logo from './Logo';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-lineBlock dark:bg-darkBlock text-lineText dark:text-darkText py-10'>
      <div className='container flex justify-between items-center mx-auto'>
        {/* logo */}
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap text-white"
        >
          <Logo />
        </Link>

        {/* Menu */}
        <div className='flex flex-col items-end gap-4'>
          <div className="flex gap-6 items-center">
            <Link
              className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
              to='/'
            >
              Home
            </Link>
            <Link
              className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/toprated' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
              to='/toprated'
            >
              Top Rated
            </Link>
            <Link
              className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/product' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
              to='/product'
            >
              Dashboard
            </Link>
            <Link
              className={`hover:text-Primary transition-colors duration-500 ${location.pathname === '/pay' ? 'text-Primary font-bold border-b-2 border-Primary' : ''}`}
              to='/pay'
            >
              Payment
            </Link>
          </div>
          <span>© 2023 Movie website sponsored by Team. Copyright of components belongs to their authors.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;