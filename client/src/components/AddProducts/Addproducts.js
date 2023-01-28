import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from 'axios';
import './AddProducts.css';

export default function Addproducts(){
    const [data,setData] = useState( { "id": "",
    "title": "",
    "price": "",
    "description": "",
    "image": "",
    "rating": {
      "rate": 3.9
    } });

    function handleChange(e){
        setData((prev)=>{
        return {...prev,[e.target.name]:e.target.value};
        })
    }

    function handleSubmit(e){
        axios.post("/posts",data);
        
        // axios.delete('posts/45')

    }
    return(

        <div className="Addproducts">
            <Navbar/>

         
         <div className="flex-auto">
            <div className="form">
                <input className="tfield" type="text" name="id" placeholder="Enter Id" onChange={handleChange}/> 
                <input className="tfield" type="text" name="title" placeholder="Enter Title" onChange={handleChange}/> 
                <input className="tfield" type="text" name="price" placeholder="Enter Price" onChange={handleChange}/> 
                <input className="tfield" type="text" name="description" placeholder="Enter Description" onChange={handleChange}/> 
                <input className="tfield" type="text" name="image" placeholder="Enter Image Url"onChange={handleChange} />
                <input className="tfield" type="text" name="rating" placeholder="Enter rating" onChange={handleChange}/>
                <button className="btn" onClick={handleSubmit}> Submit</button>
            </div>
        </div>
            
        </div>

        
        

    );
}