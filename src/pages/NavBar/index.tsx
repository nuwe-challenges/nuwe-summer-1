import React from "react";
import "./index.scss";
import { Burger, NuweLight, NuweLogo, Settings } from "../../assets/icons";
import { useSelector } from "react-redux";
import { menuOpen } from "../../redux/reducers/menu.reducer";
import Button from "./Button";

const NavBar = (): JSX.Element => {
  return (
    <>
      <button type="button" onClick={menuOpen()}>
        <img src={Burger} alt="" className="navbar__burger" />
      </button>
      <div className="navbar__logo">
        <img src={NuweLight} alt="" />
        <img src={NuweLogo} alt="" />
      </div>
      <Button className="navbar__settings">
        <img src={Settings} alt="" />
      </Button>
    </>
  );
};

export default NavBar;
