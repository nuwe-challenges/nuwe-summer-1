import React from "react";
import "./index.scss";
import * as icon from "../../assets/icons";
import { menuOpen } from "../../redux/reducers/menu.reducer";
import Button from "./Button";
import { useDispatch } from "react-redux";

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(menuOpen());
  return (
    <>
      <button type="button" onClick={handleClick} className="navbar__open">
        <img src={icon.Burger} alt="" className="navbar__burger" />
      </button>
      <div className="navbar__logo">
        <img src={icon.NuweLight} alt="" />
        <img src={icon.NuweLogo} alt="" />
      </div>
      <Button className="navbar__settings">
        <img src={icon.Settings} alt="" />
      </Button>
    </>
  );
};

export default NavBar;
