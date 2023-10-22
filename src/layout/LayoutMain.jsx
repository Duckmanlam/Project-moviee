import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import { Outlet, Route } from "react-router-dom";

export default function Layoutmain() {
  const loggedIn = localStorage.getItem("auth");

  if (loggedIn === "true") {
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
  } else {
    return <Route path="/login" />;
  }
}
