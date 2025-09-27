import { useState } from "react";

export default function TodoSubmitForm({ addTodo }) {
  const [originFormData, setOriginFormData] = useState({});
  const todoSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const todo = Object.fromEntries(data);
    // todo.isCompleted = true;
    addTodo(todo);
  };

  return (
    <form onSubmit={todoSubmit}>
      <div className="mb-3">
        <label htmlFor="todoTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          defaultValue={originFormData.title}
          name="title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoDesc" className="form-label">
          Description
        </label>
        <input
          type="text"
          name="desc"
          defaultValue={originFormData.desc}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
