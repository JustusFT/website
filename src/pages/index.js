import React from 'react'

import PROJECTS from '../data/projects'
import ProjectList from '../components/ProjectList'
import Header from '../components/Header'

import styled from 'styled-components'

const Content = styled.div`
  padding: 1em;
`

const IndexPage = () => (
  <div>
    <Header />
    <Content>
      <h2>Web projects</h2>
      <ProjectList projects={PROJECTS} />
    </Content>
  </div>
)

export default IndexPage
