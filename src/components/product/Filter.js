const Filter = ({
  searchTitle1,
  onChangeSearchTitle,
  onChangeSearchCategory,
  categories,
}) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTitle1}
          onChange={onChangeSearchTitle}
        />
      </div>

      <div className="col-md-6">
        <select className="custom-select" onChange={onChangeSearchCategory}>
          <option>Choose...</option>
          {categories &&
            categories.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
