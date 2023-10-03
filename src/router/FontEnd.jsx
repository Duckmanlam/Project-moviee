import { Route, Routes } from "react-router-dom";
import {
  Homepage,
  Sub,
  Payment,
  Password,
  Data,
  Success,
  EditProfile,
  Test,
  Upload,
  Dowload,
  TopRated,
} from "../page/frontend";
import { LayoutMain, IndexLayout } from "../layout";
import Login from "../page/auth/Login";

export default function RouteFontEnd() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/a" element={<TopRated />} />
        <Route path="/dowload" element={<Dowload />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/data" element={<Data />} />
        <Route path="/pass" element={<Password />} />
      </Route>

      <Route element={<IndexLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/sub" element={<Sub />} />
      </Route>
    </Routes>
  );
}
