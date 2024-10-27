/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './AddProduct.css';
import upload_area from '../../assets/Admin_Assets/upload_area.svg';

const AddProduct = () => {
const [image, setImage] = useState(false);

const [productDelails, setproductDetails] = useState({
  name:"",
  image:"",
  category:"women",
  new_price:"",
  old_price:""
})

const chaneHandler =(e) => {
  setproductDetails({...productDelails,[e.target.name]:e.target.value})
}
const add_product = async ()=>{
  console.log(productDelails);
  let responseData;
  // eslint-disable-next-line no-unused-vars
  let product = productDelails;

  let formData = new FormData();
  formData.append('product',image);
  
  await fetch('http://localhost:4000/upload',{
    method:'POST',
    headers:{
      Accept:'application/json',
    },
    body:formData,
  }).then((resp)=>resp.json()).then((data)=>{responseData=data})
    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct",{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Add Product Successfuly"):alert("Failed");
      })
    }
}

const imageHandler = (e) =>{
       setImage(e.target.files[0]);
}


  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Tital</p>
        <input value={productDelails.name} onChange={chaneHandler} type="text" name='name' placeholder='Type here'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDelails.old_price} onChange={chaneHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p> Offer Price</p>
            <input value={productDelails.new_price} onChange={chaneHandler}  type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Prodect Category</p>
        <select value={productDelails.category} onChange={chaneHandler}  name="category" className='add-product-selector' >
            <option value="women">Woman</option>
            <option value="men">Man</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image): upload_area} className='addproduct-thumnaill-img' alt="" />
            <input onChange={imageHandler } type="file" name='image' id='file-input' hidden />
        </label>
      </div>
      <button onClick={add_product} className="addproduct-btn">ADD</button>
    </div>
  )
}

export default AddProduct
