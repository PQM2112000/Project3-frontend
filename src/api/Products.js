import axios from "axios";
const GET_ALL_PRODUCTS = "https://localhost:44373/api/Products";

const getAllProducts = async () => {
  try {
    let res = await axios.get(GET_ALL_PRODUCTS);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductsSortByNameDesc = async () => {
  try {
    let res = await axios.get(GET_ALL_PRODUCTS + "?sortBy=tenhh_desc");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductsSortByPriceAsc = async () => {
  try {
    let res = await axios.get(GET_ALL_PRODUCTS + "?sortBy=gia_asc");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductsSortByPriceDesc = async () => {
  try {
    let res = await axios.get(GET_ALL_PRODUCTS + "?sortBy=gia_desc");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductsFilterName = async () => {
  try {
    let res = await axios.get(
      GET_ALL_PRODUCTS + "?search=" + localStorage.getItem("filter")
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductsFilterPriceFrom = async () => {
  try {
    let res = await axios.get(
      GET_ALL_PRODUCTS + "?from=" + localStorage.getItem("filter")
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductsFilterPriceTo = async () => {
  try {
    let res = await axios.get(
      GET_ALL_PRODUCTS + "?to=" + localStorage.getItem("filter")
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
// add product
const postProduct = async () => {
  try {
    let res = await axios.post(GET_ALL_PRODUCTS, {
      maHangHoa: localStorage.getItem("maHangHoa"),
      tenHangHoa: localStorage.getItem("tenHangHoa"),
      donGia: localStorage.getItem("donGia"),
      tenLoai: localStorage.getItem("tenLoai"),
      moTa: localStorage.getItem("moTa"),
      giamGia: localStorage.getItem("giamGia"),
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
//delete product
const deleteProductAPI = async () => {
  try {
    let res = await axios.delete(
      GET_ALL_PRODUCTS +"/"+ localStorage.getItem("guid")
    ).then(res=>{
      if (res.status === 200) {
        alert("delete success");
        window.location.href = "product";
      }
    }) .catch(function (error) {
    console.log(error);
  })
    return res.data;
    
  }catch (error) {
    console.error(error);
  }
  
};
//put product
const putProduct = async () => {
  try {
    let res = await axios
      .put(
        GET_ALL_PRODUCTS +
          "?id=" +
          localStorage.getItem("product").split("@")[0],
        {
          maHangHoa: localStorage.getItem("product").split("@")[0],
          tenHangHoa: localStorage.getItem("tenHangHoa"),
          donGia: localStorage.getItem("donGia"),
          tenLoai: localStorage.getItem("tenLoai"),
          moTa: localStorage.getItem("moTa"),
          giamGia: localStorage.getItem("giamGia"),
        }
      )
      .then(() => {
        {
          alert("update success");
          window.location.href = "product";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    return res.data;
  }catch (error) {
    console.error(error);
  }
};

export {
  getAllProducts,
  getProductsSortByNameDesc,
  getProductsSortByPriceDesc,
  getProductsSortByPriceAsc,
  getProductsFilterName,
  getProductsFilterPriceFrom,
  getProductsFilterPriceTo,
  postProduct,
  deleteProductAPI,
  putProduct,
};
