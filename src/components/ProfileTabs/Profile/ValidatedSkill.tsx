import React from "react";
import "./ValidatedSkill.scss";
import * as logo from "../../../assets/icons/stack";

type mapType = keyof typeof logo;
type props = {
  stack: {
    type: mapType;
    points: number;
  }[];
};

const ValidatedSkill = ({ stack }: props): JSX.Element => (
  <div className="validated-skills">
    {stack &&
      stack.map((el, index) => (
        <div key={`${el}${index}`}>
          <img key="el" src={logo[el.type] || ""} alt="" />
          <span>Top 10%</span>
          <span>{el.points}</span>
        </div>
      ))}
  </div>
);

export default ValidatedSkill;
