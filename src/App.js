import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CategoriesList from "./components/category/CategoriesList";
import ProductsList from "./components/product/ProductsList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/category" className="navbar-brand">
          Testing...
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/category"} className="nav-link">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/product"} className="nav-link">
              Product
            </Link>
          </li>
        </div>
      </nav>

      <div className="container-fluid mt-3">
        <Routes>
          <Route path="/" element={<CategoriesList />} />
          <Route path="/category" element={<CategoriesList />} />
          <Route path="/product" element={<ProductsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
