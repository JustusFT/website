import React from 'react'
import styled from 'styled-components'

const ProjectItemContainer = styled.span`
  flex: 0 0 50%;

  @media ( max-width: 640px ) {
    flex-basis: 100%;
  }
`

const MarginDiv = styled.div`
  margin: 2em;
  margin-bottom: 1em;

  @media ( max-width: 960px ) {
    margin: 1em;
  }
`

const ScaledImg = styled.img`
  max-width: 100%;
`

const ProjectItem = ({ project }) => (
  <ProjectItemContainer>
    <MarginDiv>
      <ScaledImg src="https://via.placeholder.com/640x360" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div><a href={project.url} target="_blank" rel="noopener noreferrer">View project</a></div>
      <div><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source code</a></div>
    </MarginDiv>
  </ProjectItemContainer>
)

export default ProjectItem
