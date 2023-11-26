import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import { Outlet,  } from "react-router-dom"; // Thay thế Route bằng Navigate

export default function Layoutmain() {
  
    return (
      <div className="max-w-screen-xl mx-auto h-screen overflow-hidden">
        <Header />
        <div className="flex flex-wrap mx-auto mt-5 w-full h-full overflow-y-auto">
          <Sidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    );
  
}
