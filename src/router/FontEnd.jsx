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
  Upload,
  TopRated,
  Test,
} from "../page/frontend";
import { LayoutMain, IndexLayout } from "../layout";
import Login from "../page/auth/Login";

export default function RouteFontEnd() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="" element={<Homepage />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/data" element={<Data />} />
        <Route path="/pass" element={<Password />} />
        <Route path="/video" element={<VideoPlayer />} />
      </Route>

      <Route element={<IndexLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/test" element={<Test/>} /> 
      </Route>
    </Routes>
  );
}
