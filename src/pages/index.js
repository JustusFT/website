import React from 'react'

import PROJECTS from '../data/projects'
import ProjectList from '../components/ProjectList'
import Header from '../components/Header'

const IndexPage = () => (
  <div>
    <Header />
    <h2>Web projects</h2>
    <ProjectList projects={PROJECTS} />
  </div>
)

export default IndexPage
