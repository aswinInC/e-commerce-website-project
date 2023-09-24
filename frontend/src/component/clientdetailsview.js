import React, {useState} from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Customersingle(){
    var {aid}=useParams()
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[detail,setDetail]=useState('')
    const[price,setPrice]=useState('')

    useEffect(()=>{
        fetch('http://localhost:3002/getsingle/'+aid)
        .then(res=>res.json())
        .then((data)=>{
            setTitle(data[0].title)
            setImage(data[0].image)
            setDetail(data[0].detail)
            setPrice(data[0].price)
        })
    })
    return(
        <>
        <div class="card mb-2">
            <div class="row g-2">
                <div classs="col-md-4">
                    <img src={image} class="img-fluid rounded-start" alt="..." style={{width:'13rem',height:'10rem'}}/>
        </div>
                
                <div class="col-md-8">
                    <div class="card-body p-2 m-2">
                        <h5 class="card-title"><b>{title}</b></h5>
                        <p class="card-text"><b>Product Description:</b> {detail}</p>
                        <p class="card-text"><b>Price: $.</b>{price} 40%OFFER</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}