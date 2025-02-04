import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart/:id?" element={<Cart />} exact />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
