import { Route, Routes, useNavigate } from "react-router-dom";
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
import NotFound from "../page/NotFound";
import ListProduct from "../page/backend/ListProduct";
import CreateUpdateProduct from "../page/backend/CreateUpdateProduct";
import { useEffect } from "react";

export default function Router() {
  const navigate = useNavigate();
  const isToken = Boolean(localStorage.getItem('accessToken'))

  useEffect(() => {
    if (isToken) {
      navigate('/')
    } else {
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToken]);
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/data" element={<Data />} />
        <Route path="/pass" element={<Password />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/product" element={<ListProduct />} />
        <Route path="/product/create" element={<CreateUpdateProduct />} />
        <Route path="/product/update/:id" element={<CreateUpdateProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<IndexLayout />}>
        <Route path="/success" element={<Success />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
