import React from "react";
import User from '../../../types/userInterface'
import "./index.scss";

interface Props {
    user: User
}

const CromoHeader = ({ user }: Props): JSX.Element => (
    <div className="cromo__header">
        <div className="cromo__header--left">
            <img src={user.avatar} alt="" className="header-avatar" />
            <img src={user.emblema} alt="" className="header-emblema" />
        </div>
        <div className="cromo__header--right">
            <p>{user.userName}</p>
            <p>{user.position} || {user.rank.rankName}</p>
            <p>{user.openToWork ? 'Abierto a oportunidades' : 'No busca curro'}</p>
        </div>
    </div>
)

export default CromoHeader;
