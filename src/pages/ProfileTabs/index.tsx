import React, { useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/reducers/user.reducer";
import Profile from "../../components/ProfileTabs/Profile";
import Timeline from "../../components/ProfileTabs/Timeline";
import Social from "../../components/ProfileTabs/Social";
import { texts } from "../../constants";

const ProfileTabs = (): JSX.Element => {
  const user = useSelector(getUser);
  const [currentTab, setCurrentTab] = useState(0);
  const components = [
    <Profile key="tab-0" user={user} />,
    <Social key="tab-1" />,
    <Timeline key="tab-2" />,
  ];
  return (
    <section className="tabs__container">
      <div className="tabs__header">
        <ul>
          <li>
            <button
              type="button"
              className={currentTab === 0 ? "active" : ""}
              onClick={() => setCurrentTab(0)}
            >
              {texts.perfil.tabs[0]}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={currentTab === 1 ? "active" : ""}
              onClick={() => setCurrentTab(1)}
            >
              {texts.perfil.tabs[1]}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={currentTab === 2 ? "active" : ""}
              onClick={() => setCurrentTab(2)}
            >
              {texts.perfil.tabs[2]}
            </button>
          </li>
        </ul>
      </div>
      <div className="tabs__content">{components[currentTab]}</div>
    </section>
  );
};

export default ProfileTabs;
