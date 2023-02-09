import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/products";
import { getAllCategories } from "../../actions/categories";
import { Modal, Button } from "react-bootstrap";
import Table from "./Table";
import Popup from "./Popup";
import Filter from "./Filter";

const ProductsList = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());

    if (categories.length <= 0) {
      dispatch(getAllCategories());
    }
  }, [categories, dispatch]);

  let filtered = products;
  if (searchTitle.length > 0 && searchCategory.length > 0) {
    filtered = products
      .filter((product) =>
        product.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
      .filter(
        (category) => category.categoryid === searchCategory.toLowerCase()
      );
  } else if (searchTitle.length > 0) {
    filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  } else if (searchCategory.length > 0) {
    filtered = products.filter(
      (item) => item.categoryid === searchCategory.toLowerCase()
    );
  }

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const onChangeSearchCategory = (e) => {
    const searchCategory = e.target.value;
    setSearchCategory(searchCategory);
  };

  const setActiveProduct = (category, index) => {
    setCurrentProduct(category);
    handleShow();
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h4>Products</h4>
        <Filter
          searchTitle1={searchTitle}
          onChangeSearchTitle={onChangeSearchTitle}
          onChangeSearchCategory={onChangeSearchCategory}
          categories={categories}
        />
        <Table filtered={filtered} setActiveProduct={setActiveProduct} />
      </div>

      <Popup
        show={show}
        handleClose={handleClose}
        currentProduct={currentProduct}
      />
    </div>
  );
};

export default ProductsList;
