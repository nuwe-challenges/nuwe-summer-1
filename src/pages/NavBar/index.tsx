import React from 'react'
import './index.scss'
import { Burger, NuweLight, NuweLogo, Settings } from '../../assets/icons'
import Button from './Button'

const NavBar = (): JSX.Element => (
  <nav>
    <img src={Burger} alt='' />
    <div className="navbar__logo">
      <img src={NuweLight} alt='' />
      <img src={NuweLogo} alt='' />
    </div>
    <Button className="navbar__settings">
      <img src={Settings} alt='' />
    </Button>
  </nav>
);


export default NavBar
