import { Outlet } from "react-router-dom";
export default function Indexlayout() {
  return (
    <div className="h-screen overflow-hidden">
      <Outlet />
    </div>
  );
}
