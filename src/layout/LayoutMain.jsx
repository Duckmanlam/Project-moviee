import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layoutmain() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  if (!accessToken) {
    return null;
  }

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
