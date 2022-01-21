import React from "react";
import { putCategory } from "../../api/Category";
export default function UpdateCategory() {
  const handleChangeName = (event) => {
    console.log(event.target.value);
    localStorage.setItem("nameCategory", event.target.value);
  };
  const updateCategory = () =>{
      putCategory();
      window.location.href="/category";
  }

  return (
    <div className="container" id="container">
      <div className="form-signin">
        <form>
          <h1 className="font-weight-normal">Update Category</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-800">
              Mã Loại
            </label>
            <input
              type="name"
              name="name"
              value={localStorage.getItem("idCategory")}
              placeholder="Mã loại"
              className="form-control"
              autoComplete="name"
              readOnly
            />
          </div>
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
