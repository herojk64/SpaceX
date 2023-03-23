import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Body.css";
import Input from "./Input";

const Body = () => {
  const [header, setHeader] = useState({ header: "Amazon", email: "amazon" });
  const CargoRef = useRef();
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setHeader({ header: "Amazon", email: "amazon" });
    }
    if (location.pathname === "/airbnb") {
      setHeader({ header: "AirBnb", email: "airbnb" });
    }
    if (location.pathname === "/american") {
      setHeader({ header: "American", email: "american" });
    }
    if (location.pathname === "/apple") {
      setHeader({ header: "Apple", email: "apple" });
    }
  }, [location]);
  return (
    <div className="main-body-wrapper" role="main-body-wrapper">
      <div>
        <header>{header.header}</header>
        <span>contact@{header.email}.com</span>
      </div>
      <div>
        <header>Cargo Boxes</header>
        <Input
          role={`Cargo Boxs Input`}
          className={`cargoboxes-wrapper`}
          label={`Cargo Box`}
          alt={``}
          ref={CargoRef}
          type={`text`}
          name={`cargobox`}
          id={`cargobox`}
          placeholder={`Search`}
        />
      </div>
      <div>
        <header>Number of required cargo bays</header>
        <span>5</span>
      </div>
    </div>
  );
};

export default Body;
