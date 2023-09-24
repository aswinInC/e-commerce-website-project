import React from "react";



export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-dark">
                <div class="container-fluid" id='reUse'>
                    <a class="navbar-brand fw-bold"><span>MEDICO</span> SHOPPING</a>
                    
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                   

                            <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a className="nav-link" href="/register"  >Create Account</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/loginpage">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/admindashboard">Admin</a>
                                </li>
                                
                                
                                
                            </ul>
                        </div>
                    
                </div>
            </nav>
        </>
    );
}