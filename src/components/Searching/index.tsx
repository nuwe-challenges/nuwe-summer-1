import React from 'react'
import { texts } from '../../constants'
import './index.scss'
import * as icon from '../../assets/icons'
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/reducers/user.reducer';

const Searching = () : JSX.Element => {
    const user = useSelector(getUser)

    return(
    <section className="searching__container">
        <h2>{texts.searching.title} {user.name}:</h2>
        <div className="searching__main">
            <p className="searching__where"><img src={icon.Location} alt=''/> {user.location}</p>
            <p className="searching__desc"><img src={icon.BusinessAndTrade} alt=''/> {user.jobDesc}</p>
            <p className="searching__salary"><img src={icon.Benefit} alt=''/> {user.jobSalary.min} a {user.jobSalary.max} €/a</p>
        </div>
        <div className="searching__extras">
            <p className="searching__travel"><img src={icon.World} alt=''/> {user.jobTravel ? 'Disponibilidad' : 'Nope' }</p>
            <p className="searching__remote"><img src={icon.Group2} alt=''/> {user.jobRemote? 'Disponibilidad' : 'Nope' }</p>
            <p className="searching__when"><img src={icon.Work} alt=''/> {user.jobWhen}</p>
        </div>
    </section>
)}

export default Searching;