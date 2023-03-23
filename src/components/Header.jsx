import React,{useRef, useState} from 'react'
import Zoom from '../assets/Zoom.svg'
import './Header.css'
import Input from './Input'

const Header = () => {
    const search = useRef()
  return (
    <header className='Header'>
        <Input 
        role={`Search Bar`}
        className={`SearchBar`}
        label={`Search`}
        beforeimg={true}
        image={Zoom}
        alt={``}
        type={`text`}
        name={`searchbox`}
        id={`searchbox`}
        placeholder={`Search`}
        ref={search}
        />
    </header>
  )
}

export default Header