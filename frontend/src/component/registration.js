import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function RegistrationForm() {
    function handlelogin(event) {
        event.preventDefault()
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var city = document.getElementById("city").value
        var country = document.getElementById("country").value
        var phonenumber = document.getElementById("phonenumber").value
        var state = document.getElementById("state").value
        var password = document.getElementById("password").value
        var roll = document.getElementById("roll").value

        var key = {
            name: name,
            email: email,
            city: city,
            country: country,
            phonenumber: phonenumber,
            state: state,
            password: password,
            roll: roll,
        }
        if (name == '') {
            alert("enter the  name")
        }
        else if (email == '') {
            alert("enter the email")
        }
        else if (city == '') {
            alert("enter the city")
        }
        else if (country == '') {
            alert("enter the country")
        }
        else if (phonenumber == '') {
            alert("enter the phonenumber")
        }
        else if (state == '') {
            alert("enter the state")
        }
        else if (password == '') {
            alert("enter the password")
        }
        else if (roll == ''){
            alert("enter the roll")
        }
        else {
            
            axios.post("http://localhost:3002/loginpage", key)
                .then((res) => {
                    if (res.data.status === "success") {
                        alert("data are inserted")
                        window.location.href = '/loginpage'
                    }
                    else if (res.data.status === "error") {
                        alert("data are not inserted")
                        window.location.reload()
                    }
                })
        }
    }

    

return (
    <div className='form_Bg justify-content-center d-flex flex-column align-items-center'>
        <h2><span>MEDICO  </span>Create Account </h2>
        <form onSubmit={handlelogin}>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                id='name'
                                placeholder='Enter the Name'
                            
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                placeholder='Enter the E-mail'
                              
                            />
                            
                        </td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>
                            <input
                                type="text"
                                name="city"
                                id='city'
                                placeholder='Enter the City'
                              
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>
                            <input
                                type="text"
                                name="country"
                                id='country'
                                placeholder='Enter the Country'
                               
                            />
                            
                            
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>
                            <input
                                type="text"
                                name="phoneNumber"
                                id='phonenumber'
                                placeholder='Enter the Phoneno'
                               
                            />
                           
                            
                        </td>
                    </tr>
                    {/* <tr> */}
                        {/* <td>Date of Birth:</td>
                        <td>
                            <input
                                type="date"
                                name="dob"
                                id='Six'
                                value={formData.dob}
                                onChange={handleChange}
                            />
                            {errors.dob && <div className="error">{errors.dob}</div>}
                        </td>
                    </tr> */}
                    <tr>
                        <td>State:</td>
                        <td>
                            <input
                                type="text"
                                name="state"
                                id='state'
                                placeholder='Enter the State'
                               
                            />
                            
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input
                                type="password"
                                name="password"
                                id='password'
                                placeholder='Enter the Password'
                               
                            />
                            
                        </td>
                    </tr>
                    <tr>
                        <td><label>ROLL:</label></td>
                        <td><select id='roll'>
                            <option>SELECT THE ROLL</option>
                            <option value="admin">ADMIN</option>
                            <option value="client">CLIENT</option>
                            </select></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className='form_Button'>Register</button>
            <Link to='/LoginPage'> <span>LOGIN</span> </Link>
        </form>
    </div>
);
}                     
