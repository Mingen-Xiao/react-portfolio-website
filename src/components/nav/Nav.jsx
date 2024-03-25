/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import {useState} from 'react';

const Nav = () => {
  // use useState to decide to active which icon in the nav bar when scrolling the page
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className='active'><AiTwotoneHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><GrContact/></a>
    </nav>
  )
}

export default Nav;