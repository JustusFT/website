import React from 'react'

import PROJECTS from '../data/projects'
import ProjectList from '../components/ProjectList'

import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  height: 320px;
  background-color: skyblue;
`

const HeaderText = styled.div`
  align-self: center;
  text-align: center;
  margin: auto;
`

const IndexPage = () => (
  <div>
    <Header>
      <HeaderText>
        <h1>Justus Tumacder</h1>
        <h4>Web Developer</h4>
      </HeaderText>
    </Header>
    <h2>Web projects</h2>
    <ProjectList projects={PROJECTS} />
  </div>
)

export default IndexPage
