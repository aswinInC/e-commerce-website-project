import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Clientdashboard(){
    const[product,setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3002/getdata')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    return(
        <>
        <h1><span>Medico</span> CUSTOMER LOGIN</h1>
        {
            product.map((value,index)=>(
                <>
                <div class="card mb-3">
                    <div class="row g-2">
                        <div class="col-md-3">
                            <img src={value.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-4 m-2">
                                <h4 class="card-title">{value.title}</h4>
                                <p class="card-text">Product Description: {value.detail}</p>
                                <p class="card-text">Price: $.{value.price}</p>
                                <Link to={`/clientdetailsview/${value.aid}`}><button className="btn btn-success">View More</button></Link>
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