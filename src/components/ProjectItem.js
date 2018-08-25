import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image";

const ProjectItemContainer = styled.span`
  flex: 0 0 50%;

  @media ( max-width: 640px ) {
    flex-basis: 100%;
  }
`

const ProjectItemSpacer = styled.div`
  margin: 2em;
  margin-bottom: 1em;

  @media ( max-width: 960px ) {
    margin: 1em;
  }
`

const ImgContainer = styled.div`
  margin-bottom: 1em;
`

const ProjectItem = (props) => {
  const { project } = props
  return (
    <ProjectItemContainer>
      <ProjectItemSpacer>
        <ImgContainer>
          <Img {...project.image.childImageSharp} />
        </ImgContainer>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.url && (
          <div><a href={project.url} target="_blank" rel="noopener noreferrer">View project</a></div>
        )}
        <div><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source code</a></div>
      </ProjectItemSpacer>
    </ProjectItemContainer>
  )
}

export default ProjectItem

export const projectItemFragment = graphql`
  fragment ProjectItem_details on ProjectsJson {
    image {
      childImageSharp {
        sizes(maxWidth: 640) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
