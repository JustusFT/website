import React from 'react'

const ProjectItem = ({ project }) => (
  <div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </div>
)

export default ProjectItem
