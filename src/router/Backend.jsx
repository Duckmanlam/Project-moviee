import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout";
import Product from "../page/backend/Ad-Product";
import DetailProduct from "../page/backend/DetailProduct";
import CreateProduct from "../page/backend/CreateProduct";

export default function RouteBackend() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<DetailProduct/>} />
        <Route path="/create" element={<CreateProduct/>} />
      </Route>
    </Routes>
  );
}
