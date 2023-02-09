const Table = ({ filtered, setActiveProduct }) => {
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
        {filtered &&
          filtered.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  alt={product.name}
                  src={product.image}
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
                  onClick={() => setActiveProduct(product, index)}
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
