import React from 'react'
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/reducers/user.reducer';
import UserStack from '../../components/UserStack'
import UserInfo from '../../components/UserInfo'

const UserProfile = (): JSX.Element => {
    const user = useSelector(getUser)
    const { stack } = user
    return (
        <section>
            <UserInfo user={user} />
            <UserStack stack={stack} />
        </section>
    )
}

export default UserProfile;