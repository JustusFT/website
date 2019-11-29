import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import ProjectItem from './ProjectItem'

const ProjectListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1em;
`

const ProjectList = ({ projects }) => (
  <ProjectListContainer>
    {projects.map(project => (
      <ProjectItem key={project.title} project={project} />
    ))}
  </ProjectListContainer>
)

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList
