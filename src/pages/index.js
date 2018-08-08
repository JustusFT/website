import React from 'react'

import PROJECTS from '../data/projects'
import ProjectList from '../components/ProjectList'

const IndexPage = () => (
  <div>
    <h1>JustusFT</h1>
    <h2>Web projects</h2>
    <ProjectList projects={PROJECTS} />
  </div>
)

export default IndexPage
