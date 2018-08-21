import React from 'react'

const ProjectItem = ({ project }) => (
  <div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div><a href={project.url} target="_blank" rel="noopener noreferrer">View project</a></div>
    <div><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source code</a></div>
    <br /><hr />
  </div>
)

export default ProjectItem
