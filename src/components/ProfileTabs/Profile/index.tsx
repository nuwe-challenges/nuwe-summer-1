import React from "react";
import { texts } from "../../../constants";
import userType from "../../../types/userInterface";
import RadarChart from "./RadarChart";
import ValidatedSkill from "./ValidatedSkill";
import "./index.scss";
type props = {
  user: userType;
};

const Profile = ({ user }: props): JSX.Element => (
  <div className="profilenuwe__container">
    <h2>{texts.perfil.hard}</h2>
    <div className="profile__hard">
      <div className="profile__top">
        <h3>
          {texts.perfil.top} {user.name}
        </h3>
        <RadarChart
          data={user.hardSkills}
          max={2000}
          index="type"
          color={"#56b951"}
        />
      </div>
      <div className="profile__other">
        <h3>{texts.perfil.other}</h3>
        <ValidatedSkill stack={user.otherValidated} />
      </div>
    </div>

    <h2>{texts.perfil.soft}</h2>
    <div className="profile__soft">
      <div className="profile__puntuaciones">
        <h3>{texts.perfil.puntuaciones}</h3>
      </div>
      <RadarChart data={user.softSkills} max={5} index="type" color="orange" />
    </div>
  </div>
);

export default Profile;
