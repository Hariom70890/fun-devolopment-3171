import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Deletef } from '../Redux/cartReducer/action'
import axios from "axios"

const CartPage = () => {



  const [data,setData]=useState([])
  const [onedata,setOnedata]=useState()

const [quantity,setQuantity]=useState(1)

const handlequantity=(val)=>{
  setQuantity(prev=>prev+val)
}

const totalonesum=(val)=>{
  setOnedata(quantity*val)
}






const handleadd=()=>{
  axios.get(`https://v6dej6.sse.codesandbox.io/cart`).then((res)=>(
    // console.log(res.data)
    setData(res.data)
  ))
}

const handledelete=(id)=>{
  axios.delete(`https://v6dej6.sse.codesandbox.io/cart/${id}`).then(()=>(
    // console.log(res.data)
    handleadd()
  ))
}




useEffect(()=>{
  handleadd()
},[])



  return (
    <div>
        
        <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {data.length}</h5>
          </div>
          <div className="card-body">
          
            
           

            <hr className="my-4" />

       

     {data.map((item)=>(
 <div className="row">
 <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
  
   <div
    className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light"
    >
     <img src={item.image}
       className="w-100" 
       alt="xyz"/>
     <a href="#!">
       <div className="mask" 
     
       ></div>
     </a>
   </div>

 </div>

 <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
 
   <p><strong>{item.title}</strong></p>
   <p>Color:{item.title}</p>
   <p>Size: M</p>

   <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
     title="Remove item"
     onClick={()=>handledelete(item.id)}
   
     
     >
     <i className="fas fa-trash"></i>
   </button>
   <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
     title="Move to the wish list">
     <i className="fas fa-heart"></i>
   </button>
                 </div>

 <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
 
   <div className="d-flex mb-4" style={{maxwidth: "300px"}}>
     <button className="btn btn-primary px-3 me-2"
       disabled={quantity===1}
       onClick={()=>handlequantity(-1)}
       >
       <i className="fas fa-minus"></i>
     </button>

     <div className="form-outline">
       <input id="form1" min="0" name="quantity" value={quantity}
       
       type="number" className="form-control" />
       <label className="form-label" for="form1">Quantity</label>
     </div>

     <button className="btn btn-primary px-3 ms-2"
     onClick={()=>handlequantity(1)}
    
     
     >
       <i className="fas fa-plus"></i>
     </button>
   </div>

   <p className="text-start text-md-center">
     <strong>price:Rs {item.price}</strong>
   </p>
   <p className="text-start text-md-center">
     <strong></strong>
   </p>
  
 
 </div>
</div>
     ))}  

          
           
         














          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
        <p><strong>We accept</strong></p>
          <div className="card-body"
          style={{display:"flex", flex:"column",gap:"5px"}}
          >
           
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            {/* <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal " /> */}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        
        </div>
  )
}

export default CartPage