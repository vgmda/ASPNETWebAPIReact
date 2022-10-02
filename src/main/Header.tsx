import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./GloboLogo.png";

// Header file

type Args = {
  subtitle: string;
};


const Header = ({ subtitle }: Args) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }

  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={logo} onClick={handleClick} className="logo" alt="logo" />
      </div>
      <div className="col-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};


export default Header;