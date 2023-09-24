import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export function Updatepage(){
    var {aid}=useParams()
    const[image,setImage]=useState('')
    const[title,setTitle]=useState('')
    const[detail,setDetail]=useState('')
    const[price,setPrice]=useState('')

    useEffect(()=>{
        fetch("http://localhost:3002/getsingle/"+aid)
        .then(res=>res.json())
        .then((output)=>{
            setImage(output[0].image)
            setTitle(output[0].title)
            setDetail(output[0].detail)
            setPrice(output[0].price)
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var image=document.getElementById("img").value   
        var title=document.getElementById("title").value  
        var detail=document.getElementById("detail").value
        var price=document.getElementById("price").value

        var key={
            image:image,
            title:title,
            detail:detail,
            price:price
        }
        if(image==''){
            alert("Enter the Image")
        }
        else if(title==''){
            alert("Enter the title")
        }
        else if(detail==''){
            alert("Enter the detail")
        }
        else if(price==''){
            alert("Enter the Price")
        }
        else{
            axios.put("http://localhost:3002/update/"+aid,key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data not updated")
                }
                else if(res.data.status==="success"){
                    alert("data updated")
                }
            })
        }
  
  }
 return(
    <>
    <form onSubmit={handleupdate}>
        <h1 className="text-center "><span>MEDICO</span> PRODUCT UPDATE</h1>
        <div className="update_bg text-center p-5">
            <label>Enter the image URL link</label><br/>
            <input type="text" value={image} id="img" onChange={(up)=>setImage(up.target.value)}/><br/> 
            <label>Enter the Title</label><br/>
            <input type="text" value={title} id="title" onChange={(up)=>setTitle(up.target.value)}/><br/> 
            <label>Enter the Detail</label><br/>
            <input type="text" value={detail} id="detail" onChange={(up)=>setDetail(up.target.value)}/><br/> 
            <label>Enter the Price</label><br/>
            <input type="text" value={price} id="price" onChange={(up)=>setPrice(up.target.value)}/><br/> 
            <input type="submit" className="btn btn-success m-3" value="submit"/>
        </div>
    </form>
    </>
 );
}