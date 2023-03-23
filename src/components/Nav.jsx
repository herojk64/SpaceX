import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import hamIco from '../assets/HamIco.svg'
import CloseIco from "../assets/Close.svg"
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const [MobaView,SetMobaView] = useState(false);
    const location = useLocation();
  return (
    <nav className="navigation-bar">
        <img src={Logo} className="Logo" alt="Spacer"/>
        <img src={MobaView?CloseIco:hamIco} onClick={()=>SetMobaView(e=>!e)} className="HamIco" alt="" />
        <div data-value={MobaView?"1":"0"}>
        <h1>Shipment List</h1>
        <ol>
            <li>
                <Link to="/" onClick={()=>MobaView?SetMobaView(false):null} className={location.pathname === "/"?"active":null}>Amazon</Link>
            </li>
            <li>
                <Link to="/american" onClick={()=>MobaView?SetMobaView(false):null} className={location.pathname === "/american"?"active":null}>American Express</Link>
            </li>
            <li>
                <Link to="/airbnb" onClick={()=>MobaView?SetMobaView(false):null} className={location.pathname === "/airbnb"?"active":null}>Airbnb</Link>
            </li>
            <li>
                <Link to="/apple" onClick={()=>MobaView?SetMobaView(false):null} className={location.pathname === "/apple"?"active":null}>Apple</Link>
            </li>
        </ol>
        </div>
    </nav>
  )
}

export default Nav