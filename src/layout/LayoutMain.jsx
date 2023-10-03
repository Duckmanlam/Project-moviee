import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layoutmain() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("auth");

  useEffect(() => {
    if (loggedIn === "true") {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [loggedIn]);

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
