import React from 'react'
import logo from './assets/logo.png'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="header--logo"/>
        <h3>my travel journal.</h3>
    </header>
  )
}

export default Header