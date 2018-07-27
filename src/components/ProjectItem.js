import React from 'react'

const ProjectItem = ({ project }) => (
  <div>
    <h3>{project.title}</h3>
    <div>{project.description}</div>
    <div><a href={project.url} target="_blank" rel="noopener noreferrer">View project</a></div>
    <br />
  </div>
)

export default ProjectItem
