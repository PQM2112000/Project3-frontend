import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./index.css"
import {
  getAllProducts,
  getProductsFilterName,
  getProductsFilterPriceFrom,
  getProductsFilterPriceTo,
  getProductsSortByNameDesc,
  getProductsSortByPriceAsc,
  getProductsSortByPriceDesc,
  deleteProductAPI,
} from "../../api/Products";

export const Product = (props) => {
  const [Products, setProducts] = useState([]);
  const SortByNameDesc =()=>{
     getProductsSortByNameDesc().then((res) => setProducts(res));
  }
  const SortByPriceDesc = () => {
    getProductsSortByPriceDesc().then((res) => setProducts(res));
  };
  const SortByNameAsc = () => {
    getProductsSortByPriceAsc().then((res) => setProducts(res));
  };
  const FilterByName = () => {
    getProductsFilterName().then((res) => setProducts(res));
  };
  const FilterByPriceFrom = () => {
    getProductsFilterPriceFrom().then((res) => setProducts(res));
  };
  const FilterByPriceTo = () => {
    getProductsFilterPriceTo().then((res) => setProducts(res));
  };

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);
  const handleChangeName = (event) => {
    console.log(event.target.value);
    localStorage.setItem("filter", event.target.value);
  };
  const addProduct = () =>{
    window.location.href="product/addProduct";
  }
  const updateProduct = (event)=>{
    console.log(event.target.name);
    localStorage.setItem("product", event.target.name);
    const arrProduct = localStorage.getItem("product").split("@");
    console.log(arrProduct[0]);
    window.location.href = "product/updateProduct";
  }
  const deleteProduct = (event) => {
    localStorage.setItem("guid", event.target.name);
    deleteProductAPI();
  };
  return (
    <div>
      <div className="FilterAndSortBy">
        <div className="Filter">
          <span>Filter</span>
          <div className="FilterByName">
            <Form.Control
              type="text"
              name="FilterByName"
              defaultValue=""
              aria-describedby="passwordHelpBlock"
              onChange={handleChangeName}
            />
            <div className="btn-group">
              <Button variant="outline-info" onClick={FilterByName}>
                Name
              </Button>
              <Button variant="outline-info" onClick={FilterByPriceFrom}>
                Price From
              </Button>
              <Button variant="outline-info" onClick={FilterByPriceTo}>
                Price To
              </Button>
            </div>
          </div>
        </div>
        <div className="SortBy">
          <div>SortBy</div>
          <div className="btn-group">
            <Button variant="outline-secondary" onClick={SortByNameDesc}>
              Name Desc
            </Button>{" "}
            <Button variant="outline-secondary" onClick={SortByPriceDesc}>
              Price Desc
            </Button>{" "}
            <Button variant="outline-secondary" onClick={SortByNameAsc}>
              Price Asc
            </Button>{" "}
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <Button onClick={addProduct}>Add Product</Button>
      </div>
      <span>Số lượng sản phẩm: {Products.length}</span>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mã Hàng Hóa</th>
            <th>Tên Hàng Hóa</th>
            <th>Đơn Giá</th>
            <th>Tên Loại</th>
            <th>Mô tả</th>
            <th>Giảm Giá</th>
            <th>Action</th>
          </tr>
        </thead>
        {Products.map((res) => (
          <tbody key={res.maHangHoa}>
            <tr>
              <td>{res.maHangHoa}</td>
              <td>{res.tenHangHoa}</td>
              <td>{res.donGia}</td>
              <td>{res.tenLoai}</td>
              <td>{res.moTa}</td>
              <td>{res.giamGia}%</td>
              <td>
                <Button
                  className="btn-success"
                  name={
                    res.maHangHoa +
                    "@" +
                    res.tenHangHoa +
                    "@" +
                    res.donGia +
                    "@" +
                    res.tenLoai +
                    "@" +
                    res.moTa +
                    "@" +
                    res.giamGia
                  }
                  onClick={updateProduct}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  name={res.maHangHoa}
                  onClick={deleteProduct}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
