import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../api/Products";
import "./home.css"
export const Home = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);
  return (
    <div>
      <div className="row row row-cols-1 row-cols-sm-2 row-cols-md-5">
        {Products.map((res) => (
          <div
            className="card card border-success mb-3 text-center"
            key={res.maHangHoa}
          >
            <div className="card-body text-secondary">
              <div className="item-percent">
                <span>Giảm {res.giamGia}%</span>
              </div>
              <div className="img-product">
                <img src={res.moTa} alt="anh dien thoai"></img>
              </div>
              <p className="card-text">{res.tenHangHoa}</p>
              <p className="card-text">{res.donGia}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
