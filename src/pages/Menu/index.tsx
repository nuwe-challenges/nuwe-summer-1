import React from "react";
import { useSelector } from "react-redux";
import { getMenu } from "../../redux/reducers/menu.reducer";
import "./index.scss";
import { texts } from "../../constants";

const Menu = (): JSX.Element => {
  const menu = useSelector(getMenu);
  return (
    <div className={`menu ${menu ? "menu-open" : "menu-close"}`}>
      <ul>
        <li>{texts.menu.perfil}</li>
        <li>{texts.menu.panel}</li>
        <li>{texts.menu.empresas}</li>
        <li>{texts.menu.contacto}</li>
        <li>{texts.menu.cerrar}</li>
      </ul>
    </div>
  );
};
export default Menu;
