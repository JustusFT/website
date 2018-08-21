import React from 'react'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'

const ProjectListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProjectList = ({ projects }) => (
  <ProjectListContainer>
    {projects.map(project => (
      <ProjectItem project={project} />
    ))}
  </ProjectListContainer>
)

export default ProjectList
