import React from 'react'
import Clock from './Clock'
import styled from 'styled-components'

const Nav = () => {
  return (
    <div>
        <Logo src="logo.svg" alt="" />
        <Clock></Clock>
    </div>
  )
}

export default Nav


const Logo = styled.img`
  width: 100%;
  max-width: 100px;
  display: block;
  padding: 20px;
  box-sizing: border-box;
`
