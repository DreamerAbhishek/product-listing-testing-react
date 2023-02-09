const Table = ({ categories, setActiveCategory }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {categories &&
          categories.map((category, index) => (
            <tr key={index}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <img
                  alt={category.name}
                  src={category.image}
                  height={50}
                  width={50}
                />
              </td>
              <td>
                <button
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="btn btn-primary"
                  type="button"
                  onClick={() => setActiveCategory(category, index)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
