import http from "../http-common";

const getAll = () => {
  return http.get("/products.php");
};

const ProductsDataService = {
  getAll,
};

export default ProductsDataService;
