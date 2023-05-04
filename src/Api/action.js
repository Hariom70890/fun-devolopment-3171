import axios from "axios";
import {
   DELETE_PRODUCT_SUCCESS,
   PRODUCT_GET_REQUEST_FAILURE,
   PRODUCT_GET_REQUEST_LOADING,
   PRODUCT_GET_REQUEST_SUCESSFULL,
} from "../Redux/ActionTypes/actionTypes";

const messsage = "Request Does Not Found Error 404 ";
export const getProduct = (paramObj) => (dispatch) => {
   dispatch({ type: PRODUCT_GET_REQUEST_LOADING });
   axios
      .get(`https://v6dej6.sse.codesandbox.io/products`, paramObj)
      .then((res) => {
         //   console.log(res.data)
         dispatch({ type: PRODUCT_GET_REQUEST_SUCESSFULL, payload: res.data });
      })
      .catch((err) => {
         // console.log(err)
         dispatch({ type: PRODUCT_GET_REQUEST_FAILURE });
      });
};

//  .......... deleting the product ...........
export const deleteProduct = (id) => (dispatch) => {
   dispatch({ type: PRODUCT_GET_REQUEST_LOADING });

   let payload = [];

   axios
      .get("https://v6dej6.sse.codesandbox.io/products")
      .then((res) => (payload = res.data.filter((el) => el.id !== id)));

   return axios
      .delete(`https://v6dej6.sse.codesandbox.io/products/${id}`)
      .then((res) => {
         console.log(res.data);
         dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: payload });
      })
      .catch((err) => dispatch({ type: PRODUCT_GET_REQUEST_SUCESSFULL }));
};
