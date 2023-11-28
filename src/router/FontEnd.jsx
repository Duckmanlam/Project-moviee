import { Route, Routes } from "react-router-dom";
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

export default function RouteFontEnd() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/data" element={<Data />} />
        <Route path="/pass" element={<Password />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/new" element={<NewMovie />} />
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
