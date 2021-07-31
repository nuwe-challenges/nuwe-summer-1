import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/reducers/user.reducer";
import "./index.scss";

const CromoMini = (): JSX.Element => {
    const user = useSelector(getUser)
    return (
        <div className="cromo__mini">
            <div className="cromo__mini-header">
                <p>{user.userName}</p>
                <p>{user.position}|| {user.rank.rankName}</p>
            </div>
            <div className="cromo__mini-body">
                <img src={user.avatar} alt="" className="mini-avatar" />
                <img src={user.emblema} alt="" className='mini-emblema' />
            </div>
            <div className="cromo__mini-number">{user.rank.global}</div>
        </div>
    )
}

export default CromoMini;