export default function TodoItem({ todo, index, removeTodo }) {
  const delClick = () => {
    removeTodo(index);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <div>index: {index}</div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form-check-label">Is completed</label>
        </div>
        <button className="btn btn-danger" onClick={delClick}>
          Del
        </button>
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
}
