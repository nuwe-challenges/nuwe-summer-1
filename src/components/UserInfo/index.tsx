import React, { useState } from "react";
import { GithubWhite, LinkedinWhite, Location } from "../../assets/icons";
import userType from "../../types/userInterface";
import "./index.scss";

type props = {
  user: userType;
};

const UserInfo = ({ user }: props): JSX.Element => {

  const [nft, setNft] = useState(false)

  const handleOpen = () => setNft(prop => !prop)

  return (
    <div className="user__container">
      <div className="user__background">
        <div className="empty-avatar"></div>
      </div>
      <div className="user__data">
        <button type='button' onClick={handleOpen}>VER NFT</button>
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
