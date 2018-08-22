import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  height: 320px;
  background-color: #00bfff;
`

const HeaderText = styled.div`
  align-self: center;
  text-align: center;
  margin: auto;
`

const Header = () => (
  <HeaderContainer>
    <HeaderText>
      <h1>Justus Tumacder</h1>
      <h4>Web Developer</h4>
    </HeaderText>
  </HeaderContainer>
)

export default Header
