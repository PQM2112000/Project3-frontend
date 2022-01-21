import React from "react";
import { putProduct } from "../../api/Products";
export default function UpdateProduct() {
  const handleChange1 = (event) => {
    console.log(event.target.value);
    localStorage.setItem("maHangHoa", event.target.value);
  };
  const handleChange2 = (event) => {
      console.log(event.target.value);
    localStorage.setItem("tenHangHoa", event.target.value);
  };
  const handleChange3 = (event) => {
      console.log(event.target.value);
    localStorage.setItem("donGia", event.target.value);
  };
  const handleChange4 = (event) => {
      console.log(event.target.value);
    localStorage.setItem("tenLoai", event.target.value);
  };
  const handleChange5 = (event) => {
      console.log(event.target.value);
    localStorage.setItem("moTa", event.target.value);
  };
  const handleChange6 = (event) => {
      console.log(event.target.value);
    localStorage.setItem("giamGia", event.target.value);
  };

  const updateProduct = () => {
    putProduct();
    window.location.href = "/product";
  };

  const arrProduct = localStorage.getItem("product").split("@");

  return (
    <div className="container" id="container">
      <div className="form-signin">
        <form>
          <h1 className="font-weight-normal">Update Product</h1>

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
              defaultValue={arrProduct[0]}
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
              defaultValue={arrProduct[1]}
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
              defaultValue={arrProduct[2]}
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
              defaultValue={arrProduct[3]}
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
              defaultValue={arrProduct[4]}
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
              defaultValue={arrProduct[5]}
              onChange={handleChange6}
            />
          </div>

          <div className="mt-5 text-center" align="center">
            <button
              type="button"
              className="btn btn-success"
              onClick={updateProduct}
            >
              UPDATE PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
