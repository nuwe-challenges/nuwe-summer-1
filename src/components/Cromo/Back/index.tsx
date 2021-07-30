import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/reducers/user.reducer";
import Header from '../Header'
import QR from "../../QR";
import "./index.scss";

type props = { flipped: boolean }

const CromoBack = ({ flipped }: props): JSX.Element => {
    const user = useSelector(getUser)
    return (
        <div className={`cromo__container ${flipped ? 'cromo-flipped' : ''}`}>
            <Header user={user} />
            <div className="cromo-back__qr"><QR /></div>
        </div>
    )
}

export default CromoBack;