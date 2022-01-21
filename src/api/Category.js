import axios from "axios";

const URL_CATEGORY = "https://localhost:44373/api/Loais";

const getALlCategory = async () => {
  try {
    let res = await axios.get(URL_CATEGORY);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const postCategory = async () => {
  try {
    let res = await axios.post(
      URL_CATEGORY + "?id=" + localStorage.getItem("idCategory"),
      {
        tenLoai: localStorage.getItem("nameCategory"),
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const putCategory = async () => {
  try {
    let res = await axios.put(
      URL_CATEGORY + "?id=" + localStorage.getItem("idCategory"),
      {
        tenLoai: localStorage.getItem("nameCategory"),
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const getCategoryById = async () => {
  try {
    let res = await axios.get(
      URL_CATEGORY +"/"+ localStorage.getItem("idCategory")
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const deleteCategoryById = async () => {
  try {
    let res = await axios.delete(
      URL_CATEGORY +"/"+ localStorage.getItem("idCategory")
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getALlCategory,
  postCategory,
  putCategory,
  getCategoryById,
  deleteCategoryById,
};
