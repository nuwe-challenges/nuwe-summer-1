import React from "react";
import "./index.scss";
import { Burger, NuweLight, NuweLogo, Settings } from "../../assets/icons";
import { menuOpen } from "../../redux/reducers/menu.reducer";
import Button from "./Button";
import { useDispatch } from "react-redux";

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(menuOpen());
  return (
    <>
      <button type="button" onClick={handleClick}>
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
