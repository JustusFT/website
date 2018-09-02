import React from 'react'

import ProjectList from '../components/ProjectList'
import Header from '../components/Header'

import styled from 'styled-components'

const Content = styled.div`
  padding: 1em;
  margin-bottom: 2em;
`

const TipBox = styled.div`
  background-color: #FFCCCC;
  margin: 1em 0;
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
        <TipBox>
          <div>Source code for my projects can be found on my <a href="https://github.com/JustusFT" rel="noopener noreferrer" target="_blank">github profile.</a></div>
          <div>More projects & source code can be found on my <a href="https://codepen.io/JustusFT" rel="noopener noreferrer" target="_blank">codepen profile.</a></div>
        </TipBox>
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
          ...ProjectItem_details
        }
      }
    }
  }
`
