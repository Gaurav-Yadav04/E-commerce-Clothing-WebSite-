// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/Admin_Assets/cross_icon.png";

const ListProduct = () => {
  const [allproduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  },[])

  const remove_prodect = async (id) => {
    await fetch("http://localhost:4000/removeproduct",{
      method:'POST',
      headers:{
        Accept:'applications/json',
        'Content-type':'applications/json',
      },
      body:JSON.stringify({id:id}),
    })
   await fetchInfo();
  }

  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Titles</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproduct.map((product, index) => {
          return ( <>
            <div
              key={index}
              className="listproduct-format-main listproduct-format"
            >
              <img
                src={product.image}
                alt=""
                className=" listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_prodect(product.id)}} src={cross_icon} alt="" className="product-remove-icon" />
            </div>
            <hr />
            </>
          );
         
        })}
      </div>
    </div>
  );
};

export default ListProduct;
