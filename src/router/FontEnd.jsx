import { Route, Routes, Navigate } from "react-router-dom";
import {
  Homepage,
  Sub,
  Payment,
  Password,
  Data,
  Success,
  EditProfile,
  VideoPlayer,
  TopRated,
  Test,
} from "../page/frontend";
import { LayoutMain, IndexLayout } from "../layout";
import Auth from "../page/auth/Login";
import Register from "../page/auth/register";
import NewMovie from "../page/frontend/NewMovie";

const PrivateRoute = ({ element, path }) => {
  const isAuthenticated = localStorage.getItem("accessToken") !== null;
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
};

export default function RouteFontEnd() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route
          path="/"
          element={<PrivateRoute element={<Homepage />} path="/" />}
        />
        <Route
          path="/toprated"
          element={<PrivateRoute element={<TopRated />} path="/toprated" />}
        />
        <Route
          path="/edit"
          element={<PrivateRoute element={<EditProfile />} path="/edit" />}
        />
        <Route
          path="/data"
          element={<PrivateRoute element={<Data />} path="/data" />}
        />
        <Route
          path="/pass"
          element={<PrivateRoute element={<Password />} path="/pass" />}
        />
        <Route
          path="/video"
          element={<PrivateRoute element={<VideoPlayer />} path="/video" />}
        />
        <Route
          path="/new"
          element={<PrivateRoute element={<NewMovie />} path="/new" />}
        />
      </Route>

      <Route element={<IndexLayout />}>
        <Route path="/success" element={<Success />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
