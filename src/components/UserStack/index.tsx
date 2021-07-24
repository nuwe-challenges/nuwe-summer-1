import React from "react";
import * as logo from "../../assets/icons/stack";
import "./index.scss";

type mapType = keyof typeof logo;
type props = {
  stack: mapType[];
};

const UserStack = ({ stack }: props): JSX.Element => {
  return (
    <fieldset className="stack__container">
      <legend>Stack</legend>
      <div className="stack__languages">
        {stack &&
          stack.map((el: mapType, index) => (
            <img key={`${el}${index}`} src={logo[el]} alt="" />
          ))}
      </div>
    </fieldset>
  );
};

export default UserStack;
