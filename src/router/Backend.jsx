import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout";
import Product from "../page/backend/Ad-Product";
import { Test } from "../page/frontend";

export default function RouteBackend() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/product" element={<Product />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
}
