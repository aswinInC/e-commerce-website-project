import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Admin(){
    const[product,setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3002/getdata')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    const delt=(aid)=>{
        var key={aid:aid}
        axios.post("http://localhost:3002/delete",key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("data deleted")
            }
            else if(res.data.status==="success"){
                alert("data deleted")
            }
        })
    }
    
    return(
        <>
        <h1 className="text-center"><span>MEDICO</span> ADMIN PAGE</h1>
        {
            product.map((value,index)=>(
                <>
                <div class="card mb-3">
                    <div class="row g-4">
                        <div class="col-md-4">
                            <img src={value.image} class="img-fluid rounded-start" alt="..." style={{width:'13rem',height:'10rem'}}/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-5 m-3">
                                <h5 class="card-title">{value.title}</h5>
                                <p class="card-text">Product Details: {value.detail}</p>
                                <p class="card-text">PRICE: $.{value.price}</p>
                                <button className="btn btn-danger" onClick={()=>{delt(value.aid)}}>Delete</button>
                                <Link to={`/updatepage/${value.aid}`}><button className="btn btn-success">Update</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ))
        }
        </>
    );
}