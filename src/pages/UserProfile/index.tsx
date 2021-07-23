import React from 'react'
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/reducers/user.reducer';
import { GithubWhite, LinkedinWhite } from '../../assets'
import UserStack from '../../components/UserStack'
import './index.scss'

const UserProfile = (): JSX.Element => {
    const user = useSelector(getUser)
    return (
    <section className="user__container">
        <div className="user__background">
            <div className="empty-avatar"></div>
        </div>
        <div className="user__data">
            <div className="user__basic">{user.name} {user.mail} {user.phone}</div>
            <div className="user__position">{user.position}</div>
            <div className="user__description">{user.description}</div>
        </div>
        <div className="user__location">{user.description}</div>
        <div className="user__social">
            <a href={user.github} className="social-github"><img src={GithubWhite} alt=''/></a>
            <a href={user.linkedin} className="social-github"><img src={LinkedinWhite} alt=''/></a>
        </div>
        <UserStack/>
    </section>
)}

export default UserProfile;