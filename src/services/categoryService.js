import http from "../http-common";

const getAll = () => {
  return http.get("/categories.php");
};

const CategoriesDataService = {
  getAll,
};

export default CategoriesDataService;
