import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/reducers/user.reducer";
import RadarChart from "../../../components/RadarChart";
import Header from '../Header'
import texts from '../../../constants/texts'
import "./index.scss";

type props = { flipped: boolean }

const CromoFront = ({ flipped }: props): JSX.Element => {
    const user = useSelector(getUser)
    return (
        <div className={`cromo__container cromo__front ${flipped ? '' : 'cromo-flipped'}`}>
            <Header user={user} />
            <div className="cromo__rank">
                <p>
                    <strong>{user.rank.country} </strong>
                    {user.location.country}, {texts.cromo.rango} {user.rank.rankName}
                </p>
                <p>
                    <strong>{user.rank.continent} </strong>
                    {texts.cromo.general} {user.location.continent}
                </p>
            </div>
            <div className="cromo__radar">
                <RadarChart data={user.softSkills} max={5} index="type" color="orange" />
            </div>
            <div className="divider"></div>
            <div className="cromo__points">
                <div className="cromo__table">
                    <h3 className="cromo__table-header">{texts.cromo.participacion} @{user.userName}</h3>
                    <div className="cromo__table-body">
                        <div className="cromo__table-body--row">
                            <span>{texts.cromo.hackathons}</span>
                            <span>{user.participations.hackathons}</span>
                        </div>
                        <div className="cromo__table-body--row">
                            <span>{texts.cromo.challenges}</span>
                            <span>{user.participations.challenges}</span>
                        </div>
                        <div className="cromo__table-body--row">
                            <span>{texts.cromo.proyectos}</span>
                            <span>{user.participations.proyectoOS}</span>
                        </div>
                        <div className="cromo__table-body--row">
                            <span>{texts.cromo.emblemas}</span>
                            <span>{user.participations.emblemas}</span>
                        </div>
                    </div>
                </div>
                <div className="cromo__global">
                    <h3>{texts.cromo.global}</h3>
                    <div className="cromo__global-number">{user.rank.global}</div>
                </div>
            </div>

        </div>
    )
}

export default CromoFront;