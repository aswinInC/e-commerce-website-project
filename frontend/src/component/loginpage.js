import axios from "axios";
import React from "react";

export function Login()
{
    function handlelogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var key={
            username:username,
            password:password
        }
        if(username==''){
            alert("Plz enter the username")
        }
        else if(password==''){
            alert("plz enter the password")
        }
        else{
            axios.post("http://localhost:3002/login",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter the username or register a new one")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    var roll=res.data.roll
                    alert("Successful Loggedin")
                    if(roll==="client"){
                        window.location.href=`/clientdashboard/${id}`
                    }
                    
                    else if(roll==="admin"){
                        window.location.href=`/admindashboard/${id}`
                    }
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz check your password")
                }
                else if(res.data.status==="error"){
                    alert("All the data are invalid")
                }
                else{
                    alert("plz register your details first")
                }
            })
        }
    }
    return(
        <>
        <form onSubmit={handlelogin}>
        <div className="reg_Form ">
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="row form">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center mt-5">
                        <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/medical-logo.jpg" className="image_id"/>

                    </div>
                    <div className="col-md-6 col-12 text-center d-flex flex-column justify-content-center">
                        <h2><span>Customer Login</span></h2>
                        <div className="text-center d-flex flex-column justify-content-center">
                            <tr>
                           <td> <label>Phone number</label>
                            <input type="text" placeholder="phone number" name="Email" id="username" className="name"/></td>
                            </tr>
                            <div className=" text-center d-flex flex-column justify-content-center">
                                <tr>
                           <td> <label>Password</label>
                            <input type="password" placeholder="password" name="pwd" id="password" className=" name"/></td>
                            </tr>
                            </div>
                            <button type="submit" className="name-One btn btn-center btn btn-success mt-3">Login</button> 

                       
                        <p className="">Forget<span className="login-name">Username/password?</span></p>
                        <p className=""><span className="login-name">Create your account</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </form>
        </>


    );
}
export default Login;