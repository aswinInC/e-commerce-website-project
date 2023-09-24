import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {RegistrationForm }from "./component/registration";
import { Menu } from "./component/menu";
import Login from "./component/loginpage";
import { Home } from "./component/home";
import { Admin } from "./component/admindashboard";
import { Clientdashboard } from "./component/clientdashboard";
import { Customersingle } from "./component/clientdetailsview";
import { Updatepage } from "./component/updatepage";



function App(){
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menu/>,<Home/>]}/>
        <Route path="/register" element={[<Menu/>,<RegistrationForm/>]}/>
        <Route path="/loginpage" element={[<Menu/>,<Login/>]}/>
        <Route path="/admindashboard/:id" element={[<Menu/>,<Admin/>]}/>
        <Route path="/clientdashboard/:id" element={<Clientdashboard/>}/>
        <Route path="/clientdetailsview/:aid" element={<Customersingle/>}/>
        <Route path="/updatepage/:aid" element={[<Updatepage/>]}/>
        


        </Routes>
    </BrowserRouter> 
    
    
    </>
  );
}
export default App;