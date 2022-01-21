import React from "react";
import { postCategory } from "../../api/Category";
export default function AddCategory() {
  const handleChangeName = (event) => {
    console.log(event.target.value);
    localStorage.setItem("nameCategory", event.target.value);
  };
  const updateCategory = () => {
    postCategory();
    window.location.href = "/category";
  };

  return (
    <div className="container" id="container">
      <div className="form-signin">
        <form>
          <h1 className="font-weight-normal">Add Category</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-800">
              Tên Loại
            </label>
            <input
              type="text"
              name="tenLoai"
              placeholder=""
              className="form-control"
              autoComplete="email"
              onChange={handleChangeName}
            />
          </div>

          <div className="mt-5 text-center" align="center">
            <button
              type="button"
              className="btn btn-success"
              onClick={updateCategory}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
