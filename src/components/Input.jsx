import React,{forwardRef, useEffect} from "react";
import './Input.css'

const Input = ({role,value,setValue,className,label,beforeimg,image,alt,type,name,id,placeholder},ref) => {
    
  return (
    <div role={role} className={`Input ${className}`}>
      <label htmlFor={`${id}`}>{label}</label>
      {beforeimg && <img src={image} alt={`${alt}`} />}
      <input
        type={type}
        name={`${name}`}
        id={`${id}`}
        defaultValue={value===undefined?"":value}
        onChange={e=>setValue !== undefined?setValue(e.target.value):null}
        style={
            beforeimg?
            {padding:"0.5rem 1.6rem"}:
            {padding:"0.5rem 1rem"}
        }
        placeholder={`${placeholder}`}
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(Input);
