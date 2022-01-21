import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { deleteCategoryById, getALlCategory, /* getCategoryById */ } from "../../api/Category";
export const Category = () => {
  const [Categorys, setCategorys] = useState([]);
  useEffect(() => {
    getALlCategory().then((res) => setCategorys(res));
  }, []);
  /* const SearchCategoryById=()=>{
    getCategoryById().then((res)=>setCategorys(res));
  }
  const handleChangeName = (event) => {
    console.log(event.target.value);
    localStorage.setItem("idCategory", event.target.value);
  }; */
  const AddCategory = () => {
    window.location.href = "category/addCategory";
  };
  const UpdateCategory = (event) => {
    console.log(event.target.name);
    localStorage.setItem("idCategory", event.target.name);
    window.location.href = "category/updateCategory";
  };
  const DeleteCategory = (event) => {
    console.log(event.target.name);
    localStorage.setItem("idCategory", event.target.name);
    deleteCategoryById().then((res) => console.log(res));
    window.location.href = "category";
  };

  return (
    <div>
      <h1>Category</h1>
      <div>
        <Button variant="outline-primary" onClick={AddCategory}>
          Add Category
        </Button>
      </div>
      <span>Số loại : {Categorys.length}</span>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mã Loại</th>
            <th>Tên Loại</th>
            <th>Action</th>
          </tr>
        </thead>
        {Categorys.map((res) => (
          <tbody key={res.maLoai}>
            <tr>
              <td>{res.maLoai}</td>
              <td>{res.tenLoai}</td>
              <td>
                <Button
                  className="btn-success"
                  name={res.maLoai}
                  onClick={UpdateCategory}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  name={res.maLoai}
                  onClick={DeleteCategory}
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
