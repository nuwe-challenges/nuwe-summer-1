import React from "react";
import { useSelector } from "react-redux";
import RadarChart from "../../components/RadarChart";

import { getUser } from "../../redux/reducers/user.reducer";
import "./index.scss";

const Cromo = (): JSX.Element => {
    const user = useSelector(getUser)
    return (
        <div className='cromo__container'>
            <div className="cromo__header">
                <div className="cromo__header--left">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="cromo__header--right">
                    <p>{user.userName}</p>
                    <p>{user.position}|| {user.rank.rankName}</p>
                    <p>{user.openToWork ? 'Abierto a oportunidades' : 'No busca curro'}</p>
                </div>
            </div>
            <div className="cromo__rank">
                <p>
                    <strong>{user.rank.country} </strong>
                    {user.location.country}, rango {user.rank.rankName}
                </p>
                <p>
                    <strong>{user.rank.continent} </strong>
                    General {user.location.continent}
                </p>
            </div>
            <div className="cromo__radar">
                <RadarChart data={user.softSkills} max={5} index="type" color="orange" />
            </div>
            <div className="divider"></div>
            <div className="cromo__points">
                <div className="cromo__table">
                    <h3 className="cromo__table-header">Participación de {user.userName}</h3>
                    <div className="cromo__table-body">
                        <div className="cromo__table-body--row">
                            <span>Hackathons</span>
                            <span>{user.participations.hackathons}</span>
                        </div>
                        <div className="cromo__table-body--row">
                            <span>Challenges</span>
                            <span>{user.participations.challenges}</span>
                        </div>
                        <div className="cromo__table-body--row">
                            <span>Proyectos OS</span>
                            <span>{user.participations.proyectoOS}</span>
                        </div>
                        <div className="cromo__table-body--row">
                            <span>Emblemas</span>
                            <span>{user.participations.emblemas}</span>
                        </div>
                    </div>
                </div>
                <div className="cromo__global">
                    <h3>Posición global</h3>
                    <div className="cromo__global-number">{user.rank.global}</div>
                </div>
            </div>

        </div>
    )
}

export default Cromo;