import React from "react";
import { GithubWhite, LinkedinWhite, Location } from "../../assets/icons";
import texts from '../../constants/texts'
import useModal from '../../hooks/useModal';
import userType from "../../types/userInterface";
import Cromo from "../../pages/Cromo";
import "./index.scss";
import Button from "../Cromo/Button";

type props = {
  user: userType;
};

const UserInfo = ({ user }: props): JSX.Element => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="user__container">
      <div className="user__background">
        <div className="empty-avatar"></div>
      </div>
      <div className="user__data">
        <Button type='button'
          onClick={toggle}
          outline={true}
        >
          {texts.userinfo.nft}
        </Button>
        <Cromo isShowing={isShowing}
          hide={toggle} />
        <h2 className="user__basic">{user.name}</h2>
        <p>
          {user.mail} | {user.phone}
        </p>
        <h3 className="user__position">{user.position}</h3>
        <p className="user__description">{user.description}</p>
        <div className="user__location">
          <p>
            <img src={Location} alt="" />
            {user.location.city}
          </p>
        </div>
        <div className="user__social">
          <a href={user.github} className="social-github">
            <img src={GithubWhite} alt="" />
          </a>
          <a href={user.linkedin} className="social-github">
            <img src={LinkedinWhite} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
