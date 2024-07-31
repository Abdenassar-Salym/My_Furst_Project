import axios from "axios";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { postData } from "./sliceProduit";
import "./css/addProduitStyle.css"



const AddProduct = () => {
  const nave=useNavigate()
  // const despatch=useDispatch()
  
  const handlerSubmite= async(e)=>{
    e.preventDefault()
    // @ts-ignore
    let {title,description,prix,etoil}=document.getElementById("frm")
    let inputData={
      // @ts-ignore
      "title":title.value,
      "description":description.value,
      "prix":parseFloat(prix.value),
      "etoil":parseFloat(etoil.value)
    }
    console.log(inputData)
    try {
      const response = await axios.post('http://localhost:8000/api/produit', inputData);
      console.log('Product added:', response.data);
      // Optionally handle success or navigate to another page
    } catch (error) {
      console.error('Error:', error);
    }
    // @ts-ignore
    // despatch(postData(inputData))

    nave('/')

  }
  return (
    
    <div  className="center-form">
      
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-5 d-flex align-items-center">
            <h1>Sliding labels for Bootstrap forms</h1>
        </div>
        <div className="col-md-6 offset-md-1">
            <form id="frm" onSubmit={handlerSubmite} className="mt-4 mt-md-0">
                <div className="form-group">
                    <label >Title</label>
                    <input className="form-control" type="text" id="title"/>
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <input className="form-control" type="text" id="description"/>
                </div>
                <div className="form-group">
                    <label >Prix</label>
                    <input className="form-control" type="text" id="prix"/>
                </div>
                <div className="form-group">
                    <label >Etoile</label>
                    <input className="form-control" type="text" id="etoil"/>
                </div>
                <button  className="btnad" type="submit">Add Product</button>
            </form>
          
        </div>
    </div>
</div>
</div>
  );
}

export default AddProduct;
