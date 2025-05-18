import React, { useState } from "react";
import productListing from "../assets/data";
import Searchbar from "../UtilityComponent/Searchbar";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from ".././redux/counterSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductListing = () => {

  const [cart, setCart] = useState(`Add to Cart`)
  // const [cartValue, setCartValue] = useState(0)
  
  // <productListing/>

  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const addToCartHandler = async(id,title,price,inStock) =>{
    if (inStock) {
      const Item ={
        id: id,
        title: title,
        price: price
      }
      dispatch(addToCart(Item))
  
      console.log(Item)
      toast.success("Added to cart")

      return;
    }
    toast.warn("Not in stock")

  }

  return (
    <>
    <ToastContainer/>
    <div>
        <Searchbar/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-between",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        {productListing.map(({image, title, description, id, price,inStock},i) => (
          <div
            key={i}
            className="relative flex flex-col my-6 bg-white shadow-lg border border-slate-900 rounded-lg "
            style={{ width: "24rem", height: "27rem", border:'0px solid' }}
          >
            <div className="relative h-56 m-2.5 overflow-hidden rounded-md flex justify-center">
              <img src={image} alt="card-image"/>
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {title}
              </h6>
              <h2>${price}</h2>
              <p className="text-slate-600 leading-normal font-light">
                {description}
              </p>
            </div>
            {(inStock)?<h2></h2>:<h2 className="text-red-600 ml-4">Not Available</h2>}
            <div className="px-4 pb-4 pt-0 mt-2">
              <button
                className="rounded-md text-white bg-blue-800 py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                // type="button"
                onClick={()=>addToCartHandler(id,title,price,inStock)}
              >
                {cart}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductListing;
