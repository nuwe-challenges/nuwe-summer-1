import React from "react";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux/reducers/menu.reducer";
import * as icon from "../../assets/icons";
import "./index.scss";
import { texts } from "../../constants";

const Menu = (): JSX.Element => {
  const menu = useSelector(getMenu);
  return (
    <div className={`menu ${menu ? "menu-open" : "menu-close"}`}>
      <ul>
        <li>
          <img src={icon.Home} alt="" />
          {texts.menu.perfil}
        </li>
        <li>
          <img src={icon.Work} alt="" />
          {texts.menu.panel}
        </li>
        <li>
          <img src={icon.Profile} alt="" />
          {texts.menu.empresas}
        </li>
        <li>
          <img src={icon.InfoCircle} alt="" />
          {texts.menu.contacto}
        </li>
      </ul>
    </div>
  );
};
export default Menu;
