
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
      .get(`https://json-example.onrender.com/products`, paramObj)
      .then((res) => {
         //   console.log(res.data)
         dispatch({ type: PRODUCT_GET_REQUEST_SUCESSFULL, payload: res.data });
      })
      .catch((err) => {
         // console.log(err)
         dispatch({ type: PRODUCT_GET_REQUEST_FAILURE });
      });
};
// --------------------------------------Post request for cart------------------------------------------
  export const postRequestForCart =(data)=>{
   axios.post(`https://json-example.onrender.com/cart`,data)
   .then((res)=>{
      console.log(res)
   })
   .catch((err)=>{
      console.log(err)
   })
  }
// ------------------------------------------Checking data in cart --------------------------------------->>>
export const checkingDataInCart =()=>{
   const res =    axios.get('https://json-example.onrender.com/cart')
    return res
}

//  .......... deleting the product ...........
export const deleteProduct = (id) => (dispatch) => {
   dispatch({ type: PRODUCT_GET_REQUEST_LOADING });

   let payload = [];

   axios
      .get("https://json-example.onrender.com/products")
      .then((res) => (payload = res.data.filter((el) => el.id !== id)));

   return axios
      .delete(`https://json-example.onrender.com/products/${id}`)
      .then((res) => {
         console.log(res.data);
         dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: payload });
      })
      .catch((err) => dispatch({ type: PRODUCT_GET_REQUEST_SUCESSFULL }));

};

