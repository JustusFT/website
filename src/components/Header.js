import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  height: 480px;
  background-color: #66cbff;
  margin: 1em 0;
  position: relative;

  @media (max-width: 992px) {
    margin-top: 0;
  }
`

const HeaderText = styled.div`
  background-color: #ffffff;
  padding: 2em;
  align-self: center;
  text-align: center;
  margin: auto;
`

const Labels = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5em;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`

const Label = styled.span`
  display: inline-block;
  flex: 0 0 auto;
  margin-top: 0.5em;
  padding: 0.25em 0.5em;
  background-color: #ffffff;

  > span {
    margin-left: 0.75em;
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderText>
      <h1>Justus Tumacder</h1>
      <h3>Web Developer</h3>
    </HeaderText>
    <Labels>
      <Label>
        <b>Email:</b><span><a href="mailto:justusft@gmail.com">JustusFT@gmail.com</a></span>
      </Label>
      <Label>
        <b>Location:</b><span>Philippines</span>
      </Label>
    </Labels>
  </HeaderContainer>
)

export default Header
