import React from 'react'
import { GithubWhite, LinkedinWhite } from '../../assets'
import UserStack from '../../components/UserStack'
import './index.scss'
const userDefault= {
    name: 'JohnD',
    mail: 'random@gmail.com',
    phone: '+34 666 666 666',
    position: 'Web dev - Especialista',
    location:'Palafolls, España',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan urna nec ipsum tempus, vitae consequat velit rhoncus. Nunc quis dolor urna. Curabitur in orci congue, pellentesque massa ullamcorper, volutpat odio. Proin eget nulla odio.',
    github: '',
    linkedin:''
}

const UserProfile = ({ user=userDefault }): JSX.Element => (
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
)

export default UserProfile;