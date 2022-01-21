import React from "react";
import {postProduct} from "../../api/Products"
export default function AddProduct() {

   const handleChange1 = (event) => {
      localStorage.setItem("maHangHoa", event.target.value);
  };
  const handleChange2 = (event) => {
    localStorage.setItem("tenHangHoa", event.target.value);
  };
  const handleChange3 = (event) => {
    localStorage.setItem("donGia", event.target.value);
  };
  const handleChange4 = (event) => {
    localStorage.setItem("tenLoai", event.target.value);
  };
  const handleChange5 = (event) => {
    localStorage.setItem("moTa", event.target.value);
  };
  const handleChange6 = (event) => {
    localStorage.setItem("giamGia", event.target.value);
  };
  
  const AddProduct = () => {
    postProduct().then(alert("add success"));
    window.location.href ="/product";
  };

  return (
    <div className="container" id="container">
      <div className="form-signin">
        <form>
          <h1 className="font-weight-normal">Add Product</h1>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-800">
              Mã Hàng Hóa
            </label>
            <input
              type="text"
              name="maHangHoa"
              placeholder=""
              className="form-control"
              autoComplete="email"
              onChange={handleChange1}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-800">
              Tên Hàng Hóa
            </label>
            <input
              type="text"
              name="tenHangHoa"
              placeholder=""
              className="form-control"
              autoComplete="email"
              onChange={handleChange2}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-800">
              Đơn Giá
            </label>
            <input
              type="text"
              name="donGia"
              placeholder=""
              className="form-control"
              autoComplete="email"
              onChange={handleChange3}
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
              onChange={handleChange4}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-800">
              Mô tả
            </label>
            <input
              type="text"
              name="moTa"
              placeholder=""
              className="form-control"
              autoComplete="email"
              onChange={handleChange5}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-800">
              Giảm Giá
            </label>
            <input
              type="number"
              name="giamGia"
              placeholder=""
              className="form-control"
              autoComplete="email"
              onChange={handleChange6}
            />
          </div>

          <div className="mt-5 text-center" align="center">
            <button
              type="button"
              className="btn btn-success"
              onClick={AddProduct}
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
