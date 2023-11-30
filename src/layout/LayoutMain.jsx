import Header from '../components/common/Header';
import { SiderBar } from '../components/common/SiderBar';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
export default function Layoutmain() {
  const { id } = useParams();
  const location = useLocation();

  
  return (
    <div className='min-h-screen'>
      <Header />
      {location.pathname === '/product' || location.pathname === '/product/create' || location.pathname === `/product/update/${id}` ?
        <div className='flex w-full mx-auto pt-20 pb-10'>
          <SiderBar location={location} />
          <div className='mx-4 flex-1'>
            <Outlet />
          </div>
        </div>
        :
        <div className='container mx-auto pt-20 pb-10'>
          <Outlet />
        </div>
      }
      <Footer />
    </div>
  );
}
