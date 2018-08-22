import React from 'react'

import ProjectList from '../components/ProjectList'
import Header from '../components/Header'

import styled from 'styled-components'

const Content = styled.div`
  padding: 1em;
`

const IndexPage = ({ data }) => {
  const projects = data.allProjectsJson.edges.map(edge => edge.node)
  return (
    <div>
      <Header />
      <Content>
        <h2>Web projects</h2>
        <ProjectList projects={projects} />
      </Content>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query GetAllProjects {
    allProjectsJson {
      edges {
        node {
          title
          description
          url
          sourceUrl
        }
      }
    }
  }
`
