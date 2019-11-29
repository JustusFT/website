import Img from 'gatsby-image'
import marked from 'marked'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ProjectItemContainer = styled.span`
  flex: 0 0 50%;

  @media (max-width: 640px) {
    flex-basis: 100%;
  }
`

const ProjectItemSpacer = styled.div`
  margin: 2em;
  margin-bottom: 1em;

  @media (max-width: 960px) {
    margin: 1em;
  }
`

const ImgContainer = styled.div`
  margin-bottom: 1em;
`

const Tag = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background-color: #ddd;
  border-radius: 4px;

  &:not(:first-child) {
    margin-left: 8px;
  }
`

const ProjectItem = props => {
  const { project } = props
  return (
    <ProjectItemContainer>
      <ProjectItemSpacer>
        <ImgContainer>
          <Img {...project.image.childImageSharp} />
        </ImgContainer>
        <h3>{project.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: marked(project.description) }} />
        {project.tags && (
          <div>
            <div>{project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</div>
            <br />
          </div>
        )}
        {project.url && (
          <div>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View project
            </a>
          </div>
        )}
        <div>
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            View source code
          </a>
        </div>
      </ProjectItemSpacer>
    </ProjectItemContainer>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
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
