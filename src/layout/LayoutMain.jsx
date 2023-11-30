import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

export default function Layoutmain() {

  return (
    <div className='bg-black text-white/80 min-h-screen'>
      <Header />
      <div className='container mx-auto pt-20 pb-10'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
