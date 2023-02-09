import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../actions/categories";
import Table from "./Table";
import Popup from "./Popup";

const CategoriesList = () => {
  const [currentCategory, setCurrentCategoty] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const setActiveCategory = (category, index) => {
    setCurrentCategoty(category);
    handleShow();
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h4>Category</h4>
        <Table categories={categories} setActiveCategory={setActiveCategory} />
      </div>

      <Popup
        show={show}
        handleClose={handleClose}
        currentCategory={currentCategory}
      />
    </div>
  );
};

export default CategoriesList;
