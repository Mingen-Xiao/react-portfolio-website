import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mingen-xiao/ |" target="_blank" rel="noreferrer" className="header_col"><BsLinkedin/></a>
        <a href="https://github.com/Mingen-Xiao" target="_blank" rel="noreferrer" className="header_col"><AiFillGithub/></a>
    </div>      
  )
};

export default HeaderSocials;

