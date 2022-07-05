import React from "react";
import "components/App/App.css";
import PageProducts from "components/pages/PageProducts/PageProducts";
import MainLayout from "components/MainLayout/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageProductForm from "components/pages/PageProductForm/PageProductForm";
import PageCart from "components/pages/PageCart/PageCart";
import PageOrders from "components/pages/PageOrders/PageOrders";
import PageOrder from "components/pages/PageOrder/PageOrder";
import PageProductImport from "components/pages/admin/PageProductImport/PageProductImport";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<PageProducts />} />
          <Route path="/admin/product-form/:id" element={<PageProductForm />} />
          <Route path="/admin/product-form" element={<PageProductForm />} />
          <Route path="/cart" element={<PageCart />} />
          <Route path="/admin/orders" element={<PageOrders />} />
          <Route path="/admin/order/:id" element={<PageOrder />} />
          <Route path="/admin/products" element={<PageProductImport />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
