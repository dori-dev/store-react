import axios from "axios";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const response = await axios.get("http://localhost:8000/api/products/");
    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
