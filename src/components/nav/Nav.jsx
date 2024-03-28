/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
import {useState} from 'react';

const Nav = () => {
  // use useState to decide to active which icon in the nav bar when scrolling the page
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><CgWebsite/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact/></a>
    </nav>
  )
}

export default Nav;
