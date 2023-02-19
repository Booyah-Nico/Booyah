import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <Wrap>
        <Logo src="logo.svg" alt="" />
    </Wrap>
  )
}

export default Nav

const Wrap = styled.div`
  position: absolute;
  top: 10px;
`

const Logo = styled.img`
  width: 100%;
  max-width: 100px;
  display: block;
  padding: 10px;
  box-sizing: border-box;
`
