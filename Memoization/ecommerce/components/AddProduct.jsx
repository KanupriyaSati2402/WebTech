import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { globalVar } from '../Context/GlobalContext';

const AddProduct = () => {
  let {addProductPanel,setAddProductPanel}=useContext(globalVar);
  let[data,setData]=useState();
  let[form,setForm] = useState(
    {
      id:"",
      title:"",
      price:"",
      description:"",
      category:"Electrical",
      image:"",
    }
  );
  let {id,title,price,description,category,image} =form;



  console.log(form)
  let handleChange=(e)=>{
   
   let {name,value} = e.target;
   setForm({...form,[name]:value})
  }
  let handleSubmit = (e)=>{
    e.preventDefault();
    if(id !="" && title !="" && price!="" && description !="" && category !=""){
      axios.post(`http://localhost:5000/${form.category}`,form)
      toast.success("Added Successfully")
      setAddProductPanel(false);
    }
    else{
      toast.error("Please fill all the fields")
    }
  }
  return (
    <section className='addProduct'>
       <section className='addprod'>
       <form onSubmit={handleSubmit} >
        <div>
        <label>Product Id:</label>
        <input type="text" name="id" id="" onChange={handleChange} />
        </div>
        <div>
        <label>Product Title: </label>
        <input type="text" name="title" id="" onChange={handleChange} />
        </div>
        <div>
        <label>Product Price: </label>
        <input type="text" name="price" id="" onChange={handleChange} />
        </div>
       <div>
       <label>Product Description : </label>
       <input type="text" name="description" id=""  onChange={handleChange}/>
       </div>
       
       <div>
       <label> Product Category: </label>
       <select name="category" onChange={handleChange}>
          <option value="Electrical">HouseHold</option>
          <option value="Medical">Electrical</option>
          <option value="Medical">Medical</option>
        </select>
       </div>
       <div>
        <label>Product Image :</label>
        <input type="file" name="image" id=""  />
       </div>
       
        <button className='submit' type="submit" >Add Product</button>
       </form>
       </section>
       
    </section>
  )
}

export default AddProduct
