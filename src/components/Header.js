import React from 'react'
import logo from './assets/logo.png'

const Header = () => {
  return (
    <header>
        <img src={require(logo)} alt="logo"/>
        <h3>my travel journal.</h3>
    </header>
  )
}

export default Header